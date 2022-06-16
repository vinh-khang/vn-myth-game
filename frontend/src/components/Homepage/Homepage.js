import React from "react";
import Header from "./Header/Header";
import FindBattle from "./FindBattle/FindBattle";
import Listfriend from "./Listfriend/Listfriend";

import "./Homepage.scss";

const Homepage = () => {
  return (
    <>
      <div className="homepage-container noselect">
        <div className="homepage-content">
          <Header />
          <div className="main-content">
            <div className="left-content">
              <Listfriend />
            </div>
            <FindBattle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
