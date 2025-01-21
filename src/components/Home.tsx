import { Mail } from "lucide-react";

const Home = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
            <div>
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Bonjour , <br /> je suis <span className="text-accent">AlessDEV</span>
                </h1>
                <p className="my-4 text-md text-center md:text-left">Je suis un développeur full-stack <br /> avec 5 ans d'expérience, utilisant React <br /> et Node.js Contacter-moi si vous avez besoin de mes services. </p>
                <a href="" className="btn btn-accent">
                    <Mail className="w-5 h-5"/>
                    Contactez-moi
                </a>
            </div>

            <div>

            </div>
        </div>
    );
};
export default Home;
