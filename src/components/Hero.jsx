import React from "react";
import heroImg from "../assets/hero.webp";
import { IoArrowForwardCircle } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animationVariants";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-heroBg text-white flex justify-center pt-28 h-full lg:h-screen"
    >
      <div className="container text-center md:text-left mx-auto flex flex-col md:flex-row items-center  justify-center p-8 overflow-y-hidden gap-12  h-full">
        {/* Left Side */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" w-full md:w-1/2"
        >
          <h1 className="text-3xl font-secondary font-bold mb-4 md:w-3/5 leading-snug">
            Start Your Journey to Mental Wellness
          </h1>
          <p className="text-lg mb-12 md:pr-8">
            We lower our stress levels, we get to know our pain, we connect
            better, we improve our focus, and we're kinder to ourselves. let us
            walk you through the basics in out new mindful guide on how to
            meditate.
          </p>
          <button className="bg-primary text-white py-3 px-6  font-medium rounded-md hover:bg-primary/90 cursor-pointer">
            <a href="#contact" className="flex gap-1 items-center">
              {" "}
              <span>Get Started</span>
              <IoArrowForwardCircle />
            </a>
          </button>
        </motion.div>

        {/* Right Side */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" w-full h-full flex justify-center md:justify-end  items-baseline md:w-2/5 "
        >
          <img src={heroImg} alt="Hero img" className="w-3/4 object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
