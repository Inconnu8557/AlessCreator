import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  useEffect(() => {
    // Ajout d'une classe pour éviter le flash blanc au chargement
    document.body.classList.add('bg-base-100');
    
    // Gestion du défilement fluide
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ScrollProgress />
        <Navbar />
        
        <main className="relative">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-base-200/50 to-transparent" />
          
          <Home />
          <About />
          <Skills />
          <Experiences />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="py-20"
          >
            <Projects />
          </motion.div>
        </main>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}