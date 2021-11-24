import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import './index.css'

function HotProductItem(props) {
  const { Name, image, number } = props
  return (
    <div className="hot-product">
      <div className="item">
        <div className="number">{number + 1}</div>
        <div className="pic">
          <img src={image} alt="" />
        </div>
        <div className="text">
          <div className="title">
            <p>{Name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotProductItem
