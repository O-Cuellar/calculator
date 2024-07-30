import React from "react";
import "./CalculatorScreen.css";

const CalculatorScreen = ( { nums } ) => {
  return (
    <>
      <div className="scroll-container">
        <div className="BlankScreen">
          <span 
          className="text-content" >
            {nums}
          </span>
        </div>
      </div>
    </>
  );
};

export default CalculatorScreen;
