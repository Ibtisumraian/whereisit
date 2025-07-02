import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const AboutUs = () => {
  const features = [
    {
      title: "Built for Community Impact",
      desc: "WhereIsIt empowers people to help each other by reporting lost and found items. We turn small actions into big recoveries.",
    },
    {
      title: "Trust Through Transparency",
      desc: "Our platform ensures that every report is secure, visible, and verified — fostering a responsible and reliable community.",
    },
    {
      title: "Designed for Real Life",
      desc: "Whether on your phone or desktop, WhereIsIt keeps your search simple, intuitive, and accessible anytime, anywhere.",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Reconnect. Recover. Rely on Community.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            WhereIsIt is more than a lost & found site — it's a mission to bring people together through small acts of kindness and responsibility.
          </p>
        </div>

        {/* Features Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
          <div className="space-y-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative w-full md:w-1/2 px-6 py-6 rounded-xl shadow-md bg-green-50 ${
                  index % 2 === 0
                    ? 'ml-auto text-left'
                    : 'mr-auto text-left md:text-right'
                }`}
              >
                <h3 className="text-xl font-semibold text-green-800 mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Help Others — or Get Help Yourself
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Start searching, reporting, or simply explore what’s been found in your area.
          </p>
          <Link to="/allItems">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#005A52] hover:bg-[#005A5299] text-white cursor-pointer px-6 py-3 rounded-full font-medium transition duration-200"
            >
              Search Items
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
