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
                    return <Col md={3} style={{width:"400px",margin:"auto"}} key={ele.bookingId} className='m-0 p-0'>
                    <Card style={{ width: "100%"}} className='m-0 p-0 text-center'>
                            <Card.Body className='m-0 p-0'>
                                <img src={ele.image} width="100%" height="100%"/>
                                <Card.Title>
                                    {ele.title}
                                </Card.Title>
                                <div className='d-flex justify-content-between align-items-center px-1 py-2'>
                                    Rs.{ele.price}/night
                                    
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
