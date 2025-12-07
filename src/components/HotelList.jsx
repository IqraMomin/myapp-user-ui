import React, { useState } from 'react'
import { Button, Container, Form, InputGroup, Row, Col, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

function HotelList() {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");

  const hotelList = useSelector(state => state.hotels.hotels);

  const viewDetailHandler = (ele) => {
    history.push(`/user/explore/${ele.hotelId}`);
  };

  const filteredHotels = hotelList.filter(ele =>
    ele.title.toLowerCase().includes(searchTerm.toLowerCase())||
    ele.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Row className='m-0 p-0'>
        <div className="flex-grow-1 d-flex justify-content-center mb-5">
          <InputGroup style={{ width: "500px" }}>
            <Form.Control
              placeholder="Search By Hotel name or Category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button style={{ backgroundColor: "#6f42c1" }}>
              <i className="bi bi-search"></i>
            </Button>
          </InputGroup>
        </div>
      </Row>

      <Row className='d-flex flex-wrap justify-content-start gap-3'>
        {filteredHotels.length > 0 ? (
          filteredHotels.map(ele => (
            <Col key={ele.hotelId} md={3} style={{width:"400px",margin:"auto"}} className='m-0 p-0'>
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
                                <p>Category:{ele.category}</p>
                                 </div>
                                                               
                                
                            </Card.Body>
                            <Button variant='outline-dark' onClick={()=>{viewDetailHandler(ele)}}>View Details</Button>
                        </Card>
                    </Col>
          ))
        ) : (
          <p className="text-center mt-5">No hotels found.</p>
        )}
      </Row>
    </Container>
  );
}

export default HotelList;
