import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Image {
  id: number;
  url: string;
  title: string;
  location: string;
}

const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const images: Image[] = [
    {
      id: 1,
      url: "https://upload.wikimedia.org/wikipedia/commons/e/eb/SL_Kandy_asv2020-01_img33_Sacred_Tooth_Temple.jpg",
      title: "Kandy Temple of the Tooth",
      location: "Kandy",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80",
      title: "Traditional Dance Performance",
      location: "Colombo",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&q=80",
      title: "Sigiriya Rock Fortress",
      location: "Sigiriya",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1546975490-a79abdd54533?auto=format&fit=crop&q=80",
      title: "Tea Plantations",
      location: "Nuwara Eliya",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1625736300986-c9d7677f8373?auto=format&fit=crop&q=80",
      title: "Local Festival",
      location: "Galle",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&q=80",
      title: "Unawatuna Beach",
      location: "Unawatuna",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-lg">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg flex items-end">
              <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold">{image.title}</h3>
                <p className="text-sm">{image.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-yellow-500 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                <p>{selectedImage.location}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryGrid;
