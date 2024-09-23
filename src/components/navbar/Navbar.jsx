import React, { useEffect, useState } from "react";
import "../navbar/Navbar.css";
import logo from "../../assets/logo/partbuddylogo.png";
import { Link } from "react-router-dom";
import { useTheme } from "../Themecontext";
import { useAuth0 } from "@auth0/auth0-react";
import "./login.css";

function Navbar() {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  console.log("current user", user);

  const { theme, toggleTheme } = useTheme();

  console.log(theme);

  return (
    <>
      <div
        className="container navbar_container dark-theme"
        style={{ margin: "1% 0% 1% 4%" }}
      >
        <div className="row">
          <div className="col-md-12 " style={{display:'flex'}}>
            <Link to="/">
              <img src={logo} className="logo" alt="" />
            </Link>

            <div className="mode-switch" style={{ display: "flex" }}>

                <i className="fa-solid fa-moon dark_icon"></i>

              <label>
                <input
                  type="checkbox"
                  onChange={toggleTheme}
                  checked={theme === "dark"}
                />
                <span className="slider round"></span>
              </label>
            </div>


    <li className=" nav-item dropdown dropin_nav">
            <a
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>

          <div className="authentication" >
            {isAuthenticated && (
              <p className="user_name">Hello {user.nickname}</p>
            )}
            {isAuthenticated ? (
              <button className="loginbtn2" onClick={(log) => logout()}>
                {" "}
                <span>Logout</span>
              </button>
            ) : (
              <button
                className="loginbtn"
                onClick={(log) => loginWithRedirect()}
              >
                {" "}
                <span>Login</span>
              </button>
            )}
          </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Navbar;
