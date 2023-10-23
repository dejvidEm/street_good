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
            <div className=''>
              <p className='text-stone-200'>Sme tu pre Vás od <span className='font-bold text-xl'>Stredy</span> do <span className='font-bold text-xl'>Nedele</span></p>
            </div>
        </section>
    )
}