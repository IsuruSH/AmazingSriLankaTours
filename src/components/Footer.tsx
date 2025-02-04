import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FaTripadvisor } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Newsletter Section */}
        {/* <div className="py-12 border-b border-gray-800">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Join Our Newsletter</h3>
            <p className="text-gray-400 mb-6">Stay updated with our latest tours and Sri Lankan travel tips</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div> */}

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Tuk-Tuk Adventures</h4>
            <p className="text-gray-400 mb-4">
              Your trusted guide for authentic Sri Lankan experiences since
              2010.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <FaTripadvisor size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:mx-auto">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/tours"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:mx-auto">
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                +94 123 456 789
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                info@tuktuktours.com
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                Galle, Sri Lanka
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          {/* <div>
            <h4 className="text-xl font-bold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 5:00 PM</li>
              <li>Sunday: 10:00 AM - 4:00 PM</li>
            </ul>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-gray-800 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Amazing Sri Lanka Tours. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
