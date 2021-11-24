import React from 'react'
import './Cart1.css'
import ProductItem from './ProductItem/ProductItem'

// Cart1是結帳第一步還可以選取商品數量的地方
function Cart1(props) {
  const { total, mycart, setMycart, productCount, setProductCount } = props

  return (
    <>
      {/* cart購物車 */}
      <div className="cart-box">
        {/* 購物車標題 */}
        <div className="cart-title">購物車</div>
        <div className="cart-subtitle d-xl-block d-none">
          <div className="row">
            <div className="col-5">商品資料</div>
            <div className="col-2 text-center">單價</div>
            <div className="col-2 text-center">數量</div>
            <div className="col-2 text-center">小計</div>
            <div className="col-1"></div>
          </div>
        </div>
        {/* 商品*1 */}
        {mycart.map((v, i) => {
          return (
            <ProductItem
              productCount={productCount}
              setProductCount={setProductCount}
              mycart={mycart}
              setMycart={setMycart}
              key={v.sid}
              sid={v.sid}
              picture={v.image}
              name={v.Name}
              price={v.price}
              special_offer={v.special_offer}
              count={v.amount}
              setCount={(newCount) => {
                // 針對react state(狀態)為 obj,array時所作的處理
                //1. 先從原本的陣列拷貝出一個新陣列(在這上面處理)
                const newProductsInOrder = [...mycart]

                //2. 運算處理：更新陣列中對應商品數量
                // 更新陣列中本商品索引值，如果小於1以1來更新
                newProductsInOrder[i].amount = newCount < 1 ? 1 : newCount

                // //3. 設定回原本的狀態
                setMycart(newProductsInOrder)
              }}
            />
          )
        })}
        {/* 全站優惠 (大於500顯示)*/}
        {total > 500 && (
          <div className="AllStore-discount-box">
            <div className="column-1">已享有之優惠</div>
            <div className="column-2 d-flex align-items-center">
              <div className="color-box">全站優惠</div>
              <div className="discount-word">全站滿500元免運</div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart1
