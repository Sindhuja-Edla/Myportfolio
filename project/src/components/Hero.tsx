import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import profileImg from './download.png';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-cyan-400">
                <div className="w-12 h-0.5 bg-cyan-400"></div>
                <span className="text-sm font-medium tracking-wider uppercase">Hello, I'm</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Sindhuja
                <span className="block text-cyan-400">Edla</span>
              </h1>

              <p className="text-xl text-gray-300 font-medium">
                Full Stack Developer | Passionate about clean UI and efficient backend
              </p>

              <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                I enjoy building scalable web applications using modern technologies.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-cyan-400" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-cyan-400" />
                <span>sindhujaedla9@gmail.com</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToAbout}
                className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-all duration-200 font-medium flex items-center space-x-2 group"
              >
                <span>Learn More</span>
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-200" />
              </button>

              <div className="flex space-x-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 text-gray-300 transition-all duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sindhuja-edla-b1575a278/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 text-gray-300 transition-all duration-200"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-2xl relative overflow-hidden">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-4 animate-bounce">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">JS</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-4 animate-bounce delay-1000">
                <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">⚛</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
