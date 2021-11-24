import React, { useState, useEffect } from 'react'
import './Cart3.css'
import CartBottom2 from './CartBottom2/CartBottom2'
import { RiArrowDownSLine } from 'react-icons/ri'
import ProductItem3 from './ProductItem3/ProductItem3'

// Cart3是資料由資料庫送來的購物車
function Cart3(props) {
  const { order_details, order_list } = props

  // dh = droplist.height的狀態
  const [dh, setDh] = useState('')

  // ComponentDidMount ?
  useEffect(() => {
    const droplist = document.querySelector('.drop-list')

    // 1.讀取droplist一開始大小
    const dh = droplist.scrollHeight
    // 2.設定給dh(之後不會做變動)
    setDh(dh)
    // 3.先給定明確的高，transition才有效果
    droplist.style.height = dh + 'px'
  }, [dh]) // componentdidUpdata時才能有正確的高

  // 購物車開合的處理
  const handleShow = () => {
    // 選取到dom元素(droplist和箭頭)
    const droplist = document.querySelector('.drop-list')
    const arrowIcon = document.querySelector('.arrow-icon')

    // 讀取droplist變動的大小
    let dlh = parseInt(droplist.style.height)
    console.log(dlh)
    if (dlh === 0) {
      droplist.style.height = dh + 'px'
    } else {
      droplist.style.height = 0
    }
    arrowIcon.classList.toggle('rotate-negative')
  }

  return (
    <>
      {/* cart購物車 */}
      <div className="cart3-box">
        {/* 購物車標題 */}
        <div className="cart-title text-center " onClick={handleShow}>
          {order_list && (
            <>
              合計：NT${order_list.amount}(共
              {order_list.product_count}件商品)
            </>
          )}

          <div>
            <RiArrowDownSLine className="arrow-icon rotate-negative" />
          </div>
        </div>
        <div className="drop-list">
          {/* 購物車欄位標題*/}
          <div className="cart-subtitle d-xl-block d-none">
            <div className="row">
              <div className="col-6 ">商品資料</div>
              <div className="col-2 text-center">單價</div>
              <div className="col-2 text-center">數量</div>
              <div className="col-2 text-right">小計</div>
            </div>
          </div>
          {/* 顯示已購買商品 */}
          {order_details &&
            order_details.map((product, i) => {
              return <ProductItem3 product={product} key={i} />
            })}
          {/* 下方優惠與價格 */}
          {order_list && <CartBottom2 order_list={order_list} />}
          {/* 在hook裡面，order_list是array */}
        </div>
      </div>
    </>
  )
}

export default Cart3
