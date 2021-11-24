import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Summary.css'
import { Modal } from 'react-bootstrap'
import { BsFillExclamationTriangleFill } from 'react-icons/bs'

function Summary(props) {
  const {
    subTotal,
    shippingFee,
    discount,
    total,
    mycart,
    productCount,
    deliveryLocation,
    deliveryMethod,
    paymentMethod,
  } = props

  const [show, setShow] = useState(false)
  const [error, setError] = useState('')
  const handleCloseModal = () => setShow(false)
  const handleShowModal = () => {
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 1500)
  }
  let history = useHistory()

  // 傳送表單(儲存資料到local，給下一步去讀取用)
  const handlecheckout = () => {
    if (!deliveryLocation) {
      setError('未選擇送貨地點')
      handleShowModal()
      return
    }
    if (!deliveryMethod) {
      setError('未選擇送貨方式')
      handleShowModal()
      return
    }
    if (!paymentMethod) {
      setError('未選擇付款方式')
      handleShowModal()
      return
    }
    const obj = {
      total: total,
      mycart: mycart,
      productCount: productCount,
      deliveryLocation: deliveryLocation,
      deliveryMethod: deliveryMethod,
      paymentMethod: paymentMethod,
    }

    localStorage.setItem('orderInfo', JSON.stringify(obj))
    history.push('/checkout')
  }
  return (
    <>
      <Modal
        show={show}
        onHide={handleCloseModal}
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="text-center">
          <BsFillExclamationTriangleFill className="BsFillExclamationTriangleFill  mr-3" />
          <span className="modal-body-word">{error}</span>
        </Modal.Body>
      </Modal>

      <div className="summary-box">
        <div className="summary-title">訂單資訊</div>
        <div className="summary-detail-box">
          <div className="summary-detail d-flex justify-content-between">
            <div className="subject">小計</div>
            <div className="price text-right">NT${subTotal}</div>
          </div>
          <div className="summary-detail d-flex justify-content-between">
            <div className="subject">運費</div>
            <div className="price text-right">${shippingFee}</div>
          </div>
          <div className="summary-detail d-flex justify-content-between">
            <div className="subject">折扣</div>
            <div className="price text-right">${discount}</div>
          </div>
          <div className="border"></div>
          <div className="summary-detail total-number d-flex justify-content-between">
            <div className="subject">總計</div>
            <div className="price text-right">NT${total}</div>
          </div>
        </div>
        <div className="checkout-box">
          <button
            className="checkout-btn text-center mx-auto"
            onClick={handlecheckout}
          >
            前往結帳
          </button>
        </div>
      </div>
    </>
  )
}

export default Summary
