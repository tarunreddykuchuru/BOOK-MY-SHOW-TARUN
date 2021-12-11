import React from "react";

//components
import Navbar from "../components/navbar/navbarcomponent";
import HeroCarousel from "../components/HeroCarousel/HeroCarouselcomponent";
const DefaultLayout=(props)=>{
    return(
        <>
        <Navbar />
        <HeroCarousel/>
        {props.children}
        </>
    );
};

export default DefaultLayout;