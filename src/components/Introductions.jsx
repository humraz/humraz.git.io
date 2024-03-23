import { React, useRef, useEffect } from "react";
import { Typed } from "react-typed";
// import photo from '../assets/photo.jpg'

const stringtoshow = [
  "a Spring Boot Developer",
  "a DSA Expert",
  "a React JS Developer",
  "a Java Specialist",
  "an Azure Architect",
  "an Innovator and Enabler",
  "RPA Certified Specialist",
  "a Dev Ops Professional",
];

const resumeurl =
  "https://docs.google.com/document/d/1wbTT-Y2L68zxx5wHO7eVlsupm4NrPb2L/edit?usp=sharing&ouid=112558424513104200266&rtpof=true&sd=true";

function Introductions() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: stringtoshow, // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 25,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section id="home">
      <div>
        <div className="h-screen flex flex-col items-center content-center justify-center text-white">
          <div className="flex flex-col justify-center items-center content-center text-center">
            {/* <img src={photo} alt="Photo" className='h-50 w-20'></img> */}
            <h1 className="font-bold md:text-6xl text-3xl font-titilium">
              Hi, I am <span className="text-blue-400 ">Humraz Hussain</span>
            </h1>
            <p className="font-bold md:text-3xl text-xl font-titilium">
              I am {}
              <span ref={el}></span>
            </p>
            <button
              type="button"
              class="text-white bg-gradient-to-r mt-5 w-32 md:w-44 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg md:text-sm text-xs md:px-5 px-3 md:py-2.5 py-2 text-center me-2 mb-2 "
            >
              <a href={resumeurl} target="_blank">
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introductions;
