import React from "react";
const Poster=(props)=>{
    return (
        <>
    <div className="flex flex-col items-start gap-2 px-4 w-full ">
        <div className="h-84">
            <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title} className="w-full h-full rounded-xl"/>
        </div>
        <h3 className={`text-lg font-bold font-sans ${
            props.isDark ? "text-white":"text-gray-700"
        }`}>{props.title}</h3>
        <p className={`text-sm font-sans ${
            props.isDark ? "text-white":"text-gray-500"
        }`}>{props.subtitle}</p>
    </div>
    </>
    );
}

export default Poster;