import React from "react";

const PageHeader = ({ title, background }) => {
  return (
    <header
      className="d-flex align-items-center justify-content-center text-light shadow"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh",
        minHeight: "350px",
      }}
    >
      <div className="text-center fade-in">
        <h1
          className="display-3 fw-bold text-uppercase"
          style={{ letterSpacing: "4px" }}
        >
          {title}
        </h1>
        <div
          style={{
            width: "100px",
            height: "4px",
            background: "var(--primary)",
            margin: "1rem auto 0",
            borderRadius: "2px",
          }}
        />
      </div>
    </header>
  );
};

export default PageHeader;
