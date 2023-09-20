import { configureStore } from "@reduxjs/toolkit";
import LinksReducer from "./Slices/Slice.js";

export const Store = configureStore({
    reducer: {
        Links: LinksReducer
    }
})
