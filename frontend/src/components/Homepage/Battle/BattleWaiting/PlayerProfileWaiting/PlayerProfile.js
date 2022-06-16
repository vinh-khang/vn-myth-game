import React from "react";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../../../../../store/userSlice";
import { Link } from "react-router-dom";
import hoatietco from "../../../../../assets/element/hoatietco.png";
import "./PlayerProfile.scss";

function PlayerProfile() {
  const userInfo = useSelector(selectUserInfo);

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
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
          <Link to="/battle-start" className="btn btn-primary">
            Sẵn sàng
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PlayerProfile;
