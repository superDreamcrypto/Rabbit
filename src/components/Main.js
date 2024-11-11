import React from "react";
import "../assets/styles/Main.css";
import heroImage from "../assets/images/image.png";

function Main() {
  return (
    <section className="hero">
      <img src={heroImage} alt="Bunnies" className="hero-image" />
      <p className="tagline">Combining the power of Staking and Gaming</p>
      <p className="subtext">Presenting Rious the Rabbit</p>
      <div className="button-group">
        <button className="app-button">Open App</button>
        <button className="whitepaper-button">Whitepaper</button>
      </div>
    </section>
  );
}

export default Main;
