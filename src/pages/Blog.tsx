import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "Top 10 Hidden Beaches in Southern Sri Lanka",
      excerpt: "Discover secluded paradise spots away from the tourist crowds...",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&q=80",
      date: "March 1, 2024",
      author: "Your Guide",
      readTime: "5 min read"
    },
    {
      title: "A Cultural Guide to Sri Lankan Festivals",
      excerpt: "Experience the vibrant celebrations that make Sri Lanka unique...",
      image: "https://images.unsplash.com/photo-1625736300986-c9d7677f8373?auto=format&fit=crop&q=80",
      date: "February 25, 2024",
      author: "Your Guide",
      readTime: "8 min read"
    },
    {
      title: "Local Street Food You Must Try",
      excerpt: "A taste adventure through Sri Lanka's most beloved street dishes...",
      image: "https://images.unsplash.com/photo-1625394675477-857bb85af8d3?auto=format&fit=crop&q=80",
      date: "February 20, 2024",
      author: "Your Guide",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1625394675477-857bb85af8d3?auto=format&fit=crop&q=80")'
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Our Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90"
            >
              Stories, tips, and insights from Sri Lanka
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;