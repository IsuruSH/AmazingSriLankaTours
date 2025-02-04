import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeGallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1588258524695-eb9e0bfd5b5f?auto=format&fit=crop&q=80",
      title: "Temple of the Tooth"
    },
    {
      url: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80",
      title: "Cultural Dance"
    },
    {
      url: "https://images.unsplash.com/photo-1586185118245-a9d3987a2d0e?auto=format&fit=crop&q=80",
      title: "Sigiriya"
    },
    {
      url: "https://images.unsplash.com/photo-1546975490-a79abdd54533?auto=format&fit=crop&q=80",
      title: "Tea Plantations"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Camera className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Tour Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Glimpses of the amazing experiences and beautiful places we'll explore together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg aspect-w-16 aspect-h-12"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
          >
            View Full Gallery
            <Camera size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;