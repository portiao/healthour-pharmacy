import React from "react";
import "./cardStores.css";
import { Link } from "react-router-dom";
import { GrMapLocation } from "react-icons/gr"; //引用map icon

function CardStores(props) {
  const { storeHome } = props;
  return (
    <>
      <div className="storeAllPos cardShadowPo">
        <div className="linePosStoes"></div>
        <div className="storeInPos">
          <div className="storeNameMapT">
            <p className="storeNamePos">{storeHome.sName}</p>
            <a href={`https://www.google.com.tw/maps/place/${storeHome.s_address}`} target="_blank" className="mapLocationStore">
              <GrMapLocation className="mapIconLarge" />
            </a>
          </div>

          <div className="addressCardPos">
            <p className="addressNamePos">
              <span>地</span>
              <span>址：</span>
            </p>
            <p>{storeHome.s_address}</p>
          </div>
          <div className="addressCardPos">
            <p className="addressNamePos">
              <span>電</span>
              <span>話：</span>
            </p>
            <p>{storeHome.sLocal_phone}</p>
          </div>
          <div className="addressCardPos">
            <p className="addressNamePos">營業時間：</p>
            <p>{storeHome.s_time}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardStores;
