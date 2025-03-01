import React from "react";
import { motion } from "framer-motion";
import TourCard from "../components/Tours/TourCard";

const Tours = () => {
  const tours = [
    {
      id: "galle-fort",
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
      id: "sigiriya-adventure",
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
      id: "beach-hopping",
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
      id: "cultural-heritage",
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <TourCard
                key={tour.id}
                id={tour.id}
                title={tour.title}
                image={tour.image}
                duration={tour.duration}
                price={tour.price}
                description={tour.description}
                highlights={tour.highlights}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tours;
