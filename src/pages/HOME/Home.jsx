// @ts-nocheck
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import MenuBtn from "../../components/MenuBtn";
import ImageGallery from "../../components/ImageGallery";
import ContactInfo from "../../components/ContactInfo";

import AboutImg from "../../assets/images/about-img.jpg";
import ContactImage from "../../assets/images/contact-img.jpg";
import HeaderImg from "../../assets/images/header-img.jpg";
import MenuImg from "../../assets/images/menu-img.jpg";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* HERO */}
      <header
        className="d-flex align-items-center text-light shadow"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${HeaderImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <Container>
          <Row>
            <Col lg={7} className="fade-in">
              <p
                className="text-warning text-uppercase fw-bold mb-2"
                style={{ letterSpacing: "3px" }}
              >
                Welcome To
              </p>
              <h1 className="display-2 fw-bold mb-4">Neon Restaurant</h1>
              <p className="lead mb-5 text-white-50">
                Experience exceptional cuisine crafted with the finest
                ingredients and served with passion.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <MenuBtn />
                <Link
                  to="/contact"
                  className="btn btn-outline-warning btn-lg px-4"
                >
                  Book a Table
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      {/* ABOUT */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <img
                src={AboutImg}
                alt="About"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col lg={6}>
              <h2 className="section-title text-start">About Us</h2>
              <p className="text-muted">
                Welcome to Neon Restaurant — where tradition meets innovation.
                For over a decade we have been serving our guests with dishes
                made from the freshest local ingredients.
              </p>
              <p className="text-muted mb-4">
                Our chefs bring years of experience from around the world,
                creating a menu that celebrates both classic flavors and modern
                creativity.
              </p>
              <Link to="/about" className="btn btn-outline-success btn-lg px-4">
                More About Us
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAVORITES */}
      <section
        className="py-5 text-light shadow"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${MenuImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Container className="d-flex flex-column align-items-center py-4">
          <h2 className="section-title">Our Favorites</h2>

          <Row className="w-100 g-5">
            <Col lg={6}>
              <h3 className="fs-2 mb-4 text-success text-center">Food</h3>
              <ul className="list-unstyled">
                {[
                  { name: "English Breakfast", price: "$12" },
                  { name: "Spicy Beef", price: "$15" },
                  { name: "Spaghetti Bolognese", price: "$11" },
                ].map((item) => (
                  <li
                    key={item.name}
                    className="d-flex justify-content-between align-items-center py-2 border-bottom border-secondary"
                  >
                    <span className="fs-5">{item.name}</span>
                    <span className="fs-5 text-success fw-bold">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </Col>

            <Col lg={6}>
              <h3 className="fs-2 mb-4 text-success text-center">Drinks</h3>
              <ul className="list-unstyled">
                {[
                  { name: "Coffee", price: "$2" },
                  { name: "Juice", price: "$1" },
                  { name: "Spirits", price: "$5" },
                ].map((item) => (
                  <li
                    key={item.name}
                    className="d-flex justify-content-between align-items-center py-2 border-bottom border-secondary"
                  >
                    <span className="fs-5">{item.name}</span>
                    <span className="fs-5 text-success fw-bold">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>

          <div className="mt-5">
            <MenuBtn />
          </div>
        </Container>
      </section>

      {/* GALLERY */}
      <ImageGallery />

      {/* CONTACT */}
      <section className="bg-dark text-light py-5 shadow">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <ContactInfo />
            </Col>
            <Col lg={6} className="text-center">
              <img
                src={ContactImage}
                alt="Contact"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
