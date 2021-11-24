import React from 'react'
import './ClientOrderList.css'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom'

function ClientOrderList(props) {
  const { sid, order_date, order_status, amount } = props

  return (
    <>
      {/* 桌機版 */}
      <div className="list-content d-xl-block d-none">
        <div className="row">
          <div className="col-10">
            <div className="row">
              <div className="col-3">{sid}</div>
              <div className="col-3">{order_date.slice(0, 10)}</div>
              <div className="col-3">NT${amount}</div>
              <div className="col-3">{order_status}</div>
            </div>
          </div>
          <div className="col-2">
            <Link to={'/User/order-detail/' + sid} className="check-detail">
              查閱內容
            </Link>
          </div>
        </div>
      </div>

      {/* 手機版 */}
      <div className="d-xl-none">
        <div className="list-content">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-6">訂單編號：{sid}</div>
                <div className="col-6 text-right red-word">{order_status}</div>
              </div>
            </div>
            <div className="col-12">訂單日期：{order_date.slice(0, 10)}</div>
            <div className="col-12">
              <div className="row">
                <div className="col-8">訂單總額：NT${amount}</div>
                <div className="col-4 text-right">
                  <Link to={'/User/order-detail/' + sid}>
                    <MdKeyboardArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientOrderList
