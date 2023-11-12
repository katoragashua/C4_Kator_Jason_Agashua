import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Portfolio from "./components/Portfolio";
import Button from "./components/Button";

function App() {
  return (
    <main>
      <h1>Hello world</h1>
      <Portfolio />
      <div className="buttons">
        <Button label="Signup" />
        <Button label="Login" />
      </div>
    </main>
  );
}

export default App;
