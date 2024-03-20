import React, { useEffect, useState } from "react";
import "..//components/Home.css"
import searchicon from "../assets/icon-search.svg"
import beyondearth from "../assets/thumbnails/beyond-earth/regular/small.jpg"
import bottomgear from "../assets/thumbnails/bottom-gear/regular/small.jpg"
import undiscovered from "../assets/thumbnails/undiscovered-cities/regular/small.jpg"
import a1998 from "../assets/thumbnails/1998/regular/small.jpg"
import darkmoon from "../assets/thumbnails/dark-side-of-the-moon/regular/small.jpg"
import greatlands from "../assets/thumbnails/the-great-lands/regular/small.jpg"
import diary from  "../assets/thumbnails/the-diary/regular/small.jpg"
import untouched from "../assets/thumbnails/earths-untouched/regular/small.jpg"
import beyond from "../assets/thumbnails/no-land-beyond/regular/small.jpg"
import hunt from "../assets/thumbnails/during-the-hunt/regular/small.jpg"
import autosport from "../assets/thumbnails/autosport-the-series/regular/small.jpg"
import sameanswer from "../assets/thumbnails/same-answer-2/regular/small.jpg"
import bookmark from "../assets/icon-bookmark-empty.svg"
import saturn from  "../assets/thumbnails/mission-saturn/regular/small.jpg"
import cases from "../assets/thumbnails/unresolved-cases/regular/small.jpg"
import darker from "../assets/thumbnails/darker/regular/small.jpg"
import tour from  "../assets/thumbnails/the-tasty-tour/regular/small.jpg"
import asia from "../assets/thumbnails/asia-in-24-days/regular/small.jpg"
import dogs from "../assets/thumbnails/dogs/regular/small.jpg"
import productionline from "../assets/thumbnails/production-line/regular/small.jpg"
import loneheart from "../assets/thumbnails/lone-heart/regular/small.jpg"
import a112 from "../assets/thumbnails/112/regular/small.jpg"
import hill from "../assets/thumbnails/whispering-hill/regular/small.jpg"
import track from "../assets/thumbnails/off-the-track/regular/small.jpg"
import heiress from "../assets/thumbnails/the-heiress/regular/small.jpg"
import vanlife from "../assets/thumbnails/van-life/regular/small.jpg"
import community from "../assets/thumbnails/community-of-ours/regular/small.jpg"
import  relentless from "../assets/thumbnails/relentless/regular/small.jpg"
import rockies from "../assets/thumbnails/the-rockies/regular/small.jpg"
import echo from "../assets/thumbnails/below-echo/regular/small.jpg"

import { FaWindowClose   } from 'react-icons/fa';

export default function Home()
{
    const [moviedata, setmoviedata] = useState([]);
    const [filterdata,setfilterdata] = useState([])
    const [loading,setloading] = useState(false);
    const [bookmarks,setbookmarks] = useState([]);
    const [showmodal, setshowmodal] = useState(false);
    const [modaltext,setmodaltext] = useState("")

    useEffect(()=>{
        setmoviedata(data);

        try{
          const bookmarks = JSON.parse(localStorage.getItem('books'));
          if(bookmarks)
            setbookmarks(bookmarks)
          console.log(bookmarks)
        }catch(error)
        {}

        
        setTimeout(function() {setshowmodal(false)}, 3000);

        },[loading])

    function handlesearch(e)
    {
        setloading(!loading)
        let sear = e.target.value
        setfilterdata([])
        if(sear.length>0)
        {
            setfilterdata(moviedata.filter(e => e.title.substring(0,sear.length).toLowerCase()===sear.toLowerCase()))
        }
    }
    function handlebookmark(title)
    {
      //console.log(moviedata.filter(e => e.title.toLowerCase()===title.toLowerCase()))
      for(let i in bookmarks)
      {
       if(bookmarks[i][0].title === title)
          {
            console.log("Already Added to Bookmarks")
            setshowmodal(true)
            setmodaltext("Already Added to Bookmarks")
            return
          }
      }
      setmodaltext("Added to Bookmarks")
      setshowmodal(true)
      setbookmarks([...bookmarks,(moviedata.filter(e => e.title.toLowerCase()===title.toLowerCase()))])
      localStorage.setItem('books',JSON.stringify(bookmarks))
      console.log(bookmarks)
    }
    return (
        <div className="maincontent">
            <div className="searchbarmain">
                <img src={searchicon} alt="search"></img>
                <input onChange={(e)=>handlesearch(e)} placeholder="Search for your favorite Tv or Movies"></input>
            </div>
            <div className="moviescard">
                <p>Recommended For you</p>
                <div className="movies">
                    {
                        filterdata.length > 0 ? filterdata.map(item => 
                            <Moviecard handlebookmark={handlebookmark} movieimage={item.thumbnail.regular.small} title={item.title} year={item.year} type={item.category} rating={item.rating}/>) :
                            moviedata.length>0 && moviedata.map(item => 
                                <Moviecard handlebookmark={handlebookmark} movieimage={item.thumbnail.regular.small} title={item.title} year={item.year} type={item.category} rating={item.rating}/>)
                    }
                </div>
            </div>
            {showmodal && 
            <div className="modalmain slide-in-elliptic-top-fwd">
              <div className="modalinner">
                <p>{modaltext}</p>
                <button onClick={()=>setshowmodal(false)}><FaWindowClose/></button>
              </div>
            </div>}
        </div>
    );
}

