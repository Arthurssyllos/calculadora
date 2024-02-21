import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setInput(input.concat(e.target.name));
  };

  const clear = () => {
    setInput('');
    setResult('');
  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Erro');
    }
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <input type="text" value={input} disabled />
        <input type="text" value={result} disabled />
        <div className="row">
          <button onClick={clear} id="clear">Limpar</button>
          <button onClick={backspace} id="backspace">C</button>
          <button name="/" onClick={handleClick}>&divide;</button>
        </div>
        <div className="row">
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="*" onClick={handleClick}>&times;</button>
        </div>
        <div className="row">
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="-" onClick={handleClick}>&ndash;</button>
        </div>
        <div className="row">
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="+" onClick={handleClick}>+</button>
        </div>
        <div className="row">
          <button name="." onClick={handleClick}>.</button>
          <button name="0" onClick={handleClick}>0</button>
          <button onClick={calculate} id="result">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;