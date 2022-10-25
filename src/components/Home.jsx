import React, {useEffect} from 'react';
import Header from '../pages/Header';
import Clients from '../pages/Clients';
import HeroHome from '../pages/HeroHome';
import Features from '../pages/Features';
import FeaturesBlocks from '../pages/FeaturesBlocks';
import Team from '../pages/Team';
import Contact from '../pages/Contact';
import Footer from '../pages/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Possibility from '../pages/Possiblility';


function Home() {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror:false,
      duration: 1000,
    });
  });


  return (
    <div data-aos='fade-right' className='flex flex-col min-h-screen overflow-hidden'>

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className='flex-grow'>

        {/*  Page sections */}
        <HeroHome />
        <Features />
        <FeaturesBlocks />
        <Clients />
        <Possibility />
        <Team />
        <Contact />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;