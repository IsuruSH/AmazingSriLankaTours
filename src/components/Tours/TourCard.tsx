import React from "react";
import { motion } from "framer-motion";
import { Clock, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface TourCardProps {
  id: string;
  title: string;
  image: string;
  duration: string;
  price: string;
  description: string;
  highlights: string[];
}

const TourCard: React.FC<TourCardProps> = ({
  id,
  title,
  image,
  duration,
  price,
  description,
  highlights,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="h-64 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold">
          {price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {highlights.slice(0, 2).map((highlight, i) => (
            <span
              key={i}
              className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full"
            >
              {highlight}
            </span>
          ))}
          {highlights.length > 2 && (
            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
              +{highlights.length - 2} more
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            1-4 people
          </div>
        </div>

        <Link
          to={`/tours/${id}`}
          className="block w-full bg-yellow-500 text-black text-center py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default TourCard;
