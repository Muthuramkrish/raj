// src/pages/Service.jsx
import { Suspense, lazy, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaStar, FaBolt, FaStethoscope, FaRibbon, FaRegSmile, FaChevronDown, FaChevronUp, } from "react-icons/fa";
import backgroundImage from "../assets/bg7.jpg";
import service1 from "../assets/DSC_6198.jpg";
import service2 from "../assets/DSC_6224.jpg";
import service3 from "../assets/DSC_6209.JPG";
import service4 from "../assets/DSC_6183.JPG";
import service8 from "../assets/elisar_optimizer.jpg";
import service5 from "../assets/service-2.jpg";
import service7 from "../assets/DSC_6056.jpg";

const Navlink = lazy(() => import("../components/Navlinks"));
const Footer = lazy(() => import("../pages/Footer"));

// Scroll to top hook
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

const servicesSummary = [
  {
    number: "01",
    title: "Comprehensive Eye Checkups",
    desc: "Complete eye health assessment including primary tests: Computerized topcon Autorefractor Vision Test, Color Blind Test, Duochrome Test, Confrontation Test, Extraocular Muscle Test, Brenn Leary Test for complete vision evaluation, Slit Lamp Test for cornea, and Topcon non contact computerized tonometer for Eye Pressure Test.",
    image: service1,
    freeService: true,
    features: ["Computerized Vision Test", "Eye Pressure Test", "Slit Lamp test", "Color Blind Test", "Duochrome Test", "Confrontation Test", "Extraocular Muscle Test"]
  },
  {
    number: "02",
    title: "Advance Retina and Diabetic Screening",
    desc: "Professional testing using Remidio fundus camera for retina diagnostic and comprehensive vision assessment tools for accurate diagnosis and treatment planning.",
    image: service2,
    freeService: true,
    features: ["Advanced Diagnostics", "Professional Equipment", "Accurate Results"]
  },
  {
    number: "03",
    title: "Precision Lens Measurement",
    desc: "Accurate lens prescriptions using Topcon Auto Lensometer and Essilor P.D. Meter. We provide Power Glasses, Reading Glasses, and specialize in Progressive Lens Fitting.",
    image: service3,
    features: ["Power Glasses", "Reading Glasses", "Progressive Lenses", "Precision Measurement", "Custom Lenses"]
  },
  {
      number: "04",
      title: "Advanced Glaucoma Testing",
      desc: "Comprehensive glaucoma screening using state-of-the-art diagnostic technology: intraocular pressure measurement (tonometry) and visual-field mapping (perimetry) — enabling early detection of optic-nerve damage and personalised treatment planning.",
      image: service8,
      freeService: true,
      features: ["Intraocular Pressure (IOP) Measurement", "Visual-Field Test (Perimetry)"]
  },
  {
    number: "05",
    title: "Contact Lens Solutions & Services",
    desc: "Professional Contact Lens Fitting with cleaning solutions, including Bio True, Renu, Aqua Soft, and Opti-Free Contact Solutions. We offer various contact lens options and maintenance services.",
    image: service4,
    features: ["Professional Contact Lens Fitting", "Bio True Solutions", "Renu Solutions", "Lens Maintenance", "Aqua Soft Solution", "Opti-Free Contact Lens Solutions", "All branded Contact Lenses Available"]
  },
  {
    number: "06",
    title: "Premium Frames Collection",
    desc: "Wide selection of quality frames with professional fitting services. Complete optical solutions including frame selection and styling advice for perfect comfort and style.",
    image: service5,
    features: ["Premium Frames", "Professional Fitting", "Style Consultation", "Comfort Adjustment", "Wide Selection", "Free frame maintenance"]
  },
  {
    number: "07",
    title: "Ultrasonic Lens & Frame Cleaning",
    desc: "Keep your eyewear spotless with our advanced ultrasonic cleaner. Using high-frequency sound waves, this method removes dirt, oil, and debris from every corner of your lenses and frames without causing damage.",
    image: service7,
    freeService: true,
    features: ["Deep Cleaning", "No Damage", "Hygienic", "Extends Frame & Lens Life", "Professional Equipment"]
  },
];

const techFeatures = [
  {
    icon: FaBolt,
    title: "Modern Equipment",
    description: "Advanced diagnostic tools for precise testing and accurate results"
  },
  {
    icon: FaStethoscope,
    title: "Expert Consultation",
    description: "Professional eye care advice from experienced optometrists"
  },
  {
    icon: FaRibbon,
    title: "Quality Products",
    description: "Genuine lenses and frames from trusted manufacturers"
  },
  {
    icon: FaRegSmile,
    title: "Patient Care",
    description: "Personalized service focused on your vision needs and comfort"
  }
];

