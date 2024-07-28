import React, { useState } from "react";
import "./CalculatorButtons.css";

  const CalculatorButtons = ( { nums, setNums, ClearAll, ClearLastNum } ) => {
    
    //Redefine o estado do array para o estado anterior ao ultimo número computado
    const ClearLastNum = () => {
      setNums((prevNums) => prevNums.slice(0, -1));
    };

    return (
      <>
        <div>
          <button>%</button>
          <button>C</button>
          <button onClick={ClearAll}>CE</button>
          <button onClick={ClearLastNum}>{"<<"}</button>
        </div>
        <div>
          <button onClick={() => setNums((prevNums) => [...prevNums, 7])}>
            7
          </button>
          <button onClick={() => setNums((prevNums) => [...prevNums, 8])}>
            8
          </button>
          <button onClick={() => setNums((prevNums) => [...prevNums, 9])}>
            9
          </button>
          <button>*</button>
        </div>
        <div>
          <button onClick={() => setNums((prevNums) => [...prevNums, 4])}>
            4
          </button>
          <button onClick={() => setNums((prevNums) => [...prevNums, 5])}>
            5
          </button>
          <button onClick={() => setNums((prevNums) => [...prevNums, 6])}>
            6
          </button>
          <button>+</button>
        </div>
        <div>
          <button onClick={() => setNums((prevNums) => [...prevNums, 1])}>
            1
          </button>
          <button onClick={() => setNums((prevNums) => [...prevNums, 2])}>
            2
          </button>
          <button onClick={() => setNums((prevNums) => [...prevNums, 3])}>
            3
          </button>
          <button>-</button>
        </div>
        <div>
          <button onClick={() => setNums((prevNums) => [prevNums + "."])}>
            ,
          </button>
          <button onClick={() => setNums((prevNums) => [prevNums, 0])}>
            0
          </button>
          <button>=</button>
          <button>/</button>
        </div>
      </>
    );
  };

export default CalculatorButtons;
