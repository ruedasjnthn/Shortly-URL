import React, { useState, useEffect } from "react";
import desktopImage from "../../images/bg-boost-desktop.svg";
import mobileImage from "../../images/bg-boost-mobile.svg";
import Button from "../button";

function CallToAction() {
  //handle the image based on screen width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //for screen width
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // adjusting bg image using screenwidth
  const imageUrl = windowWidth >= 376 ? desktopImage : mobileImage;

  return (
    <>
      <div className="cta" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="cta__container">
          <h1 className="cta__title">Boost your links today</h1>
          <Button buttonStyle="btn--curved" buttonSize="btn--getStarted">
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
}

export default CallToAction;
