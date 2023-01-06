import React, { useState, useRef, useEffect } from "react";
import Slide from "./Slide";
import heroImageData from "../assets/heroImageData";
import "./styles/carousel.css";

export default function Carousel() {
  const [slideId, setSlideId] = useState(0);
  const numOfSlides = heroImageData.length;
  const [isScrolling, setIsScrolling] = useState(true);

  function handleRightClick() {
    setIsScrolling(false);
    scrollRight();
    setTimeout(() => {
      setIsScrolling(true);
    }, 5000);
  }

  function handleLeftClick() {
    setIsScrolling(false);
    scrollLeft();
    setTimeout(() => {
      setIsScrolling(true);
    }, 5000);
  }

  function scrollRight() {
    setSlideId((prev) => {
      if (prev == numOfSlides - 1) return 0;
      else return prev + 1;
    });
  }

  function scrollLeft() {
    setSlideId((prev) => {
      if (prev == 0) return numOfSlides - 1;
      else return prev - 1;
    });
  }

  function autoScroll() {
    useEffect(() => {
      const timeout = setTimeout(() => {
        scrollRight();
      }, 5000);
      if (!isScrolling) clearTimeout(timeout);
    }, [slideId, isScrolling]);
  }

  autoScroll();

  return (
    <section className="hero-container">
      <div className="carousel-buttons">
        <button
          className="carousel-button"
          id="slide-left"
          onClick={handleLeftClick}
        >
          <img
            src="/icons/arrow-left-line.svg"
            alt="Scroll left button"
            className="carousel-button--icon"
          />
        </button>
        <button
          className="carousel-button"
          id="slide-right"
          onClick={handleRightClick}
        >
          <img
            src="/icons/arrow-right-line.svg"
            alt="Srcoll right button"
            className="carousel-button--icon"
          />
        </button>
      </div>

      <div className="carousel-container">
        {heroImageData.map((item, index) => (
          <div
            className={`carousel-item ${
              index < slideId ? "prev" : index > slideId ? "next" : "current"
            }`}
          >
            <Slide data={item} index={slideId} />
          </div>
        ))}
      </div>
    </section>
  );
}