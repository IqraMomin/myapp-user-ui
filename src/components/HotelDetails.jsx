import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import { addBookings } from '../store/Slices/bookingSlice';

function HotelDetails() {

  const { hotelId } = useParams();
  const history = useHistory();
  const hotels = useSelector(state => state.hotels.hotels);
  const [guest,setGuest] = useState("");
  const [checkIn,setCheckIn] = useState("");
  const [checkOut,setCheckOut] = useState("");
  const email = useSelector(state=>state.auth.email);
  const dispatch = useDispatch();

  const guestChangeHandler = (e)=>{
    setGuest(e.target.value);
  }
  const checkInHandler=(e)=>{
    setCheckIn(e.target.value);
  }
  const checkOutHandler=(e)=>{
    setCheckOut(e.target.value);
  }
  const hotelData = hotels.find(ele => String(ele.hotelId) === String(hotelId));

  
  const formSubmitHandler = (e)=>{
    e.preventDefault();
    const bookingData = {
        title:hotelData.title,
        price:hotelData.price,
        address:hotelData.address,
        pincode:hotelData.pincode,
        city:hotelData.city,
        image:hotelData.image,
        guest,checkIn,checkOut,
        email,
        status:"pending"
    }
    console.log(bookingData);
    dispatch(addBookings(bookingData));
  }


 
  if (!hotelData) {
    return (
      <Container className="text-center mt-5">
        <p>Loading hotel details...</p>
        <Button variant="secondary" onClick={() => history.goBack()}>
          Go Back
        </Button>
      </Container>
    );
  }

  return (
    <Container style={{height:"100%"}}>
      <Row>
        <Col
          md={12}
          style={{
            height: "450px",
            backgroundImage: `url(${hotelData.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px"
          }}
        ></Col>
        <Col md={12}>
            <div className='d-flex-column' style={{borderBottom:"1px solid black",paddingBottom:"1rem"}}>
                <Form.Label>{hotelData.title}</Form.Label>
                <div>
                    Price:{hotelData.price}/night
                </div>
                <div>
                    Address:{hotelData.address}
                </div>
                <div>
                    Pincode:{hotelData.pincode}
                </div>
                <div>
                    City:{hotelData.city}
                </div>
            </div>
        </Col>
        <Col md={12}>
            
                <Form onSubmit={formSubmitHandler}>
                <div className='d-flex justify-content-center gap-5 align-items-center'>
                    <Form.Group controlId='guest'>
                        <Form.Label className='w-100 text-left'>Number of Guests</Form.Label>
                        <Form.Control style={{width:"300px"}} type='number' placeholder='Enter number of guests' onChange={guestChangeHandler} value={guest}/>
                    </Form.Group>
                    <Form.Group controlId='checkIn'>
                        <Form.Label>Check-In</Form.Label>
                        <Form.Control style={{width:"300px"}} type='date' onChange={checkInHandler} value={checkIn}/>
                    </Form.Group>
                    <Form.Group controlId='checkOut'>
                        <Form.Label>Check-Out</Form.Label>
                        <Form.Control style={{width:"300px"}} type='date' onChange={checkOutHandler} value={checkOut}/>
                    </Form.Group>
                    </div>
                    <Button type='submit'>Book Now</Button>
                
                </Form>

            
        </Col>
        
      </Row>

      <Button className="mt-3" onClick={() => history.goBack()}>
        Go Back
      </Button>
    </Container>
  );
}

export default HotelDetails;
