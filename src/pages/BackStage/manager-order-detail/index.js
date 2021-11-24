import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import './index.css'
import axios from 'axios'
import Cart3 from '../../../components/Stanley/Cart3/Cart3'
import Checkline2 from '../../../components/Stanley/Checkline2/Checkline2'
// Modal功能
import { Modal, Button } from 'react-bootstrap'
import { BsFillCheckCircleFill } from 'react-icons/bs'

function App(props) {
  const [orderDetails, setOrderDetails] = useState('')
  const [orderlist, setOrderlist] = useState('')
  const [orderStatus, setOrderStatus] = useState('')
  const [isLoading, setIsloading] = useState(true)

  const order_sid = props.match.params.order_sid

  // modal狀態
  const [show, setShow] = useState(false)
  // modal要顯示的字
  const [word, setWord] = useState('')

  const handleCloseModal = () => setShow(false)
  const handleShowModal = () => {
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 1500)
  }

  // componentdidMount：讀取訂單資訊
  useEffect(() => {
    setIsloading(true)

    const getInfo = async () => {
      const r = await axios.get(
        `http://localhost:3001/cart/order-detail/${order_sid}`
      )
      console.log(r)
      // 設定訂單資訊
      setOrderDetails(r.data.order_details)
      setOrderlist(r.data.order_list[0])
      // 設定訂單狀態
      setOrderStatus(r.data.order_list[0].order_status)

      setTimeout(() => {
        setIsloading(false)
      }, 500)
    }
    getInfo()
  }, [])

  // 修改訂單狀態
  const handleSubmit = async () => {
    const data = {
      order_status: orderStatus,
    }
    const r = await axios.put(
      `http://localhost:3001/cart/order-detail/${order_sid}`,
      data
    )
    console.log(r)
    if (r.data.success) {
      setWord(`修改為「${orderStatus}」`)
      handleShowModal()
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
          <BsFillCheckCircleFill className="BsFillCheckCircleFill  mr-3" />
          <span className="modal-body-word">{word}</span>
        </Modal.Body>
      </Modal>

      <div className="container">
        <Checkline2 orderStatus={orderStatus} />
        {orderDetails && (
          <Cart3 order_details={orderDetails} order_list={orderlist} />
        )}

        {/* 訂單明細 */}
        {orderlist && (
          <div className="order-detail-box">
            <div className="order-detail-title d-flex justify-content-between align-items-center">
              訂單編號：{orderlist.sid}
            </div>

            <div className="row">
              <div className="col-xl-6 col-12">
                <div className="subtitle">訂購人資訊</div>
                <div className="detail-box">
                  {/* 姓名：王曉華 */}
                  姓名：{orderlist.member_name}
                  <br />
                  {/* 電話：0928828818 */}
                  電話：{orderlist.member_mobile}
                  <br />
                  信箱：{orderlist.member_email}
                </div>
              </div>
              <div className="col-xl-6 col-12">
                <div className="subtitle">付款資訊</div>
                <div className="detail-box">
                  付款方式：{orderlist.payment_method}
                </div>
              </div>
              <div className="col-xl-6 col-12">
                <div className="subtitle">送貨資訊</div>
                <div className="detail-box">
                  收件人姓名：{orderlist.addressee_name}
                  <br />
                  收件人電話：{orderlist.addressee_mobile}
                  <br />
                  運送方式：{orderlist.delivery_method}
                  <br />
                  運送地址：
                  {orderlist.address
                    ? orderlist.address
                    : orderlist.convenience_store + '門市'}
                  <br />
                  訂單備註：{orderlist.order_note}
                </div>
              </div>
              <div className="col-xl-6 col-12">
                <div className="subtitle">訂單資訊</div>
                <div className="detail-box">
                  訂單編號：{orderlist.sid}
                  <br />
                  訂單日期：{orderlist.order_date.slice(0, 10)}
                  <br />
                  訂單狀態：
                  <select
                    name=""
                    id=""
                    value={orderStatus}
                    onChange={(e) => {
                      setOrderStatus(e.target.value)
                    }}
                  >
                    <option value="訂單處理中">訂單處理中</option>
                    <option value="已出貨">已出貨</option>
                    <option value="運送中">運送中</option>
                    <option value="訂單完成">訂單完成</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="save-change-box">
              <div className="save-change-btn" onClick={handleSubmit}>
                儲存變更
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default withRouter(App)
