import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../../../../../store/userSlice";
import { Link } from "react-router-dom";
import flag from "../../../../../assets/element/flag.png";
import vuongmien from "../../../../../assets/element/vuongmien.png";
import bg1 from "../../../../../assets/element/element-bg1.png";
import "./PlayerProfile.scss";

function PlayerProfile({ isOtherUser }) {
  const [isRival, setIsRival] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  let info = useSelector(selectUserInfo);
  useEffect(() => {
    setUserInfo(info);
    if (isOtherUser) {
      setUserInfo({
        displayName: isOtherUser.name,
        uid: isOtherUser.uid,
        photoURL: isOtherUser.photoURL,
      });
      setIsRival(true);
    }
  }, []);

  return (
    <div className="profile-card mt-3 pt-3" style={{ width: "18rem" }}>
      {!isRival && (
        <img
          src={vuongmien}
          alt="..."
          className="profile-crown mt-3"
          draggable={false}
        />
      )}

      <div className="profile-body text-center ">
        <img
          src={userInfo && userInfo.photoURL}
          className="img-fluid avatar-profile rounded-circle mt-2"
          alt="Player avatar"
          draggable={false}
        />
        <h5 className="card-title player-name">
          {userInfo && userInfo.displayName}
        </h5>
        <h6 className="level">Cấp 12</h6>{" "}
        <i class="fas fa-fire text-center"></i>
      </div>
      {/* <img src={bg1} alt="..." className="profile-bg" /> */}
      {/* <img src={flag} alt="..." className="img-fluid flag" /> */}
    </div>
  );
}

export default PlayerProfile;
