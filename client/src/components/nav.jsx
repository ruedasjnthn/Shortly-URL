import React, { useState } from "react";
import Button from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="nav">
        <div className="nav__container">
          <span className="nav__logo">
            <img src={require("../images/logo.svg")} alt="logo" />
          </span>
          <div className={click ? "nav__menu active" : "nav__menu"}>
            <ul>
              <li>
                <a className="nav__item" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="nav__item" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="nav__item" href="#">
                  Resources
                </a>
              </li>
            </ul>
            <div className="nav__sign">
              <span>Login</span>
              <Button
                type="button"
                buttonStyle="btn--curved"
                buttonSize="btn--signUp"
              >
                Sign Up
              </Button>
            </div>
          </div>
          <FontAwesomeIcon
            className="nav__icon"
            onClick={handleClick}
            icon="bars"
          />
        </div>
      </nav>
    </>
  );
}

export default Nav;
