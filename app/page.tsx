import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Main from "@/components/Main";
import MenuSection from "@/components/Menu";
import Slider from "@/components/Slideshow";

export default function Home() {
  return (
    <main className="">
      <Intro/>
      <Main/>
      <Slider/>
      <MenuSection/> 
      <Gallery/>
    </main>
  )
}
