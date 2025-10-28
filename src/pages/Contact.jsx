import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function Contact() {
  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-sm" />,
      color: "bg-blue-500",
      label: "Call Now",
      content: (
        <a
          href="tel:+917598895773|tel:+917598865773"
          className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base"
        >

          +91 7598895773 | +91 7598865773
        </a>
      ),
      
    },
    {
      icon: <FaEnvelope className="text-sm" />,
      color: "bg-green-500",
      label: "Email Us",
      content: (
        <a
          href="mailto:rajopticalssattur@gmail.com"
          className="text-green-600 hover:text-green-700 text-xs sm:text-sm break-all"
        >
          rajopticalssattur@gmail.com
        </a>
      ),
    },
    {
      icon: <FaMapMarkerAlt className="text-sm" />,
      color: "bg-red-500",
      label: "Visit Clinic",
      content: (
        <p className="text-gray-700 text-xs sm:text-sm">
          138, Paruthi Mall Complex, Sattur
        </p>
      ),
    },
    {
      icon: <FaClock className="text-sm" />,
      color: "bg-purple-500",
      label: "Open Hours",
      content: (
        <p className="text-gray-700 text-xs sm:text-sm">
          Mon - Sat: 9 AM - 9 PM<br />
          Sunday: 9 AM - 8 PM
        </p>
      ),
    },
  ];

  const features = [
    {
      icon: <FaClock className="text-sm" />,
      color: "bg-blue-100 text-blue-600",
      text: "Flexible Timings - Open everyday from 9 AM to 9 PM"
    },
    {
      icon: <FaPhoneAlt className="text-sm" />,
      color: "bg-green-100 text-green-600",
      text: "Instant Support - Call us directly for quick assistance"
    },
    {
      icon: <FaMapMarkerAlt className="text-sm" />,
      color: "bg-purple-100 text-purple-600",
      text: "Convenient Location - Easy to find in Paruthi Mall Complex"
    },
    {
      icon: <FaEnvelope className="text-sm" />,
      color: "bg-orange-100 text-orange-600",
      text: "Email Support - Get detailed responses via email"
    }
  ];

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.7198134412038!2d77.9186629!3d9.3580434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cab7f6d1bcf9%3A0x18a5cba734a42a30!2sRAJ%20EYE%20CARE%20AND%20OPTICALS!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <section id="contact" className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Visit us today for comprehensive eye care services. Your vision is our priority.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Info Section */}
          <div className="space-y-6">
            {contactInfo.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <div className={`p-3 ${item.color} rounded-xl text-white flex-shrink-0 shadow-md`}>
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-900 text-lg mb-1">
                    {item.label}
                  </p>
                  <div className="mt-1">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <div className="p-5 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                Our Location
              </h3>
              <p className="text-gray-600 mt-1 text-sm">
                Find us easily in Sattur
              </p>
            </div>
            
            <div className="w-full h-64 sm:h-80 relative">
              <iframe
                src={mapUrl}
                className="w-full h-full absolute inset-0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Raj Eye Care Location Map"
              ></iframe>
            </div>
            
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <a
                href="https://maps.google.com/maps?q=RAJ+EYE+CARE+AND+OPTICALS+Sattur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-2 py-2 transition-colors"
              >
                <FaMapMarkerAlt className="text-xs" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;