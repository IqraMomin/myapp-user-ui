import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice";
import hotelReducer from "./Slices/hotelSlice";
import bookingReducer from "./Slices/bookingSlice";

const store = configureStore({
    reducer:{
        auth:authReducer,
        hotels:hotelReducer,
        bookings:bookingReducer
    }
})

export default store;