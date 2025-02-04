import React from "react";
import Hero from "../components/Hero";
import HomeGallery from "../components/Home/HomeGallery";
import { motion } from "framer-motion";
import { Star, Users, Clock, PackageMinus } from "lucide-react";

const Home = () => {
  const popularTours = [
    {
      title: "Galle Fort Heritage Tour",
      image:
        "https://images.unsplash.com/photo-1654561773591-57b9413c45c0?auto=format&fit=crop&q=80",
      duration: "6 hours",
      price: "$45",
      description:
        "Explore the historic Galle Fort, a UNESCO World Heritage site",
    },
    {
      title: "Sigiriya Adventure",
      image:
        "https://images.unsplash.com/photo-1594822779091-7726437c5ac1?auto=format&fit=crop&q=80",
      duration: "Full day",
      price: "$75",
      description: "Visit the ancient rock fortress and surrounding gardens",
    },
    {
      title: "Beach Hopping Tour",
      image:
        "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&q=80",
      duration: "8 hours",
      price: "$55",
      description: "Discover the most beautiful beaches of Southern Sri Lanka",
    },
  ];

  return (
    <div>
      <Hero />

      {/* Popular Tour Packages */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <PackageMinus className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Popular Tour Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully curated selection of tours designed to
              give you the best Sri Lankan experience.
            </p>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {popularTours.map((tour, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {tour.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      1-4 people
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xl font-bold text-yellow-600">
                      {tour.price}
                    </span>
                    <button className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <HomeGallery />

      {/* About Guide Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80"
                alt="Your Guide"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Meet Your Guide</h2>
              <p className="text-gray-600 mb-6">
                With over 10 years of experience showing tourists the beauty of
                Sri Lanka, I'm passionate about providing authentic and
                memorable experiences. My knowledge of local culture, history,
                and hidden gems will make your journey truly special.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <Star className="text-yellow-500" size={20} />
                <Star className="text-yellow-500" size={20} />
                <Star className="text-yellow-500" size={20} />
                <Star className="text-yellow-500" size={20} />
                <Star className="text-yellow-500" size={20} />
                <span className="ml-2 text-gray-600">(150+ Reviews)</span>
              </div>
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
                Learn More About Me
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
