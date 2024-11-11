import React from "react";
import "../assets/styles/Header.css";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Rious the Rabbit Logo" className="logo" />
      <h1 className="title">RIOUS THE RABBIT</h1>
    </header>
  );
}

export default Header;
