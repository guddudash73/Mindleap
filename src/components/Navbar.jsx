import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    const sections = ["home", "services", "about", "pricing", "testimonial"];
    const scrollPosition = window.scrollY + 100;

    sections.forEach((sections) => {
      //understand this logic
      const element = document.getElementById(sections);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActiveSection(sections);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
    }
  };

  const navLinks = (
    <ul className="font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0">
      <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("home");
          }}
          className={`text-white ${activeSection === "home" ? "isActive" : ""}`}
        >
          Home
        </a>
      </motion.li>
      <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("services");
          }}
          className={`text-white  ${
            activeSection === "services" ? "isActive" : ""
          }`}
        >
          Services
        </a>
      </motion.li>
      <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("about");
          }}
          className={`text-white ${
            activeSection === "about" ? "isActive" : ""
          }`}
        >
          About
        </a>
      </motion.li>
      <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a
          href="#pricing"
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("pricing");
          }}
          className={`text-white ${
            activeSection === "pricing" ? "isActive" : ""
          }`}
        >
          Pricing
        </a>
      </motion.li>
      <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a
          href="#testimonial"
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("testimonial");
          }}
          className={`text-white ${
            activeSection === "testimonial" ? "isActive" : ""
          }`}
        >
          Testimonial
        </a>
      </motion.li>
    </ul>
  );
  return (
    <header className="bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* logo */}
        <div>
          <a href="/"></a>
          <img src="/logo.svg" alt="Mind Leap Logo" />
        </div>

        {/* navItems */}

        <div className="hidden md:flex flex-grow justify-center">
          <nav>{navLinks}</nav>
        </div>

        {/* button */}

        <div className="hidden md:block">
          <a
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("contact");
            }}
            href="#contact"
            className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
          >
            Contact Us
          </a>
        </div>

        {/* hamburger menu */}

        <div className="block md:hidden">
          <button
            onClick={handleToggle}
            className={`text-white focus:outline-none ${
              isOpen ? "border border-white" : ""
            }`}
          >
            <HiOutlineMenuAlt3 className="size-6"></HiOutlineMenuAlt3>
          </button>
        </div>
      </div>

      {/* mobile nav items */}

      {isOpen && (
        <AnimatePresence mode="wait">
          <motion.nav
            key="dropdown"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 mt-4"
          >
            <ul className="flex flex-col p-4 space-y-3 ">
              {navLinks.props.children}
              <li className="py-2 list-none">
                <a
                  href="#contact"
                  className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded "
                  onClick={(e) => {
                    e.preventDefault();
                    handleCloseMenu();
                    handleScrollTo("contact");
                  }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.nav>
        </AnimatePresence>
      )}
    </header>
  );
};

export default Navbar;
