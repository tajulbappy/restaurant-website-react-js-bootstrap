import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaStar, FaQuoteRight } from "react-icons/fa";

import person1 from "../assets/images/person1.jpg";
import person2 from "../assets/images/person2.jpg";
import person3 from "../assets/images/person3.jpg";
import person4 from "../assets/images/person4.jpg";

const reviews = [
  {
    id: 1,
    name: "John Mike",
    img: person1,
    text: "Amazing food and great atmosphere! The steak was cooked to perfection. Highly recommended.",
  },
  {
    id: 2,
    name: "Maria Cruz",
    img: person2,
    text: "Best dining experience in London. The service was impeccable and the flavors unforgettable.",
  },
  {
    id: 3,
    name: "Anna Gold",
    img: person3,
    text: "Beautiful restaurant with a warm vibe. The desserts are absolutely divine — must try!",
  },
  {
    id: 4,
    name: "Nick Burn",
    img: person4,
    text: "Exceptional quality and presentation. Every dish is a work of art. Will come back soon!",
  },
];

const Reviews = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center section-title">What Our Guests Say</h2>

      <Row className="g-4 mt-3">
        {reviews.map(({ id, name, img, text }) => (
          <Col lg={6} key={id}>
            <Card className="h-100 border-0 shadow-sm review-card">
              <Card.Body className="p-4 position-relative">
                <FaQuoteRight
                  className="text-success opacity-25 position-absolute"
                  size={40}
                  style={{ top: "1rem", right: "1rem" }}
                />
                <div className="text-warning mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
                <p className="fst-italic mb-4">{text}</p>
              </Card.Body>
              <Card.Footer className="bg-white border-0 d-flex align-items-center p-4 pt-0">
                <img
                  src={img}
                  alt={name}
                  className="rounded-circle me-3"
                  width="55"
                  height="55"
                  style={{ objectFit: "cover" }}
                />
                <div>
                  <h6 className="text-success fw-bold mb-0">{name}</h6>
                  <small className="text-muted">Verified Guest</small>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Reviews;
