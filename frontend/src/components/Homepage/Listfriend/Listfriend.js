import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import FriendHome from "./FriendHome/FriendHome";
import './Listfriend.scss';

const Listfriend = () => {
    let Listfriend = [];

    for (let i = 1; i <= 5; i++) {
        Listfriend.push(<FriendHome key={i} />);
    };

    return (
        <>
            <div className="listfriend-form">
                <div className="listfriend-title">LIST FRIENDS</div>
                {Listfriend}
            </div>
        </>
    );
}

export default Listfriend;