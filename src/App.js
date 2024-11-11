import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import SocialLinks from "./components/SocialLinks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="background-animation">
        <Header />
        <Main />
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
