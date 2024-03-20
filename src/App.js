import Particle from "./components/Particle";
import Navbar from "./components/Navbar";
import Introductions from "./components/Introductions";
import Contact from "./components/Contact";
import Cards from "./components/Cards";
import Timeline from "./components/Timeline";
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Search from "../src/components/GithubSearch/Search.jsx";
import Notifications from "../src/components/NotificationsComponent/components/Notifications.jsx";
import Tictactoe from "../src/components/Tictactoe/components/tictactoe.jsx"
import Newshomepage from "../src/components/NewsHomepage/components/Homepage.jsx"
import Entertainmentapp from "../src/components/EntertainmentWebApp/components/Navbar.jsx"

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
      ${isVisible ? "opacity-100" : "opacity-0"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Maincomponents />}></Route>
        <Route path="/githubpages" element={<Search />}></Route>
        <Route path="/Notifications" element={<Notifications />}></Route>
        <Route path="/Tictactoe" element={<Tictactoe />}></Route>
        <Route path="/Newshomepage" element={<Newshomepage />} ></Route>
        <Route path="/Entertainmentapp" element={<Entertainmentapp />} ></Route>
      </Routes>
    </BrowserRouter>
  );
};

function Maincomponents() {
  return (
    <div className="relative">
      <Particle />
      <main className="md:px-20 lg:px-40 relative z-10">
        <Navbar />
        <Introductions />
        <RevealOnScroll>
          <Timeline />
        </RevealOnScroll>
        <RevealOnScroll>
          <Cards />
        </RevealOnScroll>
        <RevealOnScroll>
          <Contact />
        </RevealOnScroll>
      </main>
    </div>
  );
}
export default App;
