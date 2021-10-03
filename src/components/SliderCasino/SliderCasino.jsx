import React, {useContext, useEffect, useRef} from "react";
import {Context} from "../../context";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slider.scss";

export default function SliderCasino() {
    const {sliderItems, slidesToShow, setSlidesToShow} =
        useContext(Context);

    useEffect(()=>{
        if(window.innerWidth <= 1024){
            setSlidesToShow(1)
        }else{
            setSlidesToShow(3)
        }
    })

    const nextHandler = () => {
        Slider.slider.slickNext();
    };

    const prevHandler = () => {
        Slider.slider.slickPrev();
    };

    const sliderSettings = {
        dots: false,
        arrows: false,
        initialSlide: 1,
        swipeToSlide: true,
        centerMode: true,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        draggable: false,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
    };

    return (
        <div className="slider">
            <div className="slider_group__btn">
                <button className="slider-btn slider-btn__prev" onClick={prevHandler}>
                    {"<"}
                </button>
                <button className="slider-btn slider-btn__next" onClick={nextHandler}>
                    {">"}
                </button>
            </div>
            <Slider
                className="slider-treck"
                ref={(c) => (Slider.slider = c)}
                {...sliderSettings}
            >
                {sliderItems.map((sliderItem) => (
                    <img
                        key={sliderItem.id}
                        className={sliderItem.sliderClass}
                        src={`./img/slider-imgTest_${sliderItem.sliderSrc}.png`}
                        alt="slider"
                    />
                ))}
            </Slider>
        </div>
    );
}
