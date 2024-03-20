import React, { useEffect, useState } from "react"
import "../components/Homepage.css"
import logo from "../assets/logo.svg"
import contentimage from "../assets/image-web-3-desktop.jpg"
import menubaropen from "../assets/icon-menu.svg"
import menubarclose from "../assets/icon-menu-close.svg"

export default function Homepage()
{
    const [openmenu,setopenmenu] = useState(false)
    function handleclickbutton()
    {
        setopenmenu(!openmenu);
    }
    return(
        <div className={openmenu ? "modalopen" : ""}>
            <div className="mainpage">
        <Navbar openmenu={openmenu} handleclickbutton={handleclickbutton}/>
        <div className="cardcontent">
            <div className="topcontent">
                <div className="maincontentcard">
                    <div className="maincontent">
                        <img className="mainimage" src={contentimage}></img>
                        <div className="mainflex">
                            <p className="maintext">The Bright Future of Web 3.0?</p>
                            <div className="mainflexcolumn">
                                <p className="smalltextmain"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, expedita fugit velit id provident non saepe mollitia doloremque voluptate ipsa.</p>
                                <button className="buttonstyle">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidecontentcard">
                    <div className="sidecard">
                        <p className="newtext">New</p>
                            <div className="sidecontentcards">
                                <div className="sidecontentsmallcard">
                                    <p className="smallcardtitle">Hydrogen vs Electric cars</p>
                                    <p className="smallcardcontent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, illum.</p>
                                    <p className="line"></p>
                                </div>
                                <div className="sidecontentsmallcard">
                                    <p className="smallcardtitle">Hydrogen vs Electric cars</p>
                                    <p className="smallcardcontent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, illum.</p>
                                    <p className="line"></p>
                                </div>
                                <div className="sidecontentsmallcard">
                                    <p className="smallcardtitle">Hydrogen vs Electric cars</p>
                                    <p className="smallcardcontent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, illum.</p>
                                    <p className="line"></p>
                                </div>
                                <div className="sidecontentsmallcard">
                                    <p className="smallcardtitle">Hydrogen vs Electric cars</p>
                                    <p className="smallcardcontent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, illum.</p>
                                    <p className="line"></p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );

}

function Navbar(props)
{
    

    useEffect(()=>{

    },[props.openmenu])

    return (
        <div className="Navbarmain">
            <div className="logo">
                <img src={logo}></img>
            </div>
            <div className="menu">
                    <p>Home</p>
                    <p>New</p>
                    <p>Popular</p>
                    <p>Trending</p>
                    <p>Categories</p>
            </div>
            <div className="menubutton">
                    <img src={props.openmenu? menubarclose:menubaropen} onClick={()=>props.handleclickbutton()}></img>
                    {props.openmenu && 
                    <div className="menubar puff-in-tr">
                            <p className="menuitem">Home</p>
                            <p className="menuitem">New</p>
                            <p className="menuitem">Popular</p>
                            <p className="menuitem">Trending</p>
                            <p className="menuitem">Categories</p>                      
                    </div>}
            </div>
        </div>
    );

}