import React from "react";
import "./Welcome.css";
import toUse from "../../assets/toUse.svg";



const WelcomeText = () => {
  return (
    <>
      <div className="maincontainer container">
        <div className="Welcome--container">
          <div className="Welcome--title">
            <h1>
              Welcome to <span className="welcome--logo-colour">EndPoint</span>
            </h1>
          </div>
          <div className="Welcome--tagline">Your Partner in innovation</div>
          <div className="Welcome--info">
            Elevate your trading with our innovative platform, where creativity
            and technology converge to transform your strategies into reality.
            Dive into a world of endless possibilities and seamless trading
            experiences.
          </div>
          <div className="Welcome--button">
            <button >{`Schedule Demo`}</button>
          </div>
        </div>
        <div className="svgContainer">
          <img src={toUse} alt="" />
        </div>
      </div>
    </>
  );
};

export default WelcomeText;
