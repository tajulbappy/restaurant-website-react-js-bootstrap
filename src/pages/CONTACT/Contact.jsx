// @ts-nocheck
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

import PageHeader from "../../components/PageHeader";
import ContactInfo from "../../components/ContactInfo";
import Reviews from "../../components/Reviews";
import ContactPageImg from "../../assets/images/contact-page-img.jpg";

import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      date: "",
      guests: "",
      comments: "",
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      <PageHeader title="Contact" background={ContactPageImg} />

      <Container className="py-5">
        <Row className="g-5">
          <Col lg={5}>
            <ContactInfo />
          </Col>

          <Col lg={7}>
            <div className="bg-light p-4 rounded shadow-sm">
              <h3 className="mb-4">Reserve Your Table</h3>

              {submitted && (
                <Alert variant="success">
                  ✅ Thank you! Your reservation request has been received. We
                  will contact you shortly.
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="date"
                      id="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Number of Guests</Form.Label>
                    <Form.Control
                      type="number"
                      id="guests"
                      min="1"
                      value={formData.guests}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label>Comments</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    id="comments"
                    value={formData.comments}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="success"
                  size="lg"
                  className="w-100"
                >
                  Submit Reservation
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="bg-dark text-light py-5">
        <Reviews />
      </div>
    </div>
  );
};

export default Contact;
