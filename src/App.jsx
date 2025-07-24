import React from "react";
import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { MdOutlineRestaurant } from "react-icons/md";
import { PiAtThin } from "react-icons/pi";

//pages
import Home from "./pages/HOME/Home";
import Menu from "./pages/MENU/Menu";
import About from "./pages/ABOUT/About";
import Contact from "./pages/CONTACT/Contact";

const App = () => {
  return (
    <>
      <Navbar expand="lg" className="fixed-top bg-body-tertiary shadow">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand text-success fw-semibold">
              <MdOutlineRestaurant className="me-2 fs-3" />
              <span>React Restaurant</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto justify-content-end w-100">
              <NavLink to="/" className="nav-link text-uppercase">
                Home
              </NavLink>
              <NavLink to="/menu" className="nav-link text-uppercase">
                Menu
              </NavLink>
              <NavLink to="/about" className="nav-link text-uppercase">
                About
              </NavLink>
              <NavLink to="/contact" className="nav-link text-uppercase">
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="bg-dark-emphasis py-1">
        <p className="text-center fw-light mt-1">
          copyright <PiAtThin /> made by tajul islam
        </p>
      </footer>
    </>
  );
};

export default App;
