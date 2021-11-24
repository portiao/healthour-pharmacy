import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import './index.css'

function FollowCateNav(props) {
  const {
    cates,
    setCategoryTag,
    controlCate,
    setControlCate,
    controlSmallCate,
    setControlSmallCate,
  } = props

  return (
    <div className="cate-nav">
      {/* 藍色標題 */}
      <div className="blue-title">
        <div className="text">
          <p>商品分類</p>
        </div>
      </div>
      {/* 類別區 */}
      <div className="cate">
        {/* 小標題 */}
        <div className="title">
          <div
            onClick={() => {
              setControlCate(0)
            }}
          >
            <div className={controlCate === 0 ? 'text now' : 'text'}>
              商品類別
            </div>
            <div className="arrow">
              <IoIosArrowDown
                className={controlCate === 0 ? 'right now' : 'right'}
              />
            </div>
          </div>
        </div>
        {/* 內容 */}
        <ul className={controlCate === 0 ? 'content now' : 'content'}>
          <li>
            <div
              className={controlSmallCate === '全部商品' ? 'now' : ''}
              onClick={(e) => {
                setControlCate(0)
                setControlSmallCate('全部商品')
                setCategoryTag('')
              }}
            >
              全部商品
            </div>
          </li>
          {cates.map((v, i) => {
            return (
              <li key={i}>
                <div
                  className={controlSmallCate === i ? 'now' : ''}
                  onClick={(e) => {
                    setControlCate(0)
                    setControlSmallCate(i)
                    setCategoryTag(v.name)
                  }}
                >
                  {v.name}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      {/* 分隔線 */}
      <div className="line"></div>
    </div>
  )
}

export default FollowCateNav
