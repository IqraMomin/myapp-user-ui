import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    category:[],
    error:null,
    loading:false
}

const categorySlice = createSlice({
    name:"category",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder       
        .addCase(fetchCategoryList.pending,(state)=>{
            state.loading=true;
        })
        .addCase(fetchCategoryList.fulfilled,(state,action)=>{
            state.loading=false;
            state.category = action.payload;
        })
        .addCase(fetchCategoryList.rejected,(state,action)=>{
            state.loading=false;
            state.error = action.payload;
        })        
        
    }
})

export const fetchCategoryList = createAsyncThunk(
    "category/fetchCategoryList",async(_,thunkAPI)=>{
        try{
            const res = await axios.get("https://travel-booking-website-11848-default-rtdb.firebaseio.com/category.json");
            const categoryList = Object.keys(res.data).map(ele=>{
                console.log("Inside fetch category");
                return {id:ele,...res.data[ele]}
            });
            return categoryList;
        }catch(err){
            return thunkAPI.rejectWithValue("Failed to fetch Category");
        }
    }
)

export default categorySlice.reducer;