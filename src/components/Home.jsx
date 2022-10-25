import React, {useEffect} from 'react';
import Header from '../pages/Header';
import Clients from '../pages/Clients';
import Blog from '../pages/Blog';
import Stats from '../pages/Stats';
import HeroHome from '../pages/HeroHome';
import Features from '../pages/Features';
import FeaturesBlocks from '../pages/FeaturesBlocks';
import Possibility from '../pages/Possiblility';
import Team from '../pages/Team';
import Contact from '../pages/Contact';
import Footer from '../pages/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      mirror:true,
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
        <Stats />
        <Features />
        <FeaturesBlocks />
        <Clients />
        <Possibility />
        <Blog />
        <Team />
        <Contact />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;