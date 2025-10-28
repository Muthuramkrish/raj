import React, { memo, useState, useEffect } from "react"; // Added useState and useEffect imports
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/bg5.jpg";
import service1 from "../assets/DSC_6198.jpg";
import service2 from "../assets/DSC_6209.JPG";
import service3 from "../assets/DSC_6194.JPG";
import { FaArrowRight, FaStar, FaEye } from "react-icons/fa";

const servicesSummary = [
  {
    number: "01",
    title: "Comprehensive Eye Checkups",
    desc: "We believe that good vision starts with regular and thorough eye checkups. Our comprehensive eye examinations are designed to detect vision problems at the earliest stage, using advanced diagnostic tools and technology. From checking your eyesight and eye pressure to identifying conditions such as glaucoma or cataracts, we ensure that your eyes remain healthy for years to come.",
    freeService: true,
    image: service1
  },
  {
    number: "02",
    title: "Prescription Lenses",
    desc: "Clear vision depends on the right lenses, and we provide precision-crafted prescriptions tailored to your needs. Our lenses come with options like anti-glare, UV protection, and blue-light filtering to protect your eyes from strain while working on screens or spending time outdoors. Every lens is customized for comfort and clarity.",
    image: service2
  },
  {
    number: "03",
    title: "Advanced Eye Diagnostics",
    desc: "Utilizing cutting-edge technology for precise eye health assessment and early detection of ocular diseases. Our advanced diagnostic equipment provides comprehensive insights into your eye health, enabling proactive treatment and personalized care plans for optimal vision preservation.",
    image: service3
  }
];

// Memoized Service Card
const ServiceCard = memo(({ service, index }) => (
  <div
    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 md:gap-8 lg:gap-12`}
  >
    {/* Content */}
    <div className="flex-1 w-full lg:w-auto">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-4">
          <div className="text-5xl md:text-6xl font-bold text-blue-600 leading-none">
            {service.number}
          </div>
          <div className="flex flex-col items-center lg:items-start gap-2">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                {service.title}
              </h2>
              {service.freeService && (
                <div className="flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold border border-green-200">
                  <FaStar className="text-green-600 text-xs" />
                  <span>FREE</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed text-sm md:text-base text-center lg:text-left">
          {service.desc}
        </p>
      </div>
    </div>

    {/* Image */}
    <div className="flex-shrink-0 w-full lg:w-80 xl:w-96 flex justify-center">
      <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 mix-blend-overlay"></div>
        <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>
      </div>
    </div>
  </div>
));

function Services() {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedServices, setExpandedServices] = useState({});

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-0">
      {/* Hero Section */}
      <section
        className="relative pt-12 pb-12 md:pt-16 md:pb-16 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Our <span className="text-blue-400">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-200 leading-relaxed mb-6"
          >
            From preventive checkups to advanced treatments, we provide complete  
            eye care solutions designed for every stage of life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 bg-green-600/90 text-white px-4 py-2 md:px-6 md:py-3 rounded-full border border-green-400 shadow-lg"
          >
            <FaStar className="text-yellow-300 text-sm" />
            <span className="font-bold text-sm md:text-base">All Tests & Consultations FREE</span>
            <FaStar className="text-yellow-300 text-sm" />
          </motion.div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-12 md:space-y-16">
          {servicesSummary.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-12 md:mt-16"
          >
            <Link
              to="/Service"
              state={{ scrollToTop: true }}
              className="inline-flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-base rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              <FaEye className="text-white group-hover:scale-110 transition-transform duration-300" />
              <span>Explore All Services</span>
              <FaArrowRight className="text-white group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;