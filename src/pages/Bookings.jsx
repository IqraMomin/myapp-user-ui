import React from 'react'
import { Container,Row,Col,Card,Button } from 'react-bootstrap';
import { useSelector } from 'react-redux'

function Bookings() {
    const bookingList = useSelector(state=>state.bookings.list);
    console.log(bookingList);
    return (
       <Container>
        <Row className='d-flex flex-wrap justify-content-start gap-3 m-0 p-0'>
            {bookingList.map(ele=>{
                    return <Col key={ele.bookingId} md={3} style={{width:"400px",margin:"auto"}} className='m-0 p-0'>
                    <Card style={{ width: "100%"}} className='m-0 p-0 text-center'>
                            <Card.Body className='m-0 p-0'>
                                <img src={ele.image} width="100%" height="100%"/>
                                <Card.Title>
                                    {ele.title}
                                </Card.Title>
                                <div className="booking-item">
                                <p>Price:{ele.price}/night</p>
                                <p>Address:{ele.address}</p>
                                <p>Pincode:{ele.pincode}</p>
                                <p>City:{ele.city}</p>
                                 </div>
                                                                                         
                                <Card.Title>Status:{ele.status}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    
                })}
            </Row>
       </Container>
    )
}

export default Bookings
