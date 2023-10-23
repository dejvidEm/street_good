"use client"
import React from 'react';
import { BsArrowUpCircle } from "react-icons/bs";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return (
        <div className='relative'>
        <div className="custom-shape-divider-bottom-1698086668">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        <footer className="w-full h-auto bg-blue-200">
            <div className="sm:max-w-[1424px] max-w-[300px] flex flex-row justify-between flex-wrap mx-auto">
                <div className="flex flex-col gap-2 my-2 sm:my-6 mx-auto sm:items-start items-center">
                    <h2 className="font-bold text-md pb-2 text-center">Otváracie hodiny</h2>
                    <p className='text-sm'>Str - Ne <span className="font-bold ml-4 text-blue-950">9:00 - 17-00</span></p>
                    <p className='text-sm'>Pon - Ut <span className="font-bold ml-4 text-red-950">Zatvorené</span></p>
                </div>
                <div className="flex flex-col gap-2 my-2 sm:my-6 mx-auto sm:items-start items-center">
                    <h2 className="font-bold text-md pb-2 text-center">Doplňujúce informácie</h2>
                    <a href="/" className='text-sm'>Zoznam alergénov</a>
                    <a href="/" className='text-sm'>Často kladené otázky</a>
                    <a href="/" className='text-sm'>Kde nás nájdete</a>
                </div>
                <div className="scroll-to-top-button absolute right-8 sm:right-16 top-1 sm:top-10" onClick={scrollToTop}>
                    <span className='p-1 cursor-pointer'><BsArrowUpCircle size={30}></BsArrowUpCircle></span>
                </div>
            </div>
            <hr className="w-[90%] mx-auto h-[2px] bg-black" />
            <p className="text-center p-2 text-xs">STREETGOOD © 2023</p>
        </footer>
        </div>
    )
}