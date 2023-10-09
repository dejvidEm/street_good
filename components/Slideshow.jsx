"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import { RefObject } from "react";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import { SiRaspberrypi } from "react-icons/si";

// importing slider item component to prevent repetitive code
import SliderItem from "./SliderItem";


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
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 2,
    centerMode: true,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 3000,
    centerPadding: 0,
    focusOnSelect: true
  };
  
  return (
    <section className="w-full mb-28">
      <h1 className="font-bold text-xl sm:text-4xl text-pink-950 text-center mt-10">Naše najobľúbenejšie smoothies</h1>
      <h2 className="text-lg sm:text-xl text-center p-1 sm:p-3 mb-10">Ochutnaj ich všetky</h2>
      <Slider ref={customeSlider} {...settings} className="w-full h-auto">
      <SliderItem imageSrc="/bowl1.png" icon3={<SiRaspberrypi size={30} className="ikonka"/>} icon2={<SiRaspberrypi size={30} className="ikonka"/>} icon={<SiRaspberrypi size={30} className="ikonka"/>} iconName="Nutsss" iconName2="Banana" iconName3="Mango"><span className="text-pink-950">Dragon Bowl</span></SliderItem>
      <SliderItem imageSrc="/bowl2.png" icon3={<SiRaspberrypi size={30}/>} icon2={<SiRaspberrypi size={30}/>} icon={<SiRaspberrypi size={30}/>} iconName="Nuts" iconName2="Banana" iconName3="Mango"><span className="text-pink-950">Raspberry</span> Bowl</SliderItem>
      <SliderItem imageSrc="/bowl3.png" icon3={<SiRaspberrypi size={30}/>} icon2={<SiRaspberrypi size={30}/>} icon={<SiRaspberrypi size={30}/>} iconName="Nuts" iconName2="Banana" iconName3="Mango"><span className="text-pink-950">Ocean</span> Bowl</SliderItem>
      <SliderItem imageSrc="/bowl4.png" icon3={<SiRaspberrypi size={30}/>} icon2={<SiRaspberrypi size={30}/>} icon={<SiRaspberrypi size={30}/>} iconName="Nuts" iconName2="Banana" iconName3="Mango"><span className="text-pink-950">Mango</span> Bowl</SliderItem>
      <SliderItem imageSrc="/bowl5.png" icon3={<SiRaspberrypi size={30}/>} icon2={<SiRaspberrypi size={30}/>} icon={<SiRaspberrypi size={30}/>} iconName="Nuts" iconName2="Banana" iconName3="Mango"><span className="text-pink-950">Strawberry</span> Bowl</SliderItem>
      </Slider>
      <div className="flex justify-center items-center p-4 mt-10 gap-20">
        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={gotoPrev}><HiArrowSmallLeft onClick={gotoPrev}/></button>
        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={gotoNext}><HiArrowSmallRight onClick={gotoNext}/></button>
      </div>
    </section>
  );
}