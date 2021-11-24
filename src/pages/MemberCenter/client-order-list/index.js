import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import axios from 'axios'
import './index.scss'
import ClientOrderList from '../../../components/Stanley/ClientOrderList/ClientOrderList'
import MemberBookMark from '../../../components/Member_BookMark/Member_BookMark'
function App(props) {
  const [orderlist, setOrderlist] = useState([])
  const [isLoading, setIsloading] = useState(true)

  // componentdidMount：讀取某會員的所有訂單資訊
  useEffect(() => {
    setIsloading(true)

    const id = JSON.parse(localStorage.getItem('Member'))[0].sid
    console.log(id)

    // fetch 最新一筆資料
    const getInfo = async () => {
      const r = await axios.get(`http://localhost:3001/cart/order-list/${id}`)
      // console.log(r)   //測試用
      setOrderlist(r.data)
    }
    getInfo()

    setTimeout(() => {
      setIsloading(false)
    }, 500)
  }, [])

  const spinner = <Spinner animation="grow" variant="primary" />
  return (
    <>
      <div className="COList">
        <div className="container">
          {/* 桌機版 */}
          <div className="d-xl-block d-none">
            <div className="order-list-box text-center">
              <div className="row list-title d-xl-block d-none">
                <div className="col-10">
                  <div className="row">
                    <div className="col-3">訂單編號</div>
                    <div className="col-3">訂單日期</div>
                    <div className="col-3">訂單總額</div>
                    <div className="col-3">訂單狀態</div>
                  </div>
                </div>
                <div className="col-2"></div>
              </div>
              {isLoading
                ? spinner
                : orderlist
                ? orderlist &&
                  orderlist.map((v, i) => {
                    return (
                      <ClientOrderList
                        key={i}
                        sid={v.sid}
                        order_date={v.order_date}
                        amount={v.amount}
                        order_status={v.order_status}
                      />
                    )
                  })
                : ''}
            </div>
          </div>

          {/* 手機板 */}
          <div className="d-xl-none">
            <div className="order-list-box">
              {orderlist &&
                orderlist.map((v, i) => {
                  return (
                    <ClientOrderList
                      key={i}
                      sid={v.sid}
                      order_date={v.order_date}
                      amount={v.amount}
                      order_status={v.order_status}
                    />
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(App)
