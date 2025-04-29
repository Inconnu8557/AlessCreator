import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github } from "lucide-react";
import Logo from '../assets/Logo.png';
import { useState, useEffect } from "react";

const socialLinks = [
    {
        id: 1,
        icon: <Github className="w-5 h-5" />,
        href: "https://github.com/Inconnu8557",
        label: "GitHub",
        color: "hover:bg-[#333333]"
    },
];

const Home = () => {
    const [displayText, setDisplayText] = useState("AlessCreator");
    const texts = ["AlessCreator", "UX Designer", "Passionné"];
    const [isHovered, setIsHovered] = useState<number | null>(null);
    
    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % texts.length;
            setDisplayText(texts[currentIndex]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <div id="Home" className="relative flex items-center justify-center min-h-screen px-6 py-20 overflow-hidden md:px-10">
            <div className="absolute inset-0 bg-gradient-to-b from-base-200 to-base-100">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                </div>
            </div>
            <div className="relative z-10 flex flex-col-reverse items-center justify-between gap-12 mx-auto max-w-7xl md:flex-row">
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
                        Développeur Full Stack & UX Designer
                    </motion.span>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mb-6 text-4xl font-bold leading-tight md:text-6xl"
                    >
                        Bonjour, je suis{" "}
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={displayText}
                                initial={{ 
                                    opacity: 0,
                                    y: 50,
                                    rotateX: -90,
                                }}
                                animate={{ 
                                    opacity: 1,
                                    y: 0,
                                    rotateX: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 50,
                                        damping: 15,
                                        duration: 1
                                    }
                                }}
                                exit={{ 
                                    opacity: 0,
                                    y: -50,
                                    rotateX: 90,
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeInOut"
                                    }
                                }}
                                className="inline-block text-accent"
                                style={{ transformOrigin: "50% 50%" }}
                            >
                                {displayText}
                            </motion.span>
                        </AnimatePresence>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mb-8 text-lg leading-relaxed text-base-content/70"
                    >
                        Passionné par la création d'expériences numériques exceptionnelles, je combine expertise technique et design centré utilisateur. 
                        Spécialisé en React, Node.js et TypeScript, je transforme des concepts créatifs en solutions digitales innovantes et performantes.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-wrap gap-4"
                    >
                        <motion.a
                            href="mailto:mlalessandro@icloud.com"
                            whileHover={{ scale: 1.05, backgroundColor: "var(--accent-focus)" }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-accent"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            Me contacter
                        </motion.a>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center gap-4 mt-8"
                    >
                        {socialLinks.map((link, index) => (
                            <motion.div
                                key={link.id}
                                variants={itemVariants}
                                onHoverStart={() => setIsHovered(index)}
                                onHoverEnd={() => setIsHovered(null)}
                                className="relative"
                            >
                                <motion.a
                                    href={link.href}
                                    target={link.href.startsWith("http") ? "_blank" : undefined}
                                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`p-3 transition-colors rounded-full bg-base-200 ${link.color} hover:text-white flex items-center justify-center`}
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </motion.a>
                                <AnimatePresence>
                                    {isHovered === index && (
                                        <motion.span
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute px-2 py-1 text-sm transform -translate-x-1/2 rounded -bottom-8 left-1/2 bg-base-300 whitespace-nowrap"
                                        >
                                            {link.label}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
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
                    <motion.div 
                        className="absolute inset-0 rounded-full bg-accent/20 blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.3, 0.2]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.img
                        src={Logo}
                        alt="AlessDEV"
                        className="relative object-cover w-64 h-64 border-4 shadow-2xl md:w-96 md:h-96 border-accent"
                        style={{
                            borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%"
                        }}
                        whileHover={{
                            borderRadius: "60% 40% 30% 70% / 47% 62% 38% 53%",
                            scale: 1.05,
                            transition: { duration: 0.3 }
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
