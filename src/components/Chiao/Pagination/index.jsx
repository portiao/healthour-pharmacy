import React from 'react'
import './index.css'

function Pagination(props) {
  return (
    <div className="row pagination-wrap">
      <div className="col">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#/">
                上一頁
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link number-btn" href="#/">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link number-btn" href="#/">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link number-btn" href="#/">
                3
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="#/">
                下一頁
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Pagination
