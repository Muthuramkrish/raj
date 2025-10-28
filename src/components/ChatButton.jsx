// src/components/ChatButton.jsx
import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPhone, FaComments, FaTimes } from "react-icons/fa";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  const phoneNumber = "+917598895773";
  const whatsappMessage = "Hello! I would like to get more information about your eye care services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const telLink = `tel:${phoneNumber}`;

  // Update mobile state on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <div className={`fixed bottom-5 right-5 z-50 flex flex-col items-end space-y-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      
      {/* WhatsApp Button */}
      <div 
        className={`relative transition-all duration-400 transform ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-90 pointer-events-none'}`}
        onMouseEnter={() => setHoveredButton('whatsapp')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 border border-white/10"
        >
          <FaWhatsapp size={20} />
        </a>
        
        {/* Tooltip */}
        <div className={`absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap transition-all duration-300 ${hoveredButton === 'whatsapp' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-1 pointer-events-none'}`}>
          WhatsApp
          <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 w-1 h-1 bg-gray-800 rotate-45"></div>
        </div>
      </div>

      {/* Phone Button */}
      <div 
        className={`relative transition-all duration-400 transform delay-100 ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-90 pointer-events-none'}`}
        onMouseEnter={() => setHoveredButton('phone')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <a
          href={telLink}
          className="relative bg-blue-500 hover:bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 border border-white/10"
        >
          <FaPhone size={18} />
        </a>
        
        {/* Tooltip */}
        <div className={`absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap transition-all duration-300 ${hoveredButton === 'phone' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-1 pointer-events-none'}`}>
          Call Us
          <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 w-1 h-1 bg-gray-800 rotate-45"></div>
        </div>
      </div>

      {/* Main Chat Button */}
      <button
        onClick={toggleMenu}
        onMouseEnter={() => setHoveredButton('main')}
        onMouseLeave={() => setHoveredButton(null)}
        className="relative group bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border border-white/10"
      >
        {/* Icon with smooth rotation */}
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
          {isOpen ? <FaTimes size={20} /> : <FaComments size={20} />}
        </div>
      </button>
    </div>
  );
};

export default ChatButton;