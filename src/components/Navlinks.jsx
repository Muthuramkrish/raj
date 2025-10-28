import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import AppointmentForm from "./AppointmentForm";
import { motion, AnimatePresence } from "framer-motion";
import RLogo from "../assets/Raj-opticals-logo.png";

function Navlinks() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service" },
    { name: "Products", path: "/products" },
  ];

  // Detect screen size and handle resize
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isLandscape = width > height;
      
      let mobile = width < 768; // md breakpoint
      
      // If in landscape mode with reasonable width, treat as desktop
      if (isLandscape && width >= 768) {
        mobile = false;
      }
      
      // Very small screens are always mobile
      if (width < 640) {
        mobile = true;
      }
      
      setIsMobile(mobile);
      
      // Close mobile menu when switching to desktop view
      if (!mobile && isOpen) {
        setIsOpen(false);
      }
    };

    // Initial check
    checkScreenSize();

    // Debounced resize handler
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkScreenSize, 100);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', checkScreenSize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', checkScreenSize);
      clearTimeout(resizeTimeout);
    };
  }, [isOpen]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = useCallback((path) => {
    return location.pathname === path;
  }, [location.pathname]);

  const handleBookAppointment = useCallback((e) => {
    e?.preventDefault();
    setIsFormOpen(true);
    if (isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  const handleLinkClick = useCallback(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  // Animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' 
          : 'bg-white shadow-sm border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border-2 border-blue-100">
                  <img 
                    src={RLogo} 
                    alt="Raj Eye Care Logo" 
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold text-gray-900 tracking-tight">Raj Eye Care</h1>
                  <p className="text-xs text-blue-600 font-medium tracking-wide">& Opticals</p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Menu - Show when NOT mobile */}
            <div className={`${isMobile ? 'hidden' : 'flex'} items-center space-x-8`}>
              <ul className="flex space-x-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={`font-medium transition-all duration-200 relative py-2 px-1 ${
                        isActiveLink(link.path)
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {link.name}
                      {isActiveLink(link.path) && (
                        <motion.span 
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"
                          layoutId="activeIndicator"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Desktop CTA Button */}
              <motion.button
                onClick={handleBookAppointment}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium text-sm shadow-sm hover:shadow-md hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Appointment
              </motion.button>
            </div>

            {/* Mobile Menu Button - Only show on mobile screens */}
            {isMobile && (
              <motion.button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <FaTimes size={20} className="text-gray-700" />
                ) : (
                  <FaBars size={20} className="text-gray-700" />
                )}
              </motion.button>
            )}
          </div>

          {/* Mobile Menu - Only show on mobile screens */}
          {isMobile && (
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="absolute left-0 right-0 top-full bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-xl overflow-hidden"
                  variants={mobileMenuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <div className="px-4 sm:px-6 py-4">
                    <ul className="space-y-2">
                      {navLinks.map((link, index) => (
                        <motion.li key={link.name} variants={mobileItemVariants}>
                          <Link
                            to={link.path}
                            onClick={handleLinkClick}
                            className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
                              isActiveLink(link.path)
                                ? "bg-blue-50 text-blue-600 font-medium border border-blue-100"
                                : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                            }`}
                          >
                            {link.name}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                    
                    {/* Mobile CTA */}
                    <motion.div 
                      className="mt-4 pt-4 border-t border-gray-200"
                      variants={mobileItemVariants}
                    >
                      <button
                        onClick={handleBookAppointment}
                        className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-lg"
                      >
                        Book Appointment
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </nav>

      {/* Appointment Form Popup */}
      <AppointmentForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </>
  );
}

export default React.memo(Navlinks);