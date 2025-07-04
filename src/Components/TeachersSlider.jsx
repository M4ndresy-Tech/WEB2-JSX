import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Mirado from "../assets/Mirado-150x150.webp";
import Jean from "../assets/Jean-Aime-Maxa-modified-150x150.jpg";
import Parison from "../assets/Parison-e1716502987165-150x150.png";
import Ryan from "../assets/ryan-min-150x150.webp";
import Tahina from "../assets/Tahina-OK-e1716502943928-150x150.png";
import Yannick from "../assets/5746AC1E761A42D1B7D89496C9A6BE9B_edited-e1716502720974-150x150.jpg";
import Lou from "../assets/97-portraits-97_edited-e1716502895676-150x150.jpg";





const teachers = [
  {
    img: Tahina,
    name: "Dre Tahina Ralitera",
    description:
      "Docteure-Ingénieure, CNRS France | Prix L’Oréal-UNESCO pour les Femmes en Science (2017)",
  },
  {
    img: Lou,
    name: "Dr Lou Maurica",
    description:
      "Docteur-Ingénieur en informatique | Fondateur et Directeur pédagogique de HEI",
  },
  {
    img: Mirado,
    name: "Mirado RAFENOMAHENINTSOA",
    description:
      "Data and Business Intelligence Specialist 5+",
  },
  {
    img: Jean,
    name: "Jean Aimé Maxa",
    description:
      "Responsable technique cybersécurité chez CES France Continental (Toulouse – France)",
  },
  {
    img: Parison,
    name: "Parison Ravalomanda",
    description:
      "Ingénieur en informatique |  Ingénieur logiciel chez Google (Londres – UK)",
  },
  {
    img: Ryan,
    name: "Ryan ANDRIAMAHERY",
    description:
      "Développeur back end | Cofondateur et Directeur des opérations de HEI",
  },
  {
    img: Yannick,
    name: "Yannick Raharijaona",
    description:
      "Responsable technique ML chez Rocket Science (Ottawa – Canada)"
  }
];

const TeachersSlider = () => {
  return (
    <section className="bg-[#5a83c2] text-white py-16">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          L'équipe pédagogique
        </h2>
        <p className="mb-10 leading-relaxed text-sm md:text-base">
          Notre équipe pédagogique se compose d'experts nationaux et
          internationaux de l'informatique, de la cybersécurité, de
          l'intelligence artificielle, dont un ingénieur chez Google. Ils sont
          passionnés par l'informatique et sont engagés vers l'excellence.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        loop
        slidesPerView={1}
        breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
        }}
        className="max-w-6xl mx-auto px-4"
      >
        {teachers.map((teacher, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white text-black rounded-xl p-10 flex flex-col items-center shadow-md h-1xl w-2xs m-auto ">
              <img
                src={teacher.img}
                alt={teacher.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-200"
              />
              <h3 className="font-bold text-lg text-center mb-2">
                {teacher.name}
              </h3>
              <p className="text-sm text-center">{teacher.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TeachersSlider;

