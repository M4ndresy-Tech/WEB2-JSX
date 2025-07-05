import React from "react";
import Hei from "../assets/Hei.png"
import Facebook from "../assets/icons8-facebook-50.png"
import Instagram from "../assets/instagram-circle.png"
import Linkedin from "../assets/icons8-linkedin-50.png"
const Footer = () => {
  return (
    <>
    <footer className="bg-blue-950 text-white py-15">
      <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-4 gap-15 text-sm">
       <div>
        <img src={Hei} alt="Hei" className="h-18 mb-4" />
        <p className="leading-10 text-lg">Formation habilitée par l’État suivant le système LMD</p>
        <p className="mt-2 leading-10 text-lg">Habilitation MESupRes<br />n°31309/2023</p>
      </div>

        <div>
          <h2 className="text-white font-semibold text-2xl mb-2 py-2">Adresse</h2>
          <div className="text-lg">
             <p>II J 161 R Ambodivoanjo</p>
          <p>Ivandry Antananarivo</p>
          <p>101, Madagascar</p>
          </div>
         
        </div>

        <div>
          <h2 className="text-white font-semibold text-2xl mb-2 py-2">Navigation</h2>
          <ul className="space-y-1 text-lg">
            <li><a href="#" className="text-yellow-400">Accueil</a></li>
            <li><a href="#">Actualités</a></li>
            <li><a href="#">Bourse d’études</a></li>
            <li><a href="#">Inscription</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold text-2xl mb-2 py-2">Médias sociaux</h2>
          <div className="flex space-x-4 mt-2 text-lg">
           <img src={Facebook} alt="Facebook" className="h-8 mb-4 rounded-full" />
              <img src={Linkedin} alt="IN" className="h-8 mb-4 rounded-full" />
             <img src={Instagram} alt="Instagram" className="h-8 mb-4 rounded-" />
          </div>
        </div>
      </div>
    </footer>
      <div className="text-center text-gray-400 font-bold my-2 text-1xl">
        © HEI Madagascar
      </div>
    </>
  );
};

export default Footer;