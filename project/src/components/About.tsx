import React from 'react';
import { GraduationCap, Briefcase, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const sectionData = {
    heading: {
      title: "About Me",
      description: "Get to know more about my journey, background, and what drives my passion for development"
    },
    bio: [
      "Hi, I'm Sindhuja — a passionate Full Stack Developer with a B.Tech in Electronics and Communication Engineering from Bhoj Reddy Engineering College (2024).",
      "I love creating applications that solve real-world problems with clean, functional interfaces and strong backend logic.",
      "I've completed internships at Target Corporation and Zynlogic Technologies, gaining hands-on experience in web development and project collaboration."
    ],
    highlights: [
      {
        icon: <Briefcase className="text-orange-400" size={20} />,
        title: "Experience",
        desc: "Internships at Target Corporation & Zynlogic Technologies",
        subtitle: "Web Development & Project Collaboration"
      },
      {
        icon: <Heart className="text-purple-400" size={20} />,
        title: "Passion",
        desc: "Building scalable applications with modern tech",
        subtitle: "React • Node.js • MERN "
      }
    ]
  };

  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            {sectionData.heading.title}
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6" />
          <p className="text-lg text-gray-300">
            {sectionData.heading.description}
          </p>
        </motion.div>

        {/* Content Area - Single Column */}
        <div className="space-y-10">
          {/* Biography Paragraphs */}
          <motion.div
            className="space-y-6 text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {sectionData.bio.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Highlight Cards */}
          <motion.div 
            className="grid md:grid-cols-2 gap-6 pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {sectionData.highlights.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-700/30 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-400/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex space-x-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-400/20">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                    <p className="text-sm text-gray-400 mt-2">{item.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="mailto:sindhujaedla9@gmail.com"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-200 font-medium group"
            >
              <span>Get In Touch</span>
              <Heart 
                size={16} 
                className="group-hover:scale-125 transition-transform" 
              />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;