import React from "react";
import Benefit from './components/Benefit';
import Features from './components/Features';
import Hero from './components/Hero';
import Start from './components/Start';

const Home = () => {
  return (
    <>
      <Hero />
      <Benefit />
      <Start />
      <Features />
    </>
  );
};

export default Home;
