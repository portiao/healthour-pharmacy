import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import './index.css'

function ProductItem(props) {
  const { price, Name, image, special_offer } = props
  // console.log(product)
  return (
    <div className="product">
      <div className="item">
        {/* 圖片 */}
        <div className="pic">
          <img src={image} alt="" />
        </div>
        {/* 上層線 */}
        <div className="line-top"></div>
        <div className="text">
          {/* 商品名稱 */}
          <div className="title">
            <p>{Name}</p>
          </div>
          {/* 下層線 */}
          <div className="line-bottom"></div>
          {/* 價格 */}
          <div className="price-area">
            <div
              className="price"
              style={{
                fontSize: special_offer !== '' ? '16px' : '18px',
                textDecoration: special_offer !== '' ? 'line-through' : 'none',
              }}
            >
              <p>${price}</p>
            </div>
            {special_offer !== '' ? (
              <div className="product-special-offer">
                <p>${special_offer}</p>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
