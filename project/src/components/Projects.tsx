import React, { useRef } from 'react';
import { ExternalLink, Github, Folder, Clock, Users, Zap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const projects = [
    {
      title: 'Fresh Grub',
      description: 'A contactless food ordering web app developed during my internship at Target Corporation. Users can view menus, place orders, and track them in real-time.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Spring Boot', 'MongoDB'],
      features: [
        'Real-time order tracking',
        'Contactless ordering system',
        'Interactive menu display',
        'Sprint-based development'
      ],
      role: 'Alternated between frontend and backend tasks across weekly sprints. Collaborated with the team to demo updates in meetings.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubLink: 'https://github.com/pavanibh22/upcurve-fresh-grub/branches',
      category: 'Web Application'
    },
    {
      title: 'Role-Based Admin Access Control System (RBAACS)',
      description: 'A comprehensive system with Super Admin, Sub Admin, and User access levels. Each role had restricted access to data and actions based on permissions.',
      techStack: ['React.js', 'Node.js', 'MongoDB','Express.js'],
      features: [
        'Multi-level role hierarchy',
        'Granular permission system',
        'Secure authentication',
        'Role-based data access'
      ],
      role: 'Developed the UI, integrated backend APIs, and tested user flows for all roles.',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubLink: 'https://github.com/Sindhuja-Edla/role-based-backend',
      category: 'Security System'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800" ref={sectionRef}>
      <motion.div
        className="max-w-6xl mx-auto px-4"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <h2 className="text-4xl font-bold text-white mb-4">🚀 Projects</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and technical projects
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              variants={fadeUp}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute top-4 left-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Folder className="text-cyan-400" size={20} />
                    <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider">Featured Project</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>
                </div>

                <div className="bg-gray-900 border border-gray-700 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="text-orange-400" size={16} />
                    <span className="font-semibold text-white">My Role:</span>
                  </div>
                  <p className="text-gray-300">{project.role}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Zap className="text-purple-400" size={16} />
                    <span className="font-semibold text-white">Key Features:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-semibold text-white mb-3 block">Tech Stack:</span>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 pt-2">
                  
                  <a
                    href={project.githubLink}
                    className="inline-flex items-center space-x-2 border-2 border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:border-gray-500 hover:bg-gray-800 transition-all duration-200 font-medium"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
      </motion.div>
    </section>
  );
};

export default Projects;
