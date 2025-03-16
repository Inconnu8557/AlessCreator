import { motion } from "framer-motion";
import Title from "./Title";
import { Calendar, Building2, GraduationCap } from "lucide-react";

import google from "../assets/companies/google.png";
import meta from "../assets/companies/meta.webp";
import amazon from "../assets/companies/amazon.png";

const experiences = [
    {
        id: 1,
        title: "Développeur Full Stack",
        company: "Entreprise A",
        period: "2022 - Présent",
        description: "Développement d'applications web modernes avec React et Node.js",
        icon: <Building2 className="w-6 h-6" />,
    },
    {
        id: 2,
        title: "Développeur Frontend",
        company: "Entreprise B",
        period: "2020 - 2022",
        description: "Création d'interfaces utilisateur réactives et optimisation des performances",
        icon: <Calendar className="w-6 h-6" />,
    },
    {
        id: 3,
        title: "Formation Développeur Web",
        company: "École C",
        period: "2019 - 2020",
        description: "Formation intensive en développement web full stack",
        icon: <GraduationCap className="w-6 h-6" />,
    },
];

const Experiences = () => {
    return (
        <div id="Experiences" className="px-6 py-20 md:px-10 bg-base-200">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <Title title="Expériences" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h3 className="mb-8 text-2xl font-bold">Parcours professionnel</h3>
                    <div className="relative space-y-8">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30" />
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-16"
                            >
                                <div className="absolute left-0 p-2 border-2 rounded-full bg-base-100 border-accent">
                                    {exp.icon}
                                </div>
                                <div className="p-6 rounded-lg shadow-lg bg-base-100">
                                    <span className="text-sm text-accent">{exp.period}</span>
                                    <h4 className="mt-1 text-lg font-bold">{exp.title}</h4>
                                    <p className="mt-1 text-sm text-base-content/70">{exp.company}</p>
                                    <p className="mt-2">{exp.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Experiences;