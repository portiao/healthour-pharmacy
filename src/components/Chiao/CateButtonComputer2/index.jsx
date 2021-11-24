import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'

function CateButton() {
  const [controlCateButton, setControlCateButton] = useState(0)

  return (
    <>
      {/* 桌機 類別選擇頁簽 */}
      <div className="cate-button-computer">
        <div className="cate-option">
          <Link
            to="/iconsearch_p1"
            className={controlCateButton === 1 ? 'now' : ''}
            onClick={() => {
              setControlCateButton(1)
            }}
          >
            按症狀搜索
          </Link>
        </div>
        <div className="body-option">
          <Link
            to="/iconsearch_p2"
            className={controlCateButton === 0 ? 'now' : ''}
            onClick={() => {
              setControlCateButton(0)
            }}
          >
            按部位搜索
          </Link>
        </div>
      </div>
    </>
  )
}

export default CateButton
