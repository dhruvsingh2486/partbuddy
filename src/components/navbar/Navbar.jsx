import React, {  } from "react";
import "../navbar/Navbar.css";
import logo from "../../assets/logo/partbuddylogo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../Themecontext";
import { useAuth0 } from "@auth0/auth0-react";
import "./login.css";


function Navbar() {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  console.log("current user", user);
  const navigate = useNavigate()

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
              Categories
            </a>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="dropdown-item" to='/Maintainancepartspage'>
                  Maintainance parts
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to='/Airconditioningpartspage'>
                  Air Conditioning Parts
                </NavLink>
              </li>
              <li>
               <NavLink className="dropdown-item" to='/Bearingspage'>
               Bearing Parts
               </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to='/Beltschainsandrollers'>
                 Belts and Chains
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/Bodypartspage">
                 Body parts
                </NavLink>
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
