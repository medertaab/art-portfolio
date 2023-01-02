import React from "react";

export default function Separator() {
  function animate(e : any) {
    separatorJump(e.target);
    setTimeout(() => {
      if (e.target.nextElementSibling)
        separatorJump(e.target.nextElementSibling);
      separatorJump(e.target.previousElementSibling);
    }, 200);
  }

  function separatorJump(separator: HTMLSpanElement) {
    separator.classList.add("jump");
    setTimeout(() => {
      separator.classList.add("godown");
      separator.classList.remove("jump");
    }, 500);
    setTimeout(() => {
      separator.classList.remove("godown");
    }, 0);
  }

  return (
    <div className="separator">
      <span className="separationPoint" onMouseOver={animate}>✦</span>
      <span className="separationPoint">✦</span>
      <span className="separationPoint">✦</span>
      <span className="separationPoint">✦</span>
      <span className="separationPoint">✦</span>
    </div>
  );
}
