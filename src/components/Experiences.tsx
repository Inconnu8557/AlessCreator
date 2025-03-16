import { motion } from "framer-motion";
import Title from "./Title";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPRISMA from "../assets/techno/prisma.webp";
import { Calendar, Building2, GraduationCap } from "lucide-react";

import google from "../assets/companies/google.png";
import meta from "../assets/companies/meta.webp";
import amazon from "../assets/companies/amazon.png";

const skills = [
    { id: 1, name: "HTML", image: imgHTML, level: 90 },
    { id: 2, name: "CSS", image: imgCSS, level: 85 },
    { id: 3, name: "JavaScript", image: imgJS, level: 88 },
    { id: 4, name: "React", image: imgREACT, level: 85 },
    { id: 5, name: "Node.js", image: imgNODE, level: 80 },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND, level: 90 },
    { id: 7, name: "TypeScript", image: imgTYPE, level: 82 },
    { id: 8, name: "Next.js", image: imgNEXT, level: 78 },
    { id: 9, name: "Prisma", image: imgPRISMA, level: 75 },
];

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
                    <Title title="Expériences & Compétences" />
                </motion.div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    {/* Expériences */}
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

                    {/* Compétences */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="mb-8 text-2xl font-bold">Compétences techniques</h3>
                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center"
                                >
                                    <motion.div
                                        className="w-20 h-20 p-4 shadow-lg rounded-xl bg-base-100"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <img
                                            src={skill.image}
                                            alt={skill.name}
                                            className="object-contain w-full h-full"
                                        />
                                    </motion.div>
                                    <h4 className="mt-3 font-medium text-center">{skill.name}</h4>
                                    <div className="w-full h-2 mt-2 rounded-full bg-base-300">
                                        <motion.div
                                            className="h-full rounded-full bg-accent"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Experiences;