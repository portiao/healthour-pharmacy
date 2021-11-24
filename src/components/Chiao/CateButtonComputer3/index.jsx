import React, { useState } from 'react'
import './index.css'

function CateButton() {
  const [controlCateButton, setControlCateButton] = useState(0)

  return (
    <>
      {/* 桌機 類別選擇頁簽 */}
      <div className="cate-button-computer">
        <div className="cate-option">
          <a
            href="#/"
            className={controlCateButton === 0 ? 'now' : ''}
            onClick={() => {
              setControlCateButton(0)
            }}
          >
            醫院｜診所
          </a>
        </div>
        
      </div>
    </>
  )
}

export default CateButton
