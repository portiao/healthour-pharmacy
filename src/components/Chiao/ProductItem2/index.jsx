import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import './index.css'

function ProductItem(props) {
  const [follow, setFollow] = useState(0)
  return (
    <a href="prod-list/prod/8" className="product">
      <div className="item">
        {/* 圖片 */}
        <div className="pic">
          <img src={'./images/products/products(8).jpeg'} alt="" />
          {/* 追蹤愛心 */}
          {/* <div
            className="heart"
            onClick={() => {
              follow === 0 ? setFollow(1) : setFollow(0)
            }}
          >
            <AiFillHeart className={follow === 1 ? 'icon red' : 'icon'} />
          </div> */}
        </div>
        {/* 上層線 */}
        <div className="line-top"></div>
        <div className="text">
          {/* 商品名稱 */}
          <div className="title">
            <p>
              Raw Microbiome Ultimate Shelf 頂級純天然加強免疫力益生菌 -
              30粒膠囊
            </p>
          </div>
          {/* 下層線 */}
          <div className="line-bottom"></div>
          {/* 價格 */}
          <div className="price">
            <p>$1299</p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default ProductItem
