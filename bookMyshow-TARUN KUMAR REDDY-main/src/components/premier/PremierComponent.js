import React from "react";
import Slider from "react-slick";
import Poster from "../poster/PosterComponent";
import settings from "../../config/settins";
import PremierImages from "../../config/temPoster";
const Premier=()=>{
  
    return (
        <>
        <Slider {...settings} >
            {PremierImages.map((image)=>(
                <Poster {...image} isDark/>
            ))}
        </Slider>
        </>
        
    );
}
 export default Premier;