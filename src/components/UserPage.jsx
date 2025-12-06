import React from 'react'
import UserHomePage from './UserHomePage'
import { Route, Switch ,Redirect} from 'react-router-dom/cjs/react-router-dom.min'
import NavBar from './NavBar'
import ExploreHotels from '../pages/ExploreHotels'
import HotelDetails from './HotelDetails'
import Bookings from '../pages/Bookings'


function UserPage() {
    return (
        <React.Fragment>
        <NavBar/>
        <Switch>
        <Route path="/user/home" exact><UserHomePage/></Route>
        <Route path="/user/explore" exact><ExploreHotels/></Route>
        <Route path="/user/explore/:hotelId" exact><HotelDetails/></Route>
        <Route path="/user/bookings" exact><Bookings/></Route>
        <Route path="/user" exact>
                    <Redirect to="/user/home" />
                </Route>
        </Switch>
        </React.Fragment>
    )
}

export default UserPage
