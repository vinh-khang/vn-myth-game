import React from "react";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../../../../../store/userSlice";
import { Link } from "react-router-dom";
import hoatietco from "../../../../../assets/element/hoatietco.png";
import "./PlayerProfile.scss";

function PlayerProfile({ isOtherUser }) {
  let userInfo = useSelector(selectUserInfo);
  if (isOtherUser) {
    userInfo = {
      displayName: isOtherUser.name,
      uid: isOtherUser.uid,
      photoURL: isOtherUser.photoURL,
    };
  }

  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem" }}>
        <img
          src={userInfo && userInfo.photoURL}
          className="img-fluid avatar-profile rounded-circle mt-2"
          alt="Player avatar"
        />
        <div className="card-body">
          <h5 className="card-title text-center">
            {userInfo && userInfo.displayName}
          </h5>
          <img className="img-fluid" src={hoatietco} />
        </div>
      </div>
    </div>
  );
}

export default PlayerProfile;
