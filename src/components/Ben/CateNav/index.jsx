import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import './index.css'

function CateNav(props) {
  const {
    cates,
    bodys,
    controlCate,
    setControlCate,
    controlSmallCate,
    setControlSmallCate,
    controlSmallBody,
    setControlSmallBody,
    handleCate,
    setCateWord,
    handlelocation,
    setLocationWord,
  } = props

  return (
    <div className="cate-nav">
      {/* 藍色標題 */}
      <div className="blue-title">
        <div className="text">
          <p>線上購物</p>
        </div>
      </div>
      {/* 類別區 */}
      <div className="cate">
        {/* 小標題 */}
        <div className="title">
          <div
            onClick={() => {
              setControlCate(0)
              setControlSmallBody('')
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
          <li
            onClick={() => {
              setControlCate(0)
              setControlSmallCate('全部商品')
              setControlSmallBody('')
              setCateWord('')
            }}
          >
            <Link
              to={'/prod-list/page/1'}
              className={controlSmallCate === '全部商品' ? 'now' : ''}
              onClick={handleCate}
            >
              全部商品
            </Link>
          </li>
          {cates.map((v, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  setControlCate(0)
                  setControlSmallCate(i)
                  setControlSmallBody('')
                  setCateWord(v.name)
                }}
              >
                <Link
                  to={'/prod-list/page/categories/' + v.name + '/' + 1}
                  className={controlSmallCate === i ? 'now' : ''}
                  // onClick={handleCate}
                >
                  {v.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      {/* 分隔線 */}
      <div className="line"></div>
      {/* 身體區 */}
      <div className="body">
        {/* 小標題 */}
        <div className="title">
          <div
            onClick={() => {
              setControlCate(1)
              setControlSmallCate('')
            }}
          >
            <div className={controlCate === 1 ? 'text now' : 'text'}>
              依照身體部位
            </div>
            <div className="arrow">
              <IoIosArrowDown
                className={controlCate === 1 ? 'right now' : 'right'}
              />
            </div>
          </div>
        </div>
        {/* 內容 */}
        <ul className={controlCate === 1 ? 'content now' : 'content'}>
          {bodys.map((v, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  setControlSmallBody(i)
                  setControlCate(1)
                  setControlSmallCate('')
                  setLocationWord(v.name)
                }}
              >
                <Link
                  to={'/prod-list/page/categories/' + v.name + '/' + 1}
                  className={controlSmallBody === i ? 'now' : ''}
                  // onClick={handlelocation}
                >
                  {v.name}
                </Link>
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

export default withRouter(CateNav)
