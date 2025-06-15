import React, { useRef } from 'react';
import { Briefcase, Users, Zap, Clock } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const experiences = [
    {
      company: 'Target Corporation',
      role: 'Web Development Intern',
      duration: 'Apr 2023 - Nov 2023',
      description: 'Trained in backend development and worked on a full-stack project called Fresh Grub. Participated in sprint-based development, alternating between frontend and backend tasks, and regularly presented updates in team meetings.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Spring Boot', 'MongoDB'],
    },
    {
      company: 'Zynlogic Technologies',
      role: 'Full Stack Intern',
      duration: 'Dec 2023 - Feb 2024',
      description: 'Developed a Role-Based Admin Access Control System (RBAACS) with Super Admin, Sub Admin, and User roles. Built secure authentication and role-specific data access, contributing to both frontend and backend using MERN stack.',
      techStack: ['React.js', 'Node.js','Express.js', 'MongoDB'],
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900" ref={sectionRef}>
      <motion.div
        className="max-w-6xl mx-auto px-4"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <h2 className="text-4xl font-bold text-white mb-4">💼 Experience</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A glimpse into my internship journey and professional learning experiences
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="border border-gray-700 rounded-xl bg-gray-800 p-6 shadow-md"
              variants={fadeUp}
            >
              <div className="flex items-center space-x-4 mb-4">
                <Briefcase className="text-cyan-400" size={24} />
                <div>
                  <h3 className="text-2xl text-white font-semibold">{exp.company}</h3>
                  <p className="text-gray-400 text-sm">{exp.duration}</p>
                </div>
              </div>

              <div className="mb-4">
                <Users className="text-orange-400 inline mr-2" size={18} />
                <span className="text-white font-medium">Role:</span> <span className="text-gray-300">{exp.role}</span>
              </div>

              <div className="mb-4">
                <Zap className="text-purple-400 inline mr-2" size={18} />
                <span className="text-white font-medium">Responsibilities:</span>
                <p className="text-gray-300 mt-2 leading-relaxed">{exp.description}</p>
              </div>

              <div>
                <span className="text-white font-medium block mb-2">Tech Stack:</span>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

       
      </motion.div>
    </section>
  );
};

export default Experience;