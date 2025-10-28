import React, { memo } from "react";
import {
  FaAward,
  FaUsers,
  FaShieldAlt,
  FaCamera,
  FaMicroscope,
  FaChartLine,
  FaStar,
  FaHeart,
  FaGem,
  FaEye,
  FaClinicMedical,
  FaTools,
  FaHistory
} from "react-icons/fa";
import { TbLamp2 } from "react-icons/tb";

// Memoized components to reduce re-renders
const StatCard = memo(({ number, label, Icon, color }) => (
  <div className={`rounded-lg p-4 sm:p-5 text-white text-center shadow-sm transition-transform hover:scale-105 duration-300 ${color}`}>
    <Icon className="text-xl sm:text-2xl mx-auto mb-2 sm:mb-3" />
    <div className="text-xl sm:text-2xl font-bold">{number}</div>
    <div className="text-xs sm:text-sm">{label}</div>
  </div>
));

const FeatureCard = memo(({ title, description, Icon, color }) => (
  <div className="flex items-start gap-3 sm:gap-4 bg-gray-50 p-4 sm:p-5 rounded-lg border border-gray-100 transition-all hover:shadow-md duration-300">
    <div className={`${color} text-white p-2 sm:p-3 rounded-lg flex-shrink-0`}>
      <Icon className="text-base sm:text-lg" />
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">{title}</h3>
      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{description}</p>
    </div>
  </div>
));

const JourneyCard = memo(({ year, title, description, Icon, color }) => (
  <div className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md duration-300 h-full">
    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
      <div className={`${color} text-white p-2 sm:p-3 rounded-lg flex-shrink-0`}>
        <Icon className="text-sm sm:text-base" />
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold text-gray-900 text-base sm:text-lg">{year}</h3>
        <p className="text-xs sm:text-sm text-gray-600">{title}</p>
      </div>
    </div>
    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{description}</p>
  </div>
));

const DiagnosticTool = memo(({ name, Icon, color }) => (
  <div className="flex items-center gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-lg border border-gray-100 shadow-sm transition-all hover:shadow-md duration-300">
    <div className={`${color} text-white p-2 sm:p-3 rounded-lg flex-shrink-0`}>
      <Icon className="text-sm sm:text-base" />
    </div>
    <span className="text-sm sm:text-base text-gray-700 font-medium">{name}</span>
  </div>
));

function Aboutus() {
  const stats = [
    { number: "10+", label: "Years Experience", Icon: FaAward, color: "bg-amber-500" },
    { number: "20,000+", label: "Happy Patients", Icon: FaUsers, color: "bg-green-500" },
    { number: "100%", label: "Quality Service", Icon: FaShieldAlt, color: "bg-blue-500" },
    { number: "Free", label: "Consultation", Icon: FaAward, color: "bg-teal-500" }
  ];

  const features = [
    { title: "Advanced Technology", description: "State-of-the-art diagnostic equipment for precise eye care", Icon: FaGem, color: "bg-indigo-500" },
    { title: "Expert Team", description: "Experienced vision health professionals dedicated to your eye health", Icon: FaUsers, color: "bg-cyan-500" },
    { title: "Premium Collections", description: "Designer frames and quality lenses for perfect vision", Icon: FaStar, color: "bg-orange-500" },
    { title: "Personalized Care", description: "Customized vision solutions tailored to your needs", Icon: FaHeart, color: "bg-pink-500" }
  ];


  const diagnosticTools = [
    { name: "Topcon Autorefracto Meter", Icon: FaEye, color: "bg-blue-500" },
    { name: "Topcon Lensometer & Auto Lens Edger", Icon: FaTools, color: "bg-green-500" },
    { name: "Topcon Non-Contact Tonometer", Icon: FaMicroscope, color: "bg-purple-500" },
    { name: "Topcon Slit Lamp", Icon: TbLamp2, color: "bg-amber-500" },
    { name: "Essilar PD Meter", Icon: FaMicroscope, color: "bg-purple-500" },
    { name: "Digital Eye Chart", Icon: FaMicroscope, color: "bg-red-500" }
  ];

  const technologicalAdvancements = [
    { 
      year: "2020", 
      title: "Remidio Fundus Camera Installation", 
      description: "Installation of a Remidio Fundus Camera for advanced Retina Examination.",
      Icon: FaCamera, 
      color: "bg-red-500" 
    },
    { 
      year: "2021", 
      title: "Ophthalmic Imaging Upgrade", 
      description: "Further upgrades made to support high-quality ophthalmic imaging. The Remidio Photo Slit Lamp and the NIDEK Phoropter have been installed.",
      Icon: FaMicroscope,
      color: "bg-indigo-500" 
    },
    { 
      year: "2025", 
      title: "Elisar Field Analyzer", 
      description: "Introduction of the Elisar Field Analyzer, enabling comprehensive Glaucoma assessment.",
      Icon: FaChartLine, 
      color: "bg-emerald-500" 
    }
  ];

  return (
    <div className="bg-white pt-0">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            About <span className="text-blue-600">Us</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Delivering compassionate eye care with precision and advanced technology since 2015.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </div>
      </section>

      {/* Foundation Section */}
      <section className="py-2 sm:py-2 bg-white justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaHistory className="text-3xl text-blue-600" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Our Foundation
              </h2>
            </div>
            <p className="text-gray-700 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
              Our clinic began its operations on <span className="font-semibold text-blue-600">22 April 2015</span> with a strong foundation in essential eye-care diagnostics. At the time of establishment, we were equipped with the following testing instruments:
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
            {diagnosticTools.map((tool, i) => (
              <div key={i} className="flex justify-center">
                <DiagnosticTool {...tool} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technological Advancements Section */}
      <section className="py-8 sm:py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Diagnostic Capabilities Enhancement
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              To enhance our diagnostic capabilities, we continued to upgrade over the years:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {technologicalAdvancements.map((tech, i) => (
              <JourneyCard key={i} {...tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 sm:py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">Quality Eye care with advanced technology and <span className="font-bold">RAM (Reliability, Availability, and Maintainability)</span>.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Commitment & Growth Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-8 sm:mb-10">
            <FaClinicMedical className="text-4xl sm:text-5xl text-blue-600 mx-auto mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Journey of Growth
            </h2>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
              From humble beginnings to advanced diagnostic excellence — our progress reflects our commitment to delivering accurate, reliable, and compassionate eye care.
            </p>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 mt-6">
              <p className="text-gray-800 text-sm sm:text-base font-semibold italic">
                "Your vision deserves the very best care."
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-0 bg-white"></div>
    </div>
  );
}

export default Aboutus;