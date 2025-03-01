import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Users,
  MapPin,
  Calendar,
  Info,
  CheckCircle,
  X,
  Compass,
  History,
  Globe,
  Camera,
  ArrowRight,
  ExternalLink,
  Loader,
} from "lucide-react";

interface WikipediaData {
  title: string;
  description: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
  originalimage?: {
    source: string;
    width: number;
    height: number;
  };
  coordinates?: {
    lat: number;
    lon: number;
  };
  content_urls?: {
    desktop: {
      page: string;
    };
  };
}

interface TourDetailProps {
  tourId: string;
}

const TourDetail: React.FC<TourDetailProps> = ({ tourId }) => {
  const [wikiData, setWikiData] = useState<WikipediaData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // This would come from your tour data in a real application
  const tour = {
    id: "galle-fort",
    title: "Galle Fort Heritage Tour",
    wikiTitle: "Galle_Fort", // This would be used for the Wikipedia API
    duration: "6 hours",
    price: "$45",
    groupSize: "1-4 people",
    startTime: "9:00 AM",
    endTime: "3:00 PM",
    meetingPoint: "Galle Fort Main Gate",
    description:
      "Explore the historic Galle Fort, a UNESCO World Heritage site with a local guide who will share fascinating stories and hidden gems within this colonial treasure.",
    highlights: [
      "Walk along the ancient ramparts with ocean views",
      "Visit the Dutch Reformed Church and lighthouse",
      "Explore local craft shops and boutiques",
      "Enjoy authentic Sri Lankan cuisine at a local restaurant",
      "Learn about the fort's colonial history and architecture",
    ],
    includes: [
      "Professional English-speaking guide",
      "Bottled water",
      "Entrance fees",
      "Lunch at a local restaurant",
      "Tuk-tuk transportation within the fort",
    ],
    excludes: [
      "Hotel pickup and drop-off",
      "Personal expenses",
      "Gratuities (optional)",
      "Travel insurance",
    ],
    itinerary: [
      {
        time: "9:00 AM",
        activity: "Meet at the Main Gate and introduction",
        description:
          "Meet your guide at the historic main entrance to the fort for a brief introduction to the day's activities.",
      },
      {
        time: "9:30 AM",
        activity: "Walk the ramparts",
        description:
          "Stroll along the massive walls that protected the fort from naval attacks for centuries.",
      },
      {
        time: "10:30 AM",
        activity: "Visit the lighthouse and Dutch church",
        description:
          "Explore two of the most iconic colonial structures within the fort.",
      },
      {
        time: "12:00 PM",
        activity: "Lunch at a local restaurant",
        description:
          "Enjoy authentic Sri Lankan cuisine at a charming local establishment.",
      },
      {
        time: "1:30 PM",
        activity: "Shopping and craft demonstrations",
        description:
          "Visit local artisans and unique boutiques selling handcrafted souvenirs.",
      },
      {
        time: "2:30 PM",
        activity: "Tea at a historic building",
        description:
          "Relax with Ceylon tea in a beautifully preserved colonial building.",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1578321272125-4e4c4c3643c5?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586361644118-72c0721aa741?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605447813584-26aeb3f8e6ae?auto=format&fit=crop&q=80",
    ],
  };

  useEffect(() => {
    const fetchWikipediaData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${tour.wikiTitle}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setWikiData(data);
      } catch (err) {
        console.error("Error fetching Wikipedia data:", err);
        setError(
          "Could not load additional information. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchWikipediaData();
  }, [tour.wikiTitle]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `url("${tour.images[0]}")`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 pb-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {tour.title}
              </h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Clock size={16} />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Users size={16} />
                  <span>{tour.groupSize}</span>
                </div>
                <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <MapPin size={16} />
                  <span>{tour.meetingPoint}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold">{tour.price}</span>
                <span className="text-gray-300">/person</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-16 z-30 bg-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto hide-scrollbar">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "overview"
                  ? "border-yellow-500 text-yellow-600"
                  : "border-transparent text-gray-600 hover:text-yellow-600"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("itinerary")}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "itinerary"
                  ? "border-yellow-500 text-yellow-600"
                  : "border-transparent text-gray-600 hover:text-yellow-600"
              }`}
            >
              Itinerary
            </button>
            <button
              onClick={() => setActiveTab("details")}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "details"
                  ? "border-yellow-500 text-yellow-600"
                  : "border-transparent text-gray-600 hover:text-yellow-600"
              }`}
            >
              Details
            </button>
            <button
              onClick={() => setActiveTab("gallery")}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "gallery"
                  ? "border-yellow-500 text-yellow-600"
                  : "border-transparent text-gray-600 hover:text-yellow-600"
              }`}
            >
              Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="space-y-8"
                >
                  <motion.div
                    variants={fadeInUp}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <div className="p-8">
                      <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
                      <p className="text-gray-700 mb-6">{tour.description}</p>

                      <h3 className="text-xl font-semibold mb-3">
                        Tour Highlights
                      </h3>
                      <ul className="space-y-2 mb-6">
                        {tour.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle
                              className="text-yellow-500 flex-shrink-0 mt-1"
                              size={18}
                            />
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Wikipedia Information */}
                  <motion.div
                    variants={fadeInUp}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Globe className="text-yellow-500" size={24} />
                        <h2 className="text-2xl font-bold">
                          About {wikiData?.title || tour.title}
                        </h2>
                      </div>

                      {loading ? (
                        <div className="flex justify-center items-center py-12">
                          <Loader
                            className="animate-spin text-yellow-500"
                            size={32}
                          />
                        </div>
                      ) : error ? (
                        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
                          {error}
                        </div>
                      ) : wikiData ? (
                        <div>
                          <div className="flex flex-col md:flex-row gap-6 mb-6">
                            {wikiData.thumbnail && (
                              <div className="md:w-1/3 relative">
                                {!imageLoaded && (
                                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                                    <Loader
                                      className="animate-spin text-yellow-500"
                                      size={24}
                                    />
                                  </div>
                                )}
                                <img
                                  src={
                                    wikiData.originalimage?.source ||
                                    wikiData.thumbnail.source
                                  }
                                  alt={wikiData.title}
                                  className="rounded-lg shadow-md w-full h-auto object-cover"
                                  onLoad={() => setImageLoaded(true)}
                                  style={{
                                    display: imageLoaded ? "block" : "block",
                                  }}
                                />
                              </div>
                            )}
                            <div
                              className={
                                wikiData.thumbnail ? "md:w-2/3" : "w-full"
                              }
                            >
                              <p className="text-gray-500 italic mb-3">
                                {wikiData.description}
                              </p>
                              <div className="text-gray-700">
                                {showFullDescription ? (
                                  <p>{wikiData.extract}</p>
                                ) : (
                                  <p>{wikiData.extract.substring(0, 250)}...</p>
                                )}
                              </div>
                              <button
                                onClick={() =>
                                  setShowFullDescription(!showFullDescription)
                                }
                                className="mt-2 text-yellow-600 hover:text-yellow-700 font-medium flex items-center gap-1"
                              >
                                {showFullDescription
                                  ? "Show less"
                                  : "Read more"}
                                <ArrowRight
                                  size={16}
                                  className={`transition-transform ${
                                    showFullDescription ? "rotate-90" : ""
                                  }`}
                                />
                              </button>
                            </div>
                          </div>

                          {wikiData.content_urls && (
                            <div className="flex justify-end">
                              <a
                                href={wikiData.content_urls.desktop.page}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-gray-500 hover:text-yellow-600 flex items-center gap-1"
                              >
                                Source: Wikipedia
                                <ExternalLink size={14} />
                              </a>
                            </div>
                          )}
                        </div>
                      ) : null}
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* Itinerary Tab */}
              {activeTab === "itinerary" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Compass className="text-yellow-500" size={24} />
                    <h2 className="text-2xl font-bold">Tour Itinerary</h2>
                  </div>

                  <div className="relative">
                    <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-yellow-200"></div>

                    <div className="space-y-8">
                      {tour.itinerary.map((item, index) => (
                        <motion.div
                          key={index}
                          variants={fadeInUp}
                          className="relative pl-10"
                        >
                          <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-100">
                            <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                              <h3 className="text-lg font-semibold">
                                {item.activity}
                              </h3>
                              <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                {item.time}
                              </span>
                            </div>
                            <p className="text-gray-700">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Details Tab */}
              {activeTab === "details" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="space-y-8"
                >
                  <motion.div
                    variants={fadeInUp}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden p-8"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <Info className="text-yellow-500" size={24} />
                      <h2 className="text-2xl font-bold">Tour Details</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">
                          What's Included
                        </h3>
                        <ul className="space-y-3">
                          {tour.includes.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle
                                className="text-green-500 flex-shrink-0 mt-1"
                                size={18}
                              />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-4">
                          What's Not Included
                        </h3>
                        <ul className="space-y-3">
                          {tour.excludes.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <X
                                className="text-red-500 flex-shrink-0 mt-1"
                                size={18}
                              />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {wikiData?.coordinates && (
                    <motion.div
                      variants={fadeInUp}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden p-8"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <MapPin className="text-yellow-500" size={24} />
                        <h2 className="text-2xl font-bold">Location</h2>
                      </div>

                      <div className="aspect-video rounded-xl overflow-hidden">
                        <iframe
                          width="100%"
                          height="100%"
                          frameBorder="0"
                          style={{ border: 0 }}
                          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${wikiData.coordinates.lat},${wikiData.coordinates.lon}&zoom=14`}
                          allowFullScreen
                        ></iframe>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Gallery Tab */}
              {activeTab === "gallery" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Camera className="text-yellow-500" size={24} />
                    <h2 className="text-2xl font-bold">Tour Gallery</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tour.images.map((image, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="aspect-video rounded-xl overflow-hidden"
                      >
                        <img
                          src={image}
                          alt={`Tour image ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </motion.div>
                    ))}
                    {wikiData?.originalimage && (
                      <motion.div
                        variants={fadeInUp}
                        className="aspect-video rounded-xl overflow-hidden"
                      >
                        <img
                          src={wikiData.originalimage.source}
                          alt={wikiData.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-100">
                    <h3 className="text-xl font-bold mb-4">Book This Tour</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Price:</span>
                        <span className="font-semibold">
                          {tour.price} per person
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold">{tour.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Group Size:</span>
                        <span className="font-semibold">{tour.groupSize}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Select Date
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          />
                          <Calendar
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Number of People
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="3">3 People</option>
                          <option value="4">4 People</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                      >
                        Book Now
                      </button>
                    </form>

                    <div className="mt-6 text-center">
                      <p className="text-sm text-gray-500">
                        Need a custom tour?{" "}
                        <a href="#" className="text-yellow-600 font-medium">
                          Contact us
                        </a>
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Quick Facts */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden mt-6"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <History
                          className="text-yellow-500 flex-shrink-0 mt-1"
                          size={18}
                        />
                        <div>
                          <span className="block font-medium">
                            Historical Site
                          </span>
                          <span className="text-sm text-gray-600">
                            UNESCO World Heritage
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Clock
                          className="text-yellow-500 flex-shrink-0 mt-1"
                          size={18}
                        />
                        <div>
                          <span className="block font-medium">Tour Times</span>
                          <span className="text-sm text-gray-600">
                            {tour.startTime} - {tour.endTime}
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <MapPin
                          className="text-yellow-500 flex-shrink-0 mt-1"
                          size={18}
                        />
                        <div>
                          <span className="block font-medium">
                            Meeting Point
                          </span>
                          <span className="text-sm text-gray-600">
                            {tour.meetingPoint}
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Info
                          className="text-yellow-500 flex-shrink-0 mt-1"
                          size={18}
                        />
                        <div>
                          <span className="block font-medium">Languages</span>
                          <span className="text-sm text-gray-600">
                            English, Sinhala
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourDetail;
