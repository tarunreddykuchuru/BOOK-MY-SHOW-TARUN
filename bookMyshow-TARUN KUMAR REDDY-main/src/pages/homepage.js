import React,{useState,useEffect} from "react";
import axios from "axios";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCardComponent";
import  Premier  from "../components/premier/PremierComponent";
import PosterSlider from "../components/posterslider/PosterSlider";
import PremierImages from "../config/temPoster";
const HomePage =()=>{
    const [popMovies,setPopMovies]=useState([]);
    useEffect(()=>{
        const reqPopmovies= async ()=>{
            const getPopMovies = await axios.get("/movie/popular");
            setPopMovies(getPopMovies.data.results);
        }
        reqPopmovies();
    },[])
    return (
        <>
        <div className="mx-auto ">
        <div className="container mt-4  md:px-32 my-8">
        
        <PosterSlider images={popMovies} title="Recommended Movies" />
        </div>
        <div className="container  md:px-32 my-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 ml-4">The Best of entertainment</h1>
        <EntertainmentCardSlider/>
        </div>
        <div className="bg-navCol-200 py-8  md-px-32 my-8 flex flex-col">
            <div className="px-36" >
                <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
                alt="ruPay" className="w-full h-full" />
            </div>
            <div className="container md:px-32 mt-4 ">
            <PosterSlider images={popMovies} title="Premieres" subtitle="Brand new releases every Friday" isDark={true} />
            </div>
        </div>
        

        <div className="md:px-32 my-8">
            <PosterSlider images={popMovies} title="Online Streaming events" isDark={false} />
        </div>
        </div>
        
        
        </>
    );
}
export default HomePage;