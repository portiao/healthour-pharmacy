import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'

function CateButton() {
  const [controlCateButton, setControlCateButton] = useState(0)

  return (
    <>
      {/* 手機 類別選擇按鈕 */}
      <div className="cate-button">
        <Link
            to="/iconsearch_p1"
          className={controlCateButton === 0 ? 'cate now' : 'cate'}
          onClick={() => {
            setControlCateButton(1)
          }}
        >
          按症狀搜索
        </Link>
        <Link
            to="/iconsearch_p2"
          className={controlCateButton === 1 ? 'body now' : 'body'}
          onClick={() => {
            setControlCateButton(0)
          }}
        >
          按部位搜索
        </Link>
      </div>
    </>
  )
}

export default CateButton
