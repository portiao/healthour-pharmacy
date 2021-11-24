import React, { useState } from "react";
import "./pHeader.css";

//元件引入
import AirQuality from "../../../components/Yiling/AirQ/AirQuality"; //空氣品質
import ActivePage from "../../../components/Yiling/ActivePage/ActivePage"; //活動頁籤

const Indexbanner = "./images/photo/indexbanner.jpg"; //Banner圖

function PHeader() {
  const [moveAir, setMoveAir] = useState(false);
  return (
    <div className="headerBack">
      <div className="changeSpace">
        <img className="indexbanner" src={Indexbanner}></img>
        <div className="activeMove">
          <ActivePage />
        </div>
      </div>
      <div
        onMouseEnter={() => {
          setMoveAir(true);
        }}
        onMouseLeave={() => {
          setMoveAir(false);
        }}
        className={moveAir ? "rightBox moveBoxAir" : "rightBox"}
      >
        <AirQuality moveAir={moveAir} setMoveAir={setMoveAir} />
      </div>
    </div>
  );
}

export default PHeader;
