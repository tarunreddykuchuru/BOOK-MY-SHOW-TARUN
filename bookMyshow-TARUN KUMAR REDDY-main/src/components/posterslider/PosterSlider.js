import Poster from "../poster/PosterComponent";
import React from "react";
import settings from "../../config/settins";
import Slider from "react-slick";

const PosterSlider =(props)=>{
    return(
        <>
        <h1 className={
            `text-2xl font-bold ml-4 ${props.isDark?"text-white" :"text-gray-800"}`
        }>{props.title}</h1>
        <p className={
            `ml-4 ml-4 mb-2 ${props.isDark?"text-white" :"text-gray-800"}`
        }>
            {props.subtitle}
        </p>
        <Slider {...settings} >
            {props.images.map((image)=>(
                <Poster {...image} isDark={props.isDark} />
            ))}
        </Slider>
        </>
    );
}
export default PosterSlider;