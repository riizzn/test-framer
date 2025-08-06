import Cta from "@/sections/Cta";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Pricing from "@/sections/Pricing";
import ProductShowcase from "@/sections/ProductShowcase";
import Testimonials from "@/sections/Testimonials";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker/>
      <ProductShowcase/>
      <Pricing/>
      <Testimonials/>
      <Cta/>
      <Footer/>
    </>
  );
};

export default Home;
