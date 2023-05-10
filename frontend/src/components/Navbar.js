import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../logo/logo-no-background.png";
import Login from "./Login";

export default function Nav() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [menuOption, setMenuOption] = React.useState(false);

  const handleResize = React.useCallback(() => {
    setIsMobile(window.innerWidth < 890);
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div>
      {!isMobile ? (
        <nav>
          <div class="logo">
            <img src={logo} alt="EA Workmarket" srcset="" />
          </div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/learn">Learn About Us</NavLink>
            </li>
          </ul>
          <ul className="account--info">
            <li>
              <Login />
            </li>
            <li>
              <button className="nav--button nav--button--primary">
                <NavLink to="/signup">Get Started</NavLink>
              </button>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <div
            className="nav--humberger"
            onClick={() => setMenuOption(!menuOption)}
          >
            <div className={menuOption ? "nav---bars active" : "nav--bars"}>
              <span className="bars"></span>
              <span className="bars"></span>
              <span className="bars"></span>
            </div>
            <p className="nav--menu">Menu</p>
          </div>
          <div className={menuOption ? "menu active" : "menu"}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/learn">Learn About Us</NavLink>
              </li>
            </ul>
            <ul className="account--info">
              <li>
                <Login />
              </li>
              <li>
                <button className="nav--button nav--button--primary">
                  <NavLink to="/signup">Get Started</NavLink>
                </button>
              </li>
            </ul>
          </div>
          <div className="logo">
            <img src={logo} alt="EA Workmarket" srcset="" />
          </div>
          <button className="nav--button">
            <NavLink to="/login">Log In</NavLink>
          </button>
        </nav>
      )}
    </div>
  );
}
