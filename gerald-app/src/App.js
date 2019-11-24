import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import './App.css';
import Title from "./components/title";

function App() {
  return (
    <React.Fragment>
      <Title/>
      <BrowserRouter>
        {/* Passing global state info and function references to the rest of the app */}
        <Routes/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
