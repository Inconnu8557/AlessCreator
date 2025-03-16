import { Container, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const menuItems = [
    { href: "#Home", label: "Accueil" },
    { href: "#About", label: "À propos" },
    { href: "#Experiences", label: "Expériences" },
    { href: "#Projects", label: "Projets" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);

            // Détection de la section active
            const sections = menuItems.map(item => item.href.slice(1));
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled 
                    ? "bg-base-100/80 backdrop-blur-md shadow-lg" 
                    : "bg-transparent"
            }`}
        >
            <div className="flex items-center justify-between p-4 mx-auto max-w-7xl">
                <motion.a
                    href="#"
                    className="flex items-center text-2xl font-bold transition-colors md:text-xl hover:text-accent"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Container className="w-6 h-6 mr-2 text-accent" />
                    Aless<span className="text-accent">Creator</span>
                </motion.a>

                {/* Menu Desktop */}
                <div className="items-center hidden space-x-4 md:flex">
                    <ul className="flex space-x-2">
                        {menuItems.map((item) => (
                            <motion.li key={item.href}>
                                <motion.a
                                    href={item.href}
                                    className={`px-4 py-2 rounded-lg transition-all ${
                                        activeSection === item.href.slice(1)
                                            ? "text-accent font-medium bg-accent/10"
                                            : "hover:text-accent hover:bg-base-200"
                                    }`}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.label}
                                </motion.a>
                            </motion.li>
                        ))}
                    </ul>
                    <div className="w-px h-6 bg-base-content/10" />
                    <ThemeToggle />
                </div>

                {/* Menu Mobile */}
                <div className="flex items-center space-x-2 md:hidden">
                    <ThemeToggle />
                    <motion.button
                        className="p-2 rounded-lg hover:bg-base-200"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Menu Mobile Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden md:hidden"
                    >
                        <motion.ul
                            className="flex flex-col p-4 space-y-2 border-t bg-base-100/80 backdrop-blur-md"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={{
                                open: {
                                    clipPath: "inset(0% 0% 0% 0%)",
                                    transition: {
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.7,
                                        delayChildren: 0.3,
                                        staggerChildren: 0.05
                                    }
                                },
                                closed: {
                                    clipPath: "inset(10% 50% 90% 50%)",
                                    transition: {
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.3
                                    }
                                }
                            }}
                        >
                            {menuItems.map((item) => (
                                <motion.li
                                    key={item.href}
                                    variants={{
                                        open: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { type: "spring", stiffness: 300, damping: 24 }
                                        },
                                        closed: { opacity: 0, y: 20 }
                                    }}
                                >
                                    <motion.a
                                        href={item.href}
                                        className={`block w-full px-4 py-2 text-lg font-medium rounded-lg transition-colors ${
                                            activeSection === item.href.slice(1)
                                                ? "text-accent bg-accent/10"
                                                : "hover:bg-base-200 hover:text-accent"
                                        }`}
                                        onClick={() => setIsMenuOpen(false)}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {item.label}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;