import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Dropdown from "./Dropdown";
import AppFooter from "./Footer";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Savings and Credit Co-operative Ltd.</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <Dropdown
              title="About"
              items={[
                { label: "About Us", link: "/about-us" },
                { label: "Mission and Vision", link: "/mission-vision" },
                { label: "Management Team", link: "/management-team" },
              ]}
            />
            <Dropdown
              title="Services"
              items={[
                { label: "Savings Accounts", link: "/savings-accounts" },
                { label: "Loan Products", link: "/loan-products" },
                { label: "Investment Plans", link: "/investment-plans" },
                { label: "Insurance", link: "/insurance" },
              ]}
            />
            <LinkContainer to="/news-events">
              <Nav.Link>News and Events</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/testimonials">
              <Nav.Link>Testimonials</Nav.Link>
            </LinkContainer>
            <Dropdown
              title="Career"
              items={[
                {
                  label: "Career Opportunities",
                  link: "/career-opportunities",
                },
                { label: "Membership", link: "/membership" },
              ]}
            />
            <LinkContainer to="/downloads">
              <Nav.Link>Downloads</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact-us">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
