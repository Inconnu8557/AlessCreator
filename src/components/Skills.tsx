import { motion } from 'framer-motion';
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPRISMA from "../assets/techno/prisma.webp";

interface Skill {
  name: string;
  level: number;
  category: string;
  image: string;
}

const skills: Skill[] = [
  { name: 'React', level: 90, category: 'Frontend', image: imgREACT },
  { name: 'TypeScript', level: 85, category: 'Languages', image: imgTYPE },
  { name: 'Node.js', level: 80, category: 'Backend', image: imgNODE },
  { name: 'Tailwind CSS', level: 85, category: 'Frontend', image: imgTAILWIND },
  { name: 'Next.js', level: 80, category: 'Frontend', image: imgNEXT },
  { name: 'JavaScript', level: 88, category: 'Languages', image: imgJS },
  { name: 'HTML', level: 90, category: 'Frontend', image: imgHTML },
  { name: 'CSS', level: 85, category: 'Frontend', image: imgCSS },
  { name: 'Prisma', level: 75, category: 'Backend', image: imgPRISMA },
];

const categories = Array.from(new Set(skills.map(skill => skill.category)));

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-base-200">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-4xl font-bold text-center"
        >
          Compétences Techniques
        </motion.h2>

        <div className="grid gap-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="mb-8 text-2xl font-semibold">{category}</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 rounded-lg shadow-lg bg-base-100"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          className="flex items-center justify-center w-16 h-16 p-3 rounded-xl bg-gradient-to-br from-base-200 to-base-300"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <img
                            src={skill.image}
                            alt={skill.name}
                            className="object-contain w-12 h-12"
                          />
                        </motion.div>
                        <div>
                          <h4 className="text-lg font-semibold">{skill.name}</h4>
                          <p className="text-sm text-base-content/70">{skill.level}%</p>
                        </div>
                      </div>
                      <div className="relative h-2 overflow-hidden rounded-full bg-base-300">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 