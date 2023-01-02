import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
import "./styles/header.css";
import { StaticImage } from "gatsby-plugin-image";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="header">
      <header>
        <div className="logo">
          <Link to="/">
            <h1>MEDER TAAB</h1>
          </Link>
        </div>

        <nav>
          <div className="navLinks-container">
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
        </nav>

        <div className="socials">
          <div className="socials-container">
            <button className="socialLink">
              <a href="http://twitter.com/medertaab">
                <img
                  src="/icons/twitter-fill.svg"
                  alt="Twitter logo"
                  placeholder="none"
                />
              </a>
            </button>

            <button className="socialLink">
              <a href="http://instagram.com/medertaab">
                <img
                  src="/icons/instagram-fill.svg"
                  alt="Instagram logo"
                  placeholder="none"
                />
              </a>
            </button>
            <button className="socialLink">
              <a href="http://twitter.com/medertaab">
                <img
                  src="/icons/youtube-fill.svg"
                  alt="Youtube logo"
                  placeholder="none"
                />
              </a>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
