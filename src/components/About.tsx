import Title from "./Title";
import img from "../assets/img.jpg";
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";

const aboutSections = [
    {
        id: 1,
        title: "Développeur Frontend",
        description: "Je suis un développeur frontend avec une bonne expérience.",
        icon: <LetterText className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Développeur Backend",
        description: "Je maîtrise les bases du développement backend pour créer des APIs robustes.",
        icon: <CalendarSync className="text-accent scale-150" />,
    },
    {
        id: 3,
        title: "Passionné par l'UI/UX",
        description: "Créer des interfaces utilisateur attrayantes et fonctionnelles est ma priorité.",
        icon: <Paintbrush className="text-accent scale-150" />,
    },
];
const About = () => {
    return (
        <div className="bg-base-300 p-10 mb-10 md:mb-32">
            <Title title="A propos" />
            <div className="md:h-screen flex justify-center">
                <div className="hidden md:block">
                    <img src={img} alt="" className="w-96 object-cover rounded-xl"
                    />
                </div>
                <div className="md:ml-4 space-y-4">

                </div>
            </div>
        </div>
    )

};

export default About;
