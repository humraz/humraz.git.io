import Particle from "./components/Particle";
import Navbar from "./components/Navbar";
import Introductions from "./components/Introductions";
import Contact from "./components/Contact";
import Cards from "./components/Cards";
import Timeline from "./components/Timeline"
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from 'react-helmet'
import logo from './assets/hlogo.png'

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
      const scrollObserver = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
              setIsVisible(true);
              scrollObserver.unobserve(entry.target);
          }
      });

      scrollObserver.observe(ref.current);

      return () => {
          if (ref.current) {
              scrollObserver.unobserve(ref.current);
          }
      };
  }, []);

  const classes = `transition-opacity duration-1000 
      ${isVisible ? "opacity-100" : "opacity-0"
      }`;

  return (
      <div ref={ref} className={classes}>
          {children}
      </div>
  );
};


const App = () => {
    
    return (
      <div className="relative">
        <Helmet>
            <title>Humraz</title>
            <link rel="icon" type="image/png" href={logo} sizes="16x16" />
        </Helmet>
          <Particle />
            <main className="md:px-20 lg:px-40 relative z-10">
          <Navbar />
          
              <Introductions/>
          
          <RevealOnScroll>
              <Timeline />
          </RevealOnScroll>
          <RevealOnScroll>
          <Cards />
          </RevealOnScroll>
          <RevealOnScroll>
          <Contact/>
          </RevealOnScroll>
         
        </main>
        
      </div>
    );
};

export default App