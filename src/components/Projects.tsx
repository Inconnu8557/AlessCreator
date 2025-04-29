import { useState, useEffect } from 'react';
import Title from "./Title";
import img1 from '../assets/projects/Nextwave.jpeg';
import img2 from '../assets/projects/landing.jpeg';
import img3 from '../assets/projects/alesscreator.png';
import img4 from '../assets/projects/Logocraft.png';
//import img5 from '../assets/projects/5.png';
//import img6 from '../assets/projects/6.png';
import { Github, ExternalLink, Tag, Folder } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    {
        id: 1,
        title: 'Nextwave',
        description: 'Un réseau social orienté open source ou vous pouvez partager vos projets et rechercher des contributeurs',
        technologies: ['React', 'Supabase', 'Tailwind CSS'],
        demoLink: 'https://nextwave-roan.vercel.app/',
        repoLink: 'https://github.com/Inconnu8557/nextwave',
        image: img1,
        category: 'Application Web'
    },
    {
        id: 2,
        title: 'Landing page 3D',
        description: "Une page d'accueil complète, avec un robot créer avec spline.",
        technologies: ['HTML', 'CSS', 'Spline'],
        demoLink: 'https://landing-page-3d-six.vercel.app/',
        repoLink: 'https://github.com/Inconnu8557/landing-page-3d',
        image: img2,
        category: 'Landing Page'
    },
    {
        id: 3,
        title: 'Portfolio',
        description: 'Portfolio personnel avec animations fluides et design responsive.',
        technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
        demoLink: 'https://alesscreator.vercel.app/',
        repoLink: 'https://github.com/Inconnu8557/AlessCreator',
        image: img3,
        category: 'Portfolio'
    },
    {
        id: 4,
        title: 'Logocraft',
        description: "Application de création de logo personnalisés avec la bibliothèques d'icônes Lucide",
        technologies: ['Nextjs', 'Lucide', 'Tailwind CSS'],
        demoLink: 'https://creation-logo-two.vercel.app/',
        repoLink: 'https://github.com/Inconnu8557/LogoCraft',
        image: img4,
        category: 'Application Web'
    },
    /*{
        id: 5,
        title: 'Système de Réservation',
        description: 'Plateforme de réservation de salles avec calendrier interactif.',
        technologies: ['Next.js', 'MongoDB', 'Chakra UI'],
        demoLink: '#',
        repoLink: '#',
        image: img5,
        category: 'Application Web'
    },
    {
        id: 6,
        title: 'Analyseur de Sentiment',
        description: 'API d\'analyse de sentiment utilisant le machine learning.',
        technologies: ['Python', 'Flask', 'NLTK'],
        demoLink: '#',
        repoLink: '#',
        image: img6,
        category: 'API'
    },*/
];

const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
).sort();

const allCategories = Array.from(
    new Set(projects.map(project => project.category))
).sort();

const Projects = () => {
    const [selectedTech, setSelectedTech] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    useEffect(() => {
        let filtered = [...projects];
        
        if (selectedTech) {
            filtered = filtered.filter(project => 
                project.technologies.includes(selectedTech)
            );
        }
        
        if (selectedCategory) {
            filtered = filtered.filter(project => 
                project.category === selectedCategory
            );
        }
        
        setFilteredProjects(filtered);
    }, [selectedTech, selectedCategory]);

    return (
        <div id="Projects" className="px-6 py-20 md:px-10">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <Title title="Mes Projets" />
                </motion.div>

                <div className="mb-12 space-y-6">
                    <motion.div 
                        className="flex flex-wrap justify-center gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 p-2 rounded-lg bg-base-200">
                            <Folder className="w-4 h-4 text-accent" />
                            <motion.button
                                className={`px-3 py-1 rounded-md transition-all ${!selectedCategory ? 'bg-accent text-white' : 'hover:bg-base-300'}`}
                                onClick={() => setSelectedCategory('')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Tous
                            </motion.button>
                            {allCategories.map(category => (
                                <motion.button
                                    key={category}
                                    className={`px-3 py-1 rounded-md transition-all ${selectedCategory === category ? 'bg-accent text-white' : 'hover:bg-base-300'}`}
                                    onClick={() => setSelectedCategory(category)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {category}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        className="flex flex-wrap justify-center gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 p-2 rounded-lg bg-base-200">
                            <Tag className="w-4 h-4 text-accent" />
                            <motion.button
                                className={`px-3 py-1 rounded-md transition-all ${!selectedTech ? 'bg-accent text-white' : 'hover:bg-base-300'}`}
                                onClick={() => setSelectedTech('')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Toutes les technologies
                            </motion.button>
                            {allTechnologies.map(tech => (
                                <motion.button
                                    key={tech}
                                    className={`px-3 py-1 rounded-md transition-all ${selectedTech === tech ? 'bg-accent text-white' : 'hover:bg-base-300'}`}
                                    onClick={() => setSelectedTech(tech)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {tech}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div 
                        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="relative overflow-hidden shadow-lg group bg-base-200 rounded-xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                onHoverStart={() => setHoveredProject(project.id)}
                                onHoverEnd={() => setHoveredProject(null)}
                            >
                                <div className="relative overflow-hidden aspect-video">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full"
                                        initial={{ scale: 1 }}
                                        animate={{ 
                                            scale: hoveredProject === project.id ? 1.1 : 1
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <motion.div
                                        className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50"
                                        initial={{ opacity: 0 }}
                                        animate={{ 
                                            opacity: hoveredProject === project.id ? 1 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <motion.a
                                            href={project.demoLink}
                                            className="p-2 bg-white rounded-full"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <ExternalLink className="w-5 h-5 text-accent" />
                                        </motion.a>
                                        <motion.a
                                            href={project.repoLink}
                                            className="p-2 bg-white rounded-full"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Github className="w-5 h-5 text-accent" />
                                        </motion.a>
                                    </motion.div>
                                </div>
                                <div className="p-6">
                                    <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                                    <p className="mb-4 text-base-content/70">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map(tech => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 text-sm rounded-md bg-base-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Projects;