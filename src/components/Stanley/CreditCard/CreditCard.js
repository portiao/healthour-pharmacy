import React, { useEffect, useState } from 'react'
import './CreditCard.css'
import { devUrl } from '../../../config/index'

function CreditCard() {
  const [cardType, setCardType] = useState('')
  useEffect(() => {
    document.querySelector('.card-number-input').oninput = () => {
      let list = []
      let num
      // 每四個字做一次分割，並push到清單上
      for (let i = 0; i < 4; i++) {
        const newWrod = document
          .querySelector('.card-number-input')
          .value.slice(i * 4, (i + 1) * 4)
        list.push(newWrod)
      }
      // 把陣列用空格連接起來
      num = list.join(' ')
      document.querySelector('.card-number-box').innerText = num
    }

    document.querySelector('.expire-date').oninput = () => {
      // TODO：修改輸入為0時正確顯示值
      if (document.querySelector('.expire-date').value.length <= 2) {
        const mm = document.querySelector('.expire-date').value.slice(0, 2)
        document.querySelector('.exp-month').innerText = mm
      } else {
        const mm = document.querySelector('.expire-date').value.slice(0, 2)
        const yy = document.querySelector('.expire-date').value.slice(2, 4)
        document.querySelector('.exp-month').innerText = mm
        document.querySelector('.exp-year').innerText = yy
      }
    }

    document.querySelector('.cvv-input').onmouseenter = () => {
      document.querySelector('.front').style.transform =
        'perspective(1000px) rotateY(-180deg)'
      document.querySelector('.back').style.transform =
        'perspective(1000px) rotateY(0deg)'
    }

    document.querySelector('.cvv-input').onmouseleave = () => {
      document.querySelector('.front').style.transform =
        'perspective(1000px) rotateY(0deg)'
      document.querySelector('.back').style.transform =
        'perspective(1000px) rotateY(180deg)'
    }

    document.querySelector('.cvv-input').oninput = () => {
      document.querySelector('.cvv-box').innerText =
        document.querySelector('.cvv-input').value
    }
  }, [])

  return (
    <>
      <div className="payment-box">
        <div className="payment-title">付款資訊</div>
        <div className="payment-info-box">
          <div className="row">
            <div className="col-xl-6 col-12">
              <div className="credit-card-info">
                <label htmlFor="">信用卡種類</label>
                <br />
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setCardType(e.target.value)
                  }}
                >
                  <option value="">-選擇信用卡種類-</option>
                  <option value="VISA">VISA</option>
                  <option value="Master-Card">Master-Card</option>
                </select>
                <br />
                <label htmlFor="">信用卡號碼</label>
                <br />
                <input
                  type="text"
                  className="card-number-input"
                  maxLength="16"
                />
                <div className="row">
                  <div className="col-6 ">
                    <label htmlFor="">有效期限(mm/yy)</label>
                    <input type="text" className="expire-date" maxLength="4" />
                  </div>
                  <div className="col-6 ">
                    <label htmlFor="">安全碼</label>
                    <input type="text" className="cvv-input" maxLength="3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-12 d-xl-block d-none">
              <div className="outer-container">
                <div className="card-container">
                  <div className="front">
                    <div className="image">
                      <img
                        src={`${devUrl}/images/creditcard/chip.png`}
                        alt=""
                      />
                      {cardType === 'VISA' && (
                        <img
                          src={`${devUrl}/images/creditcard/visa.png`}
                          alt=""
                        />
                      )}
                      {cardType === 'Master-Card' && (
                        <img
                          src={`${devUrl}/images/creditcard/master-card.png`}
                          alt=""
                        />
                      )}
                    </div>
                    <div className="card-number-box">#### #### #### ####</div>
                    <div className="flexbox">
                      <div className="exp-box"></div>
                      <div className="exp-box">
                        <span>expires</span>
                        <div className="expiration">
                          <span className="exp-month">mm</span>
                          <span> / </span>
                          <span className="exp-year">yy</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="back">
                    <div className="stripe"></div>
                    <div className="exp-box">
                      <span>cvv</span>
                      <div className="cvv-box"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreditCard
