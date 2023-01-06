import React, { useState } from "react";
import Header from "../components/Header";
import "./styles/layout.css";

export default function Layout({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme == "light" ? "dark" : "light")
  }

  return (
    <div className="layout">
      <Header />

      <main className="content">{children}</main>

      <footer>
        <p>Copyright 2023 Meder Taab</p>
        <div className="theme--button-container">
          <button className={`theme--button-outer ${theme}`} onClick={toggleTheme}>
            <div className={`theme--button-inner ${theme}`}></div>
          </button>
        </div>
      </footer>
    </div>
  );
}
