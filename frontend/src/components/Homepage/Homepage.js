import React, { useState, useEffect, useRef } from "react";
import Header from "./Header/Header";
import FindBattle from "./FindBattle/FindBattle";
import { Routes, Route, Link } from "react-router-dom";
import BattleStart from "./Battle/BattleStart/BattleStart";
import "./Homepage.scss";
import Listfriend from "./Listfriend/Listfriend";

const Homepage = () => {
  return (
    <>
      <div className="homepage-container noselect">
        <div className="homepage-content">
          <Header />
          <div className="main-content">
            <div className="left-content">
              <Listfriend className="" />
            </div>
            <FindBattle className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
