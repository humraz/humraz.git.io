import React, { useState } from "react";
import logo from "../assets/hlogo.png";
import { Link } from "react-scroll";
import "../components/CSS/Navbar.css"
import { FaPlus,FaHome,FaLaptopCode } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { MdWork } from "react-icons/md";


function Navbar() {
  const[openmenu,setopenmenu] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <div className="justify-center me-auto size-20">
        <img src={logo} alt="logo"></img>
      </div>

      <div className="nav-button" >
        <FaPlus  className={openmenu ? "fabutton rotate" : "fabutton mrotate"} onClick={() => setopenmenu(!openmenu)}/>
        {
        openmenu && (
        <div className="menuitems slide-in-top">
              <Link to="home"> <FaHome className="item" onClick={() => setopenmenu(!openmenu)}/> </Link>
              <Link to="experience"> <MdWork className="item" onClick={() => setopenmenu(!openmenu)}/> </Link>
              <Link to="skills"> <FaLaptopCode className="item" onClick={() => setopenmenu(!openmenu)}/> </Link>
              <Link to="contact"> <IoIosContact className="item" onClick={() => setopenmenu(!openmenu)}/> </Link>
        </div>
        )
      }
      </div>
      


      <div className="navbar-bigscreen">
      <div className="text-white flex justify-end items-center h-20 ms-auto ">
        <h1 className="md:font-bold font-semibold md:text-2xl text-sm md:px-5 md:m-3 px-2 hover:opacity-150 hover:text-blue-400 hover:scale-125 filter hover:duration-500">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </h1>
        <h1 className="md:font-bold font-semibold md:text-2xl text-sm md:px-5 md:m-3 px-2 hover:opacity-150 hover:scale-125 hover:text-blue-400  filter hover:duration-500">
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Experience
          </Link>
        </h1>
        <h1 className="md:font-bold font-semibold md:text-2xl text-sm md:px-5 md:m-3 px-2 hover:opacity-150 hover:scale-125 hover:text-blue-400 filter hover:duration-500">
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Skills
          </Link>
        </h1>
        <h1 className="md:font-bold font-semibold md:text-2xl text-sm ymd:px-5 md:m-3 px-2 hover:opacity-150 hover:scale-125 filter hover:text-blue-400 hover:duration-500">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </h1>
      </div>
      </div>

      
      
    </div>
  );
}

export default Navbar;
