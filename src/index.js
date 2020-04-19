import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CalculatorContextProvider } from "./contexts/CalculatorContext"


ReactDOM.render(
  <React.StrictMode>
    <CalculatorContextProvider>
      <App />
    </CalculatorContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

