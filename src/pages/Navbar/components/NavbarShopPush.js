import React, { useState } from 'react'
import './navbarShopPush.css'
import { Link } from 'react-router-dom'

import { RiArrowDropRightLine } from 'react-icons/ri' //右邊箭頭

const iconCategoryTop = [
  { enName: '/prod-list/page/1', chName: '全部商品', image: '1562055' },
  {
    enName: '/prod-list/page/categories/保健食品/1',
    chName: '保健食品',
    image: '5900380',
  },
]
const iconCategoryBottom = [
  {
    enName: '/prod-list/page/categories/生活用品/1',
    chName: '生活用品',
    image: '8562214',
  },
  {
    enName: '/prod-list/page/categories/醫療器材/1',
    chName: '醫療器材',
    image: '3533619',
  },
]

const iconBody = [
  {
    enName: '/prod-list/page/categories/頭部/1',
    chName: '頭部',
    image: '3608142',
  },
  {
    enName: '/prod-list/page/categories/臉部/1',
    chName: '臉部',
    image: '5889033',
  },
  {
    enName: '/prod-list/page/categories/眼睛/1',
    chName: '眼睛',
    image: '4631528',
  },
  {
    enName: '/prod-list/page/categories/口腔/1',
    chName: '口腔',
    image: '6282635',
  },
  {
    enName: '/prod-list/page/categories/身體/1',
    chName: '身體',
    image: '3501502',
  },
  {
    enName: '/prod-list/page/categories/肺部/1',
    chName: '肺部',
    image: '3191651',
  },
]

function NavbarPush(props) {
  const { setControlCate, setControlSmallCate, setControlSmallBody } = props
  /*按鈕狀態 0是第一個被按下*/
  const [buttonIndex, setButtonIndex] = useState(0)

  /**icon render(渲染) */
  function iconBodyRender() {
    return (
      <div className="navforIconList">
        <div className="navline1icon">
          {iconBody.map((v, i) => (
            <div
              className="navallIcon"
              key={i}
              onClick={() => {
                setControlCate('')
                setControlSmallCate('')
                setControlSmallBody('')
              }}
            >
              <div className="navliImg">
                <Link to={`${v.enName}`} className="navChandePageEnc">
                  <img
                    src={`http://localhost:3000/images/icon/${v.image}.png`}
                    alt={v.chName}
                  />
                  <p>{v.chName}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  function iconCategoryRender() {
    return (
      <div className="navforIconList">
        <div className="navline1icon">
          {iconCategoryTop.map((v, i) => (
            <div
              className="navallIcon"
              key={i}
              onClick={() => {
                setControlCate('')
                setControlSmallCate('')
                setControlSmallBody('')
              }}
            >
              <div className="navliImg">
                <Link to={`${v.enName}`} className="navChandePageEnc">
                  <img
                    src={`http://localhost:3000/images/icon/${v.image}.png`}
                    alt={v.chName}
                  />
                  <p>{v.chName}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="navline1icon">
          {iconCategoryBottom.map((v, i) => (
            <div
              className="navallIcon"
              key={i}
              onClick={() => {
                setControlCate('')
                setControlSmallCate('')
                setControlSmallBody('')
              }}
            >
              <div className="navliImg">
                <Link to={`${v.enName}`} className="navChandePageEnc">
                  <img
                    src={`http://localhost:3000/images/icon/${v.image}.png`}
                    alt={v.chName}
                  />
                  <p>{v.chName}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="navPushDouble">
        <div className="navPushPsh">
          <div className="buttonPushName">
            <button
              onClick={() => {
                setButtonIndex(0)
              }}
              className={
                buttonIndex === 0 ? 'buttonBlue button-blueFocus' : 'buttonBlue'
              }
            >
              <p>商品類別</p>
              <RiArrowDropRightLine />
            </button>

            <button
              onClick={() => {
                setButtonIndex(1)
              }}
              className={
                buttonIndex === 1 ? 'buttonBlue button-blueFocus' : 'buttonBlue'
              }
              id="navbar-body"
            >
              <p>依照身體部位</p>
              <RiArrowDropRightLine />
            </button>
          </div>
          <div>
            {buttonIndex === 0 ? iconCategoryRender() : iconBodyRender()}
          </div>
        </div>
        <div className="arrowEnterAgain">
          <Link
            to="/shop"
            onClick={() => {
              setControlCate('')
              setControlSmallCate('')
              setControlSmallBody('')
            }}
          >
            <img src="http://localhost:3000/images/photo/enter.png" alt="" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default NavbarPush
