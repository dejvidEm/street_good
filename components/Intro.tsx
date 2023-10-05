"use client"
import React, { useState, useEffect } from 'react';


export default function Intro() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loader = document.querySelector(".loader");


    if (loader instanceof HTMLElement) {
      loader.classList.add("loader--hidden");
    }

    // Simulujeme načítanie po 3 sekundách
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

    return (
        <section className="text-center bg-pink-400 w-full h-auto">
          <div className={`loader${isLoading ? '' : ' loader--hidden'}`}></div>
            <div className="h-screen translate-y-1/3 z-10">
                <h1 className="sm:text-6xl text-4xl font-semibold text-white">STREET GOOD</h1>
                <h2 className="text-white italic font-light text-2xl p-5">Time for the smoothie</h2>
            </div>
            <div className="wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </section>
    )
}