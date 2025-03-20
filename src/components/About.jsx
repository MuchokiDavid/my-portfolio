import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div id='about' className="px-6">
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About Me</h2>
        <div className="about-content">
          <img
            src="https://via.placeholder.com/150"
            alt="Muchoki David"
            className="profile-pic"
          />
          <p>
            Hi! I'm Muchoki David, a passionate software developer with
            experience in building web applications and contributing to
            open-source projects. I enjoy solving problems and learning new
            technologies.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
