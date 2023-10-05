"use client"

import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { useState } from "react";


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
      };

    return (
        <header className="fixed left-1/2 sm:-ml-5 -translate-x-1/2 container mx-auto flex items-center px-6 py-2 h-20 z-[100]">
            <h1 className="font-bold text-2xl">StreetGood</h1>
            <div className="grow hidden sm:inline">
                <div className="text-white flex items-center justify-center gap-10">
                    <Link href="/">Úvod</Link>
                    <Link href="/">Menu</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">Kontakt</Link>
                </div>
            </div>

            <div className="flex grow items-center justify-end sm:hidden">
                <div className={`menu-btn ${menuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
                    <div className="menu-btn__burger"></div>
                </div>
            </div>

            <div className="gap-5 hidden sm:flex">
                <a href="https://www.instagram.com/streetgood_sk/"><BsInstagram size={25} className="cursor-pointer mt-2"/></a>
                <a href=""><ImFacebook2 size={25} className="cursor-pointer mt-2"/></a>
                <button className="border-[2px] border-gray-950 rounded-[40px] py-1 px-4 mt-0.5">Kontaktujte Nás</button>
            </div>
        </header>
    )
}