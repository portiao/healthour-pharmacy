import './index.css'
import React from 'react'
import { Link } from 'react-router-dom'

function BottomNavBar() {
  const navBarContent = [
    {
      item: 'item',
      icon: 'icon',
      src: 'http://localhost:3000/images/icon/receive.png',
      text: '處方領藥',
      link: '/Prescription_Reserve',
    },
    {
      item: 'item',
      icon: 'icon',
      src: 'http://localhost:3000/images/icon/follow-prod.png',
      text: '追蹤商品',
      link: '/followdPage',
    },
    {
      item: 'item',
      icon: 'icon',
      src: 'http://localhost:3000/images/icon/cart.png',
      text: '購物車',
      link: '',
    },
    {
      item: 'item',
      icon: 'icon',
      src: 'http://localhost:3000/images/icon/login.png',
      text: '會員登入',
      link: '/Login',
    },
  ]

  return (
    <>
      {/* 手機 底部浮動navbar */}
      <div className="bottom-navbar">
        {navBarContent.map((v, i) => {
          return (
            <Link to={v.link} key={i}>
              <div className={v.item}>
                <div className={v.icon}>
                  <img src={v.src} alt="" />
                </div>
                <div className="text">{v.text}</div>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default BottomNavBar
