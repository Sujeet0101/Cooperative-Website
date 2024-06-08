import React from "react";
import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Dropdown = ({ title, items }) => {
  return (
    <NavDropdown
      title={title}
      id={`${title.toLowerCase().replace(/\s+/g, "-")}-dropdown`}
    >
      {items.map((item, index) => (
        <LinkContainer key={index} to={item.link}>
          <NavDropdown.Item>{item.label}</NavDropdown.Item>
        </LinkContainer>
      ))}
    </NavDropdown>
  );
};

export default Dropdown;
