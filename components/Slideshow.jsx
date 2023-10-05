"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import { RefObject } from "react";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import { SiRaspberrypi } from "react-icons/si";


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
    swipeToSlide: true,
    initialSlide: 2,
    centerMode: true,
  };
  
  return (
    <section className="w-full">
      <h1 className="font-bold text-4xl text-pink-950 text-center mt-10">Naše najobľúbenejšie smoothies</h1>
      <h2 className="text-xl text-center p-3 mb-10">Ochutnaj ich všetky</h2>
      <Slider ref={customeSlider} {...settings} className="w-full">
        <div className="text-center">
          <img src="/bowl1.png" alt="" className=""/>
          <h2 className="bowl-nadpis font-bold text-xl text-blue-950">Nadpis ku bowle 1</h2>
          <div className="vlastnosti flex flex-row justify-center pt-6 pb-14 gap-20">
            <div className="flex flex-col items-center gap-2">
              <p>Raspberries</p>
              <SiRaspberrypi size={30}/>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p>Raspberries</p>
              <SiRaspberrypi size={30}/>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p>Raspberries</p>
              <SiRaspberrypi size={30}/>
            </div>
          </div>
        </div>
        <div className="text-center">
          <img src="/bowl2.png" alt="" className=""/>
          <h2 className="bowl-nadpis font-bold text-xl text-blue-950">Nadpis ku bowle 2</h2>
          <div className="vlastnosti flex flex-row justify-center pt-6 pb-14 gap-20">
            <div className="flex flex-col items-center gap-2">
              <p>Raspberries</p>
              <SiRaspberrypi size={30}/>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p>Raspberries</p>
              <SiRaspberrypi size={30}/>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p>Raspberries</p>
              <SiRaspberrypi size={30}/>
            </div>
          </div>
        </div>
        <div className="text-center">
        <img src="/bowl3.png" alt="" className=""/>
          <h2 className="bowl-nadpis font-bold text-xl text-blue-950">Nadpis ku bowle 3</h2>
          <div className="vlastnosti flex flex-row justify-center pt-6 pb-14 gap-20">
            <div className="flex flex-col items-center gap-2">
              <p>Raspberries</p>
              <SiRaspberrypi size={30}/>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p>Raspberries</p>
              <SiRaspberrypi size={30}/>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p>Raspberries</p>
              <SiRaspberrypi size={30}/>
            </div>
          </div>
        </div>
        <div className="text-center">
        <img src="/bowl4.png" alt="" className=""/>
          <h2 className="bowl-nadpis font-bold text-xl text-blue-950">Nadpis ku bowle 4</h2>
          <div className="vlastnosti flex flex-row justify-center pt-6 pb-14 gap-20">
            <div className="flex flex-col items-center gap-2">
              <p>Raspberries</p>
              <SiRaspberrypi size={30}/>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p>Raspberries</p>
              <SiRaspberrypi size={30}/>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p>Raspberries</p>
              <SiRaspberrypi size={30}/>
            </div>
          </div>
        </div>
        <div className="text-center">
          <img src="/bowl5.png" alt="" className=""/>
          <h2 className="bowl-nadpis font-bold text-xl text-blue-950">Nadpis ku bowle 5</h2>
          <div className="vlastnosti flex flex-row justify-center pt-6 pb-14 gap-20">
            <div className="flex flex-col items-center gap-2">
              <p>Raspberries</p>
              <SiRaspberrypi size={30}/>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p>Raspberries</p>
              <SiRaspberrypi size={30}/>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p>Raspberries</p>
              <SiRaspberrypi size={30}/>
            </div>
          </div>
        </div>
    </Slider>
    <div className="flex justify-center items-center p-4 mt-10 gap-20">
      <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={gotoPrev}><HiArrowSmallLeft onClick={gotoPrev}/></button>
      <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={gotoNext}><HiArrowSmallRight onClick={gotoNext}/></button>
    </div>
    </section>
  );
}