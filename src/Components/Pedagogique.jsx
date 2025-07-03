import React from "react";
import towStudents from "../assets/IMG-03-e1720537524581-1024x950-1.webp"
import img1 from "../assets/Mask-group-1.webp";
import img2 from "../assets/Mask-group-2.webp";
import img3 from "../assets/Mask-group-3.webp";

const Pedagogique= ()=> {
    return(
        <>
        <div className="flex md:flex-row flex-col justify-center gap-8 p-35">
         <div><img src={towStudents} alt="An image of to students"/></div>
         <div className="flex flex-col gap-12 md:text-left sm:text-center">
            <div className="text-blue-950 text-5xl font-bold"><h1>Le programme pédagogique</h1></div>
            <div className="text-blue-950 text-lg"><p>Suivant le système LMD, jusqu’au Master, 
                notre formation repose sur un programme pédagogique conçu en adéquation avec les attentes du marché.
                 La formation est sanctionnée par un diplôme de Licence et de Master en Informatique reconnu par le MESupRes de Madagascar.</p></div>
                 <div className="">  
                    <button className="text-2xl text-blue-950 font-bold m-auto border-2 border-b-blue-950 hover:bg-blue-950 hover:text-white p-2 rounded ">Notre programme</button></div>
         </div>
        </div>

    
           
      <div className="flex flex-col gap-10 px-35 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-amber-100 pt-8 pb-15 px-7 rounded-3xl text-left">
            <h2 className="text-amber-400 text-5xl font-bold ">25%</h2>
            <p className="text-blue-950 text-2xl font-bold">Apprentissage théoriques en présentiel</p>
          </div>
          <div className="bg-amber-100 pt-8 pb-15 px-7 rounded-3xl text-left">
            <h2 className="text-amber-400  text-5xl font-bold">25%</h2>
            <p className="text-blue-950 text-2xl font-bold">Apprentissage sur supports numériques</p>
          </div>
          <div className="bg-amber-100 pt-8 pb-15 px-7 rounded-3xl text-left">
            <h2 className="text-amber-400  text-5xl font-bold">25%</h2>
            <p className="text-blue-950 text-2xl font-bold">Travaux individuels de l’étudiant</p>
          </div>
          <div className="bg-amber-100 pt-8 pb-15 px-7 rounded-3xl text-left">
            <h2 className="text-amber-400  text-5xl font-bold">25%</h2>
            <p className="text-blue-950 text-2xl font-bold">Apprentissage en entreprise</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src={img1} alt="présentiel" className="rounded w-full" />
          <img src={img2} alt="numérique" className="rounded w-full" />
          <img src={img3} alt="entreprise" className="rounded w-full" />
        </div>
      </div>
        </>
        
    );
};
export default Pedagogique;