"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import { RefObject } from "react";

export default function Slideshow() {
  const customeSlider: RefObject<Slider> = useRef<Slider>(null);

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
      <h1>Naše najobľúbenejšie smoothies</h1>
      <h2>Ochutnaj ich všetky</h2>
      <Slider ref={customeSlider} {...settings} className="w-[70%] mx-auto">
        <div>
          <img src="/bowl2.jpg" alt="" />
          <p>Nadpis ku bowle 1</p>
        </div>
        <img src="/bowl2.jpg" alt="" />
        <img src="/bowl3.jpg" alt="" />
        <img src="/bowl4.jpg" alt="" />
        <img src="/bowl5.jpg" alt="" />
        <img src="/bowl6.jpg" alt="" />
    </Slider>
    <button onClick={gotoPrev}>prev</button>
    <button onClick={gotoNext}>next</button>
    </section>
  );
}