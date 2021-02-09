import React from 'react';
import '../App.css';
import Cards from '../components/Cards/Cards';
import HeroSection from '../components/HeroSection/HeroSection';
import WhoWeAre from '../components/WhoWeAre/WhoWeAre.js';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <WhoWeAre />
      <Footer />
    </>
  );
}

export default Home;
