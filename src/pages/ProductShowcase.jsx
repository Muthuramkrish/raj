import { motion } from "framer-motion";
import { FaArrowRight, FaHeart, FaGem, FaBolt, FaStar, FaSun } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import lens1 from "../assets/PolyliteyearlycontactlensesSoftTouchLenses-1.jpg";
import lens2 from "../assets/Essilor.jpg";
import lens3 from "../assets/zeissgold.jpg";
import lens4 from "../assets/Bausch + Lomb.jpg";
import lens5 from "../assets/Vision_RX_Lab.jpg";

function ProductShowcase() {
  const navigate = useNavigate();

  const products = [
    { 
      img: lens1, 
      name: "Soft Touch", 
      description: "Hydrogel with SmartSlik",
      icon: FaHeart,
    },
    { 
      img: lens2, 
      name: "Essilor", 
      description: "Light Scan technology",
      icon: FaGem,
    },
    { 
      img: lens3, 
      name: "Zeiss", 
      description: "BlueReflect technology",
      icon: FaBolt,
    },
    { 
      img: lens4, 
      name: "Bausch & Lomb", 
      description: "MoistureSeal technology",
      icon: FaStar,
    },
    { 
      img: lens5, 
      name: "Vision Rx Lab", 
      description: "Advanced Blue Cut Technology with AR Coating",
      icon: FaSun,
    },
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

        {/* Clean Grid Layout - 5 Cards in Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
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
                onClick={() => navigate("/products")}
              >
                {/* Simple Elegant Card */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-64">
                  {/* Image Container */}
                  <div className="relative h-32 bg-gray-100 overflow-hidden">
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
                  <div className="p-4 h-32 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-base mb-1">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 text-sm font-medium">Learn more</span>
                      <FaArrowRight className="text-blue-600 text-xs" />
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
    </section>
  );
}

export default ProductShowcase;