import React from "react"
import react from "../assets/react.png"
import data from "../assets/data.png"
import java from "../assets/java.png"
import rpa from "../assets/rpa.png"
import agile from "../assets/agile.png"
import devops from "../assets/3d.png"


function Subcard(props) {
    const [showModal, setShowModal] = React.useState(false);
    return(
        <>
        <div className="opacity-95 ml-5  hover:scale-105 duration-500 relative overflow-auto bg-white rounded-md  justify-center text-center">
                <div className="grid grid-rows-3 gap-4 h-60">
                    <div className="p-3 text-sm font-bold ">
                        <p>{props.title}</p>
                    </div>
                    
                    <div className="p-5 justify-center items-center w-44 row-span-10">
                        <img className="p-5" src={props.image} alt={props.title}></img>
                        
                    </div>
                    
                </div>
                <div className=" bottom-5 right-5 left-5">   
                        <button className="bg-black text-white active:bg-pink-600  justify-end text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-700 " type="button" onClick={() => setShowModal(true)}>Read More</button> </div>
                 </div>

            {showModal ? (
                <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                           {props.title}
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                        >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                            </span>
                        </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                            {props.content}
                        </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                        
                        </div>
                    </div>
                    </div>
        </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
            
    )
}

function Cards(){
    return (
        <div class="grid grid-flow-col  md:grid-rows-1 grid-rows-3 justify-center md:space-x-16 space-x-5 gap-y-10 mb-20 mr-2">
            <Subcard title='Java Dynamo' image={java} content=''/>
            <Subcard title='RPA Specialist' image={rpa} content=''/>
            <Subcard title='Data Alchemist' image={data} content=''/>
            <Subcard title='Fullstack Specialist' image={react} content=''/>
            <Subcard title='Technical Architect' image={devops} content=''/>
            <Subcard title='Agile Maestro' image={agile} content=''/>  
    </div>
    );
}



export default Cards