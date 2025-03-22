import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AboutHero from "./utils/AboutHero";

export default function Hero() {

  return (
    <div id="home">
      <motion.section
        className="py-8 z-10 font-serif"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <AboutHero />
      </motion.section>
    </div>
  );
}
