import React from 'react'
import './CartBottom.css'
function CartBottom(props) {
  const { orderInfo, setOrderInfo } = props
  return (
    <>
      {/* 全站優惠&訂單價格 */}
      <div className="cart-bottom">
        <div className="row">
          <div className="col-xl-6 col-12">
            <div className="AllStore-discount-box">
              <div className="column-1">已享有之優惠</div>
              <div className="column-2 d-flex align-items-center">
                <div className="color-box">全站優惠</div>
                <div className="discount-word">全站滿500元免運</div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-12">
            <div className="summary-detail-box ">
              <div className="summary-detail d-flex justify-content-between">
                <div className="subject">小計</div>
                <div className="price text-right">NT${orderInfo.total}</div>
              </div>
              <div className="summary-detail d-flex justify-content-between">
                <div className="subject">運費</div>
                <div className="price text-right">NT$0</div>
              </div>
              <div className="border"></div>
              <div className="summary-detail total-number d-flex justify-content-between">
                <div className="subject">總計</div>
                <div className="price text-right ">NT${orderInfo.total}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartBottom
