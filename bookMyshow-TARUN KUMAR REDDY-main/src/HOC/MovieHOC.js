///higher order components
///transforms component to other component
///adding additional functionalities to existing components
import React from "react";
// import { Component } from "react";
import { Route } from "react-router-dom";

//Layouts
import MovieLayout from "../layouts/MovieLayout";

function MovieHOC ({component:Component,...rest})
{
    //component
    //props->path exact
    return (
        <>
        <Route {...rest} 
        component=
        {(props)=>(
        
            <MovieLayout >
                <Component {...props} />
            </MovieLayout>
        )
        } />
        </>
    );
};
export default MovieHOC;