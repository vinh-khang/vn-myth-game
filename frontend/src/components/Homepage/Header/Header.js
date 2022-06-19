import React, { useState, useEffect, useRef } from "react";
import Logo from "../../../assets/logo/logo.png";
import khang from "../../../assets/avatar/khang.jpg";
import avatarFrame from "../../../assets/element/circle_frame_2.png";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../../../store/userSlice";
import storage from "redux-persist/lib/storage";
import coint from "../../../assets/element/coint.png";
import "./Header.scss";

const Header = () => {
  const userInfo = useSelector(selectUserInfo);
  const navigate = useNavigate();

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });

    storage.removeItem("persist:user");
  };

  console.log(userInfo);

  return (
    <header className="header noselect">
      <section className="top-header">
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-around"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 player-profile">
                <img
                  src={userInfo.photoURL}
                  className="img-fluid avatar rounded-circle"
                  alt="Avatar's player"
                  draggable={false}
                />
                <img
                  src={avatarFrame}
                  className="img-fluid avatar_frame rounded-circle"
                  alt="Avatar's player"
                  draggable={false}
                />
                <div className="player-name">
                  <div className="fs-6 ">{userInfo.displayName}</div>
                  <div className="fs-6 ">
                    <i className="fa-solid fa-fire-flame-curved danger me-3 text-warning"></i>
                    Cấp 12
                  </div>
                </div>
              </ul>
              <a className="logo">
                <img
                  className="img-fluid logo"
                  src={Logo}
                  alt="Generic placeholder"
                  draggable={false}
                />
              </a>
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* <img className="img-fluid coint" src={coint} alt="Generic placeholder" draggable={false} /> */}
                  <div className="nav-link">10.000</div>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-gear"></i>
                  </a>
                  <ul
                    className="dropdown-menu setting"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item setting-item " href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item setting-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item setting-item"
                        onClick={() => logout()}
                      >
                        <i className="fa-solid fa-right-from-bracket me-3"></i>{" "}
                        Đăng xuất
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </header>
  );
};

export default Header;
