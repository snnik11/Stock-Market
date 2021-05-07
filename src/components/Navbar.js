import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "./logo.png";

const headingStyle = {
  // color: "white",
  fontWeight: "bold",
  fontSize: "32px",
  // fontFamily: "Zen Dots",
  fontFamily: "Arial",
};
const subHeadingStyle = {
  fontWeight: "bold",
  fontSize: "22px",
  fontFamily: "Arial",
};
function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <div style={headingStyle}>
            <img
              //src={require("./logo.png")}
              src={logo}
              alt="Logo"
              style={{ width: 70, height: 70, padding: "5px" }}
            />
            Stock Market Analysis
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" style={subHeadingStyle}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/stocks">Stocks</Nav.Link>

            {/* <Nav.Link href="/pricehistory">PriceHistory</Nav.Link> */}

            {/* <Nav.Link href="/quote">Quote</Nav.Link> */}
          </Nav>

          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
