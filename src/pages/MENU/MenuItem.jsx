// @ts-nocheck
// src/pages/Menu/MenuItem.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import BreakfastImg from "../../assets/images/breakfast.jpg";
import LunchImg from "../../assets/images/lunch.jpg";
import DinnerImg from "../../assets/images/dinner.jpg";
import DessertImg from "../../assets/images/dessert.jpg";

import menuData from "../../assets/data/menuData";

import "./Menu.css";

// ✅ Rename `key` → `id` so we don't clash with React's reserved `key` prop
const categories = [
  { id: "breakfast", title: "Breakfast", image: BreakfastImg, dark: false },
  { id: "lunch", title: "Lunch", image: LunchImg, dark: true },
  { id: "dinner", title: "Dinner", image: DinnerImg, dark: false },
  { id: "dessert", title: "Dessert", image: DessertImg, dark: true },
];

const CategorySection = ({ category, title, image, dark }) => {
  // ✅ Safe filter — guards against missing/undefined category
  const items = (menuData || []).filter((item) => {
    if (!item || item.category == null) return false;
    return (
      String(item.category).trim().toLowerCase() ===
      String(category).trim().toLowerCase()
    );
  });

  return (
    <section
      className={`py-5 ${dark ? "bg-dark text-light" : ""}`}
      id={category}
    >
      <Container>
        <h2
          className={`text-center section-title ${
            dark ? "text-success" : "text-dark"
          }`}
        >
          {title}
        </h2>

        <Row className="align-items-center g-5 mt-3">
          <Col lg={6} className={dark ? "order-lg-2" : ""}>
            <img src={image} alt={title} className="img-fluid rounded shadow" />
          </Col>

          <Col lg={6}>
            {items.length === 0 && (
              <p className={dark ? "text-white-50" : "text-muted"}>
                No items available in this category.
              </p>
            )}

            {items.map((item) => (
              <Card
                key={item.id}
                className={`border-0 mb-3 ${
                  dark ? "bg-dark text-light" : "bg-transparent"
                }`}
              >
                <Card.Body className="border-bottom border-secondary pb-3">
                  <div className="d-flex justify-content-between align-items-start gap-3">
                    <div>
                      <h5
                        className={`fw-bold mb-1 ${
                          dark ? "text-light" : "text-dark"
                        }`}
                      >
                        {item.name}
                      </h5>
                      <p
                        className={`small mb-0 ${
                          dark ? "text-white-50" : "text-muted"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                    <span className="text-success fw-bold fs-5 text-nowrap">
                      {item.price}
                    </span>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const MenuItem = () => {
  // 🔍 DEBUG — inspect data shape
  console.log("menuData loaded:", menuData);
  console.log("First item:", menuData?.[0]);
  console.log("First item category:", menuData?.[0]?.category);

  return (
    <>
      {categories.map((cat) => (
        <CategorySection
          key={cat.id} /* ✅ pass key directly */
          category={cat.id} /* ✅ pass category explicitly */
          title={cat.title}
          image={cat.image}
          dark={cat.dark}
        />
      ))}
    </>
  );
};

export default MenuItem;
