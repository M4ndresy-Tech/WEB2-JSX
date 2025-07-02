import React from "react";
import HeiStudents from "../assets/A-propos-left-1.webp";
const AboutUs=()=>{
return(
    <>
    <section className="flex flex-col md:flex-row items-center md:justify-around p-20 space-x-20">
        <div className="w-1/2 hidden md:block"><img src={HeiStudents} alt="HeiStudents" /></div>
        <div className="flex flex-col space-y-4 w-full md:w-1/2 ">
            <div className="text-blue-950 text-5xl font-bold m-auto md:m-0 "><h1 className="mb-10">À propos de nous</h1></div>
            <div className="flex flex-col space-y-2">
                <div className="flex flex-row space-x-2 m-auto md:m-0">
                    <div className="text-5xl text-amber-300 "><i class="fa-solid fa-graduation-cap"></i></div>
                    <div className="text-cyan-950 my-3 font-bold text-2xl"><h2>+3ans</h2></div>
                </div>
                <div className="text-blue-950 text-lg w-full "><p>Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique de Madagascar et du monde entier.</p></div>
            </div>

            <div className="flex flex-col space-y-2">
                <div className="flex flex-row space-x-2 m-auto md:m-0">
                    <div className="text-5xl text-amber-300"><i class="fa-solid fa-people-group"></i></div>
                    <div className="text-cyan-950 my-3 font-bold text-2xl"><h2>+250 étudiants</h2></div>
                </div>
                <div className="text-cyan-950 text-lg w-full"><p>Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”.</p></div>
            </div>

        <div className="flex flex-col space-y-2">
                <div className="flex flex-row space-x-2 m-auto md:m-0">
                    <div className="text-5xl text-amber-300"><i class="fa-solid fa-medal"></i></div>
                    <div className="text-cyan-950 font-bold text-2xl my-3"><h2>Notre mission</h2></div>
                </div>
                <div className="text-cyan-950 text-lg w-full"><p>Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.</p></div>
            </div>
        </div>

        

    </section>
    </>
);
};
export default AboutUs;