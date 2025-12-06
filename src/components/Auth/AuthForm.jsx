import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import {Link} from "react-router-dom"
import { login ,signUp} from '../../store/Slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function AuthForm() {
    const [isLogin,setIsLogin] = useState(true);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const dispatch = useDispatch();
    const [error,setError] = useState("");
    const history = useHistory();
    const type = useSelector(state=>state.auth.type);

    const emailChangeHandler = (e)=>{
        setEmail(e.target.value);
    }
    const passwordChangeHandler = (e)=>{
        setPassword(e.target.value);

    }
    const confirmPasswordHandler = (e)=>{
      setConfirmPassword(e.target.value);
    }
    const formChangeHandler =(e)=>{
        e.preventDefault();
        if (email.trim().length === 0 || password.trim().length === 0 || !isLogin && confirmPassword.trim().length === 0) {
          setError("All Fields are required");
          return;
      }
      if (!isLogin && password !== confirmPassword) {
          setError("Password did not match");
          return;
      }
      setError("");
        const userData = {
            email,password,returnSecureToken:true
        }
        if(isLogin){
          dispatch(login(userData));
          if(type==="admin"){
            history.replace("/admin/home");
          }else if(type==="user"){
            history.replace("/user/home");
          }

         
        }else{
          const login = setIsLogin(true);
          dispatch(signUp({userData,login}));
         
        }
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }
    return (
        <Container fluid className='d-flex justify-content-center align-items-center vh-100'
        style={{backgroundColor:"gray"}}>
            <div className='p-4' style={{backgroundColor:"#ffffff",width:"380px",borderRadius:"16px"}}>
            <h3 className='text-center mb-4' style={{color:"#6f42c1"}}>{isLogin ? "Login" : "SignUp"}</h3>
            <Form onSubmit={formChangeHandler}>
                <Form.Control className='mb-3' type='email' placeholder='Email' onChange={emailChangeHandler} value={email}/>
                <Form.Control className='mb-3' type='password' placeholder='Password' onChange={passwordChangeHandler} value={password}/>
               {!isLogin && <Form.Control className='mb-3' type='password' placeholder='Confirm Password' onChange={confirmPasswordHandler} value={confirmPassword}/>} 
               {error && <p className="text-danger fw-bold">{error}</p>}
      
           <Button type='submit' className='w-100 py-2 mt-2' style={{backgroundColor:"#6f42c1"}}>{isLogin ? "Login" : "SignUp"}</Button>
            
            </Form>
            {isLogin && (
              <div className="text-center mt-3">
                <Link to="/reset" style={{ color: "#6f42c1" }}>
                  Forgot Password?
                </Link>
              </div>
            )}
            <Button
              className="btn btn-outline-secondary w-100 mt-3"
              onClick={() => setIsLogin((prev) => !prev)}
              style={{ borderRadius: "8px" ,background:"none"}}
            >
              {isLogin ? "Create New Account" : "Have an account? Login"}
            </Button>
            </div>
           

        </Container>
    )
}

export default AuthForm
