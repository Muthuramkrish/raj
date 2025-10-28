import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "./About";
import Services from "./Services";
import ProductShowcase from "./ProductShowcase";
import GallerySection from "./GallerySection"
import Contact from "./Contact";
import ChatButton from "../components/ChatButton";
import Footer from "./Footer";
import Products from "./Products";

function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const productRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    Home: heroRef,
    "About Us" : aboutRef,
    Services: servicesRef,
    Products: productRef,
    Gallery: galleryRef,
    Contact: contactRef,
  };

  return (
    <div>
      <Navbar sectionRefs={sectionRefs} />
      <div ref={heroRef} className="scroll-mt-24">
        <Hero galleryRef={galleryRef} />
      </div>
      <div ref={aboutRef} className="scroll-mt-24"><About /></div>
      <div ref={servicesRef} className="scroll-mt-24"><Services /></div>
      <div ref={productRef} className="scroll-mt-24"><ProductShowcase /></div>
      <div ref={galleryRef} className="scroll-mt-24"><GallerySection /></div>
      <div ref={contactRef} className="scroll-mt-24"><Contact /></div>
      <Footer />

      <ChatButton />
    </div>
  );
}

export default Home;