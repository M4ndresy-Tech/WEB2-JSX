import React from "react";
import nexta from "../assets/nexta.webp"
import PN from "../assets/PN.png";
import yooz from "../assets/yooz.webp";
import etech from "../assets/etech.png";
import emit from "../assets/emit.png";
import numer from "../assets/numer.png";
import partners from "../assets/partners.webp";
import YIF from "../assets/YIF.webp";
import kante from "../assets/kante.png";

const Partner = () => {
  return (
    <div className=" py-12 px-4">
      <h2 className="text-5xl font-bold text-center text-blue-950 mb-6 ">
       Nos partenaires
      </h2>
      <p className="max-2xl mx-45 text-center text-blue-950 text-lg ">
      L’employabilité de nos étudiants se base sur la pertinence  de notre programme
       pédagogique et de la composition de notre corps enseignant mais aussi du soutien et la collaboration des entreprises partenaires
      </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-15 items-center justify-center max-w-5xl mx-auto mt-20">
            <img src={nexta} alt="nexta" className="h-18 mx-auto" />
            <img src={PN} alt="PN" className="h-15 mx-auto" />
            <img src={yooz} alt="yooz" className="h-15 mx-auto" />
            <img src={etech} alt="etech" className="h-15 mx-auto" />
            <img src={emit} alt="emit" className="h-15 mx-auto" />
            <div className="col-span-5 flex justify-center items-center gap-2">
                <img src={numer} alt="numer" className="h-20 mx-auto" />
                <img src={partners} alt="partners.js" className="h-15 mx-auto" />
                <img src={YIF} alt="YIF" className="h-20 mx-auto" />
                <img src={kante} alt="kante" className="h-25 mx-auto" />
            </div>
        </div>
    </div>
        
    );
};
export default Partner;