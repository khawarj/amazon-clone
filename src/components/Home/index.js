import React from "react";
import Header from "../../Header";
import Products from "../Products";

import "./home.css";

function Home() {
  return (
    <div className="home__container">
      <Header />
      <div className="home__body">
        <img className="home__banner" src="/dark.jpg" alt="banner"></img>
      </div>
      <Products></Products>
    </div>
  );
}

export default Home;
