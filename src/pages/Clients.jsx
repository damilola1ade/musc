import React from "react";
import w from "../assets/w.png";
import b from "../assets/b.png";
import t from "../assets/t.png";
import vanguard from "../assets/vang.svg";
import guardian from "../assets/guard.png";
import yahoo_finance from "../assets/yahoo_finance.png";

const Clients = () => {
  return (
    <section id="featured-section">
      <div className="flex items-center justify-center pt-10 ">
        <h1 className="text-2xl font-bold text-gray-500">Our Trusted Partners</h1>
      </div>
      <div className="flex flex-col items-center justify-center mx-4 py-7 mb-7 font-dmsans md:mx-36 md:flex-row">
        <div className="flex place-items-center space-x-5 p-5 md:space-x-20 md:flex-row">
          <a href="#">
            <img
              className="w-36 grayscale grayscale-100 hover:grayscale-0"
              src={w}
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="w-40 grayscale grayscale-100 hover:grayscale-0"
              src={b}
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="w-36 grayscale grayscale-100 hover:grayscale-0"
              src={t}
              alt=""
            />
          </a>
        </div>

        <div className="flex items-center justify-center space-x-5 p-5 md:space-x-20 md:flex-row">
          <a href="#">
            <img
              className="w-36 grayscale grayscale-100 hover:grayscale-0"
              src={vanguard}
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="w-36 grayscale grayscale-100 hover:grayscale-0"
              src={guardian}
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="w-36 grayscale grayscale-100 hover:grayscale-0"
              src={yahoo_finance}
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clients;