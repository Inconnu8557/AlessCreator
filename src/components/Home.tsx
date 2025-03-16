import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import Logo from '../assets/Logo.png';
import { useState, useEffect } from "react";

const socialLinks = [
    {
        id: 1,
        icon: <Github className="w-5 h-5" />,
        href: "https://github.com/yourusername",
        label: "GitHub"
    },
    {
        id: 2,
        icon: <Linkedin className="w-5 h-5" />,
        href: "https://linkedin.com/in/yourusername",
        label: "LinkedIn"
    },
];

const Home = () => {
    const [displayText, setDisplayText] = useState("AlessCreator");
    const texts = ["AlessCreator", "UX Designer", "Passionné"];
    
    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % texts.length;
            setDisplayText(texts[currentIndex]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="Home" className="flex items-center justify-center min-h-screen px-6 py-20 md:px-10 bg-gradient-to-b from-base-200 to-base-100">
            <div className="flex flex-col-reverse items-center justify-between gap-12 mx-auto max-w-7xl md:flex-row">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col max-w-xl"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-4 font-medium text-accent"
                    >
                        Développeur Full Stack
                    </motion.span>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mb-6 text-4xl font-bold leading-tight md:text-6xl"
                    >
                        Bonjour, je suis{" "}
                        <motion.span
                            key={displayText}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="text-accent"
                        >
                            {displayText}
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mb-8 text-lg text-base-content/70"
                    >
                        Développeur passionné avec 2 ans d'expérience dans la création d'applications web modernes.
                        Spécialisé en React, Node.js et TypeScript, je transforme vos idées en solutions digitales innovantes.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-wrap gap-4"
                    >
                        <motion.a
                            href="mailto:contact@lucdev.fr"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-accent"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            Me contacter
                        </motion.a>
                        
                        <motion.a
                            href="/cv.pdf"
                            download
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-outline"
                        >
                            <Download className="w-5 h-5 mr-2" />
                            Télécharger CV
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex gap-4 mt-8"
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={link.id}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 transition-colors rounded-full bg-base-200 hover:bg-accent hover:text-white"
                                aria-label={link.label}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                        type: "spring",
                        stiffness: 100
                    }}
                    className="relative"
                >
                    <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl" />
                    <motion.img
                        src={Logo}
                        alt="AlessDEV"
                        className="relative object-cover w-64 h-64 border-4 shadow-2xl md:w-96 md:h-96 border-accent"
                        style={{
                            borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%"
                        }}
                        whileHover={{
                            borderRadius: "60% 40% 30% 70% / 47% 62% 38% 53%",
                            transition: { duration: 0.3 }
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
