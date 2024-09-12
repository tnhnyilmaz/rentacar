import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../components/config/firebase';



const initialState = {
    category: [],
    categoryState: STATUS.IDLE
}
export const getEkonomikCategory = createAsyncThunk("ekonomikCategory", async (categoryName) => {
    console.log(categoryName,"funcData")
    const carDocRef = doc(db, "cars", categoryName);
    const carDocSnapshot = await getDoc(carDocRef);

    if (carDocSnapshot.exists()) {
        return { id: carDocSnapshot.id, ...carDocSnapshot.data() };
    } else {
        throw new Error("Document not found");
    }
});

const categorySlice = createSlice({
    name:"category",
    initialState,
    reducers: {},
    extraReducers:(builder) =>{
        builder
        .addCase(getEkonomikCategory.pending, (state) => {
            state.categoryState = STATUS.LOADING;
        })
        .addCase(getEkonomikCategory.fulfilled, (state, action) => {
            state.categoryState = STATUS.SUCCESS;
            state.category = action.payload;
        })
        .addCase(getEkonomikCategory.rejected, (state) => {
            state.categoryState = STATUS.FAIL;
        });
    }
})

export default categorySlice.reducer;