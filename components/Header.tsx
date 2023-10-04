import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import Link from "next/link";


export default function Header() {
    return (
        <header className="fixed left-1/2 sm:-ml-5 -translate-x-1/2 container mx-auto flex items-center px-6 py-2 h-20">
            <h1 className="font-bold text-2xl">StreetGood</h1>
            <div className="grow">
                <div className="flex items-center justify-center gap-10">
                    <Link href="home">Úvod</Link>
                    <Link href="home">Menu</Link>
                    <Link href="home">Blog</Link>
                    <Link href="home">Kontakt</Link>
                </div>
            </div>
            <div className="flex gap-5">
                <a href="https://www.instagram.com/streetgood_sk/"><BsInstagram size={25} className="cursor-pointer"/></a>
                <a href=""><ImFacebook2 size={25} className="cursor-pointer"/></a>
            </div>
        </header>
    )
}