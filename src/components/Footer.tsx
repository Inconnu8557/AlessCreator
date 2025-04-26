import { motion } from "framer-motion";
import { Container, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

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
    {
        id: 3,
        icon: <Mail className="w-5 h-5" />,
        href: "mailto:votre@email.com",
        label: "Email"
    }
];

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="pt-20 pb-10 bg-base-200">
            <div className="px-6 mx-auto max-w-7xl md:px-10">
                <div className="flex flex-col items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center mb-12"
                    >
                        <Container className="w-12 h-12 mb-4 text-accent" />
                        <h2 className="mb-2 text-2xl font-bold">
                            LUC<span className="text-accent">DEV</span>
                        </h2>
                        <p className="max-w-md text-center text-base-content/70">
                            Création d'applications web modernes et performantes.
                            Contactez-moi pour donner vie à vos projets.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex gap-6 mb-12"
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={link.id}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 transition-colors rounded-full bg-base-100 hover:bg-accent hover:text-white"
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={link.label}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-sm text-center text-base-content/50"
                    >
                        <p>© {new Date().getFullYear()} LUCDEV. Tous droits réservés.</p>
                        <p className="mt-2">
                            Conçu et développé avec{" "}
                            <span className="text-red-500">♥</span> en France
                        </p>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;