import React from "react";
import ASmilingGirl from"../assets/IMG-02-e1720543344824-987x1024-1.webp";
const SomeOutlets =()=>{
    return(
        <>
        <section className="flex flex-row justify-around p-20">
            <div className="md:w-1/2 w-full space-y-4 flex flex-col m-auto">
            <div className="text-blue-950 text-5xl font-bold m-auto md:m-0"><h1 className="mb-5">Quelques débouchés</h1></div>
            <div className="text-blue-950 text-lg"><p>Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…</p></div>
            <div className="text-blue-950 text-lg"><p>Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité…</p></div>
            </div>
            <div className="w-2/5 hidden md:block m-auto"><img src={ASmilingGirl} alt="A Smiling Girl" /></div>

        </section>
        </>
    );
};
export default SomeOutlets;