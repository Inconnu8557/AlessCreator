import { useEffect } from "react";
import Title from "./Title";
import img from "../assets/img.jpg";
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";

const aboutSections = [
    {
        id: 1,
        title: "Développeur Frontend",
        description: "Passionné par la création d'interfaces modernes et réactives avec React, TypeScript et Tailwind CSS.",
        icon: <LetterText className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Développeur Backend",
        description: "Expérience solide dans la création d'APIs RESTful et la gestion de bases de données.",
        icon: <CalendarSync className="text-accent scale-150" />,
    },
    {
        id: 3,
        title: "Expert UI/UX",
        description: "Création d'expériences utilisateur intuitives et esthétiques, avec une attention particulière aux détails.",
        icon: <Paintbrush className="text-accent scale-150" />,
    },
];

const About = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fade-in");
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll(".animate-on-scroll").forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-gradient-to-b from-base-300 to-base-200 py-20 px-6 md:px-10 mb-10 md:mb-32" id="About">
            <Title title="À propos" />
            <div className="max-w-7xl mx-auto md:h-screen flex flex-col md:flex-row justify-center items-center gap-12">
                <div className="hidden md:block w-full md:w-1/2 animate-on-scroll opacity-0 transform translate-x-[-50px]">
                    <img 
                        src={img} 
                        alt="Profile" 
                        className="w-full max-w-md mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                    {aboutSections.map((section, index) => (
                        <div 
                            key={section.id}
                            className="animate-on-scroll opacity-0 transform translate-y-[20px] bg-base-100 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-base-200 rounded-lg">
                                    {section.icon}
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold mb-2 text-accent">
                                        {section.title}
                                    </h2>
                                    <p className="text-base-content/80">
                                        {section.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
