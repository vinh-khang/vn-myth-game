import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectUserInfo } from "../../../../store/userSlice";
import { selectMatchInfo } from "../../../../store/matchSlice";
import { selectPlayers } from "../../../../store/playersSlice";
import { useSelector } from "react-redux";

import Header from "../../Header/Header";
import Listfriend from "../../Listfriend/Listfriend";
import InviteFriend from "./InviteFriend/InviteFriend";
import PlayerProfile from "./PlayerProfileWaiting/PlayerProfile";
import SelectCharacter from "./SelectCharacter/SelectCharacter";

import { updateMatchInfo } from "../../../../store/matchSlice";
import { addPlayers } from "../../../../store/playersSlice";
import { socket } from "../../../../utils/serverConfig";

import "./BattleWaiting.scss";

const BattleWaiting = () => {
  const userInfo = useSelector(selectUserInfo);
  const displayName = userInfo.displayName;
  const photoURL = userInfo.photoURL;
  const uid = userInfo.uid;
  const [players, setPlayers] = useState([]);
  const [room, setRoom] = useState("0");
  const [joinRoom, setJoinRoom] = useState("0");

  const dispatch = useDispatch();

  useEffect(() => {
    let roomIDTemp = Math.random() * (9999 - 1000) + 1000;
    let roomID = Math.round(roomIDTemp);
    setRoom(roomID);
    dispatch(updateMatchInfo({ roomID: roomID }));
    socket.emit(
      "join",
      { name: displayName, room: roomID, uid, photoURL },
      (error) => {
        if (error) {
          alert(error);
        }
      }
    );
  }, []);

  useEffect(() => {
    socket.on("roomData", (players) => {
      setPlayers(players.users);
      dispatch(addPlayers(players.users));
    });
  }, []);

  let joinOtherRoom = () => {
    setRoom(joinRoom);
    dispatch(updateMatchInfo({ roomID: joinRoom }));
    socket.emit(
      "join",
      { name: displayName, room: joinRoom, uid, photoURL },
      (error) => {
        if (error) {
          alert(error);
        }
      }
    );
  };

  const [findOtherPlayer] = players.filter((element, index) => {
    return element.uid !== uid;
  });

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
            <div className="right-content">
              <div className="room-waiting mb-2 row  mt-2">
                <div className="room-detail col-6">
                  <i className="fa-solid fa-users-line me-2 "></i> Phòng: {room}
                </div>
                <div className="col-6 input-group join-room">
                  <input
                    type="number"
                    className="form-control input-room"
                    placeholder="Gia nhập phòng"
                    onChange={(e) => setJoinRoom(e.target.value)}
                  />
                  <button
                    className="join-room-btn btn btn-light"
                    type="button"
                    onClick={() => joinOtherRoom()}
                  >
                    <i className="fa-solid fa-right-to-bracket"></i>
                  </button>
                </div>
              </div>

              <PlayerProfile isOtherUser={false} />
              {players.length > 1 ? (
                <PlayerProfile
                  isOtherUser={players.length > 1 ? findOtherPlayer : false}
                />
              ) : (
                <InviteFriend />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BattleWaiting;
