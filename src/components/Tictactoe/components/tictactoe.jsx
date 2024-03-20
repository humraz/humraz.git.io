import React, { useEffect, useState } from "react";
import "../components/tictactoe.css";
import hoverx from "../assets/icon-x-outline.svg";
import hovero from "../assets/icon-o-outline.svg";
import o from "../assets/icon-o.svg";
import x from "../assets/icon-x.svg";
import headingxo from "../assets/logo.svg";
import restart from "../assets/icon-restart.svg";
import iconx from "../assets/icon-x.svg";
import icono from "../assets/icon-o.svg";

export default function Tictactoe() {
  const [arr, setarr] = useState(Array(9).fill(0));
  const [renderimage, setrenderimage] = useState(-1);
  const [xoro, setxoro] = useState(true);
  const [dispmodal, setdispmodal] = useState(false);
  const [ocount, setocount] = useState(0);
  const [xcount, setxcount] = useState(0);
  const [tiecount, settiecount] = useState(0);
  const [winner, setwinner] = useState(-1);

  const winningarray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  function handlehover(index) {
    if (dispmodal === false) setrenderimage(index);
  }
  function handlemouseleave() {
    if (dispmodal === false) setrenderimage(-1);
  }
  function handleClick(index) {
    if (xoro == true) arr[index] = 1;
    else arr[index] = 2;
    console.log(arr);
    setxoro(!xoro);
    for (let item in winningarray) {
      let i = winningarray[item];
      let x = i[0];
      let y = i[1];
      let z = i[2];
      console.log(x + " " + y + " " + z);
      if (arr[x] != 0 && arr[x] == arr[y] && arr[x] == arr[z]) {
        setdispmodal(true);
        if (xoro) 
        {
          setwinner(2);
          setxcount(xcount + 1);
        }
        else {
          setwinner(1);
          setocount(ocount + 1);
        }
        return;
      }
    }
    let flag = 0;
    for (let i in arr) {
      if (arr[i] == 0) {
        flag = 1;
      }
    }
    if (flag == 0) {
      settiecount(tiecount + 1);
      setdispmodal(true);
      setwinner(0);
    }
  }

  function restartgame() {
    setarr(Array(9).fill(0));
    setxoro(true);
    setdispmodal(false);
  }

  useEffect(() => {}, [arr, renderimage]);
  //console.log(renderimage);
  return (
    <div className="backgroundmain" >
      <div className="maincard">
        <div className="insidecard">
          <div className="insideflex">
            <div className="heading">
              <div className="headingflex">
                <img className="heading1" src={headingxo}></img>
              </div>
              <div className="headingflex">
                <img className="heading2" src={xoro ? iconx : icono}></img>
                <p>&nbsp;&nbsp;Turn</p>
              </div>
              <div className="heading1flex">
                <img
                  className="heading3"
                  onClick={() => restartgame()}
                  src={restart}
                ></img>
              </div>
            </div>
            <div className="boxesgrid">
              {arr.map((item, index) =>
                item === 1 ? (
                  <div className="insidebtn">
                    <img src={x}></img>
                  </div>
                ) : item === 2 ? (
                  <div className="insidebtn">
                    <img src={o}></img>
                  </div>
                ) : index === renderimage ? (
                  <div className="insidebtn">
                    <img
                      onClick={() => handleClick(index)}
                      src={xoro ? hoverx : hovero}
                    ></img>
                  </div>
                ) : (
                  <btn
                    onMouseEnter={() => handlehover(index)}
                    className="btn"
                  ></btn>
                )
              )}
            </div>
            <div className="footer">
              <div className="footerbox">
                <p className="footerboxheading">X(YOU)</p>
                <p className="footerboxscore">{xcount}</p>
              </div>
              <div className="footerbox">
                <p className="footerboxheading">Ties</p>
                <p className="footerboxscore">{tiecount}</p>
              </div>
              <div className="footerbox">
                <p className="footerboxheading">O(CPU)</p>
                <p className="footerboxscore">{ocount}</p>
              </div>
            </div>
          </div>
          {dispmodal && (
            <div className="modaldisp">
              <div className="modalflex">
                <div className="textmodalflex">
                  {winner !== 0 ? (
                    <>
                      <img
                        className="heading2"
                        src={xoro ? icono : iconx}
                      ></img>
                      <p>&nbsp;&nbsp;&nbsp;Wins the game</p>
                    </>
                  ) : (
                    <p className="textinmodal">Draw!</p>
                  )}
                </div>
                <div className="restartbutton">
                  <img
                    className="heading3"
                    onClick={() => restartgame()}
                    src={restart}
                  ></img>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
