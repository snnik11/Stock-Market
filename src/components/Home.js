import React from "react";
import hero from "./hero.jpg";

// footer starts
const FooterName = () => {
  return (
    <footer className="footer-nikita">
      {/* my copyright signature goes here */}
      <span>Nikita Soni Copyright &copy; 2021</span>
    </footer>
  );
};

//footer ends

function Home() {
  return (
    <section className="home-hero">
      <img
        src={hero}
        alt="Hero image displays here"
        style={{ width: "100%", height: "71vh", padding: "0" }}
      />

      <div
        style={{
          padding: "71px",
          background: "white",
          justifyContent: "space-between",
          fontStyle: "italic",
          backgroundColor: "rgb(158, 72, 176)",
        }}
      >
        <h1
          style={{ fontWeight: "bolder", fontFamily: "Arial", color: "white" }}
        >
          Know if it's the right time to invest?
        </h1>
        <h3
          style={{
            fontWeight: "bolder",
            fontStyle: "normal",
            color: "white",
            fontFamily: "Arial",
          }}
        >
          Find it out here!
        </h3>
      </div>

      <FooterName />
    </section>
  );
}

export default Home;
