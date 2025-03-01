import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    tourType: "day-tour", // Default selection
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [activeField, setActiveField] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo purposes - in production, use actual API endpoint
      // const response = await fetch("http://localhost:5000/send-email", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      // Simulate successful response
      setSuccess("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "", tourType: "day-tour" });
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again later.");
    }
    setLoading(false);
  };

  const tourOptions = [
    { id: "day-tour", label: "Day Tour" },
    { id: "multi-day", label: "Multi-Day Adventure" },
    { id: "custom", label: "Custom Experience" },
    { id: "airport", label: "Airport Transfer" },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1625394675477-857bb85af8d3?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90"
            >
              Get in touch to plan your perfect Sri Lankan adventure
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"></div>
              <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-yellow-100 opacity-50"></div>
              <div className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-yellow-100 opacity-50"></div>

              <h2 className="text-2xl font-bold mb-8 relative">Get in Touch</h2>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-6 group">
                  <div className="bg-yellow-100 p-3 rounded-full text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">
                      +94 713 543 429 / +94 777 479 441
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      Available 8am - 8pm (Sri Lanka Time)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="bg-yellow-100 p-3 rounded-full text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">roshanstarlit@gmail.com</p>
                    <p className="text-gray-500 text-sm mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="bg-yellow-100 p-3 rounded-full text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-gray-600">Galle, Sri Lanka</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Tours available throughout Sri Lanka
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-yellow-50 rounded-xl border border-yellow-100 relative z-10">
                <h3 className="font-semibold mb-2">Quick Response Guarantee</h3>
                <p className="text-gray-600 text-sm">
                  We pride ourselves on fast communication. If you don't hear
                  back within 24 hours, your first hour of touring is on us!
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"></div>
              <span className="absolute -right-10 -bottom-10 text-9xl opacity-5">
                🛺
              </span>

              <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>

              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-100 rounded-xl p-6 text-center"
                >
                  <CheckCircle
                    className="mx-auto mb-4 text-green-500"
                    size={48}
                  />
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-gray-600">{success}</p>
                  <button
                    onClick={() => setSuccess("")}
                    className="mt-4 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setActiveField("name")}
                      onBlur={() => setActiveField("")}
                      className={`w-full px-4 py-3 border-2 rounded-xl bg-gray-50 focus:bg-white transition-all duration-300 ${
                        activeField === "name"
                          ? "border-yellow-500 shadow-md"
                          : "border-gray-200"
                      }`}
                      placeholder="Your Name"
                      required
                    />
                    <label
                      htmlFor="name"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        activeField === "name" || formData.name
                          ? "-top-2.5 text-xs bg-white px-2 text-yellow-600"
                          : "top-3 text-gray-500"
                      }`}
                    >
                      Your Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setActiveField("email")}
                      onBlur={() => setActiveField("")}
                      className={`w-full px-4 py-3 border-2 rounded-xl bg-gray-50 focus:bg-white transition-all duration-300 ${
                        activeField === "email"
                          ? "border-yellow-500 shadow-md"
                          : "border-gray-200"
                      }`}
                      placeholder="Your Email"
                      required
                    />
                    <label
                      htmlFor="email"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        activeField === "email" || formData.email
                          ? "-top-2.5 text-xs bg-white px-2 text-yellow-600"
                          : "top-3 text-gray-500"
                      }`}
                    >
                      Your Email
                    </label>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      I'm interested in:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {tourOptions.map((option) => (
                        <div
                          key={option.id}
                          className={`border-2 rounded-lg p-3 cursor-pointer transition-all ${
                            formData.tourType === option.id
                              ? "border-yellow-500 bg-yellow-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          onClick={() =>
                            setFormData({ ...formData, tourType: option.id })
                          }
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                formData.tourType === option.id
                                  ? "border-yellow-500"
                                  : "border-gray-400"
                              }`}
                            >
                              {formData.tourType === option.id && (
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                              )}
                            </div>
                            <span className="text-sm">{option.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      rows={4}
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setActiveField("message")}
                      onBlur={() => setActiveField("")}
                      className={`w-full px-4 py-3 border-2 rounded-xl bg-gray-50 focus:bg-white transition-all duration-300 ${
                        activeField === "message"
                          ? "border-yellow-500 shadow-md"
                          : "border-gray-200"
                      }`}
                      placeholder="Your Message"
                      required
                    ></textarea>
                    <label
                      htmlFor="message"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        activeField === "message" || formData.message
                          ? "-top-2.5 text-xs bg-white px-2 text-yellow-600"
                          : "top-3 text-gray-500"
                      }`}
                    >
                      Your Message
                    </label>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-100 rounded-lg p-3 flex items-center gap-3">
                      <AlertCircle className="text-red-500" size={20} />
                      <p className="text-red-600 text-sm">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-yellow-500 text-black py-3 rounded-xl font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader className="animate-spin" size={20} />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-500 mt-4">
                    By submitting this form, you agree to our privacy policy and
                    terms of service.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
