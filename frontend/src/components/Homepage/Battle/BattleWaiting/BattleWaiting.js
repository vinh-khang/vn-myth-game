import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Header from "../../Header/Header";
import Listfriend from "../../Listfriend/Listfriend";
import InviteFriend from "./InviteFriend/InviteFriend";
import PlayerProfile from "./PlayerProfileWaiting/PlayerProfile";
import SelectCharacter from "./SelectCharacter/SelectCharacter";

import "./BattleWaiting.scss";

const BattleWaiting = () => {
  const [room, setRoom] = useState(0);
  const [joinRoom, setJoinRoom] = useState(0);

  useEffect(() => {
    let roomID = Math.random() * (9999 - 1000) + 1000;
    setRoom(Math.round(roomID));
  }, []);

  let joinOtherRoom = () => {
    setRoom(joinRoom);
  };

  console.log(room);

  return (
    <>
      <div className="homepage-container noselect">
        <div className="waiting-battle-content">
          <Header />
          <div className="main-content">
            <div className="left-content m-3">
              <Link to="/" type="button" className="btn btn-light">
                Quay về
              </Link>
              <Listfriend />
            </div>
            <SelectCharacter />
            <div className="right-content m-3 ">
              <div className="room-waiting mb-2">
                <i className="fa-solid fa-users-line me-2 "></i> Phòng: {room}
              </div>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Gia nhập phòng"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  onChange={(e) => setJoinRoom(e.target.value)}
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  id="button-addon2"
                  onClick={() => joinOtherRoom()}
                >
                  Tham gia
                </button>
              </div>

              <PlayerProfile />
              <InviteFriend />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BattleWaiting;
