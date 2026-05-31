import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaHeart, FaGem, FaBolt, FaStar, FaSun, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import lens1 from "../assets/PolyliteyearlycontactlensesSoftTouchLenses-1.jpg";
import lens2 from "../assets/Essilor.jpg";
import lens3 from "../assets/zeissgold.jpg";
import lens4 from "../assets/Bausch + Lomb.jpg";
import lens5 from "../assets/Vision_RX_Lab.jpg";

function ProductShowcase() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { 
      img: lens1, 
      name: "All Branded Contact Lenses", 
      description: "Multi-Brand Premium Selection",
      icon: FaHeart,
      bulletPoints: ["Daily, Monthly & Yearly Lenses", "Wide Range of Color Lenses"],
      details: {
        description: "All branded contact lenses, including all types of daily, monthly, yearly, and color contact lenses, are available. Experience supreme comfort and perfect visual clarity with premium options tailored to your lifestyle.",
        benefits: ["Daily, Monthly & Yearly Lenses Available", "Wide Range of Color Lenses", "All Branded Lenses with Maximum Comfort"],
        technology: "Multi-Brand Premium Selection"
      }
    },
    { 
      img: lens2, 
      name: "Essilor", 
      description: "Light Scan technology",
      icon: FaGem,
      bulletPoints: ["Crizal Blue Light Filter", "Glare & UV Protection"],
      details: {
        description: "Essilor Crizal Prevencia lenses filter harmful blue-violet light while maintaining vision clarity, protecting your eyes and reducing fatigue during daily digital device use.",
        benefits: ["Filters harmful blue-violet light", "Reduces digital eye strain", "Advanced anti-reflective coating"],
        technology: "Light Scan technology"
      }
    },
    { 
      img: lens3, 
      name: "Zeiss", 
      description: "BlueReflect technology",
      icon: FaBolt,
      bulletPoints: ["DuraVision BlueProtect", "Exceptional Clarity"],
      details: {
        description: "Zeiss DuraVision BlueProtect lenses offer professional-grade blue light protection. They are highly durable, easy to clean, and extremely comfortable.",
        benefits: ["Professional blue light protection", "Easy-to-clean LotuTec coating", "Superb visual clarity and contrast"],
        technology: "BlueReflect technology"
      }
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Clean Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Premium <span className="text-blue-600">Lens Collection</span>
          </h2>
          <p className="text-gray-600">
            Advanced optical solutions for modern vision needs
          </p>
        </motion.div>

        {/* Clean Grid Layout - 3 Center Lenses */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => {
                  if (product.details) {
                    setSelectedProduct(product);
                  } else {
                    navigate("/products");
                  }
                }}
              >
                {/* Simple Elegant Card */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-[290px] flex flex-col justify-between">
                  {/* Image Container */}
                  <div className="relative h-32 bg-gray-100 overflow-hidden flex-shrink-0">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 p-2 rounded-lg shadow-sm">
                      <IconComponent className="text-blue-600 text-sm" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-base mb-1">
                        {product.name}
                      </h3>
                      <p className="text-blue-600 text-xs font-semibold leading-relaxed mb-2">
                        {product.description}
                      </p>
                      {product.bulletPoints && (
                        <ul className="text-gray-500 text-[10px] space-y-1 mb-3">
                          {product.bulletPoints.map((bp, idx) => (
                            <li key={idx} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0 animate-pulse"></span>
                              <span>{bp}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 text-xs font-semibold">Learn more</span>
                      <FaArrowRight className="text-blue-600 text-[10px]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-500 group/cta">
            <div className="text-left">
              <h4 className="font-bold text-gray-900 text-lg mb-1">Ready to explore more?</h4>
              <p className="text-gray-600 text-sm">Discover our complete collection with detailed specifications</p>
            </div>
          <button
            onClick={() => navigate("/products")}
            className="bg-gradient-to-r from-blue-900 to-blue-500 text-white font-bold py-4 px-8 rounded-2xl text-sm transition-all duration-300 flex items-center gap-3 whitespace-nowrap shadow-lg hover:shadow-xl relative overflow-hidden group/btn"
          >
            <span>View all products</span>
            <FaArrowRight className="text-xs" />
          </button>
          </div>
        </motion.div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="relative max-w-xl w-full bg-white rounded-2xl overflow-hidden border border-gray-300 shadow-2xl p-6 md:p-8 cursor-default animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors cursor-pointer w-8 h-8 flex items-center justify-center font-bold"
            >
              &times;
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start pt-2">
              {/* Image */}
              <div className="w-32 h-32 bg-gray-50 rounded-xl p-3 border border-gray-150 flex items-center justify-center flex-shrink-0">
                <img 
                  src={selectedProduct.img} 
                  alt={selectedProduct.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4 w-full">
                <div className="flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                    Premium Lens
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{selectedProduct.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {selectedProduct.details.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Key Benefits</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedProduct.details.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                        <FaCheckCircle className="text-green-500 text-xs flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase block">Technology</span>
                    <span className="text-xs font-semibold text-gray-800">{selectedProduct.details.technology}</span>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedProduct(null);
                      navigate("/products");
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors w-full sm:w-auto justify-center"
                  >
                    <span>View Lens Page</span>
                    <FaArrowRight className="text-[10px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductShowcase;