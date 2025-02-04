import React from 'react';
import { motion } from 'framer-motion';
import GuideProfile from '../components/About/GuideProfile';
import Certificates from '../components/About/Certificates';
import Testimonials from '../components/About/Testimonials';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80")'
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90"
            >
              Your trusted guide to authentic Sri Lankan experiences
            </motion.p>
          </div>
        </div>
      </section>

      <GuideProfile />
      <Certificates />
      <Testimonials />
    </div>
  );
};

export default About;