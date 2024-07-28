import React, { useState } from "react";
import "./Calculator.css";
import CalculatorButtons from "./CalculatorButtons";
import CalculatorScreen from "./CalculatorScreen";

const Calculator = () => {
  //Seta o array de números que serão usados no calcúlo
  const [nums, setNums] = useState([]);
  console.log(nums);
  //Redefine o estado do array para vazio novamente, apagando todos os dados anteriores
  const ClearAll = () => {
    setNums([]);
  };

  return (
    <>
      <div className="calcScreen">
        <CalculatorScreen
        nums={nums}
        setNums={setNums} />
      </div>
      <div className="calcBody">
        <CalculatorButtons
        nums={nums}
        setNums={setNums}
        ClearAll={ClearAll} />
      </div>
    </>
  );
};

export default Calculator;
