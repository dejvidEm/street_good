"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import { RefObject } from "react";

export default function Slideshow() {
  const customeSlider = useRef();

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  
  return (
    <section>
      <h1 className="font-bold text-4xl text-pink-950 text-center mt-10">Naše najobľúbenejšie smoothies</h1>
      <h2 className="text-xl text-center p-3 mb-10">Ochutnaj ich všetky</h2>
      <Slider ref={customeSlider} {...settings} className="w-[70%] mx-auto">
        <div className="text-center">
          <img src="/bowl1.png" alt="" className=""/>
          <p>Nadpis ku bowle 1</p>
        </div>
        <div className="text-center">
          <img src="/bowl2.png" alt="" className=""/>
          <p>Nadpis ku bowle 2</p>
        </div>
        <div className="text-center">
        <img src="/bowl3.png" alt="" className=""/>
          <p>Nadpis ku bowle 3</p>
        </div>
        <div className="text-center">
        <img src="/bowl4.png" alt="" className=""/>
          <p>Nadpis ku bowle 4</p>
        </div>
        <div className="text-center">
          <img src="/bowl5.png" alt="" className=""/>
          <p>Nadpis ku bowle 5</p>
        </div>
    </Slider>
    <button onClick={gotoPrev}>prev</button>
    <button onClick={gotoNext}>next</button>
    </section>
  );
}