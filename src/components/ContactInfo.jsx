import React from "react";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="d-flex flex-column">
      <h2 className="fs-1 mb-4 text-uppercase fw-bold section-title text-start">
        Where To Find Us
      </h2>

      <div className="d-flex align-items-start mb-3">
        <FaMapMarkerAlt className="text-success mt-1 me-3" size={20} />
        <p className="mb-0 fs-5">47 Baker Street, London LD1 0ND</p>
      </div>

      <div className="d-flex align-items-start mb-3">
        <FaPhone className="text-success mt-1 me-3" size={20} />
        <p className="mb-0 fs-5">+44 20 7946 0958</p>
      </div>

      <div className="d-flex align-items-start mb-4">
        <FaClock className="text-success mt-1 me-3" size={20} />
        <div>
          <p className="mb-1 fs-5">Mon - Fri: 09:00 - 17:00</p>
          <p className="mb-0 fs-5">Sat - Sun: 10:00 - 15:00</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
