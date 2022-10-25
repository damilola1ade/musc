import React from 'react';
import africa from '../assets/africa.png';

function FeaturesBlocks () {

return (
  <section id="proaccts-section">
    <div data-aos="fade-right" className="flex bg-white mx-auto px-4">
      <div className="flex flex-col md:flex-row">
        <div className=" max-w-[1240px] my-10 text-black">
          
          <h2 className="h3 mb-4">Empowering Africa</h2>
          <p className="text-base ">
          Our team is made up of a truly talented workforce of multilingual employees throughout Africa and the world that we leverage on to execute all projects. We are dedicated to our clients success, we understand that our success is measured by our clients’, 
            
          </p>
          <div className="pt-5 pb-1">
            <a
              href="#"
              className="bg-white text-base rounded text-black"
            >
              We are dedicated to our clients success, we understand that our success is measured by our clients’, we strive to facilitate the growth of our clients through development of workflow software solutions that reduces cost and/or increases productivity.
            </a>
          </div>
        </div>

        <div data-aos="fade-left" className=" flex justify-center items-center md:mr-10 md:mt-0 mb-20">
          <div>
            <img className='w-[250%] h-[250%]' src={africa} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
}

export default FeaturesBlocks;
