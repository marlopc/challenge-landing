import "components/Hero/Hero.css";
import React from "react";

const Hero = () => {
  return (
    <header className="Hero">
      <div className="Hero__illustration" />
      <div className="Hero__content">
        <h1 className="content__title">Make remote work</h1>
        <p className="content__paragraph">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <a className="content__anchor">Learn more</a>
        <div className="content__sponsors">
          <span className="sponsors__item sponsors__item--databiz" />
          <span className="sponsors__item sponsors__item--audiophile" />
          <span className="sponsors__item sponsors__item--meet" />
          <span className="sponsors__item sponsors__item--maker" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
