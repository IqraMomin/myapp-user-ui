import React, { useState } from "react";
import { Button, Form, Nav, Navbar, InputGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar({ showCart }) {
  const [search, setSearch] = useState("");

  return (
    <Navbar
      bg="light"
      className="px-4 shadow-sm d-flex align-items-center"
      style={{ position: "fixed", top: 0, left: 0, width: "100%" }}
    >
      {/* LEFT MENU */}
      <Nav className="gap-4">
        <Nav.Link as={NavLink} to="/user/home">HOME</Nav.Link>
        <Nav.Link as={NavLink} to="/user/bookings">MY BOOKINGS</Nav.Link>
        <Nav.Link as={NavLink} to="/user/explore">EXPLORE</Nav.Link>
      </Nav>

      {/* CENTER SEARCH */}

      {/* RIGHT ICONS */}
      <div className="ms-auto d-flex align-items-center gap-4">

        {/* Cart */}
        <div
          onClick={() => showCart()}
          className="d-flex align-items-center gap-2 position-relative"
          style={{ cursor: "pointer" }}
        >
          <i className="bi bi-cart fs-4"></i>

          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            3
          </span>

          <span className="fw-semibold ms-2">Cart</span>
        </div>

        {/* User icon */}
        <Button style={{ background: "none", color: "black", border: "none" }}>
          <i className="bi bi-person-circle fs-4"></i>
        </Button>

        {/* Logout */}
        <Button variant="outline-danger">
          <i className="bi bi-box-arrow-right"></i> Logout
        </Button>
      </div>
    </Navbar>
  );
}

export default NavBar;
