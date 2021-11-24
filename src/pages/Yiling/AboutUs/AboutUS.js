import React from "react";
import "./aboutUs.css";


import AboutUsCard from "../../../components/Yiling/AboutUsCard/AboutUsCard";

function AboutUS() {
  return (
    <>
      <div className="aboutUsP">
        <div>
          <h1 className="aboutUsTitle">品牌介紹</h1>
        </div>
        <div className="aboutUsWord">
          <p>
            Healthour（我們的健康）定位為「社區的健康守護神及全家人的健康顧問」，成立於2019年，建立健康專業與品質信譽保證的連鎖藥局。
          </p>
          <p>
            Healthour深信，客戶相信專業也重視健康，執著保健對生命的意義與價值，經營項目包括連鎖品牌藥局通路
            、醫藥物流 、電子商務B2B與B2C之服務 ，建置完成整合性健康產業服務。
          </p>
        </div>
      </div>
      <div className="aboutUsDoctor">
        <AboutUsCard />
      </div>
    </>
  );
}

export default AboutUS;
