import { configureStore } from "@reduxjs/toolkit";
import flowers from './flowersSlice';
import cart from './cartSlice';

export const store = configureStore ({
    reducer: {
        flowers,
        cart
    },
})