import React from "react";
import "./App.css";
import { Button } from "@mui/material";
import Home from "./onepirate/Home";

function App() {
  return (
    <div className='App'>
      <Button variant='outlined'>Primary</Button>
      <Home></Home>
    </div>
  );
}

export default App;
