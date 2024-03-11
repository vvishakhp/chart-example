import React from "react";
import { IoHome } from "react-icons/io5";
import {
  Navbar,
  Button,
  Nav,
  Dropdown,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import {
  FaNetworkWired,
  FaRecycle,
  FaUserEdit,
  FaHandHolding,
} from "react-icons/fa";
import { BsFillCalendar2CheckFill } from "react-icons/bs";

const Supplier = () => {
  return (
    <div className="supply-chain-container">
      <Navbar style={{ backgroundColor: " #288adf", marginTop: "1rem" }}>
        <IoHome />
        <Navbar.Brand href="#home" style={{ marginRight: "3rem" }}>
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              href="#link"
              style={{ marginRight: "3rem" }}
              className="active"
            >
              Supplier Management
            </Nav.Link>
            <Nav.Link href="#link" style={{ marginRight: "3rem" }}>
              RFx Management
            </Nav.Link>
            <Nav.Link href="#link" style={{ marginRight: "3rem" }}>
              Order Management
            </Nav.Link>
            <Nav.Link href="#link" style={{ marginRight: "3rem" }}>
              Material Management
            </Nav.Link>
            <Nav.Link href="#link" style={{ marginRight: "3rem" }}>
              NC&SCAR
            </Nav.Link>
            <Nav.Link href="#link" style={{ marginRight: "3rem" }}>
              Logistic
            </Nav.Link>
            <Nav.Link href="#link" style={{ marginRight: "3rem" }}>
              Payment
            </Nav.Link>
            <Nav.Link href="#link">Supplier Perfomance</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <Button style={{ marginLeft: "4rem" }}>Request</Button>{" "}
            <Button style={{ marginLeft: "" }}>Direct Procurement</Button>{" "}
            <Button style={{ marginLeft: "" }}>Indirect Procurement</Button>{" "}
            <Button style={{ marginLeft: "" }}>Supplier Request</Button>{" "}
          </Col>
        </Row>
      </Container>
      <br />
      <br />

      <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
        Registered Supplier to Potential Supplier
      </Dropdown.Toggle>

      <br />
      <br />

      <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
        Request for Evaluation of New Supplier
      </Dropdown.Toggle>

      <br />
      <br />
      <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
        Vendor Code Creation/Extension Request
      </Dropdown.Toggle>

      <br />
      <br />
      <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
        Addition to Register of External Provider
      </Dropdown.Toggle>

      <Navbar
        style={{
          backgroundColor: " #288adf",
          marginTop: "15rem",
          justifyContent: "center",
        }}
      >
        <FaNetworkWired style={{ marginRight: "3rem" }} />
        <FaRecycle style={{ marginRight: "3rem" }} />
        <BsFillCalendar2CheckFill style={{ marginRight: "3rem" }} />
        <FaUserEdit style={{ marginRight: "3rem" }} />
        <FaHandHolding style={{ marginRight: "3rem" }} />
      </Navbar>
    </div>
  );
};
export default Supplier;
