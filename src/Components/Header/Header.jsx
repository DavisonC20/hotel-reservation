import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Header.css";
import { Button, DateRangePicker } from "rsuite";
import PersonCounter from "./PersonCounter";
import RangeDate from "./RangeDate";
import InputPlace from "./InputPlace";
import { Link } from "react-router-dom";
function Header({ children }) {
  return (
    <Container
      className="container-h d-flex align-items-center justify-content-between"
      style={{ maxWidth: "100%", height: "113px" }}
    >
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <h4 className="text-white" style={{marginLeft:'25px'}}>Alojamiento de Hoteles</h4>
      </Link>
      <Row className="container-f d-flex">
        <InputPlace />
        <RangeDate />
        <PersonCounter />
      </Row>
      <Link to={"/managehotels"}>
        <Button className="btn-custom">Gestionar Hotel</Button>
      </Link>
    </Container>
  );
}

export default Header;
