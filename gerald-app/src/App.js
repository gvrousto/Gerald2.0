import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import './App.css';

function App() {
  return (
    <React.Fragment>
    {/*TODO: add navebar/header here*/}
      <BrowserRouter>
        {/* Passing global state info and function references to the rest of the app */}
        <Routes/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
