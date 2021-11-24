import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function BookMart(props) {
  const { optionNow, setOptionNow } = props
  const MobileListRef = useRef(null)
  const optionName = [
    { name: '所有會員資料', link: '/back-stage/Backstage_Member_Management' },
    {
      name: '會員處方簽管理',
      link: '/back-stage/Backstage_Prescription_Management',
    },
    { name: '所有商品', link: '/back-stage/products/page/1' },
    { name: '商城訂單管理', link: '/back-stage/order-list' },
    { name: '營業數據', link: '/back-stage/operation-data' },
  ]

  console.log(props)
  return (
    <div className="container">
      {/* 大標題 */}
      <h2 className="back-stage-title">後台管理</h2>
      {/* 頁簽 */}
      <div className="bookMark">
        {/* 電腦 */}
        {/* className 添加 now 變色 */}
        <ul className="option-list-computer">
          {optionName.map((v, i) => {
            return (
              <li className="option" key={i}>
                <Link
                  to={v.link}
                  className={optionNow === i ? 'now' : ''}
                  onClick={() => {
                    setOptionNow(i)
                  }}
                >
                  {v.name}
                </Link>
              </li>
            )
          })}
        </ul>
        {/* 手機 */}
        <div className="option-mobile-now">
          {optionName.map((v, i) => {
            return (
              <Link
                to={v.link}
                key={i}
                className={optionNow === i ? 'show' : ''}
              >
                {v.name}
              </Link>
            )
          })}
        </div>
        <div className="icon">
          <div
            onClick={() => {
              MobileListRef.current.className.includes('show')
                ? MobileListRef.current.classList.remove('show')
                : MobileListRef.current.classList.add('show')
            }}
          >
            <img src="http://localhost:3000/images/icon/other.jpg" alt="" />
          </div>
          <ul className="option-list-mobile" ref={MobileListRef}>
            {optionName.map((v, i) => {
              return (
                <li className="option" key={i}>
                  <Link
                    to={v.link}
                    onClick={() => {
                      setOptionNow(i)
                    }}
                  >
                    {v.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BookMart
