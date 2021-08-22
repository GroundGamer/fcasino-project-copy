import React, { useContext, useRef } from "react";
import { Context } from "../../context";

import "./slider.scss";

export default function Slider() {
  const { sliderItems, setSliderItems } = useContext(Context);

  const slider = useRef();

  console.log(sliderItems);

  const prevHandler = (e) => {
    console.log(slider);
  };

  const nextHandler = (e) => {
    console.log(e);
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
              src={sliderItem.src}
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
