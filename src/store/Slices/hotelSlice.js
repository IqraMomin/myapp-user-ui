import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    hotels:[],
    error:null,
    loading:false
}

const hotelSlice = createSlice({
    name:"hotels",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAllHotel.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchAllHotel.fulfilled,(state,action)=>{
            state.loading = false
            state.hotels = action.payload;
        })
        .addCase(fetchAllHotel.rejected,(state)=>{
            state.loading = false;
            state.error = action.payload;
        })
    } 
})

export default hotelSlice.reducer;

export const fetchAllHotel = createAsyncThunk(
    "hotels/fetchAllHotel",async(_,thunkAPI)=>{
        try{
            const res = await axios.get("https://travel-booking-website-11848-default-rtdb.firebaseio.com/hotels.json");
            const data = res.data;
            const hotelList = Object.keys(data).map(ele=>{
                return {...data[ele],hotelId:ele}
            })
            return hotelList;

        }catch(err){
            return thunkAPI.rejectWithValue("Failed fetching Hotels");
        }
    }
)