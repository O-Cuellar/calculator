import React, { useState } from "react";
import "./Calculator.css";
import CalculatorButtons from "./CalculatorButtons";
import CalculatorScreen from "./CalculatorScreen";

const Calculator = () => {
  
  const [result, setResult] = useState();

  return (
    <div className="calcBody">
      <CalculatorButtons />
    </div>
  );
};

export default Calculator;