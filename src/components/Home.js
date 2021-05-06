import React from "react";

import hero from "./hero.jpg";
import money from "./money.jpg";
import all from "./all.jpg";
import Card from "react-bootstrap/Card";
import { CardDeck } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <span>Nikita Soni Copyright &copy; 2021</span>
    </footer>
  );
};
function Home() {
  return (
    <section className="card">
      <img
        src={require("./hero.jpg")}
        src={hero}
        alt="Logo"
        style={{ width: "100%", height: "70vh" }}
      />

      {/* <h3>Check the dashboard here</h3> */}
      <div
        style={{
          padding: "70px",
          background: "white",
          justifyContent: "space-between",
          fontStyle: "italic",
          backgroundColor: "rgb(200, 160, 238)  ",
        }}
      >
        <h1 style={{ fontWeight: "bolder", fontFamily: "Arial" }}>
          Know if it's the right time to invest?
        </h1>
        <h3
          style={{
            fontWeight: "bolder",
            fontStyle: "normal",
            fontFamily: "Arial",
          }}
        >
          Find it out here!
        </h3>
        {/* <p> Know if it's the right time to invest!</p> */}
      </div>

      {/* <CardDeck
        style={{
          padding: "30px",
          width: "700px",
          //height: "300px",
          justifyContent: "space-between",
        }}
      > */}
      {/* <Card style={{ height: "200px" }}>
          <Card.Img
            variant="top"
            src={money}
            style={{
              height: "200px",
              width: "300px",
            }}
          /> */}
      {/* <Card.Body style={{ textAlign: "center", fontWeight: "bold" }}> */}
      {/* <Card.Title> </Card.Title> */}
      {/* <Card.Text>Which company is profiting?</Card.Text> */}
      {/* <button variant="primary">Go somewhere</button> */}
      {/* </Card.Body>
        </Card>
        <Card style={{ height: "200px" }}>
          <Card.Img
            variant="top"
            src={all}
            style={{
              width: "300px",
              height: "200px",
            }}
          />
          <Card.Body style={{ textAlign: "center", fontWeight: "bold" }}> */}
      {/* <Card.Title> </Card.Title> */}
      {/* <Card.Text>Is it the right time to invest?</Card.Text> */}
      {/* <button variant="primary">Go somewhere</button> */}
      {/* </Card.Body>
        </Card>
      </CardDeck> */}
      {/* <br /> */}
      {/* <p> iuheufhnaeriuvnerkuvnrfuvnfiu b</p> */}
      {/* <br /> */}
      <Footer />
    </section>
  );
}

export default Home;
