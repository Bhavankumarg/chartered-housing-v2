"use client";

import React, { useEffect, useState } from "react";
import { MotionConfig, motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null); // Close any open dropdown when menu closes
  };

  const toggleDropdown = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuItems = [
    {
      label: "OUR PROJECTS",
      submenu: [
        { name: "Residential", href: "/projects/residential" },
        { name: "Commercial", href: "/projects/commercial" },
        { name: "Upcoming Projects", href: "/projects/upcoming" },
        { name: "Completed Projects", href: "/projects/completed" },
      ],
    },
    {
      label: "COMPANY",
      submenu: [
        { name: "About Us", href: "/about-us" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "News & Updates", href: "/news" },
      ],
    },
    {
      label: "CONNECT",
      submenu: [
        { name: "Contact Us", href: "/contact" },
        { name: "Support", href: "/support" },
        { name: "Newsletter", href: "/newsletter" },
        { name: "Social Media", href: "/social" },
      ],
    },
  ];

  const handleSubmenuClick = () => {
    // Close menu when submenu item is clicked
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      {/* Logo - Global on all pages */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="CHARTERED"
            width={200}
            height={60}
          />
        </Link>
      </div>

      {/* White Header Bar */}
      <header className="absolute top-0 left-0 right-0 z-40 bg-white">
        <div className="flex items-center justify-between px-6 lg:px-0 py-4 container mx-auto">
          {/* Enquire Now Button */}
          <Button href="/contact">Enquire Now</Button>

          {/* Animated Hamburger Menu */}
          <MotionConfig
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <motion.button
              initial={false}
              animate={isMenuOpen ? "open" : "closed"}
              onClick={toggleMenu}
              className="relative h-16 w-12 rounded-full bg-transparent transition-colors"
            >
              <motion.span
                variants={VARIANTS.top}
                className="absolute h-0.5 w-10 bg-black"
                style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
              />
              <motion.span
                variants={VARIANTS.middle}
                className="absolute h-0.5 w-10 bg-black"
                style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
              />
              <motion.span
                variants={VARIANTS.bottom}
                className="absolute h-0.5 w-7 bg-black"
                style={{
                  x: "-50%",
                  y: "50%",
                  bottom: "35%",
                  left: "calc(50% + 6px)",
                }}
              />
            </motion.button>
          </MotionConfig>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-35 z-50 bg-gray-200 flex items-center justify-center"
          >
            <div className="text-center space-y-16">
              {menuItems.map((item) => (
                <div key={item.label} className="relative">
                  {/* Main Menu Item */}
                  <div
                    onClick={() => toggleDropdown(item.label)}
                    className="text-[#646464] text-4xl roboto-serif-light tracking-wider flex items-center justify-center cursor-pointer hover:text-[#ED1C25] transition-all duration-300 hover:scale-105"
                  >
                    {item.label}
                    <motion.svg
                      className="w-10 h-10 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      animate={{
                        rotate: openDropdown === item.label ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  </div>

                  {/* Dropdown Submenu */}
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-8 space-y-6">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={handleSubmenuClick}
                              className="block text-[#646464] text-2xl roboto-serif-light tracking-wider cursor-pointer transition-all duration-300 hover:text-[#ED1C25] hover:scale-105"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 6px)",
    },
  },
};

export default Header;
