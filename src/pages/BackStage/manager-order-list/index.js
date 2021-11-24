import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import './index.scss'
import axios from 'axios'
import { AiFillFileExcel, AiFillDelete } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import ManagerOrderList from '../../../components/Stanley/ManagerOrderList/ManagerOrderList'

function App(props) {
  const { orderSidSearch, setOrderSidSearch } = props
  const [orderlist, setOrderlist] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const [selectOrderStatus, setSelectOrderStatus] = useState('')

  // componentdidMount：讀取訂單資訊
  useEffect(() => {
    setIsloading(true)

    // fetch 最新一筆資料
    const getInfo = async () => {
      const r = await axios.get(`http://localhost:3001/cart/`)
      // data 是回傳的自動命名
      setOrderlist(r.data)
      // 拿到
      setTimeout(() => {
        setIsloading(false)
      }, 500)
    }
    getInfo()
  }, [])

  const spinner = <Spinner animation="grow" variant="primary" />

  // 訂單查詢
  const handleSearch = async (order_status) => {
    setIsloading(true)
    // console.log(order_status)
    const r = await axios.get(
      `http://localhost:3001/cart?order_sid=${orderSidSearch}&order_status=${
        typeof order_status === 'object' ? selectOrderStatus : order_status
      }`
    )
    setOrderlist(r.data)
    setTimeout(() => {
      setIsloading(false)
    }, 500)
  }

  return (
    <>
      <div className="MOL">
        <div className="container">
          {/* 訂單操作按鈕 */}
          <div className="list-control-box">
            <div className="row">
              <div className="col-xl-6 col-12 order-xl-0 order-1"></div>
              <div className="col-xl-6 col-12">
                <div className="row">
                  <div className="col-xl-8 col-12">
                    <div className="search-computer ">
                      {/* 訂單編號搜尋 */}
                      <input
                        className="search-input"
                        type="text"
                        placeholder="請輸入訂單編號"
                        value={orderSidSearch}
                        onChange={(e) => {
                          setOrderSidSearch(e.target.value)
                        }}
                      />
                      <button className="search-button">
                        <BsSearch onClick={handleSearch} />
                      </button>
                    </div>
                  </div>
                  <div className="col-xl-4 col-12">
                    {/* 訂單狀態搜尋 */}
                    <select
                      className="select-order"
                      onChange={(e) => {
                        const newSelect = e.target.value
                        setSelectOrderStatus(newSelect)
                        handleSearch(e.target.value)
                      }}
                    >
                      <option value="">全部</option>
                      <option value="訂單處理中">訂單處理中</option>
                      <option value="已出貨">已出貨</option>
                      <option value="運送中">運送中</option>
                      <option value="訂單完成">訂單完成</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 後台訂單列 */}
          <div className="field-content-box text-center">
            <div className="field-title d-xl-block d-none">
              <div className="row">
                {/* <div className="col-1"></div> */}
                <div className="col-11">
                  <div className="row">
                    <div className="col-2">訂單編號</div>
                    <div className="col-2">訂單日期</div>
                    <div className="col-2">訂購人</div>
                    <div className="col-2">訂單總額</div>
                    <div className="col-2">付款狀態</div>
                    <div className="col-2">訂單狀態</div>
                  </div>
                </div>
                <div className="col-1"></div>
              </div>
            </div>
            {isLoading
              ? spinner
              : orderlist
              ? orderlist.map((v, i) => {
                  return (
                    <ManagerOrderList
                      key={i}
                      sid={v.sid}
                      member_name={v.member_name}
                      amount={v.amount}
                      order_date={v.order_date}
                      order_status={v.order_status}
                    />
                  )
                })
              : ''}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