const freeServices = [
  "Vision Testing",
  "Advanced Retina Diagnostic Tests and Diabetic Eye Screening",
  "Cataract Detection",
  "Color Blind Test",
  "Professional Consultation",
  "Eye pressure Testing",
  "Advance glaucoma testing",
  "Dry Eye Test"
];

function Service() {
  // Scroll to top when component mounts
  useScrollToTop();
  
  const [isMobile, setIsMobile] = useState(false);
  const [expandedServices, setExpandedServices] = useState({});

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleServiceFeatures = (serviceId) => {
    setExpandedServices(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }));
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Suspense fallback={<div>Loading...</div>}>
        <Navlink />
      </Suspense>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse-slow hidden md:block"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl animate-pulse-slow hidden md:block" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section */}
      <section 
        className="relative pt-16 pb-20 md:pt-24 md:pb-20 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center text-white relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Our <span className="text-blue-400">Services</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-8">
              Professional eye care with free tests & consultations. Charges apply only for lenses and maintenance services.
            </motion.p>

            {/* Free Services Badge */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.5 }} className="inline-flex items-center gap-2 bg-green-600/90 text-white px-6 py-3 rounded-full border border-green-400 shadow-lg">
              <FaStar className="text-yellow-300" />
              <span className="font-bold">All Tests & Consultations FREE</span>
              <FaStar className="text-yellow-300" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Rest of your Service.jsx component remains the same */}
      {/* Free Services Highlight */}
      <section className="py-12 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-green-600">FREE</span> Services Included
            </h2>
            <p className="text-gray-600 text-lg">
              No charges for tests and consultations. We believe in accessible eye care for everyone.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {freeServices.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-sm border border-green-200">
                <FaCheckCircle className="text-green-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700 leading-tight">{service}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our <span className="text-blue-600">Services</span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Comprehensive eye care services with free tests and professional equipment.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden:{}, visible:{ transition:{ staggerChildren: 0.1 } } }} className="space-y-16">
            {servicesSummary.map((service, index) => (
              <motion.div key={index} variants={{ hidden: { opacity: 0, x: index%2===0?-50:50 }, visible:{ opacity:1, x:0 } }} className={`flex flex-col ${index%2===0?'lg:flex-row':'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}>
                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl sm:text-5xl font-bold text-blue-600 leading-none flex-shrink-0">{service.number}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h3>
                        {service.freeService && (
                          <div className="flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold border border-green-200">
                            <FaStar className="text-green-600 text-xs" />
                            <span>FREE</span>
                          </div>
                        )}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{service.desc}</p>

                      {/* Features - Desktop (always visible) / Mobile (toggleable) */}
                      <div className="mt-4">
                        {/* Desktop View - Always Visible */}
                        <div className="hidden md:block">
                          <div className="grid grid-cols-1 gap-2">
                            {service.features.map((f, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                                <FaCheckCircle className="text-green-500 text-xs flex-shrink-0" />
                                <span>{f}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Mobile View - Toggleable */}
                        <div className="md:hidden">
                          {service.features.length > 0 && (
                            <div>
                              <button
                                onClick={() => toggleServiceFeatures(service.number)}
                                className="flex items-center gap-2 text-blue-600 font-medium text-sm mb-2 hover:text-blue-700 transition-colors"
                              >
                                <span>View Features</span>
                                {expandedServices[service.number] ? (
                                  <FaChevronUp className="text-xs" />
                                ) : (
                                  <FaChevronDown className="text-xs" />
                                )}
                              </button>
                              
                              {expandedServices[service.number] && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="grid grid-cols-1 gap-2"
                                >
                                  {service.features.map((f, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                                      <FaCheckCircle className="text-green-500 text-xs flex-shrink-0" />
                                      <span>{f}</span>
                                    </div>
                                  ))}
                                </motion.div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-shrink-0">
                  <motion.div whileHover={{ scale:1.03 }} className="relative group">
                    <div className="relative w-64 sm:w-64 md:w-72 h-64 sm:h-64 md:h-72 rounded-xl overflow-hidden shadow-lg">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy"/>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10"></div>
                      {service.freeService && <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">FREE</div>}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Transparent Pricing</h3>
            <p className="text-lg md:text-xl text-blue-100 mb-6">
              💫 All Tests & Consultations: <span className="font-bold text-green-300">FREE</span>
            </p>
            <p className="text-lg md:text-xl text-blue-100">
              💰 Charges Apply Only For: Lenses, Frames, Contact Lenses, and Solutions, &{' '}
              <span className="inline-flex items-center bg-yellow-300 text-blue-900 font-semibold px-2 py-1 rounded-sm gap-1">
                Maintenance Services <FaStar className="text-blue-900 text-sm" aria-hidden="true" />
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Service;