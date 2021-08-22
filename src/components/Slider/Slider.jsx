import React, { useContext, useRef } from "react";
import { Context } from "../../context";

import "./slider.scss";

export default function Slider() {
  const { sliderItems, setSliderItems, slideIndex, setSlideIndex } =
    useContext(Context);

  const slider = useRef();

  console.log(sliderItems);

  const nextHandler = () => {
    if (slideIndex !== sliderItems.length) {
      console.log(slider);
      slider.current.childNodes.forEach((element, index) => {
        if (index !== 0 && index !== 6) {
            console.log(element);
            setSlideIndex(slideIndex + 1);
        }
      });
    }

    if (slideIndex === sliderItems.length) {
      setSlideIndex(1);
    }
  };

  const prevHandler = () => {
    // setSlideIndex(slideIndex - 1);
  };

  return (
    <div className="slider">
      <div className="slider-moveItemSlider"></div>
      <div className="slider-treck" ref={slider}>
        <button className="slider-btn slider-btn__prev" onClick={prevHandler}>
          {"<"}
        </button>
        {sliderItems.map((sliderItem, index) => (
          <>
            <img
              key={sliderItem.id}
              className={sliderItem.sliderClass}
              src={`./img/slider-imgTest_${index}.png`}
              alt="slider"
            />
          </>
        ))}
        <button className="slider-btn slider-btn__next" onClick={nextHandler}>
          {">"}
        </button>
      </div>
    </div>
  );
}
