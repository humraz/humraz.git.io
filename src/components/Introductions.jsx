import {React,useRef,useEffect}  from 'react'
import { Typed } from "react-typed";

const stringtoshow=[
    "a Fullstack Developer",
    "a Spring Boot Developer",
    "a DSA Expert",
    "an Innovator and Enabler",
    "RPA Certified",
    "a Dev Ops Professional",
    "an Azure Architect",
    "a Java Specialist",
];



function Introductions()
{
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: stringtoshow, // Strings to display
          // Speed settings, try diffrent values untill you get good results
          startDelay: 300,
          typeSpeed: 50,
          backSpeed: 25,
          backDelay: 100,
          loop:true
        });
    
        // Destropying
        return () => {
          typed.destroy();
        };
      }, []);
    return (
        <div>
            <div className='h-screen grid items-center justify-center text-white'>
                <div className='grid justify-items-center content-center'>
                    <h1 className='font-bold md:text-6xl text-4xl'>Hi, I am <span className='text-blue-400'>Humraz Hussain</span></h1>
                    <p className='font-bold md:text-3xl text-xl'>I am {}<span ref={el}></span></p>
                </div> 
            </div>
           
        </div>
    );
}

export default Introductions