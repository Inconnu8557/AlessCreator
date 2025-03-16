import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, Send, Phone, MapPin } from "lucide-react";
import img from '../assets/img.jpg';

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

const contactInfo = [
    {
        id: 1,
        icon: <Phone className="w-5 h-5" />,
        label: "Téléphone",
        value: "+33 6 XX XX XX XX",
        href: "tel:+33600000000"
    },
    {
        id: 2,
        icon: <Mail className="w-5 h-5" />,
        label: "Email",
        value: "contact@lucdev.fr",
        href: "mailto:contact@lucdev.fr"
    },
    {
        id: 3,
        icon: <MapPin className="w-5 h-5" />,
        label: "Localisation",
        value: "Paris, France",
        href: "https://maps.google.com"
    }
];

const Home = () => {
    return (
        <>
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
                            <span className="text-accent">AlessDEV</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mb-8 text-lg text-base-content/70"
                        >
                            Développeur passionné avec 5 ans d'expérience dans la création d'applications web modernes.
                            Spécialisé en React, Node.js et TypeScript, je transforme vos idées en solutions digitales innovantes.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.a
                                href="#contact"
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
                            src={img}
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

            {/* Section Contact */}
            <div id="contact" className="px-6 py-20 md:px-10 bg-base-200">
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Contactez-moi</h2>
                        <p className="max-w-2xl mx-auto text-base-content/70">
                            Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter.
                            Je suis toujours à la recherche de nouvelles opportunités passionnantes.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={info.id}
                                    href={info.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center p-4 transition-shadow bg-base-100 rounded-xl hover:shadow-lg"
                                >
                                    <div className="p-3 rounded-lg bg-accent/10 text-accent">
                                        {info.icon}
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-sm font-medium text-base-content/70">
                                            {info.label}
                                        </h3>
                                        <p className="text-lg">{info.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>

                        <motion.form
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <input
                                    type="text"
                                    placeholder="Votre nom"
                                    className="w-full p-4 bg-base-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <input
                                    type="email"
                                    placeholder="Votre email"
                                    className="w-full p-4 bg-base-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <textarea
                                    placeholder="Votre message"
                                    rows={6}
                                    className="w-full p-4 bg-base-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                                ></textarea>
                            </motion.div>
                            <motion.button
                                type="submit"
                                className="w-full btn btn-accent"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Send className="w-5 h-5 mr-2" />
                                Envoyer le message
                            </motion.button>
                        </motion.form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
