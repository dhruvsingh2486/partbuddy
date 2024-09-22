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
    <div className="container navbar_container dark-theme">
      <div className="row">



        <div className="col-md-6" style={{display:"flex"}}>

        <Link className="logo+home"
            to="/"
          >
             <img className="logo" src={logo} alt="" />
          </Link>

          <div
            className="mode-switch"
            style={{ display: "flex" }}
          >
            <p
              style={{
                width: "90px",
                height: "28px",
                // marginTop: "4vh",
                fontWeight: "500",
              }}
            >
             <i className="fa-solid fa-moon dark_icon"></i>
            </p>

            <label>
              <input
                type="checkbox"
                onChange={toggleTheme}
                checked={theme === "dark"}
              />
              <span className="slider round"></span>
            </label>
          </div>


       

        </div>




        <div className="col-md-6 nav_part2">
        

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

         

          {/* <button className='btn btn-primary'onClick={() => {toggleTheme()}} >theme</button> */}
        </div>




      </div>
    </div>
  );
}

export default Navbar;
