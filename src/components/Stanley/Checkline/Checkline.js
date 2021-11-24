import React from 'react'
import './Checkline.css'

function Checkline(props) {
  // 三個階段的狀態變數
  const { state } = props
  return (
    <>
      {/* checkline 進度條 */}
      <div className="checkline-box d-flex justify-content-center">
        <div className="checkline-item">
          <a href="/cart">
            <div className={'checkline-circle-' + state[0]}>1</div>
          </a>
          <div className="row justify-content-center">購物車</div>
        </div>
        <div className="checkline-line"></div>
        <div className="checkline-item">
          <a href="/checkout">
            <div className={'checkline-circle-' + state[1]}>2</div>
          </a>
          <div className="row justify-content-center">填寫資料</div>
        </div>
        <div className="checkline-line"></div>
        <div className="checkline-item">
          <div className={'checkline-circle-' + state[2]}>3</div>
          <div className="row justify-content-center">確認訂單</div>
        </div>
      </div>
    </>
  )
}

export default Checkline
