import React from 'react'
import './ProductItem3.css'

// item2是已經進行到不能調整數量的狀態
function ProductItem3(props) {
  const { product } = props
  return (
    <>
      <div className="productItem3">
        {/* 桌機版：購物車商品 */}
        <div className="d-xl-block d-none">
          <div className="cart-item">
            <div className="row align-items-center ">
              <div className="col-6 d-flex align-items-center">
                <div className="product-img">
                  <img src={product.image} alt="" />
                </div>
                <div className="product-description">{product.Name}</div>
              </div>
              <div className="col-2 text-center">NT${product.unit_price}</div>
              <div className="col-2 text-center">{product.quantity}</div>
              <div className="col-2 text-right">NT${product.subtotal}</div>
            </div>
          </div>
        </div>

        {/* 手機版：購物車商品 */}
        <div className="d-xl-none d-block">
          <div className="cart-item">
            <div className="row">
              {/* 商品圖片區(左) */}
              <div className="col-4">
                <div className="product-img">
                  <img src={product.image} alt="" />
                </div>
              </div>
              {/* 其他文字區(右) */}
              <div className="col-8">
                {/* 商品介紹&X(上區) */}
                <div className="row">
                  <div className="col-9">
                    <div className="product-description">{product.Name}</div>
                  </div>
                  <div className="col-3">x1</div>
                </div>
                {/* 價格(中區) */}
                <div className="row">
                  <div className="col">
                    <div className="price text-left">
                      NT${product.unit_price}
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

export default ProductItem3
