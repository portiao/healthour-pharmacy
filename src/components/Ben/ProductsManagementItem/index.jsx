import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './index.css'

function ProductsManagementItem(props) {
  const {
    sid,
    Name,
    image,
    categories,
    Location,
    brand_company,
    quantity,
    price,
    place_origin,
    backStageProdsTotalPages,
  } = props

  const handleDelect = () => {
    fetch('http://localhost:3001/product/' + sid, {
      method: 'DELETE',
    })
    alert('商品刪除成功')
    window.location.href =
      '/back-stage/products/page/' + backStageProdsTotalPages
  }

  return (
    <>
      {/* 桌機版 item */}
      <div className="item-computer">
        <div className="text">
          <p>{sid}</p>
          <p className="name">{Name}</p>
          <div className="pic">
            <img src={image} alt="" />
          </div>
          <p>{categories}</p>
          <p>{Location}</p>
          <p>{brand_company}</p>
          <p>{quantity}</p>
          <p>${price}</p>
          <p>{place_origin}</p>
          <div className="buttons">
            <Link to={'/back-stage/products/edit/' + sid} className="edit">
              <div>
                <img src="http://localhost:3000/images/icon/edit.png" alt="" />
              </div>
            </Link>
            <div className="delete" onClick={handleDelect}>
              <div>
                <img
                  src="http://localhost:3000/images/icon/delete.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 手機版 item */}
      <div className="item-mobile">
        <div className="text">
          <p>{sid}</p>
          <p className="name">{Name}</p>
          <p>{categories}</p>
          <p>${price}</p>
        </div>
        <div className="buttons">
          <Link to={'/back-stage/products/edit/' + sid} className="edit">
            <div>
              <img src="http://localhost:3000/images/icon/edit.png" alt="" />
            </div>
          </Link>
          <div className="delete" onClick={handleDelect}>
            <div>
              <img src="http://localhost:3000/images/icon/delete.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductsManagementItem)
