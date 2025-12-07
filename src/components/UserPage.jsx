import React,{useState,useEffect} from 'react'
import UserHomePage from './UserHomePage'
import { Route, Switch ,Redirect} from 'react-router-dom/cjs/react-router-dom.min'
import NavBar from './NavBar'
import ExploreHotels from '../pages/ExploreHotels'
import HotelDetails from './HotelDetails'
import Bookings from '../pages/Bookings'
import Cart from './Cart/Cart'
import { useDispatch } from 'react-redux'
import { fetchCart } from '../store/Slices/cartSlice'
import { Container } from 'react-bootstrap'
import Footer from './Footer'


function UserPage() {
    const dispatch = useDispatch();
    const [showModal,setShowModal] = useState(false);

    const closeModal = ()=>{
        setShowModal(false);
    }

    useEffect(()=>{
        dispatch(fetchCart());
    },[dispatch]);
    
    return (
        <Container fluid className='p-0 m-0'>
        <NavBar showCart={()=>{setShowModal(prev=>!prev)}}/>
        {showModal && <Cart show={showModal} onClose={closeModal}/>}
       
        <Switch>
        <Route path="/user/home" exact><UserHomePage/></Route>
        <Route path="/user/explore" exact><ExploreHotels/></Route>
        <Route path="/user/explore/:hotelId" exact><HotelDetails/></Route>
        <Route path="/user/bookings" exact><Bookings/></Route>
        <Route path="/user" exact>
                    <Redirect to="/user/home" />
                </Route>
        </Switch>
        <Footer/>
        </Container>
    )
}

export default UserPage
