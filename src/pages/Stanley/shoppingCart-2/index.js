import React, { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import './index.scss'
import axios from 'axios'
import { IoIosArrowBack } from 'react-icons/io'
import {
  BsFillCheckCircleFill,
  BsFillExclamationTriangleFill,
} from 'react-icons/bs'
import Checkline from '../../../components/Stanley/Checkline/Checkline'
import Cart2 from '../../../components/Stanley/Cart2/Cart2'
import storeDataCD from '../../../hotData/7-11CD.json'
import storeDataDS from '../../../hotData/7-11DS.json'
import storeDataSS from '../../../hotData/7-11SS.json'
import CreditCard from '../../../components/Stanley/CreditCard/CreditCard'
import { doc } from 'prettier'

const cities = [
  '台北市',
  '新北市',
  '基隆市',
  '宜蘭縣',
  '桃園市',
  '新竹市',
  '新竹縣',
  '苗栗縣',
  '台中市',
  '彰化縣',
  '南投縣',
  '雲林縣',
  '嘉義市',
  '嘉義縣',
  '台南市',
  '高雄市',
  '屏東縣',
  '花蓮縣',
  '台東縣',
  '澎湖縣',
  '金門縣',
  '連江縣',
  '',
]

function App(props) {
  // Checkline state
  const state = [1, 1, 2]

  // 購物車、會員資料
  const [mycart, setMycart] = useState([])
  const [orderInfo, setOrderInfo] = useState('')
  const [memberInfo, setMemberInfo] = useState(
    JSON.parse(localStorage.getItem('Member')) || []
  )

  // 超商選擇
  const [storeOption, setStoreOption] = useState('')
  const [mycity, setMycity] = useState('')
  const [mydist, setMydist] = useState('')
  const [mystreet, setMystreet] = useState('')
  const [mystore, setMystore] = useState('') // 最後會送進資料庫的

  // modal功能
  const [show, setShow] = useState(false)
  const [word, setWord] = useState('')
  const [iswarning, setIsWarning] = useState(false)
  const handleCloseModal = () => setShow(false)
  const handleShowModal = () => {
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 1000)
  }

  // componentdidMount：獲取購物車資訊
  useEffect(() => {
    const mycart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : []

    const orderInfo = localStorage.getItem('orderInfo')
      ? JSON.parse(localStorage.getItem('orderInfo'))
      : []

    setMycart(mycart)
    setOrderInfo(orderInfo)
  }, [])

  // 如果有登入會員，會自動帶入會員資訊
  useEffect(() => {
    if (memberInfo) {
      const a = (document.getElementById('member_name').value =
        memberInfo[0].name)
      const b = (document.getElementById('member_mobile').value =
        memberInfo[0].mobile)
      const c = (document.getElementById('member_email').value =
        memberInfo[0].email)
    }
  }, [memberInfo])

  // TODO：表單驗證
  const handleChange = (e) => {
    const name = e.target.name
    e.target.classList.remove('error')
    // console.log(e.target)
  }

  // ======== 發送表單 =================
  const handleSubmit = async (e) => {
    // 阻止預設行為
    e.preventDefault()

    // 1. 確認表單資料都有填寫 & 格式正確
    const formData = new FormData(e.target)
    // 訂購人姓名
    if (formData.get('member_name') === '') {
      setIsWarning(true)
      setWord('請填寫訂購人姓名')
      handleShowModal()
      document.getElementById('member_name').classList.add('error')
      return
    }
    // 訂購人電話
    if (formData.get('member_mobile') === '') {
      setIsWarning(true)
      setWord('請填寫訂購人電話')
      handleShowModal()
      document.getElementById('member_mobile').classList.add('error')
      return
    }
    // 收件人姓名
    if (formData.get('addressee_name') === '') {
      setIsWarning(true)
      setWord('請填寫收件人姓名')
      handleShowModal()
      document.getElementById('addressee_name').classList.add('error')
      return
    }
    // 收件人電話
    if (formData.get('addressee_mobile') === '') {
      setIsWarning(true)
      setWord('請填寫收件人電話')
      handleShowModal()
      document.getElementById('addressee_mobile').classList.add('error')
      return
    }

    // 2. 利用formData Api 得到各欄位的值 or 利用狀態值
    // 所有要儲存進資料庫的data
    const dataObj = {
      // 來自localStorage會員資料
      member_id: memberInfo[0].sid,
      // 來自summary
      amount: orderInfo.total,
      productCount: orderInfo.productCount,
      mycart: orderInfo.mycart, //購物車內商品 (array)
      delivery_location: orderInfo.deliveryLocation,
      delivery_method: orderInfo.deliveryMethod,
      payment_method: orderInfo.paymentMethod,
      // 來自表單
      member_name: e.target.member_name.value,
      member_mobile: e.target.member_mobile.value,
      member_email: e.target.member_email.value,
      addressee_name: e.target.member_name.value,
      addressee_mobile: e.target.addressee_mobile.value,
      address: e.target.address ? e.target.address.value : '', // 有可能空值
      convenience_store: mystore ? mystore : '', // 有可能空值
      order_note: e.target.order_note.value,
    }

    // 3. 用fetch發送
    const r = await axios.post('http://localhost:3001/cart', dataObj)

    // 4. 如果回傳值是成功，則跳轉到下一步的頁面
    if (r.data.success) {
      // modal
      setIsWarning(false)
      setWord('訂單送出成功')
      handleShowModal()
      // 等一秒後再執行跳轉
      setTimeout(() => {
        // 需要用整個重整的跳轉方式 (navbar購物車重新render)
        window.location.href = `./order-check/${r.data.order_sid}`
      }, 1000)

      localStorage.removeItem('cart')
      localStorage.removeItem('orderInfo')
    }
  }

  return (
    <>
      {/* modal */}
      <Modal
        show={show}
        onHide={handleCloseModal}
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="text-center">
          {iswarning ? (
            <BsFillExclamationTriangleFill className="BsFillExclamationTriangleFill  mr-3" />
          ) : (
            <BsFillCheckCircleFill className="BsFillCheckCircleFill  mr-3" />
          )}

          <span className="modal-body-word">{word}</span>
        </Modal.Body>
      </Modal>
      <div className="SC2">
        <div className="container">
          {/* 進度條 */}
          <Checkline state={state} />
          {/* 購物車 */}
          <Cart2
            mycart={mycart}
            setMycart={setMycart}
            orderInfo={orderInfo}
            setOrderInfo={setOrderInfo}
          />

          {/* 表單 */}
          <form onSubmit={handleSubmit}>
            {/* 訂購人資訊 */}
            <div className="order-info-box">
              <div className="order-info-title">訂購人資訊</div>
              <div className="order-info-detail">
                {/* 姓名 */}
                <label htmlFor="">姓名</label>
                <br />
                <input
                  type="text"
                  name="member_name"
                  id="member_name"
                  placeholder="請輸入真實姓名"
                  onChange={(e) => handleChange(e)}
                />

                {/* 電話 */}
                <label htmlFor="">電話</label>
                <br />
                <input
                  type="text"
                  name="member_mobile"
                  id="member_mobile"
                  placeholder="請輸入電話號碼"
                  onChange={(e) => handleChange(e)}
                />
                {/* 信箱 */}
                <label htmlFor="">信箱</label>
                <br />
                <input
                  className="email-input"
                  type="text"
                  name="member_email"
                  id="member_email"
                  placeholder="請輸入連絡信箱"
                  disabled
                />
              </div>
            </div>

            {/* 收件人資訊 */}
            <div className="receiver-info-box">
              <div className="receiver-title">收件資訊</div>
              {/* 下方內容 */}
              <div className="recevier-detail-box">
                {/* 同訂購人按鈕 */}
                <div className="same-person-btn d-flex align-items-center">
                  <input
                    type="checkbox"
                    onClick={() => {
                      const memberName =
                        document.querySelector('#member_name').value
                      const memberMobile =
                        document.querySelector('#member_mobile').value
                      document.querySelector('#addressee_name').value =
                        memberName
                      document.querySelector('#addressee_mobile').value =
                        memberMobile
                    }}
                  />
                  <label htmlFor="">同訂購人</label>
                </div>

                <br />
                {/* 收件人姓名 */}
                <label htmlFor="">收件人姓名</label>
                <br />
                <input
                  type="text"
                  name="addressee_name"
                  id="addressee_name"
                  placeholder="請輸入真實姓名"
                  onChange={(e) => handleChange(e)}
                />
                <br />
                {/* 電話 */}
                <label htmlFor="">電話</label>
                <br />
                <input
                  type="text"
                  name="addressee_mobile"
                  id="addressee_mobile"
                  placeholder="請輸入電話號碼"
                  onChange={(e) => handleChange(e)}
                />
                {/* 宅配 */}
                {orderInfo.deliveryMethod === '宅配' && (
                  <>
                    <label htmlFor="">收件地址</label>
                    <br />
                    <input
                      type="text"
                      name="address"
                      placeholder="請輸入收件地址"
                      onChange={(e) => handleChange(e)}
                    />
                  </>
                )}
              </div>

              {/* 超商取貨區塊 */}
              {orderInfo.deliveryMethod === '超商自取' && (
                <div className="convenience-store-box">
                  <div className="title">選擇取貨超商</div>
                  <div className="store-select-area justify-content-between">
                    <div className="row">
                      {/* 地址選擇區(左) */}
                      <div className="col-xl-4 col-12 justify-content-center">
                        {/* 選擇取貨超商 */}
                        <select
                          name="storeBrand"
                          id="storeBrand"
                          onChange={(e) => {
                            setStoreOption(e.target.calue)
                          }}
                        >
                          <option value="">-選擇取貨超商-</option>
                          <option value="">7-11</option>
                          <option value="">全家</option>
                        </select>
                        <select
                          name=""
                          id=""
                          onChange={(e) => {
                            setMycity(e.target.value)
                          }}
                        >
                          {/* 選擇縣市 */}
                          <option value="">-選擇縣市-</option>
                          {storeOption !== '' &&
                            cities.map((v, i) => {
                              return <option value={v}>{v}</option>
                            })}
                        </select>
                        <select
                          name=""
                          id="city"
                          onChange={(e) => {
                            setMydist(e.target.value)
                          }}
                        >
                          {/* 選擇鄉鎮市區 */}
                          <option value="">-選擇鄉鎮市區-</option>
                          {mycity !== '' &&
                            storeDataCD[mycity].districts.map((v, i) => {
                              return (
                                <option value={v.district}>{v.district}</option>
                              )
                            })}
                        </select>
                        <select
                          name=""
                          id="district"
                          onChange={(e) => {
                            setMystreet(e.target.value)
                          }}
                        >
                          {/* 選擇街道 */}
                          <option value="">-選擇街道-</option>
                          {mydist !== '' &&
                            storeDataDS[mydist].streets.map((v, i) => {
                              return (
                                <option value={v.street}>{v.street}</option>
                              )
                            })}
                        </select>
                      </div>
                      {/* 門市選擇區 */}
                      {mystreet && (
                        <div className="col-xl-8 col-12">
                          <div className="store-info-box justify-content-between">
                            <div className="row">
                              {/* 門市的迴圈 */}
                              {storeDataSS[mystreet].storeNames.map((v, i) => {
                                return (
                                  <div className="col-6">
                                    <div
                                      id={`store${i}`}
                                      className="store-info"
                                      onClick={(e) => {
                                        // 設定門市狀態
                                        setMystore(v.storename)

                                        //給予選擇的門市特效
                                        const storeInfo =
                                          document.querySelectorAll(
                                            '.store-info'
                                          )
                                        // 因storeInfo是array，利用迴圈個別移除class
                                        storeInfo.forEach((el) => {
                                          el.classList.remove('storeActive')
                                        })
                                        // 為現在的目標增加active標籤
                                        e.currentTarget.classList.add(
                                          'storeActive'
                                        )
                                        // modal
                                        setIsWarning(false)
                                        setWord(`已選擇${v.storename}門市`)
                                        handleShowModal()
                                      }}
                                    >
                                      <div className="store-name">
                                        {`${v.storename}門市`}
                                      </div>
                                      <div className="store-address ">
                                        {v.storeAddress}
                                      </div>
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* 訂單備註 */}
              <div className="order-note-box">
                <div className="note-title">訂單備註(選填)</div>
                <textarea
                  className="note-content"
                  name="order_note"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>

            {/* 付款資訊*/}
            {orderInfo.paymentMethod === '信用卡' && <CreditCard />}

            {/* 送出訂單區塊 */}
            <div className="submit-order-box">
              <div className="agree-box d-flex">
                <input type="checkbox" />
                <label htmlFor="">同意網站隱私條款</label>
              </div>
              <div className="submit-box d-flex justify-content-between align-items-center">
                {/* 返回上一步按鈕(桌機) */}
                <div className="btn-group d-xl-block d-none">
                  <IoIosArrowBack />
                  <a className="goback-btn" href="/cart">
                    返回購物車
                  </a>
                </div>

                <div className="checkout-box">
                  <button
                    className="checkout-btn text-center mx-auto"
                    type="submit"
                  >
                    送出訂單
                  </button>
                </div>
              </div>
            </div>
          </form>

          {/* 返回上一步按鈕(手機) */}
          <div className="btn-group d-xl-none">
            <IoIosArrowBack />
            <a className="goback-btn" href="/cart">
              返回購物車
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
