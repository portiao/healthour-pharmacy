import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import './index.scss'
import axios from 'axios'
import Cart3 from '../../../components/Stanley/Cart3/Cart3'
import ClientOrderDetail from '../../../components/Stanley/ClientOrderDetail/ClientOrderDetail'

function App(props) {
  const [orderlist, setOrderlist] = useState([])
  const [orderDetails, setOrderDetails] = useState('')

  // 包含list 和 detail的array

  const order_sid = props.match.params.order_sid

  // componentdidMount：讀取訂單資訊
  useEffect(() => {
    // fetch 最新一筆資料
    const getInfo = async () => {
      const r = await axios.get(`http://localhost:3001/cart/` + order_sid)
      // data 是回傳的自動命名
      setOrderlist(r.data.order_list[0])
      setOrderDetails(r.data.order_details)
    }
    getInfo()
  }, [])

  return (
    <>
      <div className="COD">
        <div className="container">
          {orderDetails && (
            <Cart3 order_details={orderDetails} order_list={orderlist} />
          )}

          {orderlist ? <ClientOrderDetail order_list={orderlist} /> : ''}
        </div>
      </div>
    </>
  )
}

export default withRouter(App)
