import React, { useRef } from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-cyan-400" size={24} />,
      title: 'Email',
      value: 'sindhujaedla9@gmail.com',
      link: 'mailto:sindhujaedla9@gmail.com',
    },
    {
      icon: <MapPin className="text-orange-400" size={24} />,
      title: 'Location',
      value: 'Hyderabad, India',
      link: null,
    },
    {
      icon: <Github className="text-purple-400" size={24} />,
      title: 'GitHub',
      value: 'github.com/Sindhuja-Edla',
      link: 'https://github.com',
    },
    {
      icon: <Linkedin className="text-blue-400" size={24} />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/sindhuja-edla',
      link: 'https://www.linkedin.com/in/sindhuja-edla-b1575a278/',
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4" ref={ref}>
        {/* Section Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">📬 Get In Touch</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-10"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-300 leading-relaxed">
              Whether you have a project idea, want to collaborate, or just want to say hello, 
              I'd love to hear from you. Feel free to reach out through any of the following channels.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div key={info.title} className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg shadow-sm flex items-center justify-center">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{info.title}</h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-gray-300">{info.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="pt-8">
            <h4 className="font-semibold text-white mb-4">Quick Actions</h4>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:sindhujaedla9@gmail.com"
                className="inline-flex items-center space-x-2 bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors duration-200 font-medium"
              >
                <Mail size={16} />
                <span>Send Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sindhuja-edla-b1575a278/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                <Linkedin size={16} />
                <span>Connect</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
