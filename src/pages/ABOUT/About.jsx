// @ts-nocheck
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageHeader from "../../components/PageHeader";
import ImageGallery from "../../components/ImageGallery";
import Reviews from "../../components/Reviews";

import AboutPageImg from "../../assets/images/about-page-img.jpg";
import AboutChef1 from "../../assets/images/about-chef1.jpg";
import AboutChef2 from "../../assets/images/about-chef2.jpg";

import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <PageHeader title="About" background={AboutPageImg} />

      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={10}>
            <h2 className="section-title text-start">Our Story</h2>
            <p className="text-muted">
              Founded in 2010, React Restaurant began with a simple vision — to
              create a place where exceptional food meets warm hospitality. What
              started as a small family kitchen has grown into one of London's
              most loved dining destinations.
            </p>
            <p className="text-muted">
              Every dish we serve is a reflection of our commitment to quality,
              freshness, and passion for food. Our chefs source ingredients from
              local farms and trusted suppliers, ensuring every bite is
              memorable.
            </p>

            <Row className="my-5 g-4">
              <Col md={6}>
                <img
                  src={AboutChef1}
                  alt="Chef 1"
                  className="img-fluid rounded shadow"
                />
              </Col>
              <Col md={6}>
                <img
                  src={AboutChef2}
                  alt="Chef 2"
                  className="img-fluid rounded shadow"
                />
              </Col>
            </Row>

            <h3 className="section-title text-start">Our Mission</h3>
            <p className="text-muted">
              We believe dining is more than just eating — it's an experience.
              Our mission is to bring people together around exceptional food,
              creating memories that last a lifetime. From the first bite to the
              last, we want every guest to feel at home.
            </p>
          </Col>
        </Row>
      </Container>

      <div className="bg-dark text-light">
        <ImageGallery />
      </div>

      <Reviews />
    </div>
  );
};

export default About;
