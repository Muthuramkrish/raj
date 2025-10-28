import { useState, useEffect, useMemo, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import gallery1 from "../assets/DSC_6525.JPG";
import gallery3 from "../assets/service-2.jpg";
import gallery4 from "../assets/service-1.jpg";
import gallery5 from "../assets/DSC_6209.JPG";
import gallery6 from "../assets/Customer1.png";
import gallery7 from "../assets/DSC_6198.jpg";
import gallery8 from "../assets/DSC_6194.JPG";
import gallery9 from "../assets/DSC_6066.JPG";

const galleryImages = [
  { id: 1, src: gallery1, category: "shop", title: "Store Front" },
  { id: 2, src: gallery3, category: "shop", title: "Frame Selection" },
  { id: 3, src: gallery4, category: "service", title: "Vision Testing" },
  { id: 4, src: gallery5, category: "service", title: "Lens Fitting" },
  { id: 5, src: gallery6, category: "service", title: "Customer Care" },
  { id: 6, src: gallery7, category: "shop", title: "Consultation Area" },
  { id: 7, src: gallery8, category: "service", title: "Eye Examination" },
  { id: 8, src: gallery9, category: "shop", title: "Eyewear Showcase" },
];

// Memoized gallery card for performance
const GalleryCard = memo(({ image, isCenter, onClick, isMobile }) => (
  <div className="flex flex-col items-center">
    <motion.div
      onClick={onClick}
      whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
      transition={{ duration: 0.3 }}
      className={`rounded-full overflow-hidden border-4 border-white shadow-lg cursor-pointer ${
        isMobile
          ? "w-48 h-48 sm:w-56 sm:h-56"
          : isCenter
          ? "w-40 h-40 md:w-40 md:h-40 lg:w-40 lg:h-40 scale-105"
          : "w-32 h-32 md:w-32 md:h-32 lg:w-32 lg:h-32 scale-90"
      }`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: isCenter ? 1.05 : 0.9 }}
    >
      <img
        src={image.src}
        alt={image.title}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </motion.div>

    {(isMobile || isCenter) && (
      <div className={`text-center mt-2 ${isMobile ? "px-4" : ""}`}>
        <p
          className={`font-medium text-gray-700 ${
            isMobile ? "text-lg" : "text-sm md:text-base"
          }`}
        >
          {image.title}
        </p>
        <span
          className={`text-blue-600 bg-blue-100 px-2 py-1 rounded-full mt-1 inline-block ${
            isMobile ? "text-sm" : "text-xs"
          }`}
        >
          {image.category}
        </span>
      </div>
    )}
  </div>
));

function FeaturedHighlights() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  // Detect mobile/desktop once per breakpoint change
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handleChange = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // Optimized auto-slide
  useEffect(() => {
    let frame;
    let startTime = performance.now();
    const duration = 3500;

    const animate = (time) => {
      if (time - startTime >= duration) {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
        startTime = time;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, []);

  const getVisibleImages = useCallback(() => {
    if (isMobile) return [galleryImages[currentIndex]];
    return [
      galleryImages[(currentIndex - 1 + galleryImages.length) % galleryImages.length],
      galleryImages[currentIndex],
      galleryImages[(currentIndex + 1) % galleryImages.length],
    ];
  }, [isMobile, currentIndex]);

  const visibleImages = useMemo(() => getVisibleImages(), [getVisibleImages]);

  const handleServicesClick = useCallback(() => navigate("/Service"), [navigate]);
  const handleProductsClick = useCallback(() => navigate("/Products"), [navigate]);

  return (
    <section className="py-8 md:py-12 px-4 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Featured <span className="text-blue-600">Highlights</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base lg:text-lg">
            Discover our premium eyewear collection and state-of-the-art eye care services
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center mb-8 md:mb-12">
          {!isMobile && (
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-0.5 bg-blue-200"></div>
          )}
          <div
            className={`relative flex items-center justify-center ${
              isMobile ? "gap-0" : "gap-4 md:gap-8 lg:gap-16"
            } z-10`}
          >
            {visibleImages.map((image, idx) => (
              <GalleryCard
                key={image.id}
                image={image}
                isCenter={isMobile ? true : idx === 1}
                onClick={() => setSelectedImage(image)}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>

        {/* Text & Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-6 md:mb-8"
        >
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
            Premium Eye Care Experience
          </h3>
          <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base lg:text-lg">
            Experience the perfect blend of advanced eye care technology and stylish eyewear
            solutions. Our expert team provides personalized vision care with the latest diagnostic
            equipment and premium frame collections.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleServicesClick}
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium text-sm md:text-base w-full sm:w-auto text-center"
            >
              Our Services
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleProductsClick}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm md:text-base w-full sm:w-auto text-center"
            >
              View Brands
            </motion.button>
          </div>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {galleryImages.map((_, index) => (
            <motion.button
              key={index}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="modal"
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm md:max-w-md lg:max-w-lg w-full bg-white rounded-xl shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Close modal"
              >
                ×
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h3 className="font-semibold text-gray-900 text-lg md:text-xl">
                    {selectedImage.title}
                  </h3>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full capitalize self-start">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default memo(FeaturedHighlights);
