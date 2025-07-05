import React from "react";
import logo from "../assets/cropped-Logo-e1662790239183.png";

const Header = () => {
  return (
    <header className="w-full bg-blue-950 py-4">
      <nav className="max-w-screen-xl mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between">
        
        
        <div className="mb-4 md:mb-0">
          <img src={logo} alt="Logo HEI" className="w-24 h-auto mx-auto md:mx-0" />
        </div>

        
        <div className="flex flex-col items-center gap-4 md:flex-row  md:space-x-10 text-amber-50 font-bold text-lg">
          <div className="cursor-pointer text-amber-500 hover:text-amber-400">ACCUEIL</div>
          <div className="cursor-pointer hover:text-amber-400">ACTUALITÉS</div>
          <div className="cursor-pointer hover:text-amber-400">BOURSE D'ÉTUDES</div>
          <div className="cursor-pointer hover:text-amber-400">INSCRIPTION</div>
          <button className="bg-amber-400 text-amber-50 rounded px-4 py-2 hover:text-blue-950">
            INTRANET
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Header;
