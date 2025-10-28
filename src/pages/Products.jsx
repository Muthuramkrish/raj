import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaFilter, FaStar, FaEye, FaAward, FaCheckCircle, FaGem, FaHeart, FaBolt, FaArrowRight } from "react-icons/fa";
import Navbar from "../components/Navlinks";
import Footer from "./Footer";
import backgroundImage from "../assets/bg5.jpg";
import lens1 from "../assets/PolyliteyearlycontactlensesSoftTouchLenses-1.jpg";
import lens2 from "../assets/Essilor.jpg";
import lens3 from "../assets/zeissgold.jpg";
import lens4 from "../assets/Bausch + Lomb.jpg";
import lens5 from "../assets/Vision_RX_Lab.jpg";

function Products() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      const images = [lens1, lens2, lens3, lens4, lens5];
      const promises = images.map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = src;
        });
      });
      
      await Promise.all(promises);
      setIsLoading(false);
    };

    preloadImages();
  }, []);

  const brands = [
    { id: "all", name: "All Brands", count: 5 },
    { id: "softtouch", name: "Soft Touch", count: 1 },
    { id: "essilor", name: "Essilor", count: 1 },
    { id: "zeiss", name: "Zeiss", count: 1 },
    { id: "bausch", name: "Bausch & Lomb", count: 1 },
    { id: "Vison Rx Lab", name: "Vison Rx Lab", count: 1 },
  ];

  const lensProducts = [
    { 
      img: lens1, 
      name: "Soft Touch Yearly Contact Lenses", 
      brand: "softtouch",
      description: "Polylite Soft Touch yearly lenses are designed for long-term comfort and clear vision. They provide high oxygen permeability, ensuring your eyes stay healthy. Ideal for sensitive eyes, they combine durability with natural feel for daily wear.",
      benefits: ["Reduces dry eye", "Ideal for sensitive eyes", "Cost-effective"],
      technology: "Hydrogel with SmartSilk",
      usage: "Refer Product Catalogue",
    },
    { 
      img: lens2, 
      name: "Essilor Crizal Prevencia", 
      brand: "essilor",
      features: ["Blue Light Filter", "Anti-reflective", "Scratch resistant"],
      description: "Essilor Crizal Prevencia lenses filter harmful blue light while maintaining vision clarity. They reduce eye strain during digital device use. The advanced anti-reflective coating improves contrast and comfort throughout the day.",
      benefits: ["Reduces eye strain", "Enhances contrast", "Retinal protection"],
      technology: "Light Scan technology",
      usage: "Refer Product Catalogue",
    },
    { 
      img: lens3, 
      name: "Zeiss DuraVision BlueProtect", 
      brand: "zeiss",
      description: "Zeiss DuraVision BlueProtect lenses offer professional-grade blue light protection. With LotuTec coating, they remain easy to clean and highly durable. Ideal for prolonged computer or screen usage, they enhance visual comfort.",
      benefits: ["Superior clarity", "Reduces glare", "Professional grade"],
      technology: "BlueReflect technology",
      usage: "Refer Product Catalogue",
    },
    { 
      img: lens4, 
      name: "Bausch & Lomb ULTRA", 
      brand: "bausch",
      description: "Bausch + Lomb ULTRA lenses feature MoistureSeal technology for all-day comfort. Designed for active lifestyles, they maintain consistent hydration and clarity. These lenses also offer UV protection, keeping your eyes safe under the sun.",
      benefits: ["Active lifestyle", "Consistent vision", "Comfortable"],
      technology: "MoistureSeal technology",
      usage: "Refer Product Catalogue",
    },
    { 
      img: lens5, 
      name: "Vision Rx Lab Blue Cut Zero Power Lenses", 
      brand: "Vison Rx Lab",
      description: "Vision Rx Lab Blue Cut lenses provide comprehensive protection against harmful blue light emitted from digital screens. These premium lenses reduce digital eye strain, prevent headaches, and improve sleep quality by filtering high-energy blue light while maintaining true color perception.",
      benefits: ["Reduces digital eye strain", "Improves sleep quality", "Prevents headaches & migraines", "UV protection"],
      technology: "Advanced Blue Cut Technology with AR Coating",
      usage: "Refer Product Catalogue",
    },
  ];

  const filteredProducts = selectedBrand === "all" 
    ? lensProducts 
    : lensProducts.filter(product => product.brand === selectedBrand);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading Premium Lenses...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
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
                <div className="mb-6 md:mb-8">
                  <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                    Premium <span className="text-blue-400">Lens Collection</span>
                  </motion.h1>
                  <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-8">
                    Advanced eyewear technology for crystal clear vision
                  </motion.p>
                  </div>
              </div>
            </section>

      {/* Main Content */}
      <section className="py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            
            <div className="hidden lg:block lg:w-64 space-y-4">
              {/* Showing Products */}
              <div className="text-right">
                <p className="text-gray-500 text-xs">Showing</p>
                <p className="text-gray-900 font-semibold text-sm">{filteredProducts.length} products</p>
              </div>

              {/* Filter Button */}
              <button
                onClick={() => setShowMobileFilters(true)}
                className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all text-sm w-full justify-center"
              >
                <FaFilter className="text-xs" />
                <span>Filters</span>
              </button>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 sticky top-4">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900 text-sm">FILTER BRANDS</h3>
                </div>
                <div className="p-4 space-y-1">
                  {brands.map((brand) => (
                    <button
                      key={brand.id}
                      onClick={() => setSelectedBrand(brand.id)}
                      className={`flex items-center justify-between w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all ${
                        selectedBrand === brand.id
                          ? "text-blue-600 font-semibold bg-blue-50 border border-blue-200"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      <span>{brand.name}</span>
                      <span
                        className={`text-xs px-1.5 py-0.5 rounded ${
                          selectedBrand === brand.id
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {brand.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:hidden flex items-center justify-between mb-4 px-2">
              <div>
                <p className="text-gray-500 text-xs">Showing</p>
                <p className="text-gray-900 font-semibold text-sm">{filteredProducts.length} products</p>
              </div>
              {/* Mobile Filter Button */}
              <button
                onClick={() => setShowMobileFilters(true)}
                className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
              >
                <FaFilter className="text-xs" />
                <span>Filters</span>
              </button>
            </div>
            {/* Cards Grid */}
            <div className="flex-1">
              {/* Mobile Filter Display */}
              <div className="lg:hidden flex items-center gap-3 mb-4 p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                <FaFilter className="text-blue-600 text-sm" />
                <span className="text-gray-700 font-medium text-sm">
                  {brands.find(b => b.id === selectedBrand)?.name}
                </span>
                {selectedBrand !== "all" && (
                  <button
                    onClick={() => setSelectedBrand("all")}
                    className="ml-auto text-blue-600 text-xs hover:text-blue-800 font-medium"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(product)}
                  >
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 overflow-hidden aspect-square flex flex-col h-full">
                      <div className="relative h-3/5 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                        <img
                          src={product.img}
                          alt={product.name}
                          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Brand */}
                          <div className="mb-2">
                            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                              {brands.find(b => b.id === product.brand)?.name}
                            </span>
                          </div>

                          <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1 line-clamp-2">
                            {product.name}
                          </h3>
                          </div>

                          {/* Short Description */}
                          <p className="text-gray-600 text-xs line-clamp-3">
                            {product.description}
                          </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                          <div className="flex items-center gap-1 text-blue-600 font-semibold text-xs group-hover:gap-1.5 transition-all">
                            <span>Details</span>
                            <FaArrowRight className="text-xs" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaTimes className="text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-sm mb-3">No lenses found matching your selection.</p>
                  <button
                    onClick={() => setSelectedBrand("all")}
                    className="text-blue-600 hover:text-blue-700 font-semibold text-xs px-4 py-2 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    View All Lenses
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile Filters */}
      <AnimatePresence>
        {showMobileFilters && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={() => setShowMobileFilters(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-80 max-w-full bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Filter Brands</h3>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <FaTimes className="text-gray-600" />
                </button>
              </div>

              <div className="p-4">
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <button
                      key={brand.id}
                      onClick={() => {
                        setSelectedBrand(brand.id);
                        setShowMobileFilters(false);
                      }}
                      className={`flex items-center justify-between w-full text-left px-3 py-3 rounded-lg text-sm transition-all ${
                        selectedBrand === brand.id
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span>{brand.name}</span>
                      <span className={`text-xs px-1.5 py-0.5 rounded ${
                        selectedBrand === brand.id 
                          ? "bg-white/20 text-white" 
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        {brand.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden border border-gray-300 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <FaTimes className="text-sm" />
              </button>
              
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
                  <img
                    src={selectedImage.img}
                    alt={selectedImage.name}
                    className="w-full h-64 object-contain"
                  />
                </div>
                
                <div className="lg:w-3/5 p-6 lg:p-8">
                                    
                  <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2 text-sm">ADVANCED TECHNOLOGY</h4>
                    <p className="text-blue-800 text-sm">{selectedImage.technology}</p>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                    {selectedImage.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">KEY BENEFITS:</h4>
                    <div className="space-y-2">
                      {selectedImage.benefits?.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                          <FaCheckCircle className="text-green-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="font-semibold">For Feature Details:</span>
                      <span>{selectedImage.usage}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Products;