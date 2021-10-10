import React from "react";
import Button from "../button";

function Stat() {
  return (
    <>
      <div className="stat">
        <div className="stat__container">
          <h1 className="stat__heading">Advanced Statistics</h1>
          <p className="stat__subheading">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
          <div className="stat__content-container">
          <div className="stat__line"></div>
            <div className="stat__info-container">
              <div className="stat__logo-container">
                <img
                  src={require("../../images/icon-brand-recognition.svg")}
                  alt="Brand Recognition"
                />
              </div>
              <div className="stat__info">
                <h1 className="stat__title">Brand Recognition</h1>
                <p className="stat__desc">
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
            </div>
            <div className="stat__info-container">
              <div className="stat__logo-container">
                <img
                  src={require("../../images/icon-detailed-records.svg")}
                  alt="Detailed Records"
                />
              </div>
              <div className="stat__info">
                <h1 className="stat__title">Detailed Records</h1>
                <p className="stat__desc">
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
            </div>
            <div className="stat__info-container">
              <div className="stat__logo-container">
                <img
                  src={require("../../images/icon-fully-customizable.svg")}
                  alt="Fully Customizable"
                />
              </div>
              <div className="stat__info">
                <h1 className="stat__title">Fully Customizable</h1>
                <p className="stat__desc">
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stat;
