import React, { useEffect, useState } from 'react'
import './Checkline2.scss'
function Checkline2(props) {
  // 三個階段的狀態變數
  const { orderStatus } = props
  const [state, setState] = useState([1, 2, 2, 2])
  useEffect(() => {
    if (orderStatus === '訂單處理中') {
      const newstate = [1, 2, 2, 2]
      setState(newstate)
    }
    if (orderStatus === '已出貨') {
      const newstate = [1, 1, 2, 2]
      setState(newstate)
    }
    if (orderStatus === '運送中') {
      const newstate = [1, 1, 1, 2]
      setState(newstate)
    }
    if (orderStatus === '訂單完成') {
      const newstate = [1, 1, 1, 1]
      setState(newstate)
    }
  }, [orderStatus])

  return (
    <>
      {/* checkline 進度條 */}
      <div className="checkline2">
        <div className="checkline-box d-flex justify-content-center">
          <div className="checkline-item">
            <div className={`checkline-circle-${state[0]}`}>1</div>
            <div className="row justify-content-center">訂單處理中</div>
          </div>
          <div className="checkline-line"></div>
          <div className="checkline-item">
            <div className={`checkline-circle-${state[1]}`}>2</div>
            <div className="row justify-content-center">已出貨</div>
          </div>
          <div className="checkline-line"></div>
          <div className="checkline-item">
            <div className={`checkline-circle-${state[2]}`}>3</div>
            <div className="row justify-content-center">運送中</div>
          </div>
          <div className="checkline-line"></div>
          <div className="checkline-item">
            <div className={`checkline-circle-${state[3]}`}>4</div>
            <div className="row justify-content-center">訂單完成</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkline2
