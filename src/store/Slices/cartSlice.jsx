import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    cart:[],
    totalAmount:0,
    loading:false,
    error:null
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCart.pending,(state)=>{
            state.loading=true;
        })
        .addCase(fetchCart.rejected,(state,action)=>{
            state.loading=false;
            state.error = action.payload;
        })
        .addCase(fetchCart.fulfilled,(state,action)=>{
            state.loading=false;
            state.cart = action.payload;
            state.totalAmount = state.cart.reduce((sum,ele)=>{
                return sum+ele.total
            },0);
        })
        
        
    }
})

export const fetchCart = createAsyncThunk(
    "cart/fetchCart",async(_,thunkAPI)=>{
        try{
            const email = thunkAPI.getState().auth.email;
            const safeEmail = email.replace(/[.]/g,"_");
            const res = await axios.get(`https://travel-booking-website-11848-default-rtdb.firebaseio.com/cart/${safeEmail}.json`);
            console.log(res.data)
            const cart = Object.keys(res.data).map(ele=>{
                return {id:ele,...res.data[ele]}
            });
            return cart;
        }catch(err){
            return thunkAPI.rejectWithValue("Failed to load the cart");
        }
    }
)
export default cartSlice.reducer