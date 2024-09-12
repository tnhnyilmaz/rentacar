import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import availableCarsSlice from './availableCarSlice';
import carSlice from "./carSlice";
import categorySlice from "./categorySlice";

export const store=configureStore({
    reducer:{
        cars:carSlice,
        category:categorySlice,
        availableCars:availableCarsSlice
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(thunk)
});