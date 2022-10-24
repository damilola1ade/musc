import React from 'react';
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';
import AboutCard from './AboutCard';


function Features() {

    return (
      <div data-aos="fade-down" className='w-full bg-black text-white text-center mt-30 overflow-hidden'>
        <div className='max-w-[1240px] mx-auto px-4 py-44 '>
          <div>
            <h1 className='h2 mb-4'>Customized and cost-effective IT solutions</h1>
            <p className='py-4 text-xl'>
              Tailored to suit your needs
            </p>
  
            {/* Card Container */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
  
              {/* Card */}
              <AboutCard icon={<SiHiveBlockchain size={40} />} heading='Managed Services' text='Managing your in-house IT department and staying up to date with the latest technologies can be a hassle. Outsource your technology to us and we’ll take care of your infrastructure, so you can say goodbye to prohibitively expensive IT and downtime for good.' />
  
              <AboutCard icon={<SiFsecure size={40} />} heading='Cloud Computing' text='Transfer your company’s resources to the cloud and enjoy greater productivity, enhanced security, and lower IT costs. We can migrate your data seamlessly without disrupting your business operations. Talk to us about the cloud today.' />
              <AboutCard icon={<SiStrapi size={40} />} heading='Enterprise Connectivity' text='MUSC is commited to creating robust and future-proof connections between traditional apps, custom apps and legacy systems for enterprise connectivity' />
              <AboutCard icon={<VscServerProcess size={40} />} heading='Virtualization' text='When you virtualize your IT resources you’re giving your employees, suppliers, and clients tools to enhance collaboration and communication. Let SSL’s Virtualization solutions increase your workflow efficiency and lower hardware costs.' />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Features;
