import React, { useState } from "react";
import "./Calculator.css";
import CalculatorButtons from "./CalculatorButtons";
import CalculatorScreen from "./CalculatorScreen";

const Calculator = () => {
  //State de números individuais digitados pelo úsuario
  const [nums, setNums] = useState([]);
  console.log(nums);
  //State de números concatenados para uso das operações
  const [operationNum, setOperationNum] = useState([]);
  //Redefine o estado do array para vazio novamente, apagando todos os dados anteriores
  const ClearAll = () => {
    setNums([]);
  };
  //Uma constante concNums que transforma os itens individuais do array em uma uníca string de números
  const concNum = nums.join('');
  //
  const handleOperationNum = () => {setOperationNum((prevOperationNum) => [prevOperationNum, concNum]);}
  console.log(operationNum);

  return (
    <>
      <div className="calcScreen">
        <CalculatorScreen
        nums={nums} />
      </div>
      <div className="calcBody">
        <CalculatorButtons
        nums={nums}
        setNums={setNums}
        ClearAll={ClearAll}
        handleOperationNum={handleOperationNum} />
      </div>
    </>
  );
};

export default Calculator;
