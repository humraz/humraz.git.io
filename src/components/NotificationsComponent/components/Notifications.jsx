import React, { useState, useEffect } from "react";
import "../css/Notifications.css";
import profilepic1 from "../assets/avatar-angela-gray.webp";
import profilepic2 from "../assets/avatar-anna-kim.webp";
import profilepic3 from "../assets/avatar-jacob-thompson.webp";
import profilepic4 from "../assets/avatar-kimberly-smith.webp";
import profilepic5 from "../assets/avatar-mark-webber.webp";

export default function Notifications() {
  const notifs = [
    {
      index: 1,
      image: profilepic1,
      notification: "Angela Gray followed you",
      timestamp: "2 mins ago",
    },
    {
      index: 2,
      image: profilepic2,
      notification: "Anna Kim left the group Chessclub",
      timestamp: "5 mins ago",
    },
    {
      index: 3,
      image: profilepic3,
      notification: "Jacob Thompson has joined your group ChessClub",
      timestamp: "25 mins ago",
    },
    {
      index: 4,
      image: profilepic4,
      notification: "Kimberly Smith Commented on your picture",
      timestamp: "1 hour ago",
    },
    {
      index: 5,
      image: profilepic5,
      notification: "Mark Webber Reacted to your recent post!",
      timestamp: "8 hours ago",
    },
    
  ];

  const [notifications, setnotifications] = useState([]);
  const [clicked,setClicked] = useState([]);
  const [notifcount, setnotifcount] = useState(0);
  const [map, setmap] = useState(new Map);
  const [load,setload] = useState(false);

  function handlefunction(index)
  {
   
    (clicked[index-1]="1")
    setload(!load);
  }

  function clearAllFunction()
  {
    setload(!load);
    setClicked(Array(notifications.length).fill("1"))
      let count=0;
      for(let i in clicked)
      {
        console.log(clicked[i]);
        if(clicked[i]==='1')
          count++;
      }
      setnotifcount(notifications.length - count);
  }

  useEffect(() => {

      setnotifications([]);
      for (let key of notifs) { 
        setnotifications(previous => [...previous,key["index"]]);
        map.set(key["index"],[key["timestamp"],key["notification"],key["image"]])
      }      

      let count=0;
      for(let i in clicked)
      {
        console.log(clicked[i]);
        if(clicked[i]==='1')
          count++;
      }
      setnotifcount(notifications.length - count);
      
      console.log(clicked);

  }, [load,notifcount]);

  return (
    <div className="maincard">
      <div className="notificationsflex">
        <div className="heading">
          <div className="gridoftwo">
            <div className="insidegridoftwo">
              <p className="headingnotification">Notifications</p>
              <button className="headingcount">{notifcount}</button>
            </div>
            <div className="seconditem">
              <p className="headingmarkasread" onClick={() => clearAllFunction()}>Mark All As Read</p>
            </div>
          </div>
        </div>

        {notifications.map(item => 
          <div>
            <Notificationitem profilepic={profilepic1} clicked ={clicked} index={item} content={map.get(item)} handlefunction={handlefunction} time=""/>
            </div>)}
        
      </div>
    </div>
  );
}

function Notificationitem(props) {
  return (
    <>
      <div className={props.clicked[props.index-1] === "1" ? "notifitem" : "notifitem-selected" } onClick={() => props.handlefunction(props.index)}>
        <div className="itemflex">
          <img className="itemimagesize" src={props.content[2]}></img>
          <div className="notificationcontent">
            <p className="insidecontent">{props.content[1]}</p>
            <p className="insidecontent">{props.content[0]}</p>
          </div>
        </div>
      </div>
    </>
  );
}
