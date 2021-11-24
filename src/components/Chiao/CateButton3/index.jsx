import React, { useState } from 'react'
import './index.css'

function CateButton() {
  const [controlCateButton, setControlCateButton] = useState(0)

  return (
    <>
      {/* 手機 類別選擇按鈕 */}
      <div className="cate-button">
        <a
          href="#/"
          className={controlCateButton === 0 ? 'cate now' : 'cate'}
          onClick={() => {
            setControlCateButton(0)
          }}
        >
          醫院｜診所
        </a>
      </div>
    </>
  )
}

export default CateButton
