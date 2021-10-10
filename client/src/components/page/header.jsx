import React from "react";
import Button from "../button";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header__container">
          <img
            className="header__img"
            src={require("../../images/illustration-working.svg")}
            alt="an illustration of a working man"
          />
          <div className="header__main">
            <h1 className="header__title">More than just shorter links</h1>
            <p className="header__desc">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <Button
              type="button"
              buttonStyle="btn--curved"
              buttonSize="btn--getStarted"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
