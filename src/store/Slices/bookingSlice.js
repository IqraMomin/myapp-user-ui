import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    list:[],
    loading:false,
    error:null
}

const bookingSlice = createSlice({
    name:"bookings",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(addBookings.pending,(state)=>{
            state.loading = true;
        })
        .addCase(addBookings.fulfilled,(state,action)=>{
            state.loading = false;
            state.list.push(action.payload);
        })
        .addCase(addBookings.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(fetchBookings.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchBookings.fulfilled,(state,action)=>{
            state.loading = false;
            state.list=action.payload;
        })
        .addCase(fetchBookings.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        
    }   

})

export const addBookings = createAsyncThunk(
    "bookings/addBookings",async(data,thunkAPI)=>{
        const safeEmail = data.email.replace(/[.]/g,"_");
        try{
            const res =await axios.post(`https://travel-booking-website-11848-default-rtdb.firebaseio.com/bookings/${safeEmail}.json`,data);
            return {...res.data,bookingId:res.data.name}
        }catch(err){
            return thunkAPI.rejectWithValue("Failed to book ");
        }
    }

)

export const fetchBookings = createAsyncThunk(
    "bookings/fetchBookings",async(_,thunkAPI)=>{
        try{
            const email = thunkAPI.getState().auth.email;
            const safeEmail = email.replace(/[.]/g,"_");
            const res = await axios.get(`https://travel-booking-website-11848-default-rtdb.firebaseio.com/bookings/${safeEmail}.json`)
            const bookingList = Object.keys(res.data).map(ele=>{
                return {...res.data[ele],bookingId:ele}
            })
            return bookingList;
        }catch(err){
            return thunkAPI.rejectWithValue("Failed to load bookings")
        }
    }
)

export default bookingSlice.reducer;