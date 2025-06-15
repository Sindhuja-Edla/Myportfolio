import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left Column - About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Sindhuja Edla</h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating clean, efficient solutions 
              that make a difference in the digital world.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-700 hover:border-cyan-400 transition-colors duration-200"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-700 hover:border-blue-400 transition-colors duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:sindhujaedla9@gmail.com"
                className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-700 hover:border-orange-400 transition-colors duration-200"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Tech Stack', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase().replace(' ', '-'));
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 sindhujaedla9@gmail.com</p>
              <p>📍 Hyderabad, India</p>
              <p>💼 Open to opportunities</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>by Sindhuja Edla</span>
            </div>
            
            <div className="text-gray-500 text-sm">
              © {currentYear} Sindhuja Edla. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;