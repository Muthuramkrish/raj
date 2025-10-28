import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaArrowLeft, FaGlasses, FaEye, FaUser, 
  FaShoppingBag, FaCreditCard, FaShieldAlt 
} from "react-icons/fa";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <FaArrowLeft />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-blue-100"
        >
          {/* Hero Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                <FaGlasses className="text-white text-2xl" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-lg">
              Raj Eye Care & Opticals - Your Vision, Our Priority
            </p>
            <div className="mt-2 bg-gradient-to-r from-blue-500 to-cyan-500 h-1 w-24 mx-auto rounded-full"></div>
          </div>

          {/* Sections */}
          {[
            {
              icon: FaEye,
              title: "Welcome to Our Optical Family",
              content: [
                "At Raj Eye Care & Opticals, we understand that your vision health and personal information are precious. We are committed to protecting your privacy while providing exceptional eye care services and premium eyewear products.",
                "This Privacy Policy explains how we handle your personal and medical information when you visit our clinic, use our services, or purchase our eyewear products."
              ]
            },
            {
              icon: FaUser,
              title: "Information We Collect",
              content: [
                {
                  subtitle: "Vision & Health Information",
                  items: [
                    "Eye prescriptions and vision test results",
                    "Medical history related to eye health",
                    "Previous eyewear prescriptions and preferences",
                    "Appointment history and treatment records"
                  ],
                  gradient: "from-green-50 to-blue-50",
                  border: "border-green-100"
                },
                {
                  subtitle: "Customer & Order Details",
                  items: [
                    "Contact information and appointment preferences",
                    "Frame selections and lens customization choices",
                    "Purchase history and warranty information",
                    "Insurance details and payment information"
                  ],
                  gradient: "from-purple-50 to-pink-50",
                  border: "border-purple-100"
                }
              ]
            },
            {
              icon: FaShoppingBag,
              title: "How We Use Your Information",
              content: [
                {
                  subtitle: "Vision Care Services",
                  text: "Comprehensive eye examinations and prescription management",
                  gradient: "from-blue-50 to-cyan-50",
                  border: "border-blue-200"
                },
                {
                  subtitle: "Eyewear Customization",
                  text: "Personalized frame fitting and lens recommendations",
                  gradient: "from-green-50 to-emerald-50",
                  border: "border-green-200"
                },
                {
                  subtitle: "Appointment Management",
                  text: "Scheduling and reminders for eye check-ups",
                  gradient: "from-yellow-50 to-amber-50",
                  border: "border-yellow-200"
                },
                {
                  subtitle: "Product Updates",
                  text: "New frame collections and lens technology information",
                  gradient: "from-pink-50 to-rose-50",
                  border: "border-pink-200"
                }
              ]
            },
            {
              icon: FaShieldAlt,
              title: "Protecting Your Vision Data",
              content: [
                "Your eye health information and personal data are treated with the highest level of confidentiality. We employ robust security measures specifically designed for optical and healthcare data protection.",
                {
                  items: [
                    "Secure digital storage of eye prescriptions and medical records",
                    "Encrypted communication for all sensitive information",
                    "Restricted access to vision health data",
                    "Regular backups and security audits",
                    "Compliance with healthcare privacy regulations"
                  ]
                }
              ],
              gradient: "from-cyan-50 to-blue-50",
              border: "border-cyan-200"
            },
            {
              icon: FaCreditCard,
              title: "Information Sharing & Disclosure",
              content: [
                "We respect the confidentiality of your vision health information. Your data is shared only when necessary for your eye care:",
                {
                  items: [
                    "With your ophthalmologist or other eye care specialists for coordinated care",
                    "Insurance providers for claim processing (with your consent)",
                    "Trusted lens and frame manufacturers for custom orders",
                    "When required by law for public health or legal purposes"
                  ]
                }
              ]
            },
            {
              icon: null,
              title: "Your Privacy Rights",
              content: [
                {
                  cards: [
                    { subtitle: "Access Records", text: "Request copies of your eye prescriptions and purchase history", gradient: "from-emerald-50 to-green-50", border: "border-emerald-200" },
                    { subtitle: "Update Information", text: "Correct or update your vision preferences and contact details", gradient: "from-blue-50 to-indigo-50", border: "border-blue-200" },
                    { subtitle: "Service Preferences", text: "Manage communications about new frames and eye care tips", gradient: "from-amber-50 to-orange-50", border: "border-amber-200" },
                    { subtitle: "Data Questions", text: "Inquire about how we use and protect your information", gradient: "from-rose-50 to-pink-50", border: "border-rose-200" }
                  ]
                }
              ]
            }
          ].map((section, idx) => (
            <section key={idx} className="mb-8">
              {section.icon && (
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <section.icon className="text-blue-500" />
                  {section.title}
                </h2>
              )}
              {section.content.map((content, cidx) => {
                if (typeof content === "string") return <p key={cidx} className="text-gray-700 leading-relaxed mb-4">{content}</p>;

                if (content.items) {
                  return (
                    <div key={cidx} className={`bg-gradient-to-r ${content.gradient || "from-gray-50 to-gray-100"} p-4 rounded-xl border ${content.border || "border-gray-200"} mb-4`}>
                      {content.subtitle && <h3 className="font-semibold text-gray-900 mb-2">{content.subtitle}</h3>}
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {content.items.map((item, idx) => <li key={idx}>{item}</li>)}
                      </ul>
                      {content.text && <p className="text-gray-700">{content.text}</p>}
                    </div>
                  )
                }

                if (content.cards) {
                  return (
                    <div key={cidx} className="grid md:grid-cols-2 gap-4">
                      {content.cards.map((card, i) => (
                        <div key={i} className={`bg-gradient-to-br ${card.gradient} p-4 rounded-xl border ${card.border}`}>
                          <h3 className="font-semibold text-gray-900 mb-2">{card.subtitle}</h3>
                          <p className="text-gray-700">{card.text}</p>
                        </div>
                      ))}
                    </div>
                  )
                }

                return null;
              })}
            </section>
          ))}

          {/* Contact Info */}
          <section className="bg-gradient-to-r from-blue-50 to-cyan-100 p-6 rounded-xl border border-blue-200 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Optical Store</h2>
            <p className="text-gray-700 mb-4">
              Have questions about your privacy or our services? We're here to help with all your vision needs:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>📍 Store Address:</strong> 138, Paruthi Mall Complex, Sattur, Tamil Nadu 626203</p>
              <p><strong>📞 Vision Hotline:</strong> +91 75988 95773</p>
              <p><strong>📧 Eye Care Email:</strong> rajopticalssattur@gmail.com</p>
              <p><strong>🕒 Optical Hours:</strong> 9:00 AM - 8:00 PM (Daily)</p>
            </div>
          </section>

          {/* Footer Note */}
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white text-center">
            <p className="text-sm">
              <strong>Clear Vision, Clear Privacy:</strong> We may update this policy to reflect changes in our services. Significant updates will be communicated during your next visit to our optical store.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
