import { motion } from "framer-motion";
import Title from "./Title";
import {  Building2 } from "lucide-react";

const experiences = [
    {
        id: 1,
        title: "Tumo",
        company: "Tumo Lyon",
        period: "2022",
        description: "Apprentissage des bases de la programmation et du javascript",
        icon: <Building2 className="w-6 h-6" />,
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