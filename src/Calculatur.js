import React, { useState } from 'react';
import './Calculatur.css'

function Calculator() {
  const [value, setValue] = useState('');

  const handleClick = (e) => {
    setValue(value + e.target.name);
  }

  const handleClear = () => {
    setValue('');
  }

  const handleCalculate = () => {
    const regex = /(-?\d+)(\+|\-|\*|\/)(-?\d+)/;
    const matches = regex.exec(value);
  
    if (!matches || matches.length !== 4) {
      setValue('Error');
      return;
    }
  
    const num1 = parseInt(matches[1]);
    const operator = matches[2];
    const num2 = parseInt(matches[3]);
  
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          setValue('Error');
          return;
        }
        result = num1 / num2;
        break;
      default:
        setValue('Error');
        return;
    }
  
    setValue(result.toString());
  };
  

  return (
    <div className="calculator">
      <input type="text" value={value} />
      <div className="row">
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="/" onClick={handleClick}>&divide;</button>
      </div>
      <div className="row">
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="*" onClick={handleClick}>&times;</button>
      </div>
      <div className="row">
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="-" onClick={handleClick}>-</button>
      </div>
      <div className="row">
        <button name="0" onClick={handleClick}>0</button>
        <button name="." onClick={handleClick}>.</button>
        <button name="=" onClick={handleCalculate}>=</button>
        <button name="+" onClick={handleClick}>+</button>
      </div>
      <button className="clear" onClick={handleClear}>Clear</button>
    </div>
  );
}

export default Calculator;
