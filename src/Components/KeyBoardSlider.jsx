import React, { useEffect, useState } from "react";
import image1 from "../assets/hei-banner-1.webp";
import image2 from "../assets/hei-banner-2.webp";
import image3 from "../assets/hei-banner-3.webp";

const slides = [
  {
    image: image1,
    title: "Haute Ecole d'informatique",
    paragraph:
      "Des entreprises partenaires et une équipe pédagogique et administrative qui travaille sans relâche pour la montée en compétences de nos étudiants.",
    sentence: "Habilitation MESupRES, suivant l’arrêté n°31309/2023",
  },
  {
    image: image2,
    title: "Haute Ecole d'informatique",
    paragraph:
      "Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l’employabilité de nos étudiants.",
    sentence: "Habilitation MESupRES, suivant l’arrêté n°31309/2023",
  },
  {
    image: image3,
    title: "Haute Ecole d'informatique",
    paragraph:
      "« L’éducation est l’arme la plus puissante pour changer le monde » selon Nelson Mandela...",
    sentence: "Habilitation MESupRES, suivant l’arrêté n°31309/2023",
  },
];

const KeyBoardSlider = () => {
  const [current, setCurrent] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") {
        setCurrent((prev) => (prev + 1) % slides.length);
      } else if (e.key === "ArrowLeft") {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  
  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden text-white transition-all duration-700 sideClass"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${slides[current].image})`,
      }}
    >
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2  transform -translate-y-1/2 text-4xl text-white rounded-full px-6 py-4 hover:bg-white hover:text-blue-950 transition "
        aria-label="Previous Slide"
      >
        <i className="fas fa-chevron-left"></i>
      </button>


      <div className="text-center space-y-15 max-w-3xl px-4 ">
        <h1 className="text-4xl md:text-6xl font-bold">{slides[current].title}</h1>
        <p className="text-xl md:text-2xl">{slides[current].paragraph}</p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-4">
          <button className="bg-white text-blue-950 px-6 py-3 rounded font-bold ">
            Inscrivez-vous ici
          </button>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded font-bold ">
            Emplois du temps
          </button>
          <button className="bg-blue-950 text-white px-6 py-3 rounded font-bold ">
            Programme pédagogique
          </button>
        </div>

        <p className="text-lg font-semibold">{slides[current].sentence}</p>

        <div className="flex justify-center gap-3 mt-6">
          {slides.map((_, i) => (
            
            <div
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                i === current ? "bg-white" : "bg-gray-500"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            ></div>
          ))}
        </div>
      </div>

      
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-4xl text-white rounded-full px-6 py-4 hover:bg-white hover:text-blue-950 transition "
        aria-label="Next Slide"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </section>
  );
};

export default KeyBoardSlider;
