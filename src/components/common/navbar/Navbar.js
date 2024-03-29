import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../../../Assets/logo/logo-no-background.png";
import Login from "../../Auth/login/Login";
import "./Navbar.css";
import Signup from "../../Auth/signup/Signup";

const NavigationBar = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center py-3 px-2">
      <div class="logo">
        <img src={logo} alt="EA Workmarket" srcset="" width="200" />
      </div>
      <div>
        <ul className="nav-middle d-flex justify-content-around align-items-center">
          <li>
            <NavLink
              to="/"
              style={{ textDecoration: "none", color: "white" }}
              onMouseEnter={(e) => {
                e.target.style.color = "#1E0D34";
             
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "white";
                
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/learn"
              style={{ textDecoration: "none", color: "white" }}
              onMouseEnter={(e) => {
                e.target.style.color = "#1E0D34";
             
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "white";
                
              }}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/#" style={{ textDecoration: "none", color: "white" }} onMouseEnter={(e) => {
              e.target.style.color = "#1E0D34";
           
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "white";
              
            }}>
              Features
            </NavLink>
          </li>
          <li>
            <NavLink to="#" style={{ textDecoration: "none", color: "white" }} onMouseEnter={(e) => {
              e.target.style.color = "#1E0D34";
           
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "white";
              
            }}>
              Testimonials
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ul className=" nav-end d-flex align-items-center">
          <li>
            <Login />
          </li>
          <li>
            <Signup/>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavigationBar;
