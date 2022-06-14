import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import './BattleWaiting.scss';

const BattleWaiting = () => {
    return (
        <>
            <div className="homepage-container ">
                <div className="waiting-battle-content">
                    <Header />
                </div>

            </div>
        </>
    );
}

export default BattleWaiting;