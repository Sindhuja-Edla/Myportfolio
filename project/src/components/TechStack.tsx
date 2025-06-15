import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    {
      name: 'HTML',
      icon: (
        <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          HTML
        </div>
      ),
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'CSS',
      icon: (
        <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          CSS
        </div>
      ),
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'JavaScript',
      icon: (
        <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-lg">
          JS
        </div>
      ),
      color: 'from-yellow-400 to-yellow-500'
    },
    {
      name: 'React.js',
      icon: (
        <div className="w-16 h-16 bg-cyan-400 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
          ⚛
        </div>
      ),
      color: 'from-cyan-400 to-cyan-500'
    },
    {
      name: 'Node.js',
      icon: (
        <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          NODE
        </div>
      ),
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Express.js',
      icon: (
        <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          EX
        </div>
      ),
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Spring Boot',
      icon: (
        <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
          SPRING
        </div>
      ),
      color: 'from-green-600 to-green-700'
    },
    {
      name: 'MongoDB',
      icon: (
        <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          🍃
        </div>
      ),
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'MySQL',
      icon: (
        <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          SQL
        </div>
      ),
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Git',
      icon: (
        <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          GIT
        </div>
      ),
      color: 'from-orange-600 to-orange-700'
    },
    {
      name: 'GitHub',
      icon: (
        <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          GH
        </div>
      ),
      color: 'from-gray-800 to-gray-900'
    },
    {
      name: 'VS Code',
      icon: (
        <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
          VSC
        </div>
      ),
      color: 'from-blue-500 to-blue-600'
    }
  ];

    return (
    <motion.section
      id="tech-stack"
      className="py-20 bg-gray-900"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">🛠 Tech Stack</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group flex flex-col items-center space-y-4 p-6 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="relative">
                {tech.icon}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300`}></div>
              </div>
              <h3 className="text-white font-semibold text-center text-sm leading-tight">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Skills Categories */}
        <motion.div
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            {
              title: 'Frontend',
              color: 'text-cyan-400',
              items: ['HTML', 'CSS', 'JavaScript', 'React.js'],
            },
            {
              title: 'Backend',
              color: 'text-orange-400',
              items: ['Spring Boot', 'Node.js', 'Express.js'],
            },
            {
              title: 'Database',
              color: 'text-purple-400',
              items: ['MongoDB', 'MySQL'],
            },
            {
              title: 'Tools',
              color: 'text-green-400',
              items: ['Git', 'GitHub', 'VS Code'],
            },
          ].map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * idx }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-center"
            >
              <h4 className={`text-lg font-semibold ${section.color} mb-3`}>{section.title}</h4>
              <div className="space-y-2">
                {section.items.map((skill) => (
                  <div key={skill} className="text-gray-300 text-sm">{skill}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechStack;