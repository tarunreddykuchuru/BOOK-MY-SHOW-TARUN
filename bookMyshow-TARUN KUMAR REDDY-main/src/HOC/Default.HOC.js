///higher order components
///transforms component to other component
///adding additional functionalities to existing components
import React from "react";
// import { Component } from "react";
import { Route } from "react-router-dom";

//Layouts
import DefaultLayout from "../layouts/Default.Layout";

function DefaultHOC ({component:Component,...rest})
{
    //component
    //props->path exact
    return (
        <>
        <Route {...rest} 
        component=
        {(props)=>(
        
            <DefaultLayout >
                <Component {...props} />
            </DefaultLayout>
        )
        } />
        </>
    );
};
export default DefaultHOC;