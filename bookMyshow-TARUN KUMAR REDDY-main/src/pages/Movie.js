
import React from "react";
import MovieHero from "../components/MovieHero/MovieheroComponent";
const LaunchRazor =()=>{
    let options={
        key:"rzp_test_mgbYjjIv0eXILd",
        amount:500*100,
        currency:"INR",
        name:"Book My SHow Clone",
        description:"Movie Purchase or Rental",
        image:"https://in.bmscdn.com/offers/tnclogo/filmy-pass---rs-75-off-on-movies-filmypass99.jpg?17022021111052",
        handler:()=>{alert("Payment Done")},
        theme:{color:"#c4242d"}
    };
    let rzp= new window.Razorpay(options);
    rzp.open();
}
const Movie=()=>
{
    return(
        <>
        <MovieHero />
        <div className="my-12 container  px-4 lg:w-3/5 lg:ml-40 ">
            <div className="flex flex-col items-start gap-3 my-8" >
                <h2 className="text-gray-800 font-bold mb-2 text-2xl" >About the movie</h2>
                <p>"We are all living under the illusion there is governance but we are yet to discover it"

                Abhi, an IIT gold medallist, gets pulled into the Indian Administrative Services. As a District Collector, he confronts the newly elected political establishment led by Smt. Vishakha Vani, who climbed the power ladder by contaminating Asia`s largest freshwater lake on her way up. Battling to protect the environment, educate the ignorant masses and liberate the inhabitants trapped in Vishakha Vani`s manipulations, is Abhi going to win this war against all odds?

                REPUBLIC is an epic social drama framing the current state of affairs reflecting our present social conscience.</p>
            </div>
            <div className="w-3/5">
                <h1 className="text-gray-800 font-bold mb-4 text-2xl">Applicable offers</h1>
                <div className="flex p-3 border-dashed border-4 border-yellow-200 gap-2 items-start bg-yellow-100 rounded-xl" >
                    <img className="h-8  w-8" src="https://in.bmscdn.com/offers/tnclogo/filmy-pass---rs-75-off-on-movies-filmypass99.jpg?17022021111052" />
                    <div className="flex flex-col gap-1 px-3 items-start ">
                        <h3 className="text-gray-900 font-medium text-lg">Filmy Pass</h3>
                        <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                    </div>
                </div>
            </div>
            <button onClick={LaunchRazor} class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Book tickets
            </button>
        </div>
        </>
    );
}
export default Movie;