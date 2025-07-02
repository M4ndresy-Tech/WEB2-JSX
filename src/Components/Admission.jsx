import React from "react";
const Admission=()=>{
    return(
        <>
        <section className="bg-indigo-400">
            <div>
                <div className="text-white text-5xl font-bold text-center"><h1>Admission</h1></div>
                <div className="text-white text-lg w-full text-center"><p>Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau :<br/>une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D. </p></div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-center p-20">
                <div className="flex flex-col space-y-4 md:w-1/3 w-2/3 bg-orange-200 p-12">
                    <div className=" text-5xl text-white font-bold"><h1>01</h1></div>
                    <div className="flex flex-row justify-around">
                        <div className="text-blue-950 text-lg "><p><span className="font-bold">Dépôt de dossiers :</span> pour les bacheliers de toutes séries sans limite d’âge</p></div>
                        <div className="text-5xl text-white my-2"><i class="fa-solid fa-arrow-right"></i></div>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 md:w-1/3 w-2/3 bg-orange-300 p-10">
                    <div className="text-5xl text-white font-bold"><h1>02</h1></div>
                    <div className="flex flex-row justify-around">
                    <div className="text-blue-950 text-lg "><p><span className="font-bold">Test de niveau :</span> composé d’une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D</p></div>
                    <div className="text-5xl text-white my-3"><i class="fa-solid fa-arrow-right"></i></div>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 md:w-1/3 w-2/3 bg-amber-500 p-12">
                    <div className="text-5xl text-white font-bold"><h1>03</h1></div>
                    <div className="text-blue-950 text-lg "><span className="font-bold">Inscription définitive </span>(si test réussi)</div>
                </div>
            </div>

            <div className="flex flex-row justify-center gap-4">
                <button className="bg-transparent  border-4 border-white text-white hover:bg-blue-950 hover:border-blue-950 rounded  px-5 py-2 text-2xl">Incrivez-vous ici</button>
                <button className="text-white bg-blue-950 hover:bg-white hover:text-blue-950 px-5 py-2 rounded  text-2xl">Résultat concours</button>
            </div>
        </section>
        </>
    );
};
export default Admission;