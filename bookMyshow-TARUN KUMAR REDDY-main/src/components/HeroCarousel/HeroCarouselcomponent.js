import React, {useState,useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//component
import { NextArrow,PrevArrow } from "./Arrowscomponent";

const HeroCarousel=()=>{
    const settingsLg={
      dots:true,
      speed:1000,
      arrows:true,
      autoplay:true,
      centerMode:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding:"180px",
      infinite: true,
      nextArrow:<NextArrow/>,
      prevArrow:<PrevArrow/>
    }
    const settings = {
      dots:true,
      speed:1000,
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      // const images=[
      //   "https://in.bmscdn.com/promotions/cms/creatives/1633590513692_moviemunchies_webshowcase_1240x300_7oct.jpg",
      //   "https://in.bmscdn.com/promotions/cms/creatives/1632595036803_seher2021_webshowcase_1240x300_25sep.jpg",
      //   "https://images.unsplash.com/photo-1632158717779-8930d77299f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
       
      // ];
      const [images,setImages]=useState([]);
      useEffect(()=>{
        const reqNowPlaying=async ()=>{
          const getImages=await axios.get("/movie/now_playing");
          setImages(getImages.data.results);
        };
        reqNowPlaying();
      },[]);
      return(

          <>

            <div className="md:hidden">
            <HeroSlider {...settings}>
                    {
                      images.map((image)=>(
                        <div className="w-full h-64 py-3 ">
                          
                          <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-md"/>
                        </div>
                      ))
                    }
            </HeroSlider>

            </div>
            <div className="hidden md:block lg:block">
            <HeroSlider {...settingsLg}>
                    {
                      images.map((image)=>(
                        <div className="w-full px-2 py-3 h-96 ">
                          <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-md"/>
                        </div>
                      ))
                    }
            </HeroSlider>

            </div>

            
          </>
      );
}
export default HeroCarousel;