import { useState, useEffect, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import AppointmentForm from './AppointmentForm';
import { useNavigate } from 'react-router-dom';

import hero1 from '../assets/DSC_6525.JPG';
import hero2 from '../assets/DSC_6198.jpg';
import hero3 from '../assets/DSC_6066.JPG';


const slides = [
  {
    id: 1,
    backgroundImage: hero1,
    title: "Your Vision, Our Priority",
    description: "Experience world-class eye care with state-of-the-art technology and expert ophthalmologists.",
    buttonText: "Request Appointment",
    buttonAction: (setIsFormOpen) => setIsFormOpen(true),
    stats: [
      { value: "99%", label: "Patient Satisfaction" },
      { value: "10+", label: "Years Experience" },
      { value: "20k+", label: "Patients Served" }
    ]
  },
  {
    id: 2,
    backgroundImage: hero2,
    title: "Advanced Eye Treatments",
    description: "Comprehensive eye care solutions from routine exams to complex surgical procedures.",
    buttonText: "Our Services",
    buttonAction: (setIsFormOpen, navigate) => navigate('/Service'),
    features: ["Ultrasonic lens & frame cleaning", "Photo lens Tester", "Retina Care", "Blue light filter Tester"]
  },
  {
    id: 3,
    backgroundImage: hero3,
    title: "Premium Optical Solutions",
    description: "Designer frames and precision lenses combining style with optimal vision correction.",
    buttonText: "Browse Collection",
    buttonAction: (setIsFormOpen, navigate) => navigate('/Products'),
    highlights: ["Latest Fashion Frames", "Blue Light Protection", "Prescription Lenses", "Custom Fitting"]
  },
];

const Hero = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const navigate = useNavigate();

  // Minimum swipe distance
  const minSwipeDistance = 50;

  // Detect desktop mode properly
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isLandscape = width > height;
      
      // Consider desktop if width is large OR if in landscape with decent width
      let desktop = width >= 1024;
      
      // Tablets and landscape phones should use desktop behavior
      if (width >= 768 && isLandscape) {
        desktop = true;
      }
      
      // Very small screens always mobile
      if (width < 640) {
        desktop = false;
      }
      
      setIsDesktop(desktop);
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
  }, []);

  // Fixed image loading - simpler and more reliable
  useEffect(() => {
    let mounted = true;
    let loadedCount = 0;
    const totalImages = slides.length;

    const handleImageLoad = (imageId) => {
      if (!mounted) return;
      
      loadedCount++;
      setLoadedImages(prev => ({
        ...prev,
        [imageId]: true
      }));

      // When all images are loaded, set loading to false
      if (loadedCount === totalImages) {
        setTimeout(() => {
          if (mounted) {
            setIsLoading(false);
          }
        }, 300);
      }
    };

    // Load all images
    slides.forEach(slide => {
      const img = new Image();
      img.onload = () => handleImageLoad(slide.id);
      img.onerror = () => handleImageLoad(slide.id); // Even if error, count as loaded
      img.src = slide.backgroundImage;
    });

    // Fallback timeout in case some images don't load
    const fallbackTimeout = setTimeout(() => {
      if (mounted && loadedCount < totalImages) {
        console.warn('Some images failed to load, continuing anyway...');
        setIsLoading(false);
      }
    }, 5000);

    return () => {
      mounted = false;
      clearTimeout(fallbackTimeout);
    };
  }, []);

  // Optimized auto slide
  useEffect(() => {
    if (isLoading) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isLoading]);

  // Optimized touch events for mobile only
  const onTouchStart = useCallback((e) => {
    if (isDesktop) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, [isDesktop]);

  const onTouchMove = useCallback((e) => {
    if (isDesktop) return;
    setTouchEnd(e.targetTouches[0].clientX);
  }, [isDesktop]);

  const onTouchEnd = useCallback(() => {
    if (isDesktop || !touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  }, [isDesktop, touchStart, touchEnd, minSwipeDistance]);

  // Memoized navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  // Handle button actions
  const handleButtonAction = useCallback((slide) => {
    if (slide.buttonAction) {
      slide.buttonAction(setIsFormOpen, navigate);
    }
  }, [navigate]);

  // Loading state
  if (isLoading) {
    return (
      <section className="relative h-[60vh] md:h-[85vh] min-h-[400px] md:min-h-[500px] bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium text-sm md:text-base">Loading Excellence in Eye Care...</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative">
        {/* Hero Carousel */}
        <div 
          className="relative h-[60vh] md:h-[85vh] min-h-[400px] md:min-h-[500px] overflow-hidden"
          aria-label="Hero carousel"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Slider Container */}
          <div
            className="flex h-full transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div 
                key={slide.id} 
                className="w-full h-full flex-shrink-0 relative"
                aria-hidden={index !== currentSlide}
              >
                {/* Background Image - Fixed loading */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ 
                    backgroundImage: `url(${slide.backgroundImage})`,
                  }}
                  role="img"
                  aria-label={slide.title}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex items-center justify-start px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                  <div className={`w-full ${isDesktop ? 'max-w-4xl' : 'max-w-2xl'}`}>
                    <motion.h1 
                      className={`font-bold text-white mb-3 md:mb-4 leading-tight ${
                        isDesktop 
                          ? 'text-4xl lg:text-5xl xl:text-6xl' 
                          : 'text-2xl md:text-3xl'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {slide.title}
                    </motion.h1>
                    
                    <motion.p 
                      className={`text-white mb-4 md:mb-6 leading-relaxed ${
                        isDesktop 
                          ? 'text-lg lg:text-xl max-w-2xl' 
                          : 'text-sm md:text-base max-w-lg'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {slide.description}
                    </motion.p>

                    {/* Stats */}
                    {slide.stats && (
                      <motion.div 
                        className="flex gap-4 md:gap-6 mb-4 md:mb-6 flex-wrap"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {slide.stats.map((stat, idx) => (
                          <div key={idx} className="text-white">
                            <div className={`font-bold text-white-900 ${
                              isDesktop ? 'text-2xl lg:text-3xl' : 'text-xl md:text-2xl'
                            }`}>{stat.value}</div>
                            <div className={`opacity-90 ${
                              isDesktop ? 'text-sm lg:text-base' : 'text-xs md:text-sm'
                            }`}>{stat.label}</div>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {/* Features Grid */}
                    {slide.features && (
                      <motion.div 
                        className={`grid gap-2 mb-4 md:mb-6 ${
                          isDesktop 
                            ? 'grid-cols-2 max-w-2xl' 
                            : 'grid-cols-1 xs:grid-cols-2 max-w-md'
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {slide.features.map((feature, idx) => (
                          <div key={idx} className={`flex items-center text-white ${
                            isDesktop ? 'text-base' : 'text-xs md:text-sm'
                          }`}>
                            <svg className={`flex-shrink-0 mr-2 text-green-400 ${
                              isDesktop ? 'w-4 h-4' : 'w-3 h-3 md:w-4 md:h-4'
                            }`} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {/* Highlights */}
                    {slide.highlights && (
                      <motion.div 
                        className="flex flex-wrap gap-2 mb-4 md:mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {slide.highlights.map((highlight, idx) => (
                          <span 
                            key={idx}
                            className={`px-2 py-1 md:px-3 md:py-1 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30 ${
                              isDesktop ? 'text-sm' : 'text-xs md:text-sm'
                            }`}
                          >
                            {highlight}
                          </span>
                        ))}
                      </motion.div>
                    )}

                    {/* CTA Button */}
                    <motion.button
                      onClick={() => handleButtonAction(slide)}
                      className={`inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl ${
                        isDesktop 
                          ? 'px-8 py-4 text-base' 
                          : 'px-6 py-3 text-sm md:text-base'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {slide.buttonText}
                      <svg className={`ml-2 md:ml-3 ${
                        isDesktop ? 'w-5 h-5' : 'w-4 h-4 md:w-5 md:h-5'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {isDesktop && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-30 backdrop-blur-sm border border-white/20 hover:scale-110"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-30 backdrop-blur-sm border border-white/20 hover:scale-110"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dots Indicator */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 flex space-x-2 z-30 ${
            isDesktop ? 'bottom-8 space-x-3' : 'bottom-4 space-x-2'
          }`}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30 ${
                  index === currentSlide 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-white/30 hover:bg-white/50'
                } ${
                  isDesktop ? 'w-3 h-3' : 'w-2 h-2 md:w-3 md:h-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Scroll Indicator */}
          {isDesktop && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
              <div className="flex flex-col items-center text-white/90">
                <div className="w-5 h-10 border-2 border-white/50 rounded-full flex justify-center"></div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Appointment Form */}
      <AppointmentForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
});

Hero.displayName = 'Hero';

export default Hero;