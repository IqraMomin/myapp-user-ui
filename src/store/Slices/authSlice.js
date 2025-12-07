import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialToken = localStorage.getItem("token")||"";
const initialEmail = localStorage.getItem("email")||"";

const initialState={
    error:null,
    loading:null,
    token:initialToken,
    email:initialEmail,
    isLoggedIn:!!initialToken
}


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout:(state)=>{
            state.token=null;
            state.isLoggedIn =false;
            state.type = null;
            state.email=null;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(login.pending,(state)=>{
            state.pending = true;
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.pending = false;
            state.token = action.payload.idToken;
            state.email=action.payload.email;
            state.isLoggedIn = true;
        })
        .addCase(login.rejected,(state,action)=>{
            state.pending=false;
            state.error = action.payload;
        })

    }
})




export const login = createAsyncThunk(
    "auth/login",async(userData,thunkAPI)=>{
        try{
            const res = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCr4TwhPv0zCF2r1JvD9GxDKYzOU8r1QRo",userData);           
            const idToken = res.data.idToken;
            localStorage.setItem("token",idToken);
            const email=userData.email;
            localStorage.setItem("email",email);
            return {idToken,email};

        }catch(err){
            return thunkAPI.rejectWithValue("Login Failed");
        }
    }
)

export const resetPassword = createAsyncThunk(
    "auth/resetPassword",async(email,thunkAPI)=>{
        try {
            const response = await fetch(
              "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCr4TwhPv0zCF2r1JvD9GxDKYzOU8r1QRo",
              {
                method: "POST",
                body: JSON.stringify({
                  requestType: "PASSWORD_RESET",
                  email
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
      
            const data = await response.json();
      
            if (!response.ok) {
              alert(data.error.message);
              return;
            }
      
            alert("Password reset link sent to your email!");
          } catch (err) {
            console.log(err);
          }
    }
)

export const signUp = createAsyncThunk(
    "auth/signUp",async({userData,login},thunkAPI)=>{
        try{
            const res = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCr4TwhPv0zCF2r1JvD9GxDKYzOU8r1QRo",userData);
            alert("Registration Successful");
            login();
          }catch(err){
            console.log(err);
          }
    }
)

export const authActions = authSlice.actions;
export default authSlice.reducer