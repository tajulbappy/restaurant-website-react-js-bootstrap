import React from "react";
import { Container, Nav, Navbar as BSNavbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineRestaurant } from "react-icons/md";

const Navbar = () => {
  return (
    <BSNavbar
      expand="lg"
      fixed="top"
      className="shadow-sm bg-white py-3"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Container>
        <BSNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <MdOutlineRestaurant className="text-success me-2" size={32} />
          <span className="fw-bold text-success" style={{ fontSize: "1.4rem" }}>
            React Restaurant
          </span>
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="main-navbar" />

        <BSNavbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            {[
              { to: "/", label: "Home" },
              { to: "/menu", label: "Menu" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `nav-link text-uppercase fw-medium mx-2 ${
                    isActive ? "text-success fw-bold" : "text-dark"
                  }`
                }
                style={{ letterSpacing: "1px" }}
              >
                {label}
              </NavLink>
            ))}
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
