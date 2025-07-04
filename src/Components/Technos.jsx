import React from "react";
import java from "../assets/Java.png"
import python from "../assets/python.png";
import js from "../assets/JS.png";
import imgC from "../assets/C.png";
import TS from "../assets/TS.png";
import docker from "../assets/docker.png";
import next from "../assets/next.png";
import aws from "../assets/aws.png";
import serverless from "../assets/serverless.png";
import reac from "../assets/react.png";
import openapi from "../assets/openapi.png";

const Technos = () => {
  return (
    <>
    <section className="bg-gray-100 py-12 px-4">
      <h2 className="text-5xl font-bold text-center text-blue-950 mb-6 w-full">
        Les technos et langages utilisées
      </h2>
      <p className="max-2xl mx-45 text-center text-blue-950 text-lg ">
        Nos étudiants sont formés à l’utilisation et à la maîtrise des langages
        de programmation Java et JavaScript. Ces deux langages occupent une
        place de choix dans le domaine du développement logiciel et du web,
        offrant une polyvalence et une robustesse appréciées par les développeurs
        à travers le monde.
      </p>

        <div className="grid grid-cols-1  md:grid-cols-5 gap-8 items-center justify-center max-w-5xl mx-auto mt-15">
            <img src={java} alt="java" className="h-30 mx-auto" />
            <img src={python} alt="Python" className="h-30 mx-auto" />
            <img src={js} alt="js" className="h-30 mx-auto" />
            <img src={imgC} alt="imgC" className="h-30 mx-auto" />
            <img src={TS} alt="TS" className="h-30 mx-auto" />
            <div className="col-span-5 flex justify-center items-center gap-15">
                <img src={docker} alt="Docker" className="h-13 mx-auto" />
                <img src={next} alt="Next.js" className="h-13 mx-auto" />
                <img src={aws} alt="AWS" className="h-10 mx-auto" />
                <img src={serverless} alt="Serverless" className="h-13 mx-auto" />
                <img src={reac} alt="React" className="h-13 mx-auto" />
                <img src={openapi} alt="openapi" className="h-18 mx-auto" />
            </div>
        </div>
    </section>
        </>
    );
};
export default Technos;