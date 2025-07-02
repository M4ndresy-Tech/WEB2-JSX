import React, { useEffect, useState } from "react";
const slides=[{
    image:""
    title1:"Haute Ecole d'indormatique",
    subtitle1:"Des entreprises partenaires et une équipe pédagogique et administrative qui travaille sans relâche pour la montée en compétences de nos étudiants."},
    {background2:
    title2:"Haute Ecole d'inforamtique",
    subtitle2:"Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l’employabilité de nos étudiants.",
    },{background3:,
    title3:"Haute Ecole d'iformatique",
    subtitle3:"« L’éducation est l’arme la plus puissante pour changer le monde » selon Nelson Mandela. « L’éducation dans l’informatique est une arme très puissante pour lutter contre la pauvreté à Madagascar » selon HEI. C’est notre mission."}


}];
const [current,setCurrent]=useState(0);
useEffect(()=>{
    const interval=setInterval(()=>{
        setCurrent((prev) =>(prev+1)%length);
    },5000)
    return()=>clearInterval(interval);
},[length])

useEffect(()=>{
    const handleKey=(e)=>{
        if(e.key=="ArrowRigth"){
            setCurrent((prev)=>(prev+1)%length);

        }else if(e.key=="ArrowLeft"){
            setCurrent((prev)=>(prev-1+length)%length);
        };
    }
    window.addEventListener("keydown",handleKey);
    return removeEventListener("keydown",handleKey);

},[length]);






