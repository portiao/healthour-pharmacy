import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import './index.css'

function HotProductItem(props) {
  const [follow, setFollow] = useState(0)
  return (
    <a href="#/" className="hot-product">
      <div className="item">
        <div className="number">1</div>
        <div className="pic">
          <img src="../../images/products/products(1).jpeg" />
          <div
            className="heart"
            onClick={() => {
              follow === 0 ? setFollow(1) : setFollow(0)
            }}
          >
            <AiFillHeart
              className={follow === 1 ? 'icon red' : 'icon'}
            />
          </div>
        </div>
        <div className="text">
          <div className="title">
            <p>保佳兆UCII複合錠60PC</p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default HotProductItem
