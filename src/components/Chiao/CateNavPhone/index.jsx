import React, { useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import './index.css'

function CateNav(props) {
  const [controlCate, setControlCate] = useState('')
  return (
    <div className="cate-nav-phone">
      {/* 藍色標題 */}
      <div className="blue-title">
        <div className="text">
          <p>保健知識</p>
        </div>
      </div>
      {/* 類別區 */}
      <div className="cate">
        {/* 小標題 */}
        <div className="title">
          <a
            href="#/"
            onClick={() => {
              setControlCate(0)
            }}
          >
            <div
              className={
                controlCate === 0 ? 'text now' : 'text'
              }
            >
              保健百科
            </div>
            <div className="arrow">
              <AiOutlineRight
                className={
                  controlCate === 0 ? 'right now' : 'right'
                }
              />
            </div>
          </a>
        </div>
      </div>
      {/* 分隔線 */}
      <div className="line"></div>
      {/* 身體區 */}
      <div className="body">
        {/* 小標題 */}
        <div className="title">
          <a
            href="#/"
            onClick={() => {
              setControlCate(1)
            }}
          >
            <div
              className={
                controlCate === 1 ? 'text now' : 'text'
              }
            >
              症狀篩檢
            </div>
            <div className="arrow">
              <AiOutlineRight
                className={
                  controlCate === 1 ? 'right now' : 'right'
                }
              />
            </div>
          </a>
        </div>
      </div>
      {/* 分隔線 */}
      <div className="line"></div>
      {/* 身體區 */}
      <div className="body">
        {/* 小標題 */}
        <div className="title">
          <a
            href="#/"
            onClick={() => {
              setControlCate(1)
            }}
          >
            <div
              className={
                controlCate === 1 ? 'text now' : 'text'
              }
            >
              醫院｜診所
            </div>
            <div className="arrow">
              <AiOutlineRight
                className={
                  controlCate === 1 ? 'right now' : 'right'
                }
              />
            </div>
          </a>
        </div>
      </div>
      {/* 分隔線 */}
      <div className="line"></div>
    </div>
  )
}

export default CateNav
