import { useEffect } from 'react'; // 👈 Import useEffect
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import { motion } from 'framer-motion';

function App() {
  // ✅ Scroll to top when app mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: false, amount: 0.2 },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <motion.div {...sectionAnimation}>
        <Hero />
      </motion.div>

      <motion.div {...sectionAnimation}>
        <About />
      </motion.div>

      <motion.div {...sectionAnimation}>
        <TechStack />
      </motion.div>
      <motion.div {...sectionAnimation}>
        <Experience /> 
      </motion.div>


      <motion.div {...sectionAnimation}>
        <Projects />
      </motion.div>

      <motion.div {...sectionAnimation}>
        <Contact />
      </motion.div>

      <motion.div {...sectionAnimation}>
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
