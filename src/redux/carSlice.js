import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from '../components/config/firebase';
import { STATUS } from "../utils/status";

const initialState = {
    cars: [],
    carsState: STATUS.IDLE,
    carDetail: null,
    carDetailState: STATUS.IDLE,
    carById:[],
    carByIdState:STATUS.IDLE,
    alternatifCars:[],
    alternatifCarsState:STATUS.IDLE,

}

export const getEkonomikCars = createAsyncThunk("ekonomikCars", async (categoryName) => {
    const carCollectionRef = collection(db, `cars/${categoryName}/car`);
    const carSnapshot = await getDocs(carCollectionRef);
    const carList = carSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return carList;
})
export const getEkonomikCarsExcludingId = createAsyncThunk("ekonomikCarsExcludingId", async ({ categoryName, excludedId }) => {
    // Belirtilen koleksiyondaki tüm belgeleri al
    const carCollectionRef = collection(db, `cars/${categoryName}/car`);
    const carSnapshot = await getDocs(carCollectionRef);

    // Belgeleri `excludedId` hariç tutarak filtrele
    const carList = carSnapshot.docs
        .filter(doc => doc.id !== excludedId)  // Hariç tutma işlemi
        .map(doc => ({ id: doc.id, ...doc.data() }));  // Verileri dönüştür

    return carList;
});
export const getCarbyId = createAsyncThunk("getbyIdCars", async ({ categoryName, id }) => {
    const carDocRef = doc(db, `cars/${categoryName}/car`, id); // Tek bir belge referansı alıyoruz
    const carDocSnapshot = await getDoc(carDocRef);

    if (carDocSnapshot.exists()) {
        return { id: carDocSnapshot.id, ...carDocSnapshot.data() }; // Belge verisini döndürüyoruz
    } else {
        throw new Error("Car not found");
    }
});
export const getCarDetails = createAsyncThunk("carDetails", async ({ categoryName, carId }) => {
    if (!categoryName || !carId) {
        throw new Error("Missing categoryName or carId");
    }

    const carDocRef = doc(db, `cars/${categoryName}/car/${carId}`);
    const carDocSnapshot = await getDoc(carDocRef);

    if (carDocSnapshot.exists()) {
        return { id: carDocSnapshot.id, ...carDocSnapshot.data() };
    } else {
        console.log("Document not found");
        throw new Error("Car not found");
    }
});
//    const carCollectionRef = collection(db, "cars/ekonomik/car");



const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getEkonomikCars.pending, (state) => {
                state.carsState = STATUS.LOADING;
            })
            .addCase(getEkonomikCars.fulfilled, (state, action) => {
                state.carsState = STATUS.SUCCESS;
                state.cars = action.payload;
            })
            .addCase(getEkonomikCars.rejected, (state) => {
                state.carsState = STATUS.FAIL;
            })
            .addCase(getCarDetails.pending, (state) => {
                state.carDetailState = STATUS.LOADING;
            })
            .addCase(getCarDetails.fulfilled, (state, action) => {
                state.carDetailState = STATUS.SUCCESS;
                state.carDetail = action.payload;
            })
            .addCase(getCarDetails.rejected, (state) => {
                state.carDetailState = STATUS.FAIL;
            })
            .addCase(getCarbyId.pending, (state) => {
                state.carByIdState = STATUS.LOADING;
            })
            .addCase(getCarbyId.fulfilled, (state, action) => {
                state.carByIdState = STATUS.SUCCESS;
                state.carById = action.payload;
            })
            .addCase(getCarbyId.rejected, (state) => {
                state.carByIdState = STATUS.FAIL;
            })
            .addCase(getEkonomikCarsExcludingId.pending, (state) => {
                state.alternatifCarsState= STATUS.LOADING;
            })
            .addCase(getEkonomikCarsExcludingId.fulfilled, (state, action) => {
                state.alternatifCarsState = STATUS.SUCCESS;
                state.alternatifCars = action.payload;
            })
            .addCase(getEkonomikCarsExcludingId.rejected, (state) => {
                state.alternatifCarsState = STATUS.FAIL;
            });
    }
})

export default carSlice.reducer;