// @ts-nocheck
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import Gallery1 from "../assets/images/gallery1.jpg";
import Gallery2 from "../assets/images/gallery2.jpg";
import Gallery3 from "../assets/images/gallery3.jpg";
import Gallery4 from "../assets/images/gallery4.jpg";
import Gallery5 from "../assets/images/gallery5.jpg";
import Gallery6 from "../assets/images/gallery6.jpg";

const galleryImages = [
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container py-5">
      <h2 className="text-center section-title">Image Gallery</h2>

      <Row className="g-3 mt-3">
        {galleryImages.map((img, i) => (
          <Col md={6} lg={4} key={i}>
            <div
              className="gallery-item overflow-hidden rounded shadow-sm"
              onClick={() => setSelectedImage(img)}
              style={{ cursor: "pointer", position: "relative" }}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-100 gallery-img"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                }}
              />
            </div>
          </Col>
        ))}
      </Row>

      {/* Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            cursor: "pointer",
          }}
        >
          <img
            src={selectedImage}
            alt="Selected"
            style={{ maxHeight: "90vh", maxWidth: "90vw", borderRadius: "8px" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
