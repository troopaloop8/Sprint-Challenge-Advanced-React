import React from "react";
import useDankMode from "../hooks/useDankMode";

const Navbar = () => {
  const [dankMode, setDankMode] = useDankMode();
  const toggleDank = e => {
    e.preventDefault();
    setDankMode(!dankMode);
  };
  return (
    <nav className="navbar">
      <h1 className="max-width">Top 100 Most Searched <br/>Women's Soccer Players</h1>
      <div className="dank-mode__toggle" data-testid="toggle">
        <div
          onClick={toggleDank}
          className={dankMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
