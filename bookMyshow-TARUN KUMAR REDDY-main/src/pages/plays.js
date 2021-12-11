import React from "react";
import Poster1 from "../components/poster/PosterComponentPlays";
import PlaysFilter from "../components/playFilters/PlaysFilters";
const Plays=()=>{
    return(
        <>
        <div className="container mt-16 mx-auto px-4 lg:px-32 bg-gray-100" >
            <div className="w-full lg:flex lg:flex-row-reverse " >
                <div className="lg:w-3/4" >
                <h2 className="text-2xl ml-4 mb-4 font-medium" >Plays in Hyderabad</h2>
                <div className="flex flex-wrap ">
                    <div className="w-1/2 md:w-1/4 my-4" >
                    <Poster1
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315003-vxylxmymfu-portrait.jpg"
                    title="A story within a story in the Mahabharata"
                    subtitle="English ₹230"
                    />
                    </div>
                    <div className="w-1/2 md:w-1/4 my-4" >
                    <Poster1
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315003-vxylxmymfu-portrait.jpg"
                    title="A story within a story in the Mahabharata"
                    subtitle="English ₹230"
                    />
                    </div>
                    <div className="w-1/2 md:w-1/4 my-4" >
                    <Poster1
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315003-vxylxmymfu-portrait.jpg"
                    title="A story within a story in the Mahabharata"
                    subtitle="English ₹230"
                    />
                    </div>
                    <div className="w-1/2 md:w-1/4 my-4" >
                    <Poster1
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315003-vxylxmymfu-portrait.jpg"
                    title="A story within a story in the Mahabharata"
                    subtitle="English ₹230"
                    />
                    </div>
 
                </div>
                </div>
                <div className="lg:w-1/4" >
                <h2 className="text-2xl mb-4 font-medium" >Filters</h2>
                <div>
                <PlaysFilter title="Date" tags={["Today","Tomorrow","This Weekend"]} />
                <PlaysFilter title="Language" tags={["Telugu","Tamil","English"]} />
                <PlaysFilter title="categories" tags={["Theatre"]} />
                </div>
                </div>
            </div>
            
        </div>
        </>
    );
}

export default Plays;