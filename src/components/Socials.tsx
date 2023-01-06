import React from "react";

export default function Socials() {
  return (
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
  );
}
