import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import img1 from "../assets/bg_hotel.jpg"

function CategoryList() {
  const categoryList = useSelector(state => state.category.category);

  return (
    <Container fluid>
        <Row>
            <Col md={12} style={{height:"650px",
             backgroundImage:`url(${img1})`,
             backgroundSize:"cover",
             }} className='m-0 p-0'>

            </Col>
        </Row>
      <Row className="justify-content-center">
        <h2 className='my-3'>Explore By Category</h2>
        {categoryList.map((cat) => (
          <Col key={cat.id} md={4} className="my-3">
            <Card className="shadow-sm text-center" style={{ borderRadius: "12px" }}>
              <Card.Img
                variant="top"
                src={cat.categoryImg}
                style={{
                  height: "180px",
                  objectFit: "cover",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              />
              <Card.Body>
                <Card.Title>{cat.title}</Card.Title>
                <Card.Text>{cat.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CategoryList;