function Moviecard(props)
{
    return (
        <div className="smallcardmovies" >
            <img src={props.movieimage} alt="images"></img>
            <div className="smallheading">
                <p>{props.year}</p>
                <p>{props.type}</p>
                <p>{props.rating}</p>
            </div>
            <div className="bookmarkstyle">
                <img  onClick={() => props.handlebookmark(props.title)} src={bookmark} alt="book"></img>
            </div>
            <p className="smallcardtitle">{props.title}</p>
        </div>
    );
}




const data =[
    { "id" : 1, 
      "title": "Beyond Earth",
      "thumbnail": {
        "trending": {
          "small": "../assets/thumbnails/beyond-earth/trending/small.jpg",
          "large": "../assets/thumbnails/beyond-earth/trending/large.jpg"
        },
        "regular": {
          "small": beyondearth,
          "medium": "../assets/thumbnails/beyond-earth/regular/medium.jpg",
          "large": "../asse/thumbnails/beyond-earth/regular/large.jpg"
        }
      },
      "year": 2019,
      "category": "Movie",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": true
    },
    { "id" : 2,
      "title": "Bottom Gear",
      "thumbnail": {
        "trending": {
          "small": "../assets/thumbnails/bottom-gear/trending/small.jpg",
          "large": "../assets/thumbnails/bottom-gear/trending/large.jpg"
        },
        "regular": {
          "small": bottomgear,
          "medium": "../assets/thumbnails/bottom-gear/regular/medium.jpg",
          "large": "../assets/thumbnails/bottom-gear/regular/large.jpg"
        }
      },
      "year": 2021,
      "category": "Movie",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": true
    },
    { "id" : 3,
      "title": "Undiscovered Cities",
      "thumbnail": {
        "trending": {
          "small": "../assets/thumbnails/undiscovered-cities/trending/small.jpg",
          "large": "../assets/thumbnails/undiscovered-cities/trending/large.jpg"
        },
        "regular": {
          "small": undiscovered,
          "medium": "../assets/thumbnails/undiscovered-cities/regular/medium.jpg",
          "large": "../assets/thumbnails/undiscovered-cities/regular/large.jpg"
        }
      },
      "year": 2019,
      "category": "TV Series",
      "rating": "E",
      "isBookmarked": false,
      "isTrending": true
    },
    { "id" : 4,
      "title": "1998",
      "thumbnail": {
        "trending": {
          "small": "../assets/thumbnails/1998/trending/small.jpg",
          "large": "../assets/thumbnails/1998/trending/large.jpg"
        },
        "regular": {
          "small": a1998,
          "medium": "../assets/thumbnails/1998/regular/medium.jpg",
          "large": "../assets/thumbnails/1998/regular/large.jpg"
        }
      },
      "year": 2021,
      "category": "Movie",
      "rating": "18+",
      "isBookmarked": false,
      "isTrending": true
    },
    { "id" : 5,
      "title": "Dark Side of the Moon",
      "thumbnail": {
        "trending": {
          "small": "../assets/thumbnails/dark-side-of-the-moon/trending/small.jpg",
          "large": "../assets/thumbnails/dark-side-of-the-moon/trending/large.jpg"
        },
        "regular": {
          "small": darkmoon,
          "medium": "../assets/thumbnails/dark-side-of-the-moon/regular/medium.jpg",
          "large": "../assets/thumbnails/dark-side-of-the-moon/regular/large.jpg"
        }
      },
      "year": 2018,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": true,
      "isTrending": true
    },
    { "id" : 6,
      "title": "The Great Lands",
      "thumbnail": {
        "regular": {
          "small": greatlands,
          "medium": "../assets/thumbnails/the-great-lands/regular/medium.jpg",
          "large": "../assets/thumbnails/the-great-lands/regular/large.jpg"
        }
      },
      "year": 2019,
      "category": "Movie",
      "rating": "E",
      "isBookmarked": false,
      "isTrending": false
    },
    { "id" : 7,
      "title": "The Diary",
      "thumbnail": {
        "regular": {
          "small": diary,
          "medium": "../assets/thumbnails/the-diary/regular/medium.jpg",
          "large": "../assets/thumbnails/the-diary/regular/large.jpg"
        }
      },
      "year": 2019,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    { "id" : 8,
      "title": "Earth’s Untouched",
      "thumbnail": {
        "regular": {
          "small": untouched,
          "medium": "../assets/thumbnails/earths-untouched/regular/medium.jpg",
          "large": "../assets/thumbnails/earths-untouched/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "18+",
      "isBookmarked": true,
      "isTrending": false
    },
    { "id" : 9,
      "title": "No Land Beyond",
      "thumbnail": {
        "regular": {
          "small": beyond,
          "medium": "../assets/thumbnails/no-land-beyond/regular/medium.jpg",
          "large": "../assets/thumbnails/no-land-beyond/regular/large.jpg"
        }
      },
      "year": 2019,
      "category": "Movie",
      "rating": "E",
      "isBookmarked": false,
      "isTrending": false
    },
    { "id" : 10,
      "title": "During the Hunt",
      "thumbnail": {
        "regular": {
          "small": hunt,
          "medium": "../assets/thumbnails/during-the-hunt/regular/medium.jpg",
          "large": "../assets/thumbnails/during-the-hunt/regular/large.jpg"
        }
      },
      "year": 2016,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    { "id" : 11,
      "title": "Autosport the Series",
      "thumbnail": {
        "regular": {
          "small": autosport,
          "medium": "../assets/thumbnails/autosport-the-series/regular/medium.jpg",
          "large": "../assets/thumbnails/autosport-the-series/regular/large.jpg"
        }
      },
      "year": 2016,
      "category": "TV Series",
      "rating": "18+",
      "isBookmarked": false,
      "isTrending": false
    },
    { "id" : 12,
      "title": "Same Answer II",
      "thumbnail": {
        "regular": {
          "small": sameanswer,
          "medium": "../assets/thumbnails/same-answer-2/regular/medium.jpg",
          "large": "../assets/thumbnails/same-answer-2/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "E",
      "isBookmarked": false,
      "isTrending": false
    },
    { "id" : 13,
      "title": "Below Echo",
      "thumbnail": {
        "regular": {
          "small": echo,
          "medium": "../assets/thumbnails/below-echo/regular/medium.jpg",
          "large": "../assets/thumbnails/below-echo/regular/large.jpg"
        }
      },
      "year": 2016,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    { "id" : 14,
      "title": "The Rockies",
      "thumbnail": {
        "regular": {
          "small": rockies,
          "medium": "../assets/thumbnails/the-rockies/regular/medium.jpg",
          "large": "../assets/thumbnails/the-rockies/regular/large.jpg"
        }
      },
      "year": 2015,
      "category": "TV Series",
      "rating": "E",
      "isBookmarked": true,
      "isTrending": false
    },
    { "id" : 15,
      "title": "Relentless",
      "thumbnail": {
        "regular": {
          "small": relentless,
          "medium": "../assets/thumbnails/relentless/regular/medium.jpg",
          "large": "../assets/thumbnails/relentless/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "PG",
      "isBookmarked": true,
      "isTrending": false
    },
    { "id" : 16,
      "title": "Community of Ours",
      "thumbnail": {
        "regular": {
          "small": community,
          "medium": "../assets/thumbnails/community-of-ours/regular/medium.jpg",
          "large": "../assets/thumbnails/community-of-ours/regular/large.jpg"
        }
      },
      "year": 2018,
      "category": "TV Series",
      "rating": "18+",
      "isBookmarked": false,
      "isTrending": false
    },
    { "id" : 17,
      "title": "Van Life",
      "thumbnail": {
        "regular": {
          "small": vanlife,
          "medium": "../assets/thumbnails/van-life/regular/medium.jpg",
          "large": "../assets/thumbnails/van-life/regular/large.jpg"
        }
      },
      "year": 2015,
      "category": "Movie",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    { "id" : 18,
      "title": "The Heiress",
      "thumbnail": {
        "regular": {
          "small": heiress,
          "medium": "../assets/thumbnails/the-heiress/regular/medium.jpg",
          "large": "../assets/thumbnails/the-heiress/regular/large.jpg"
        }
      },
      "year": 2021,
      "category": "Movie",
      "rating": "PG",
      "isBookmarked": true,
      "isTrending": false
    },
    { "id" : 19,
      "title": "Off the Track",
      "thumbnail": {
        "regular": {
          "small": track,
          "medium": "../assets/thumbnails/off-the-track/regular/medium.jpg",
          "large": "../assets/thumbnails/off-the-track/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "18+",
      "isBookmarked": true,
      "isTrending": false
    },
    { "id" : 20,
      "title": "Whispering Hill",
      "thumbnail": {
        "regular": {
          "small": hill,
          "medium": "../assets/thumbnails/whispering-hill/regular/medium.jpg",
          "large": "../assets/thumbnails/whispering-hill/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "E",
      "isBookmarked": false,
      "isTrending": false
    },
    { "id" : 21,
      "title": "112",
      "thumbnail": {
        "regular": {
          "small": a112,
          "medium": "../assets/thumbnails/112/regular/medium.jpg",
          "large": "../assets/thumbnails/112/regular/large.jpg"
        }
      },
      "year": 2013,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    { "id" : 22,
      "title": "Lone Heart",
      "thumbnail": {
        "regular": {
          "small": loneheart,
          "medium": "../assets/thumbnails/lone-heart/regular/medium.jpg",
          "large": "../assets/thumbnails/lone-heart/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "E",
      "isBookmarked": true,
      "isTrending": false
    },
    { "id" : 23,
      "title": "Production Line",
      "thumbnail": {
        "regular": {
          "small": productionline,
          "medium": "../assets/thumbnails/production-line/regular/medium.jpg",
          "large": "../assets/thumbnails/production-line/regular/large.jpg"
        }
      },
      "year": 2018,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    { "id" : 24,
      "title": "Dogs",
      "thumbnail": {
        "regular": {
          "small": dogs,
          "medium": "../assets/thumbnails/dogs/regular/medium.jpg",
          "large": "../assets/thumbnails/dogs/regular/large.jpg"
        }
      },
      "year": 2016,
      "category": "TV Series",
      "rating": "E",
      "isBookmarked": true,
      "isTrending": false
    },
    { "id" : 25,
      "title": "Asia in 24 Days",
      "thumbnail": {
        "regular": {
          "small": asia,
          "medium": "../assets/thumbnails/asia-in-24-days/regular/medium.jpg",
          "large": "../assets/thumbnails/asia-in-24-days/regular/large.jpg"
        }
      },
      "year": 2020,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    { "id" : 26,
      "title": "The Tasty Tour",
      "thumbnail": {
        "regular": {
          "small": tour,
          "medium": "../assets/thumbnails/the-tasty-tour/regular/medium.jpg",
          "large": "../assets/thumbnails/the-tasty-tour/regular/large.jpg"
        }
      },
      "year": 2016,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    { "id" : 27,
      "title": "Darker",
      "thumbnail": {
        "regular": {
          "small": darker,
          "medium": "../assets/thumbnails/darker/regular/medium.jpg",
          "large": "../assets/thumbnails/darker/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "18+",
      "isBookmarked": true,
      "isTrending": false
    },
    { "id" : 28,
      "title": "Unresolved Cases",
      "thumbnail": {
        "regular": {
          "small": cases,
          "medium": "../assets/thumbnails/unresolved-cases/regular/medium.jpg",
          "large": "../assets/thumbnails/unresolved-cases/regular/large.jpg"
        }
      },
      "year": 2018,
      "category": "TV Series",
      "rating": "18+",
      "isBookmarked": false,
      "isTrending": false
    },
    { "id" : 29,
      "title": "Mission: Saturn",
      "thumbnail": {
        "regular": {
          "small": saturn,
          "medium": "../assets/thumbnails/mission-saturn/regular/medium.jpg",
          "large": "../assets/thumbnails/mission-saturn/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "PG",
      "isBookmarked": true,
      "isTrending": false
    }
  ] 