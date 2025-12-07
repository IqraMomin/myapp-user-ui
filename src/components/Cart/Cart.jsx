import React from 'react'
import { useSelector } from 'react-redux'
import { ListGroup, Button ,Badge} from 'react-bootstrap';
import "./Cart.css"

function Cart({ onClose }) {
    const cartList = useSelector(state => state.cart.cart);
    const cartTotal = useSelector(state => state.cart.totalAmount);
    console.log(cartList);

    return (
        <div className='cart-box'>

            {/* Header */}
            <div className="d-flex justify-content-center align-items-center position-relative py-2 mb-3">
                <h5 className="m-0 text-center flex-grow-1">Your Cart</h5>
                <button
                    className="btn btn-light position-absolute end-0 me-2"
                    onClick={onClose}
                >
                    <i className="bi bi-x-lg"></i>
                </button>
            </div>

            {/* ⭐ SCROLLABLE AREA */}
            <div className="cart-content">
                <ListGroup>
                    {cartList.map(ele => (
                        <ListGroup.Item key={ele.id} className="d-flex align-items-center gap-3">

                            <div className='d-flex-column align-items-center gap-2'>
                                <span>{ele.title}</span>
                                <p>Price/night:{ele.price}</p>
                                <p>Guest:{ele.guest}</p>
                                <p>CheckIn:{ele.checkIn}</p>
                                <p>CheckOut:{ele.checkOut}</p>
                                <p>SubTotal:{ele.total}</p>
                                <div className='d-flex justify-content-center'>
                                <Button>Delete</Button>
                            </div>
                            </div>
                            

                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>

            {/* Bottom Button */}
            <div className='d-flex mt-3 justify-content-between align-items-center'>
                <h6>
                    <Badge bg="secondary" className="px-3 py-2 fs-6 py-3">
                        Total: Rs.{cartTotal}
                    </Badge>
                </h6>

                <Button variant="outline-dark">CHECKOUT</Button>
            </div>

        </div>


    )
}

export default Cart
