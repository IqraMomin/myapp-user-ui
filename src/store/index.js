import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice";
import hotelReducer from "./Slices/hotelSlice";
import bookingReducer from "./Slices/bookingSlice";
import categoryReducer from "./Slices/categorySlice";
import cartReducer from "./Slices/cartSlice";

const store = configureStore({
    reducer:{
        auth:authReducer,
        hotels:hotelReducer,
        bookings:bookingReducer,
        category:categoryReducer,
        cart:cartReducer
    }
})

export default store;