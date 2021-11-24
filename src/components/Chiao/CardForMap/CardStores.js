import React from 'react'
import './cardStores.css'
import { Link } from 'react-router-dom'
import { GrMapLocation } from 'react-icons/gr' //引用map icon

function CardStores(props) {
  const { storeHome } = props
  return (
    <>
      <div className="chiao-storeAllPos cardShadowPo">
        <div className="chiao-linePosStoes"></div>
        <div className="chiao-storeInPos">
          <div className="chiao-storeNameMapT">
            <p className="chiao-storeNamePos">{storeHome.sName}</p>
            <a
              href={`https://www.google.com.tw/maps/place/${storeHome.s_address}`}
              target="_blank"
              className="chiao-mapLocationStore"
              rel="noreferrer"
            >
              <GrMapLocation className="chiao-mapIconLarge" />
            </a>
          </div>

          <div className="chiao-addressCardPos">
            <p className="chiao-addressNamePos">
              <span>地</span>
              <span>址：</span>
            </p>
            <p>{storeHome.s_address}</p>
          </div>
          <div className="chiao-addressCardPos">
            <p className="chiao-addressNamePos">
              <span>電</span>
              <span>話：</span>
            </p>
            <p>{storeHome.sLocal_phone}</p>
          </div>
          <div className="chiao-addressCardPos">
            <p className="chiao-addressNamePos">營業時間：</p>
            <p>{storeHome.s_time}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardStores
