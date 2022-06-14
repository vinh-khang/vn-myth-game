import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import './FriendHome.scss';
import onlineIcon from '../../../../assets/icon/onlineIcon.png';
import khang from '../../../../assets/avatar/khang.jpg';
import clickFriend from '../../../../assets/sound/button_effect/click_friend_effect.mp3';
const FriendHome = () => {
    let playAudio = () => {
        // new Audio(clickFriend).play();

    }

    return (
        <>
            <div className="friend-home-container row"
                onMouseEnter={playAudio}
            >
                <div className="col-3 friend-avatar">
                    <img src={khang} className="img-fluid avatar rounded-circle" alt="Avatar's player" draggable={false} />
                </div>
                <div className="col-9">
                    <div className="friend-home-title">Nguyễn Vĩnh Khang</div>
                    <div className="friend-status"><span><img className="onlineIcon" src={onlineIcon} alt="online icon" /></span> Đang online</div>
                </div>

            </div>
        </>
    );
}

export default FriendHome;