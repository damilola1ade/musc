import React from "react";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Header from './Header';

function Contact() {

  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "musc-test123",
        "musc-test123",
        form.current,
        "Iuh44ODZJuza0pWa8"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      );
  };

    return (
        <section id="contact">
            <div data-aos='zoom-y-out' data-aos-duration='700' className='relative'>
        {/*  Site header */}
        <Header />
        <div className="relatve container overflow-hidden mx-auto pt-24 " data-aos="zoom-in">
            <div className="lg:flex">
                <div className="xl:w-2/5 lg:w-2/5 bg-cyan-700 py-8 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
                    <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                        <h1 className="xl:text-2xl text-xl pb-4 text-white font-bold">Get in touch</h1>
                        <p className="text-l text-white pb-8 leading-relaxed font-normal lg:pr-4 ">Got a question about us? Are you interested in partnering with us? Have some suggestions or just want to say Hi? Just contact us. We are here to assist you.</p>
                        <div className="flex pb-4 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                                    <path d="M15 7a2 2 0 0 1 2 2" />
                                    <path d="M15 3a6 6 0 0 1 6 6" />
                                </svg>
                            </div>
                            <p className="pl-2 text-white text-base">+234 (803) 314 6183</p>
                        </div>
                        <div className="flex items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={3} y={5} width={18} height={14} rx={2} />
                                    <polyline points="3 7 12 13 21 7" />
                                </svg>
                            </div>
                            <p className="pl-4 text-white text-base">Info@musc.com</p>
                        </div>
                         <div className="flex items-center">
                            <div>
                            <svg className="w-6 h-6 mt-3 mr-2" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            <div className="mt-3 mr-6 text-white text-base">2nd Avenue, House 6, Lugbe 900101, <br /> Abuja, Nigeria </div>
                        </div>
                      
                    </div>
                </div>
                <div className="xl:w-3/5 lg:w-3/5 bg-gray-900 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 xl:rounded-br rounded-tr xl:rounded-tr">
                    <form ref={form} onSubmit={sendEmail} className="bg-white py-4 px-8 rounded-tr rounded-br">
                        <h1 className="text-4xl text-gray-800 font-extrabold mb-6">Enter Details</h1>
                        <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                            <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                                <div className="flex flex-col">
                                    <label className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Full Name
                                    </label>
                                    <input required id="user_name" name="user_name" type="text" className="form-control focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder />
                                </div>
                            </div>
                            <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                                <div className="flex flex-col">
                                    <label className=" text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Email
                                    </label>
                                    <input required id="user_email" name="user_email" type="email" className="form-control focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder />
                                </div>
                            </div>
                        </div>
                        <div className="w-4/4 mt-6">
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-gray-800 mb-1">
                                    Message
                                </label>
                                <textarea placeholder name="message" className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700" rows={8} id="message" defaultValue={""} />
                            </div>
                            <button type="submit" className="focus:outline-none bg-cyan-700 transition duration-150 ease-in-out hover:bg-cyan-600 rounded text-white px-8 py-3 text-sm leading-6">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </section>
        
    );
}

export default Contact;
