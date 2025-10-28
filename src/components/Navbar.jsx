import React, { useState, useEffect, useCallback } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaTimes,
  FaPhone,
  FaEye,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import RLogo from "../assets/Raj-opticals-logo.png";

function Navbar({ sectionRefs }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isTamil, setIsTamil] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Brand names
  const brandNames = {
    english: { main: "Raj Eye Care", sub: "& Opticals" },
    tamil: { main: "ராஜ் ஐ கேர்", sub: "& ஆப்டிகல்ஸ்" },
  };

  const navLinks = ["Home", "About Us", "Services", "Products", "Contact"];

  const socialLinks = {
    facebook: "https://www.facebook.com/RAJOPTICALSSATTUR",
    instagram: "https://www.instagram.com/rajeyecareandopticals/?igsh=MTM3Mmd2ejB0OGRjdw%3D%3D#",
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateDeviceMode = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isLandscape = width > height;
      const mobile = width < 768 && !isLandscape;
      setIsMobile(mobile);

      if (!mobile && isOpen) setIsOpen(false);
    };

    updateDeviceMode();
    window.addEventListener("resize", updateDeviceMode, { passive: true });
    window.addEventListener("orientationchange", updateDeviceMode, {
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", updateDeviceMode);
      window.removeEventListener("orientationchange", updateDeviceMode);
    };
  }, [isOpen]);

  useEffect(() => {
    const interval = setInterval(() => setIsTamil((p) => !p), 5000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = useCallback(
    (link) => {
      if (isMobile) setIsOpen(false);

      // If we're not on the home page and clicking Products, navigate to home first
      if (location.pathname !== "/") {
        if (link === "Products") {
          navigate("/");
          // Wait for navigation then scroll to products
          setTimeout(() => {
            const target = sectionRefs?.[link]?.current;
            if (target) {
              target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
            setActiveLink(link);
          }, 100);
          return;
        } else {
          // For other links, navigate to home and then scroll
          navigate("/");
          setTimeout(() => {
            const target = sectionRefs?.[link]?.current;
            if (target) {
              target.scrollIntoView({ behavior: "smooth", block: "start" });
            } else if (link === "Home") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
            setActiveLink(link);
          }, 100);
          return;
        }
      }

      // If we're already on home page, just scroll
      setTimeout(() => {
        const target = sectionRefs?.[link]?.current;

        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (link === "Home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }

        setActiveLink(link);
      }, isMobile ? 300 : 0);
    },
    [isMobile, navigate, sectionRefs, location.pathname]
  );

  const handleLogoClick = useCallback(() => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveLink("Home");
    }
  }, [location.pathname, navigate]);

  const currentBrand = isTamil ? brandNames.tamil : brandNames.english;

  const linkVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0 },
    hover: { color: "#2563eb" },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gray-900 text-gray-100 px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm gap-y-2">
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
            <div className="flex items-center space-x-2 bg-blue-800/50 px-3 py-1 rounded-full">
              <FaPhone className="text-blue-300 text-xs" />
              <a href="tel:+917598895773" className="hover:text-blue-200">
                +91 7598895773
              </a>
            </div>
            <div className="flex items-center space-x-2 bg-green-800/50 px-3 py-1 rounded-full">
              <FaEye className="text-green-300 text-xs" />
              <span>Your Trusted Eye Care Partner</span>
            </div>
          </div>

          <div className="flex gap-2 justify-center sm:justify-end w-full sm:w-auto">
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition group relative"
            >
              <FaFacebookF className="text-sm text-gray-300 group-hover:text-white" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                Facebook
              </span>
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition group relative"
            >
              <FaInstagram className="text-sm text-gray-300 group-hover:text-white" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                Instagram
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-200"
            : "bg-white shadow-sm border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo + Brand */}
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={handleLogoClick}
            >
              <div className="w-12 h-12 rounded-full border-2 border-blue-100 overflow-hidden">
                <img
                  src={RLogo}
                  alt="Logo"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div>
                <motion.h1
                  key={currentBrand.main}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl font-bold text-gray-900"
                >
                  {currentBrand.main}
                </motion.h1>
                <motion.p
                  key={currentBrand.sub}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-blue-600 font-medium"
                >
                  {currentBrand.sub}
                </motion.p>
              </div>
            </motion.div>

            {/* Desktop Links */}
            {!isMobile && (
              <div className="flex items-center space-x-2">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link}
                    onClick={() => handleClick(link)}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    variants={linkVariants}
                    transition={{ delay: i * 0.05 }}
                    className={`px-4 py-2 rounded-lg font-medium text-sm ${
                      activeLink === link
                        ? "text-blue-600 bg-blue-50 border border-blue-100 shadow-sm"
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {link}
                  </motion.button>
                ))}
              </div>
            )}

            {/* Mobile Toggle */}
            {isMobile && (
              <button
                className="p-2 border border-gray-200 rounded-lg hover:border-gray-300"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <FaTimes className="text-gray-600 text-lg" />
                ) : (
                  <FaBars className="text-gray-600 text-lg" />
                )}
              </button>
            )}
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobile && isOpen && (
              <motion.div
                className="absolute left-0 right-0 top-full bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-xl z-50"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <div className="px-4 py-4 space-y-2">
                  {navLinks.map((link, i) => (
                    <motion.button
                      key={link}
                      onClick={() => handleClick(link)}
                      variants={mobileItemVariants}
                      initial="closed"
                      animate="open"
                      transition={{ delay: i * 0.08 }}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium ${
                        activeLink === link
                          ? "text-blue-600 bg-blue-50 border border-blue-100"
                          : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      {link}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}

export default React.memo(Navbar);