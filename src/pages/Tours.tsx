import React from "react";
import { motion } from "framer-motion";
import { Clock, Users, MapPin } from "lucide-react";

const Tours = () => {
  const tours = [
    {
      title: "Galle Fort Heritage Tour",
      image:
        "https://images.unsplash.com/photo-1578321272125-4e4c4c3643c5?auto=format&fit=crop&q=80",
      duration: "6 hours",
      price: "$45",
      description:
        "Explore the historic Galle Fort, a UNESCO World Heritage site",
      highlights: [
        "Dutch colonial architecture",
        "Lighthouse",
        "Sea turtle hatchery",
        "Local craft shops",
      ],
    },
    {
      title: "Sigiriya Adventure",
      image:
        "https://images.unsplash.com/photo-1586185118245-a9d3987a2d0e?auto=format&fit=crop&q=80",
      duration: "Full day",
      price: "$75",
      description: "Visit the ancient rock fortress and surrounding gardens",
      highlights: [
        "Lion Rock climb",
        "Ancient frescoes",
        "Royal gardens",
        "Panoramic views",
      ],
    },
    {
      title: "Beach Hopping Tour",
      image:
        "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&q=80",
      duration: "8 hours",
      price: "$55",
      description: "Discover the most beautiful beaches of Southern Sri Lanka",
      highlights: [
        "Unawatuna Beach",
        "Jungle Beach",
        "Snorkeling spots",
        "Sunset views",
      ],
    },
    {
      title: "Cultural Heritage Tour",
      image:
        "https://images.unsplash.com/photo-1625736300986-c9d7677f8373?auto=format&fit=crop&q=80",
      duration: "Full day",
      price: "$65",
      description: "Immerse yourself in Sri Lankan culture and traditions",
      highlights: [
        "Temple visits",
        "Traditional dance",
        "Local cuisine",
        "Craft workshops",
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1585841777232-abe00ad3e6af")',
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
              Our Tour Packages
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90"
            >
              Discover Sri Lanka's hidden gems with our curated experiences
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {tours.map((tour, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{tour.title}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    {tour.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {tour.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      1-4 people
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      Multiple stops
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-yellow-600">
                        {tour.price}
                      </span>
                      <span className="text-gray-500 text-sm">/person</span>
                    </div>
                    <a
                      href="/contact"
                      className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tours;
