import React from 'react'
import { Button, Container, Form, InputGroup ,Row,Col,Card} from 'react-bootstrap'
import {  useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


function HotelList() {
    const history = useHistory();
    const viewDetailHandler = (ele)=>{
        history.push(`/user/explore/${ele.hotelId}`);

        
    }
    const hotelList = useSelector(state=>state.hotels.hotels);
    

    return (
        <Container fluid>
            <Row>
            <div className="flex-grow-1 d-flex justify-content-center">
        <InputGroup style={{ width: "500px" }}>
          <Form.Control placeholder="Search..." />
          <Button style={{ backgroundColor: "#6f42c1" }}>
            <i className="bi bi-search"></i>
          </Button>
        </InputGroup>
      </div>
            </Row>
            <Row className='d-flex flex-wrap justify-content-start gap-3'>
            {hotelList.map(ele=>{
                    return <Col md={3} key={ele.hotelId}>
                    <Card style={{ width: "18rem"}} className='m-0 p-0 text-center'>
                            <Card.Body>
                                <Card.Title>
                                    {ele.title}
                                </Card.Title>
                                <img src={ele.image} width="250px" height="250px"></img>
                                <div className='d-flex justify-content-between align-items-center px-1 py-2'>
                                    Rs.{ele.price}/night
                                    <Button onClick={()=>{viewDetailHandler(ele)}} style={{backgroundColor:"#6f42c1",border:"none"}}>View Details</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    
                })}
            </Row>
        </Container>
    )
}

export default HotelList
