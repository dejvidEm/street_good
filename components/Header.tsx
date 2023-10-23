"use client"

import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { Link } from "react-scroll";
import { Popover } from "@headlessui/react";
import { useState, useEffect } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false); // burger menu
    const [opacity, setOpacity] = useState(0);  // header opacity

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const screenHeight = window.innerHeight;
        const scrollPosition = window.scrollY;

        const triggerPosition = screenHeight / 2;  // aby sa zmenila opacity pozadia po polke scrollu a nie hned

        setOpacity(scrollPosition >= triggerPosition ? 1 : 0); // menenie opacity podnmienka
    };

    return (
        <header className={`fixed w-full flex py-5 sm:py-7 px-10 transition-all z-[100] ${opacity ? 'bg-[#eeeeee]' : 'bg-transparent'}`}>
            <h1 className="font-bold text-2xl">StreetGood</h1>
            <div className="grow hidden md:inline">
                <div className="text-white flex items-center justify-center gap-10">
                    <Link to="uvod" offset={-200} spy={true} smooth={true} className={`cursor-pointer ${opacity ? 'text-stone-950' : 'text-white'}`}>Úvod</Link>
                    <Link to="menu" offset={-90} spy={true} smooth={true} className={`cursor-pointer ${opacity ? 'text-stone-950' : 'text-white'}`}>Menu</Link>
                    <Link to="blog" spy={true} smooth={true} className={`cursor-pointer ${opacity ? 'text-stone-950' : 'text-white'}`}>Blog</Link>
                    <Link to="kontakt" spy={true} smooth={true} className={`cursor-pointer ${opacity ? 'text-stone-950' : 'text-white'}`}>Kontakt</Link>
                </div>
            </div>

            <div className="flex grow items-center justify-end md:hidden">
                <div className={`menu-btn ${menuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
                    <div className="menu-btn__burger"></div>
                </div>
            </div>

            <div className="gap-5 hidden md:flex">
                <a href="https://www.instagram.com/streetgood_sk/"><BsInstagram size={25} className="cursor-pointer mt-2"/></a>
                <a href=""><ImFacebook2 size={25} className="cursor-pointer mt-2"/></a>
                <button className="border-[2px] border-gray-950 rounded-[40px] py-1 px-4 mt-0.5">Kontaktujte Nás</button>
            </div>
        </header>
    )
}