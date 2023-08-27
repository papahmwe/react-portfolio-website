import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App";

const MainPortfolio = () => {
  return (
    <div>
      <App />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainPortfolio />)