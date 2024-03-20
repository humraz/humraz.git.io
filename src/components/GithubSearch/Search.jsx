import React, { useEffect, useState } from "react";
import "../GithubSearch/styles.css";
import searchicon from "../GithubSearch/assets/icon-search.svg";
import profilepic from "../GithubSearch/assets/octocat.png";
import sun from "../GithubSearch/assets/icon-sun.svg";
import moon from "../GithubSearch/assets/icon-moon.svg";
import location from "../GithubSearch/assets/icon-location.svg";
import social from "../GithubSearch/assets/icon-twitter.svg"
import building from "../GithubSearch/assets/icon-company.svg"
import link from "../GithubSearch/assets/icon-website.svg"

export default function Search() {
  const [inputsearch,setinputsearch] = useState("")
  const[loading,setloading] = useState(false);
  const [response, setresponse] = useState({})
  const [theme,settheme] = useState("dark")

  function handleinput(e)
  {
    setinputsearch(e.target.value);
    //console.log(inputsearch)
  }
  async function callapi()
  {
    const response = await fetch(`https://api.github.com/users/${inputsearch}`);
    const data = await response.json();
    setloading(true);
    console.log(data);
    setresponse(data);
  }
  function handlesubmit()
  {
    callapi();
    console.log(inputsearch);
  }

  useEffect(()=>{

  },[loading,theme])
  
  function handlethemeclick()
  {
    theme==="dark"? settheme("light"): settheme("dark")
    console.log(theme)
  }

  return (
    <>
      <div className="cardmain" data-theme={theme}>
        <div className="devfinderheading">
          <p className="devfinder">devFinder</p>
          <div className="themecontainer">
            <p className="ldtheme">{theme =="dark"? "Dark" : "Light"}</p>
            <img onClick={()=> handlethemeclick()} className="themeimg" src={theme =="dark"?moon : sun}></img>
          </div>
        </div>

        <div className="searchcard">
          <img className="searchicon" src={searchicon}></img>
          <input
            className="searchinput"
            placeholder="Search GitHub Username"
            onChange={(e)=> handleinput(e)}
            value={inputsearch}
          ></input>
          <button onClick={()=>handlesubmit()} className="searchbtn">Search</button>
        </div>

        { loading && 
          (<div className="infocard">
          <div className="profilepic">
            <img className="profileimage" src={response["avatar_url"]}></img>
          </div>
          <div className="infoflex">
            <div className="infogridone">
              <p className="username">{response["name"]}</p>           
              <p className="joineditem">{response["created_at"]?response["created_at"].substring(0,10) : null}</p>
            </div>
            <p className="usernametag">@{response["login"]}</p>
            <p className="bio">{response["bio"]?response["bio"]:"This profile has no bio"}</p>
            <div className="insidecardgithub">
              <div className="insidecardflex">
                <p>Repos</p>
                <p>{response["public_repos"]}</p>
              </div>
              <div className="insidecardflex">
                <p>Followers</p>
                <p>{response["followers"]}</p>
              </div>
              <div className="insidecardflex">
                <p>Following</p>
                <p>{response["following"]}</p>
              </div>
            </div>
            <div className="lastrowinside">
              <div className="lastrowflex">
                <div className="lastrowhorizontalflex">
                  <img className="lastrowsize" src={location}></img>
                  <p>{response["location"]}</p>
                </div>
                <div className="lastrowhorizontalflex">
                  <img className="lastrowsize" src={link}></img>
                  <p>{response["html_url"]}</p>
                </div>
              </div>
              <div className="lastrowflex">
                <div className="lastrowhorizontalflex">
                  <img className="lastrowsize" src={social}></img>
                  <p>{response["twitter_username"]!=null?response["twitter_username"]:"Not Available"}</p>
                </div>
                <div className="lastrowhorizontalflex">
                  <img className="lastrowsize" src={building}></img>
                  <p>{response["location"]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>)
        }
      </div>
    </>
  );
}
