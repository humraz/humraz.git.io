import React, { useEffect, useState } from "react";
import "../components/Navbar.css";
import bookmark from "../assets/icon-nav-bookmark.svg"
import movies from "../assets/icon-nav-movies.svg"
import tv from "../assets/icon-nav-tv-series.svg"
import home from "../assets/icon-nav-home.svg"
import usericon from "../assets/image-avatar.png"
import logo from "../assets/logo.svg"
import { createContext, useContext } from 'react';
import Home from "../components/Home.jsx"
import Bookmarks from "../components/Bookmarks.jsx"

export default function Navbar()
{
    const [clickbookmarks, setclickbookmarks] = useState(false)
    const [clickhome, setclickhome] =useState(true);

    function handleclickhome()
    {
        if(clickbookmarks)
            setclickbookmarks(false)
        setclickhome(true)
    }

    function handleclickbookmarks()
    {
        setclickhome(false)
        setclickbookmarks(true)
    }

    return(
        <>
            <div className="fullscreennavcenter">
                <div className="navcontainer">
                    <div className="navflexcolumn">
                        <img src={logo} alt="logo"></img>
                    </div>
                    <div className="navmidicons">
                        <img onClick={() => handleclickhome()} src={home} alt="home"></img>
                        <img src={movies} alt="movies"></img>
                        <img src={tv} alt="tv"></img>
                        <img onClick={() => handleclickbookmarks()} src={bookmark} alt="bookmarks"></img>
                    </div>
                    <div className="usericonmain">
                        <img src={usericon} alt="user"></img>
                    </div>
                </div>

                {clickhome && <Home /> }

                {clickbookmarks && <Bookmarks/>}

            </div>

            
        </>
    );
}