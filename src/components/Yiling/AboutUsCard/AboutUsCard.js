import React, { Component } from "react";
import "./aboutUsCard.css";
//引入套件
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class AboutUsCard extends Component {
  render() {
    const settings = {
      arrow: true,
      dots: false,
      infinite: true,
      // autoplay: true,
      // autoplaySpeed: 1500,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          // 螢幕寬度小於1500
          breakpoint: 1500,
          settings: {
            slidesToShow: 2, //一次顯示3個
          },
        },
        {
          // 螢幕寬度小於1150
          breakpoint: 1150,
          settings: {
            slidesToShow: 1, //一次顯示2個
            dots: true,
          },
        },
      ],
    };
    return (
      <>
        <Slider className="doctorCard" {...settings}>
          <img src="./images/photo/doctor1.png" alt="負責藥師" />
          <img src="./images/photo/doctor2.png" alt="藥師" />
          <img src="./images/photo/doctor3.png" alt="藥師" />
        </Slider>
      </>
    );
  }
}
