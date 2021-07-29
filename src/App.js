import "./App.css";
import React from "react";
import useScrollYOffset from "./Components/scroll";

function App() {
  const yOffset = useScrollYOffset();
  const navClass = yOffset > 100 ? "navbar scrolled" : "navbar";
  return (
    <div className="container">
      <nav className={navClass}>
        <div>Logo</div>
        <div>Login</div>
      </nav>
    </div>
  );
}

export default App;
