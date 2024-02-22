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
      // Verificar divisão por zero
      if (input.includes('/0')) {
        setResult('Erro: Divisão por zero');
      } else {
        setResult(eval(input).toString());
      }
    } catch (error) {
      setResult('Erro');
    }
  };

  // Função para lidar com operações especiais como raiz quadrada e porcentagem
  const handleSpecial = (operation) => {
    try {
      if (operation === 'sqrt') {
        setResult(Math.sqrt(parseFloat(input)).toString());
      } else if (operation === '%') {
        setResult((parseFloat(input) / 100).toString());
      } else if (operation === '**') {
        setInput(input + '**');
      }
    } catch (error) {
      setResult('Erro');
    }
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <input type="text" value={result} disabled />
        <div className="row">
          <button onClick={clear} id="clear">Limpar</button>
          <button onClick={backspace} id="backspace">C</button>
          <button onClick={() => handleClick({target: {name: '/'}})}>&divide;</button>
        </div>
        <div className="row">
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button onClick={() => handleClick({target: {name: '*'}})}>&times;</button>
        </div>
        <div className="row">
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button onClick={() => handleClick({target: {name: '-'}})}>&ndash;</button>
        </div>
        <div className="row">
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button onClick={() => handleClick({target: {name: '+'}})}>+</button>
        </div>
        <div className="row">
          <button name="." onClick={handleClick}>.</button>
          <button name="0" onClick={handleClick}>0</button>
          <button onClick={calculate} id="result">=</button>
        </div>
        <div className="row">
          <button onClick={() => handleSpecial('**')}>^</button>
          <button onClick={() => handleSpecial('sqrt')}>√</button>
          <button onClick={() => handleSpecial('%')}>%</button>
        </div>
      </div>
    </div>
  );
}

export default App;
