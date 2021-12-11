import React from "react";

export const NextArrow =(props)=>{
// const{className,style,onClick}=props
    return(
        <>
        <div 
        className={props.className}
        style={{...props.style,backgroundColor:"black",opacity:.5,height:"2rem",width:"2rem",display:"flex",justifyContent:"center",alignItems:"center"}}
        onClick={props.onClick}
        />
        </>
    );
};
export const PrevArrow =(props)=>{
    return(
        <>
        <div 
        className={props.className}
        style={{...props.style,backgroundColor:"black",opacity:.5,height:"2rem",width:"2rem",display:"flex",justifyContent:"center",alignItems:"center"}}
        onClick={props.onClick}
        />
        </>
    );

};