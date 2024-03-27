import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import tictactoevideo from "../assets/TicTacToe.mp4";
import cart from "../assets/Cart.mp4"
import webappvideo from "../assets/Webapp.mp4";
import github from "../assets/githubpages.mp4"
import first from "../assets/highlights.png"

import "../components/Sliderstyles.css";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Slidervideos() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="bulletclass">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <div className="videosflex">

        <div>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={false}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <div className="videos">
            <SwiperSlide>
                <img src={first}>
                </img>
              </SwiperSlide>
            <SwiperSlide>
                <video
                  src={webappvideo}
                  controls="controls"
                ></video>
              </SwiperSlide>
              <SwiperSlide>
                <video
                  src={tictactoevideo}
                  controls="controls"
                ></video>
              </SwiperSlide>
              <SwiperSlide>
                <video
                  src={github}
                  controls="controls"
                ></video>
              </SwiperSlide>
              <SwiperSlide>
                <video
                  src={cart}
                  controls="controls"
                ></video>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}
