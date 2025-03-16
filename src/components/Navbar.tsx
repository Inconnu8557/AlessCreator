import { Container, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
    { href: "#Home", label: "Accueil" },
    { href: "#About", label: "À propos" },
    { href: "#Experiences", label: "Expériences" },
    { href: "#Projects", label: "Projets" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}>
            <div className="flex items-center justify-between p-4 mx-auto max-w-7xl">
                <motion.a
                    href="#"
                    className="flex items-center text-3xl font-bold transition-colors md:text-xl hover:text-accent"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Container className="mr-2" />
                    LUC<span className="text-accent">DEV</span>
                </motion.a>

                {/* Menu Desktop */}
                <ul className="hidden space-x-4 md:flex">
                    {menuItems.map((item) => (
                        <motion.li key={item.href}>
                            <motion.a
                                href={item.href}
                                className="transition-colors btn btn-sm btn-ghost hover:text-accent"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.label}
                            </motion.a>
                        </motion.li>
                    ))}
                </ul>

                {/* Bouton Menu Mobile */}
                <motion.button
                    className="p-2 md:hidden"
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

            {/* Menu Mobile */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden"
                    >
                        <motion.ul
                            className="flex flex-col p-4 space-y-4 border-t bg-base-100"
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
                                        className="block w-full p-2 text-lg font-medium transition-colors rounded-lg hover:bg-base-200 hover:text-accent"
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
        </div>
    );
};

export default Navbar;