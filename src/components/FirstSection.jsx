import React from "react";
import "./FirstSection.css";
import { Button } from "./Button";

function FirstSection() {
  return (
    <div className="home-container" id="home">
      <div className="home-text-container">
        <h1>HEALTHY LIFE</h1>
        <p>What are you waiting for?</p>

        <div className="button">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            LEARN MORE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
