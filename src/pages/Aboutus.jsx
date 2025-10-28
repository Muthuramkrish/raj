import {
  FaAward,
  FaUsers,
  FaShieldAlt,
  FaCalendarAlt,
  FaCamera,
  FaMicroscope,
  FaChartLine,
  FaStar,
  FaHeart,
  FaGem,
} from "react-icons/fa";
import Navlinks from "../components/Navlinks";
import backgroundImage from "../assets/bg7.jpg";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Footer from "./Footer";

// Scroll to top hook
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

function Aboutus() {

  useScrollToTop();

  const stats = [
    { number: "10+", label: "Years Experience", icon: FaAward, color: "from-amber-500 to-orange-500" },
    { number: "20,000+", label: "Happy Patients", icon: FaUsers, color: "from-emerald-500 to-green-500" },
    { number: "100%", label: "Quality Service", icon: FaShieldAlt, color: "from-blue-500 to-cyan-500" },
    { number: "Free", label: "Consultation", icon: FaAward, color: "from-teal-500 to-green-500" },
  ];

  const features = [
    { title: "Advanced Technology", description: "State-of-the-art diagnostic equipment for precise eye care.", icon: FaGem, color: "from-purple-500 to-indigo-500" },
    { title: "Expert Team", description: "Experienced vision health professionals dedicated to your eye health.", icon: FaUsers, color: "from-blue-500 to-cyan-500" },
    { title: "Premium Collections", description: "Designer frames and quality lenses for perfect vision.", icon: FaStar, color: "from-amber-500 to-orange-500" },
    { title: "Personalized Care", description: "Customized vision solutions tailored to your individual needs.", icon: FaHeart, color: "from-rose-500 to-pink-500" },
  ];

  const journeyMilestones = [
    {
      year: "2015",
      icon: FaCalendarAlt,
      title: "Our Foundation",
      description:
        "Our clinic began its operations on 22 April 2015 with a strong foundation in essential eye-care diagnostics.",
      equipment: [
        "Topcon Autorefracto Meter",
        "Topcon Lensometer & Auto Lens Edger",
        "Topcon Non-Contact Tonometer",
        "Topcon Slit Lamp",
        "Essilar PD Meter",
        "Digital Eye Chart",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2020",
      icon: FaCamera,
      title: "Remidio Fundus Camera Installation",
      description:
        "Installation of a Remidio Fundus Camera for advanced Retina Examination to enhance retinal diagnostics.",
      equipment: ["Remidio Fundus Camera"],
      color: "from-purple-500 to-indigo-500",
    },
    {
      year: "2021",
      icon: FaMicroscope,
      title: "Ophthalmic Imaging Upgrade",
      description:
        "Further upgrades made to support high-quality ophthalmic imaging. The Remidio Photo Slit Lamp and NIDEK Phoropter were installed.",
      equipment: ["Remidio Photo Slit Lamp", "NIDEK Phoropter"],
      color: "from-emerald-500 to-green-500",
    },
    {
      year: "2025",
      icon: FaChartLine,
      title: "Elisar Field Analyzer Introduction",
      description:
        "Introduction of the Elisar Field Analyzer, enabling comprehensive Glaucoma assessment for better patient outcomes.",
      equipment: ["Elisar Field Analyzer"],
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navlinks />

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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
            >
              About <span className="text-blue-400">Raj Eye Care</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-8"
            >
              Delivering compassionate eye care with precision and advanced technology since 2015. 
              From humble beginnings to advanced diagnostic excellence — your vision is our mission.
            </motion.p>

            {/* Free Consultation Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-green-600/90 text-white px-6 py-3 rounded-full border border-green-400 shadow-lg"
            >
              <FaStar className="text-yellow-300" />
              <span className="font-bold">Free Consultation Available</span>
              <FaStar className="text-yellow-300" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`bg-gradient-to-br ${stat.color} rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1`}>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 backdrop-blur-sm">
                    <stat.icon className="text-white text-lg sm:text-xl" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-white/90 text-sm sm:text-base font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-10 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Our Journey</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              A decade of excellence and technological advancement in delivering world-class eye care services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {journeyMilestones.map((milestone, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className={`bg-gradient-to-br ${milestone.color} rounded-xl p-2 sm:p-3 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                    <milestone.icon className="text-white text-base sm:text-lg" />
                  </div>
                  <div>
                    <span className="text-gray-700 font-bold text-sm sm:text-lg">{milestone.year}</span>
                    <h3 className="text-gray-900 font-semibold text-sm sm:text-base">{milestone.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm mb-2 leading-relaxed">{milestone.description}</p>
                <div>
                  <h4 className="text-gray-900 font-semibold text-xs sm:text-sm mb-1">Equipment Added:</h4>
                  <ul className="space-y-1 text-xs sm:text-sm">
                    {milestone.equipment.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Why Choose Us</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Quality eye care with advanced technology and a commitment to reliability, availability, and maintainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`bg-gradient-to-br ${feature.color} rounded-xl p-2 sm:p-3 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                    <feature.icon className="text-white text-base sm:text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">{feature.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-6 text-gray-700">
          <p className="text-base sm:text-lg leading-relaxed font-medium">
            From humble beginnings to advanced diagnostic excellence — our progress reflects our commitment to delivering accurate, reliable, and compassionate eye care.
          </p>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 mt-6">
            <p className="text-gray-800 text-sm sm:text-base font-semibold italic">
              "Your vision deserves the very best care."
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Aboutus;
