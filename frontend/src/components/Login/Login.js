import React from "react";
import io from "socket.io-client";
import Logo from "../../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";
import { auth, firebase } from "../../firebase/config";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../../store/userSlice";
// import { updateMatchInfo } from "../../store/matchSlice";
import "./Login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginWithGG = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  const loginWithFB = () => {
    firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider());
  };

  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(
        updateUserInfo({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
          isLoggin: true,
        })
      );
      // dispatch(
      //   updateMatchInfo({
      //     socket: socket,
      //   })
      // );

      navigate("/");
    }
  });

  return (
    <>
      <div className="homepage-container noselect">
        <div className="homepage-content">
          <div className="login-background col-12">
            <div className="login-form">
              <div className="login-logo">
                <img
                  className="img-fluid logo"
                  src={Logo}
                  alt="Generic placeholder"
                  draggable={false}
                />
              </div>
              <div className="login-title">ĐĂNG NHẬP VÀO GAME </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-user"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-key"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="disabledFieldsetCheck"
                />
                <label
                  className="form-check-label"
                  htmlFor="disabledFieldsetCheck"
                >
                  Ghi nhớ tôi
                </label>
              </div>
              <div className="d-grid gap-2 mt-4">
                <button className="btn btn-primary" type="button">
                  Đăng nhập
                </button>
              </div>
              <div className="row mt-4 gap-2 justify-content-center">
                <button
                  className="btn btn-danger col-2 icon"
                  type="button"
                  onClick={() => loginWithGG()}
                >
                  <i className="fa-brands fa-google"></i>
                </button>
                <button
                  className="btn btn-primary col-2 icon"
                  type="button"
                  onClick={() => loginWithFB()}
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
