import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { addDoc, collection, doc, getDocs, limit, query, updateDoc, where } from "firebase/firestore";
import { db } from '../components/config/firebase';
import { STATUS } from "../utils/status";

const initialState = {
    availableCars: [],
    availableCarsState: STATUS.IDLE,
    noCarsAvailable: false,
    firstAvailableCar: [],
    firstAvailableCarState: STATUS.IDLE
}
export const addReservation = createAsyncThunk(
    'vehicles/addReservation',
    async ({ kategori, carId, garajCarId, startDate, finishDate }) => {
        try {
            // Araç doküman referansı
            console.log('Kategori:', kategori);
            console.log('Car ID:', carId);
            console.log('Garaj Car ID:', garajCarId);
            console.log('startdate: ', startDate);
            console.log('finishDate: ', finishDate);
            const carDocRef = doc(db, 'cars', kategori, 'car', carId, 'garaj', garajCarId);

            // Rezervasyon alt koleksiyonuna referans
            const reservationCollectionRef = collection(carDocRef, 'reservations');

            // Rezervasyon verisi
            const reservationData = {
                startDate: dayjs(startDate).format('YYYY-MM-DD'),
                finishDate: dayjs(finishDate).format('YYYY-MM-DD'),
                createdAt: dayjs().format('YYYY-MM-DD HH:mm:ss')
            };

            // Veriyi Firestore'a ekleyin
            await addDoc(reservationCollectionRef, reservationData);

            console.log("Reservation successfully added:", reservationData);

            // Aracı rezerve yapıldığı için 'available' alanını false yapıyoruz
            await updateDoc(carDocRef, { available: false });

            return reservationData;
        } catch (error) {
            console.error("Error adding reservation:", error);
            throw error;
        }
    }
);
export const fetchAvailableCar = createAsyncThunk(
    'vehicles/fetchAvailableVehicles',
    async ({ kategori, carId }) => {
        const carCollectionRef = collection(db, 'cars', kategori, 'car', carId, 'garaj');
        const q = query(carCollectionRef, where('available', '==', true));
        const snapshot = await getDocs(q);

        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    }
);
export const fetchFirstAvailableCar = createAsyncThunk(
    'vehicles/fetchFirstAvailableVehicles',
    async ({ kategori, carId }) => {
        const carCollectionRef = collection(db, 'cars', kategori, 'car', carId, 'garaj');
        const q = query(carCollectionRef, where('available', '==', true), limit(1));
        const snapshot = await getDocs(q);

        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    }
);

export const checkAndUpdateAvailability = createAsyncThunk(
    'vehicles/checkAndUpdateAvailability',
    async () => {
        const currentDate = dayjs().format('YYYY-MM-DD');
        const updatedCars = [];

        // Tüm araç kategorilerini al
        const categoriesSnapshot = await getDocs(collection(db, 'cars'));

        for (const categoryDoc of categoriesSnapshot.docs) {
            const categoryId = categoryDoc.id;
            const carsSnapshot = await getDocs(collection(db, 'cars', categoryId, 'car'));

            for (const carDoc of carsSnapshot.docs) {
                const carId = carDoc.id;
                const garajSnapshot = await getDocs(collection(db, 'cars', categoryId, 'car', carId, 'garaj'));

                for (const garajDoc of garajSnapshot.docs) {
                    const garajId = garajDoc.id;
                    const reservationsRef = collection(db, 'cars', categoryId, 'car', carId, 'garaj', garajId, 'reservations');
                    const q = query(reservationsRef, where('finishDate', '<=', currentDate));
                    const reservationsSnapshot = await getDocs(q);

                    if (!reservationsSnapshot.empty && garajDoc.data().available === false) {
                        // Tüm rezervasyonlar bitmiş ve araç hala müsait değil olarak işaretlenmişse
                        const garajDocRef = doc(db, 'cars', categoryId, 'car', carId, 'garaj', garajId);
                        await updateDoc(garajDocRef, { available: true });
                        updatedCars.push({ categoryId, carId, garajId });
                    }
                }
            }
        }

        return updatedCars;
    }
);


const availableCarsSlice = createSlice({
    name: "availableCars",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAvailableCar.pending, (state) => {
                state.availableCarsState = STATUS.LOADING;
                state.noCarsAvailable = false;
            })
            .addCase(fetchAvailableCar.fulfilled, (state, action) => {
                state.availableCarsState = STATUS.SUCCESS;
                state.availableCars = action.payload;
                state.noCarsAvailable = action.payload.length === 0;
            })
            .addCase(fetchAvailableCar.rejected, (state) => {
                state.availableCarsState = STATUS.FAIL;
            })
            .addCase(fetchFirstAvailableCar.pending, (state) => {
                state.firstAvailableCarState = STATUS.LOADING;
                state.noCarsAvailable = false;
            })
            .addCase(fetchFirstAvailableCar.fulfilled, (state, action) => {
                state.firstAvailableCarState = STATUS.SUCCESS;
                state.firstAvailableCar = action.payload;
                state.noCarsAvailable = action.payload.length === 0;
            })
            .addCase(fetchFirstAvailableCar.rejected, (state) => {
                state.firstAvailableCarState = STATUS.FAIL;
            })
            .addCase(addReservation.pending, (state) => {
                state.firstAvailableCarState = STATUS.LOADING;
            })
            .addCase(addReservation.fulfilled, (state, action) => {
                state.firstAvailableCarState = STATUS.SUCCESS;
                state.firstAvailableCar = action.payload;
            })
            .addCase(addReservation.rejected, (state) => {
                state.firstAvailableCarState = STATUS.FAIL;
            })
            .addCase(checkAndUpdateAvailability.pending, (state) => {
                console.log('checkAndUpdateAvailability.pending');
                state.availableCarsState = STATUS.LOADING;
            })
            .addCase(checkAndUpdateAvailability.fulfilled, (state, action) => {
                console.log('checkAndUpdateAvailability.fulfilled');
                state.availableCarsState = STATUS.SUCCESS;
                state.availableCars = action.payload;
            })
            .addCase(checkAndUpdateAvailability.rejected, (state) => {
                console.log('checkAndUpdateAvailability.rejected');
                state.availableCarsState = STATUS.FAIL;
            });
    }
})
export default availableCarsSlice.reducer;