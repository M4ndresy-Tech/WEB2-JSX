import React from "react";
import CyberSecurity from "../assets/Cloud-et-cybersecurite_Plan-de-travail-1-150x150.png";
import AI from "../assets/Intelligence-artificielle_Plan-de-travail-1-150x150.png";
import Software from "../assets/Ingenierie-logicielle_Plan-de-travail-1-1-150x150.png";
const Domain=()=>{
    return (
        <>
        <div className="flex flex-col space-y-4 bg-gray-100">
            <div className="flex flex-col space-x-4">
                <div className="text-blue-950 text-5xl font-bold m-auto"><h1>Domaines</h1></div>
                <div className="text-blue-950 text-lg text-center w-full"><p>Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :</p></div>
            </div>
        <div className="flex flex-col md:flex-row justify-around space-x-2 text-center md:p-20 ">                   
        <div className=" w-full md:w-1/4 rounded-2xl hover:shadow-2xl p-10 bg-white">
                <div ><img src={CyberSecurity} alt="An image for Cyber Security" className="m-auto"/></div>
                <div className="text-amber-400"><h1>Cloud et cybersécurité</h1></div>
                <div className="text-blue-950 text-lg"><p>Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité.</p></div>
            </div>
            <div className="w-full md:w-1/4 rounded-2xl hover:shadow-2xl p-10 bg-white">
                <div><img src={AI} alt="An image of an AI" className="m-auto"/></div>
                <div className="text-amber-400"><h1>Intelligence artificielle</h1></div>
                <div className="text-blue-950 text-lg"><p>Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures semi-autonomes vous fascinent ? Ce n’est pas sorcier, cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez HEI.</p></div>
            </div>
            <div className="w-full md:w-1/4 rounded-2xl hover:shadow-2xl p-10 bg-white">
                <div><img src={Software} alt="An image for Software" className="m-auto"/></div>
                <div className="text-amber-400"><h1>Ingénierie logicielle</h1></div>
                <div className="text-blue-950 text-lg"><p>Apprenez les principes de la conception ou le développement de programmes et d’applications web et mobile et explorez le monde fascinant des “codes”. A la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques.</p></div>
            </div>
        </div>
        </div>
        </>
    );
};
export default Domain;
