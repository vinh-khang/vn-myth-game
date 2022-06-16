import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Chat from "../../Chat/Chat";
import FriendHome from "./FriendHome/FriendHome";
import "./Listfriend.scss";

const Listfriend = () => {
  let Listfriend = [];

  for (let i = 1; i <= 5; i++) {
    Listfriend.push(<FriendHome key={i} />);
  }

  return (
    <>
      <div className="listfriend-form">
        <div className="listfriend-title" id="dropdownMenuLink">
          LIST FRIENDS
        </div>
        {Listfriend}
      </div>
      {/* <Chat /> */}
    </>
  );
};

export default Listfriend;
