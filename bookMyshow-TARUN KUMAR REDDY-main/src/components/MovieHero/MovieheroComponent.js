import React from "react";

 const MovieHero=()=>{
     return(
         <>
         <div className="md:hidden"  >
             <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/republic-et00305304-29-09-2021-04-33-25.jpg" alt="poster" />
         </div>

         <div className="hidden md:block lg:hidden " >
         <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/republic-et00305304-29-09-2021-04-33-25.jpg" alt="poster" />
         </div>

         <div className="relative w-full hidden lg:block" style={{height:"32rem"}} >
             <div className="absolute h-full w-full z-10" style={{backgroundImage:"linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}} ></div>
             <div className="absolute z-30 w-64 h-96 left-36 top-12 " >
                 <img className="h-full w-full rounded-xl" src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/republic-et00305304-29-09-2021-04-33-25.jpg" />
             </div>
            <img className="w-full  h-full" src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/republic-et00305304-29-09-2021-04-33-25.jpg" alt="poster"/>
         </div>
         </>
     );
 }
 export default MovieHero;