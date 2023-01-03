import React from "react";
import "./styles/slide.css";

export default function Slide(props: any) {
  const currFrame = (
    <img
      className="carousel-image"
      src={`/hero_images/${props.data.images[props.data.images.length-1]}`}
      alt=""
    />
  );

  return (
    <div className='curr-slide' style={{ backgroundColor: props.data.color }}>
      {currFrame}
    </div>
  );
}