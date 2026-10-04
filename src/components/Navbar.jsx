import React, { useState } from "react";
import { Container, Nav, Navbar as BSNavbar } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdOutlineRestaurant } from "react-icons/md";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    // Close mobile navbar
    setExpanded(false);

    // Scroll page to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Scroll to top whenever route changes
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <BSNavbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className="shadow-sm bg-white py-3"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Container>
        <BSNavbar.Brand
          as={Link}
          to="/"
          onClick={handleNavClick}
          className="d-flex align-items-center"
        >
          <MdOutlineRestaurant className="text-success me-2" size={32} />

          <span className="fw-bold text-success" style={{ fontSize: "1.4rem" }}>
            React Restaurant
          </span>
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="main-navbar" aria-expanded={expanded} />

        <BSNavbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            {[
              { to: "/", label: "Home" },
              { to: "/menu", label: "Menu" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `nav-link text-uppercase fw-medium mx-2 ${
                    isActive ? "text-success fw-bold" : "text-dark"
                  }`
                }
                style={{ letterSpacing: "1px" }}
              >
                {label}
              </NavLink>
            ))}
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
