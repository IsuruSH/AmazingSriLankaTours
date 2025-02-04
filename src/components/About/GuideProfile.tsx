import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Users, Calendar } from 'lucide-react';

const GuideProfile = () => {
  const stats = [
    { icon: <Users />, label: "Happy Clients", value: "1000+" },
    { icon: <Calendar />, label: "Years Experience", value: "10+" },
    { icon: <MapPin />, label: "Locations", value: "50+" },
    { icon: <Star />, label: "5-Star Reviews", value: "500+" }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Meet Your Guide - Sanjaya</h2>
            <p className="text-gray-600">
              Born and raised in the historic city of Galle, I've spent my life exploring every corner 
              of Sri Lanka. With over a decade of experience as a professional tour guide, I combine my 
              local knowledge with a passion for sharing our rich culture and natural beauty with visitors 
              from around the world.
            </p>
            <p className="text-gray-600">
              My tours are more than just sightseeing – they're immersive experiences that connect you 
              with local communities, authentic cuisine, and hidden gems that most tourists never discover. 
              I pride myself on creating personalized experiences that cater to your interests while 
              ensuring your safety and comfort throughout the journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                Fluent in English
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                Local Expert
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                Photography Skills
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                First Aid Certified
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80"
              alt="Your Guide"
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-yellow-500 mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuideProfile;