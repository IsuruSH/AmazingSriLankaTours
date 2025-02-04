import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Licensed Tour Guide",
      issuer: "Sri Lanka Tourism Development Authority",
      year: "2015",
      description:
        "Official certification for conducting tours across Sri Lanka",
    },
    // {
    //   title: "First Aid Certification",
    //   issuer: "Red Cross Society",
    //   year: "2023",
    //   description: "Advanced first aid and emergency response training"
    // },
    // {
    //   title: "Eco Tourism Specialist",
    //   issuer: "Sustainable Tourism Board",
    //   year: "2022",
    //   description: "Specialized in environmentally conscious tourism practices"
    // },
    // {
    //   title: "Cultural Heritage Expert",
    //   issuer: "Department of Cultural Affairs",
    //   year: "2020",
    //   description: "Expertise in Sri Lankan history and cultural heritage"
    // }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Professional Certifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Committed to maintaining the highest standards through continuous
            learning and professional development
          </p>
        </motion.div>
        {/* grid md:grid-cols-2 gap-6 */}
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-gray-600 mb-2">{cert.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{cert.issuer}</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                      {cert.year}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
