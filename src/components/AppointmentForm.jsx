import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Reusable Input Component
const FormInput = ({ label, type, name, value, onChange, placeholder, required = false }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">{label} {required && "*"}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-gray-50"
    />
  </div>
);

function AppointmentForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    message: ""
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Function to check if WhatsApp is installed
  const isWhatsAppInstalled = () => {
    // For mobile devices
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      return true; // Assume WhatsApp is installed on mobile devices
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `
Hello Sir, I would like to book an appointment for an eye consultation.
Here's my details:

*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Preferred Date:* ${formData.preferredDate}
*Additional Message:* ${formData.message || "No additional message"}

Thank you!
    `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp phone number
    const whatsappNumber = "917598895773";
    
    // Check if WhatsApp is installed
    const hasWhatsApp = isWhatsAppInstalled();
    
    if (hasWhatsApp) {
      // Open WhatsApp app directly
      const whatsappAppUrl = `whatsapp://send?phone=${whatsappNumber}&text=${encodedMessage}`;
      window.location.href = whatsappAppUrl;
      
      // Fallback to WhatsApp Web after a delay if app doesn't open
      setTimeout(() => {
        if (!document.hidden) {
          const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
          window.open(whatsappWebUrl, '_blank');
        }
      }, 2000);
    } else {
      // Directly open WhatsApp Web for desktop or devices without WhatsApp
      const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
      window.open(whatsappWebUrl, '_blank');
    }
    
    // Reset form and close modal
    setFormData({ fullName: "", email: "", phone: "", preferredDate: "", message: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden border border-gray-200"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-600 px-6 py-5 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-white">Book Your Appointment</h2>
                <p className="text-teal-100 text-sm mt-1">Get expert eye care consultation</p>
              </div>
              <button
                className="text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200 hover:rotate-90"
                onClick={onClose}
                aria-label="Close Appointment Form"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <FormInput 
                label="Full Name" 
                type="text" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
                placeholder="Enter your full name" 
                required 
              />
              <FormInput 
                label="Email Address" 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="your.email@example.com" 
                required 
              />
              <FormInput 
                label="Phone Number" 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="+91 1234567890" 
                required 
              />
              <FormInput 
                label="Preferred Date" 
                type="date" 
                name="preferredDate" 
                value={formData.preferredDate} 
                onChange={handleChange} 
                required 
              />

              {/* Message field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific concerns or additional information..."
                  rows="3"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-gray-50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white py-4 rounded-xl font-bold hover:from-blue-500 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Request Appointment via WhatsApp
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AppointmentForm;