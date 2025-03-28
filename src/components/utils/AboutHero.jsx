import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import passport from "../../assets/passport.jpg";

export default function AboutHero() {
  return (
    <div className="w-full h-full relative top-10 pb-20">
      <div className="lg:px-16 px-8 flex sm:flex-row flex-col-reverse gap-6 justify-center items-center">
        <div className="sm:text-left text-center text-white">
          <h4 className="sm:text-2xl text-3xl font-semibold w-fit bg-gray-900/40 p-3">
            Hello, My name is
            <span className="text-green-500 sm:text-2xl text-xl font-serif ml-1.5">
              David Muchoki
            </span>
          </h4>
          <h1 className="mt-4 sm:text-4xl text-2xl">
            I'm
            <span className="libre-baskerville-bold text-green-500 ml-1">
              <TypeAnimation
                sequence={[
                  "FullStack Developer", // Types 'One'
                  1000, // Waits 1s
                  "Frontend Developer", // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  "Backend Developer", // Types 'Three' without deleting 'Two'
                  () => {
                    // console.log("Sequence completed");
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "23px", display: "inline-block" }}
              />
            </span>
          </h1>

          <p className="mt-4 text-lg capitalize">
            Experienced full-stack developer with 2+ years of expertise in
            Linux, Git, Javascript, React JS, Vite, Python, Django, Flask,
            and some DevOps experience.
          </p>
          <div className=" mt-6 flex sm:flex-row flex-col gap-4 sm:justify-start justify-center">
            <a
              href="#contact"
              className="p-2 px-6 text-white font-semibold rounded-full outline-2 outline-green-500 hover:bg-green-600 transition ease-in-out delay-150"
            >
              Hire Me
            </a>
            <a
              href="https://docs.google.com/document/d/14p8YYtz8pOwzfFtClguf9gudgfU4y2ZXHbF-cx-08NA/edit?usp=sharing"
              target="_blank"
              className="p-2 px-6 text-white font-semibold rounded-full outline-2 outline-yellow-500 hover:bg-yellow-600 transition ease-in-out delay-150"
            >
              Resume
            </a>
          </div>
        </div>
        <img
          className="md:max-w-[30%] sm:max-w-[40%] max-w-[70%] sm:rounded-sm sm:rounded-br-[5rem] sm:rounded-tl-[5rem] rounded-full sm:outline-none outline-[.3rem] outline-green-400/60"
          src={passport}
          alt="My Pic"
        />
      </div>
    </div>
  );
}
