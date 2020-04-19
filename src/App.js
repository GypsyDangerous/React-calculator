import React, { useContext } from 'react';
import './App.css';
import Buttons from "./components/Buttons"
import Display from "./components/Display"
import { CalculatorContext } from './contexts/CalculatorContext';

function App() {

  const {isDark} = useContext(CalculatorContext)

  return (
    <main className={`App ${isDark && "light"}`}>
      <Display/>
      <Buttons/>
    </main>
  );
}

export default App;
