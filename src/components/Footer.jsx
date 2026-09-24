import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdOutlineRestaurant } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <Container>
        <Row className="g-4">
          <Col lg={4} md={6}>
            <div className="d-flex align-items-center mb-3">
              <MdOutlineRestaurant className="text-success me-2" size={32} />
              <h4 className="mb-0 text-success fw-bold">React Restaurant</h4>
            </div>
            <p className="text-white-50">
              Serving exceptional food with passion since 2010. Come taste the
              difference.
            </p>
            <div className="d-flex gap-3 mt-3">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-white-50 social-icon"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </Col>

          <Col lg={2} md={6}>
            <h5 className="text-success mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {["Home", "Menu", "About", "Contact"].map((item) => (
                <li key={item} className="mb-2">
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-white-50 text-decoration-none"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h5 className="text-success mb-3">Contact Info</h5>
            <p className="text-white-50 mb-2">
              <FaMapMarkerAlt className="me-2" /> 47 Baker Street, London
            </p>
            <p className="text-white-50 mb-2">
              <FaPhone className="me-2" /> +44 20 7946 0958
            </p>
            <p className="text-white-50 mb-2">
              <FaEnvelope className="me-2" /> hello@reactrestaurant.com
            </p>
          </Col>

          <Col lg={3} md={6}>
            <h5 className="text-success mb-3">Opening Hours</h5>
            <p className="text-white-50 mb-1">Mon - Fri: 09:00 - 17:00</p>
            <p className="text-white-50 mb-1">Sat - Sun: 10:00 - 15:00</p>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        <p className="text-center text-white-50 mb-0 small">
          © {new Date().getFullYear()} React Restaurant — Made with ❤️ by Tajul
          Islam
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
