import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import auco from "../../../../../assets/character/auco-char.png";
import thuytinh from "../../../../../assets/character/thuytinh-char.png";
import sontinh from "../../../../../assets/character/sontinh-char.png";
import "./SelectCharacter.scss";

// import required modules
import { EffectCreative } from "swiper";

export default function SelectCharacter() {
  return (
    <div>
      <h3>Chọn nhân vật</h3>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={sontinh} className="character-card img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={thuytinh} className="character-card img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={auco} className="character-card img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={thuytinh} className="character-card img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sontinh} className="character-card img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={thuytinh} className="character-card img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sontinh} className="character-card img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={thuytinh} className="character-card img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sontinh} className="character-card img-fluid" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
