import React, { useState, useEffect } from "react";
import "../styles/slide.css";

export default function Slide(props: any) {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);
  const [opacity, setOpacity] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  
  const images = props.data.images;
  
  useEffect(() => {  
    const timer = setTimeout(() => {
      setFadeIn(true);
      setOpacity(1)
      setTimeout(() => {
        setCurrentImage(currentImage + 1);
        if (nextImage < images.length - 1) setNextImage(nextImage + 1);
        setOpacity(0)
      }, 300)
    }, 300);
    if (currentImage == images.length - 1) {
      clearTimeout(timer);
    }
  }, [currentImage, nextImage]);

  useEffect(() => {
    if (opacity == 0) {
      setFadeIn(false)
    }
  }, [opacity])

  return (
    <div className="curr-slide" style={{ backgroundColor: props.data.color }}>
      <img
        className={`next-frame ${fadeIn ? 'fade-in' : ''}`}
        src={`/hero_images/${images[nextImage]}`}
        style={{ opacity: opacity}}
      />
      <img
        className="curr-frame"
        src={`/hero_images/${images[currentImage]}`}
      />
    </div>
  );
}
