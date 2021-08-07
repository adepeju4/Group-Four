import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

import styles from "../stylesheets/Navigation.module.css";

export const Navigation = () => {
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      variant="dark"
      className={styles.navbar}
    >
      <Container>
        <Link
          to="/"
          className={`${styles["nav-link"]} ${styles["brand-name"]}`}
        >
          foodine
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <div className={`${styles["nav-link"]} ${styles["link-item"]}`}>
              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
            </div>
            <Link
              to="/about"
              className={`${styles["nav-link"]} ${styles["link-item"]}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${styles["nav-link"]} ${styles["link-item"]}`}
            >
              Contact
            </Link>
            <Link
              to="/signup"
              className={`${styles["nav-link"]} ${styles["link-item"]} ${styles["signin-item"]}`}
            >
              Sign up
            </Link>
            <Link
              to="/login"
              className={`${styles["nav-link"]} ${styles["link-item"]}`}
            >
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
