import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import './index.scss'
import Checkline from '../../../components/Stanley/Checkline/Checkline'
import Cart1 from '../../../components/Stanley/Cart1/Cart1'
import Summary from '../../../components/Stanley/Summary/Summary'
import { devUrl } from '../../../config/index'

// SC1
function App(props) {
  const { productCount, setProductCount } = props

  // Checkline state
  const state = [1, 2, 2]
  // 運送、付款選項的狀態
  const [deliveryLocation, setDeliveryLocation] = useState('')
  const [deliveryMethod, setDeliveryMethod] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')

  // localStorage裡面加入購物車的商品
  const [mycart, setMycart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  )

  // 商品小計
  const subTotal = () => {
    let sum = 0
    for (let i = 0; i < mycart.length; i++) {
      sum +=
        mycart[i].amount *
        (mycart[i].special_offer ? mycart[i].special_offer : mycart[i].price)
    }
    return sum
  }

  // 運費計算
  const shippingFee = () => {
    let fee = 0
    if (deliveryLocation === '台灣') {
      fee = 60
    }
    if (deliveryLocation === '離島') {
      fee = 80
    }
    return fee
  }

  // 折扣計算
  const discount = () => {
    let sum = 0
    let discount = 0
    // 商品總計
    for (let i = 0; i < mycart.length; i++) {
      sum +=
        mycart[i].amount *
        (mycart[i].special_offer ? mycart[i].special_offer : mycart[i].price)
    }
    if (sum > 500) {
      if (deliveryLocation === '台灣') {
        discount = -60
      }
      if (deliveryLocation === '離島') {
        discount = -80
      }
    }
    return discount
  }

  // 計算總額
  const totalCount = () => {
    let sum = 0
    // 商品總計
    for (let i = 0; i < mycart.length; i++) {
      sum +=
        mycart[i].amount *
        (mycart[i].special_offer ? mycart[i].special_offer : mycart[i].price)
    }
    // 折扣計算
    if (sum > 500) {
      if (deliveryLocation === '台灣') {
        sum += -60
      }
      if (deliveryLocation === '離島') {
        sum += -80
      }
    }
    // 運費計算
    if (deliveryLocation === '台灣') {
      sum += 60
    }
    if (deliveryLocation === '離島') {
      sum += 80
    }
    
    // 折扣計算
    return sum
  }

  return (
    <>
      {/* 未加入商品圖示 */}
      {mycart.length === 0 && (
        <div className="container text-center">
          <div className="empty-cart">
            <img src={`${devUrl}/images/shopping-cart.png`} alt="" />
          </div>
          <span>購物車未加入商品，趕快去逛逛吧!</span>

          <Link to={'/prod-list/page/1'}>
            <div className="go-shop-btn">
              前往購物
              <IoIosArrowForward className="arrow-right" />
            </div>
          </Link>
        </div>
      )}

      {mycart.length !== 0 && (
        <div className="SC1">
          <div className="container">
            {/* checkline 進度條 */}
            <Checkline state={state} />
            <Cart1
              total={totalCount()}
              mycart={mycart}
              setMycart={setMycart}
              productCount={productCount}
              setProductCount={setProductCount}
            />

            {/* 送貨及付款方式(左)、訂單資訊(右) */}
            <div className="row justify-content-between">
              <div className="col-xl-7 col">
                {/* 送貨及付款(左) */}
                <div className="delivery-payment-box">
                  <div className="delivery-payment-title">付款及送貨方式</div>
                  <div className="dp-select-area">
                    <div className="subtitle">送貨地點</div>
                    <select
                      name="deliveryLocation"
                      id="deliveryLocation"
                      value={deliveryLocation}
                      onChange={(e) => {
                        setDeliveryLocation(e.target.value)
                      }}
                    >
                      <option value="">-選擇送貨地點-</option>
                      <option value="台灣">台灣 (+60運費)</option>
                      <option value="離島">離島 (+80運費)</option>
                    </select>
                    <div className="subtitle">送貨方式</div>
                    <select
                      name="delivery_option"
                      id="delivery_option"
                      value={deliveryMethod}
                      onChange={(e) => {
                        setDeliveryMethod(e.target.value)
                      }}
                    >
                      <option value="">-選擇送貨方式-</option>
                      <option value="宅配">宅配</option>
                      <option value="門市自取">門市自取</option>
                      <option value="超商自取">超商自取</option>
                    </select>
                    <div className="subtitle">付款方式</div>
                    <select
                      name="paymentMethod"
                      id="paymentMethod"
                      value={paymentMethod}
                      onChange={(e) => {
                        setPaymentMethod(e.target.value)
                      }}
                    >
                      <option value="">-選擇付款方式-</option>
                      <option value="信用卡">信用卡</option>
                      <option value="轉帳">轉帳</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-xl-5">
                {/* 訂單資訊框(右) */}
                <Summary
                  subTotal={subTotal()}
                  shippingFee={shippingFee()}
                  discount={discount()}
                  total={totalCount()}
                  mycart={mycart}
                  productCount={productCount}
                  deliveryLocation={deliveryLocation}
                  deliveryMethod={deliveryMethod}
                  paymentMethod={paymentMethod}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
