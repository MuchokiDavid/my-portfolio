import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const [skills] = useState([
    "FullStack Developer,",
    "Frontend Developer,",
    "Backend Developer,",
  ]);
  const [currentSkill, setCurrentSkill] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill(skills[index]);
      setIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000); // Change skill every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [index, skills]);

  return (
    <div id="home">
      <motion.section
        className="py-8 z-10 font-serif"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto">
          <div className="w-full md:w-1/2 py-8">
            <h1 className="text-purple-900 text-7xl font-semibold leading-none tracking-tighter">
              Welcome to <br />
              <span className="text-blue-500">
                My Portfolio, <br />
              </span>{" "}
              I am a{" "}
              <span className="typing libre-baskerville-bold text-green-500">
                {/* {currentSkill} */}
                <TypeAnimation
                  sequence={[
                    "FullStack Developer", // Types 'One'
                    1000, // Waits 1s
                    "Frontend Developer", // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    "Backend Developer", // Types 'Three' without deleting 'Two'
                    () => {
                      console.log("Sequence completed");
                    },
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: "50px", display: "inline-block" }}
                />
              </span>
            </h1>
          </div>
          <div className="w-full md:w-1/2 py-8">
            <img
              src="https://www.svgrepo.com/show/493509/person-who-invests.svg"
              className="g-image"
              alt="Person Illustration"
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
}
