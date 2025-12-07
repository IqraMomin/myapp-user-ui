import React ,{useEffect} from 'react'
 import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import UserPage from './components/UserPage';
import { Route,Redirect,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import AuthForm from './components/Auth/AuthForm';
import { fetchAllHotel } from './store/Slices/hotelSlice';
import { fetchBookings } from './store/Slices/bookingSlice';
import { fetchCategoryList } from './store/Slices/categorySlice';
import { fetchCart } from './store/Slices/cartSlice';


function App() {
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);
  const dispatch =useDispatch();

  useEffect(()=>{
    dispatch(fetchAllHotel());
    dispatch(fetchBookings());
    dispatch(fetchCategoryList());
    dispatch(fetchCart());
  },[isLoggedIn,dispatch]);

  return (
    <React.Fragment>
      <Switch>
      <Route path="/user/auth" exact>
      {!isLoggedIn ? <AuthForm/>: <Redirect to="/user"/>}    
      </Route>
      <Route path="/user">
        {isLoggedIn ? <UserPage/> : <Redirect to="/user/auth"/>}
      </Route>      
      <Route path="/" exact>
        {!isLoggedIn ? <AuthForm/> : <Redirect to="/user"/>}
      </Route>
      </Switch>
    </React.Fragment>
  )
}

export default App
