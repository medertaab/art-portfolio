import { Link, graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import "./styles/header.css";
import Socials from "./Socials";

type Props = {};

export default function Header({}: Props) {
  const [sideMenu, setSideMenu] = useState(false);

  function openSideMenu() {
    setSideMenu(true);
  }

  function closeSideMenu() {
    setSideMenu(false);
  }

  return (
    <header>
      <div className="header-container">
        <div className="menu-container" onClick={openSideMenu}>
          <div className="menu-button--container">
            <div className="menu-button"></div>
          </div>
        </div>

        <div className="logo">
          <Link to="/">
            <h1>MEDER TAAB</h1>
          </Link>
        </div>

        <nav className={sideMenu ? "open" : ""}>
          <button className="close-button" onClick={closeSideMenu}>
            X
          </button>
          <div className="navLinks-container">
            <Link to="/">
              <button className="navLink navLink--side">Home</button>
            </Link>

            <Link to="/about">
              <button className="navLink">About</button>
            </Link>

            <Link to="/works">
              <button className="navLink">Works</button>
            </Link>

            <Link to="/contact">
              <button className="navLink">Contact</button>
            </Link>
          </div>
          <div className="socials--side">
            <Socials />
          </div>
        </nav>

        <div className="socials--top">
          <Socials />
        </div>
      </div>
    </header>
  );
}
