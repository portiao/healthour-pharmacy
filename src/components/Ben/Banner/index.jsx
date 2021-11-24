import React from 'react'
import './index.css'

function Banner(props) {
  return (
    <div className="banner">
    <div className="text">
      <h2 className="title">線上購物</h2>
      <div className="cate">
        <p>保健食品/生活用品/醫療器材</p>
      </div>
    </div>
      <img src="http://localhost:3000/images/banner/banner.jpg" alt="" />
    </div>
  )
}

export default Banner
