import React, { useState } from "react";
import "./CalculatorButtons.css";

const CalculatorButtons = () => {
  const [nums, setNums] = useState([]);
  console.log(nums)

  return (
    <>
      <div>
        <button>%</button>
        <button>C</button>
        <button>CE</button>
        <button>{"<<"}</button>
      </div>
      <div>
        <button onClick={()=>setNums((prevNums)=>[...prevNums, 7])}>7</button>
        <button onClick={()=>setNums((prevNums)=>[...prevNums, 8])}>8</button>
        <button onClick={()=>setNums((prevNums)=>[...prevNums, 9])}>9</button>
        <button>*</button>
      </div>
      <div>
        <button onClick={()=>setNums((prevNums)=>[...prevNums, 4])}>4</button>
        <button onClick={()=>setNums((prevNums)=>[...prevNums, 5])}>5</button>
        <button onClick={()=>setNums((prevNums)=>[...prevNums, 6])}>6</button>
        <button>+</button>
      </div>
      <div>
        <button onClick={()=>setNums((prevNums)=>[...prevNums, 1])}>1</button>
        <button onClick={()=>setNums((prevNums)=>[...prevNums, 2])}>2</button>
        <button onClick={()=>setNums((prevNums)=>[...prevNums, 3])}>3</button>
        <button>-</button>
      </div>
      <div>
        <button>,</button>
        <button onClick={()=>setNums((prevNums)=>[prevNums, 0])}>0</button>
        <button>=</button>
        <button>/</button>
      </div>
    </>
  );
};

export default CalculatorButtons;