import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './index.scss'

function ProductsPaginationBackStage(props) {
  const { backStageProdsTotalPages } = props
  return (
    <div className="pagination-wrap">
      <ul className="pagination">
        <li
          className={
            props.match.params.page - 1 <= 0
              ? 'page-item disabled'
              : 'page-item'
          }
        >
          <Link className="page-link" to={'/back-stage/products/page/1'}>
            第一頁
          </Link>
        </li>
        <li
          className={
            props.match.params.page - 1 <= 0
              ? 'page-item disabled'
              : 'page-item'
          }
        >
          <Link
            className="page-link"
            to={'/back-stage/products/page/' + (props.match.params.page - 1)}
          >
            上一頁
          </Link>
        </li>
        {props.match.params.page - 1 <= 0 ? (
          ''
        ) : (
          <li className="page-item number-btn">
            <Link
              className="page-link"
              to={'/back-stage/products/page/' + (props.match.params.page - 1)}
            >
              {props.match.params.page - 1}
            </Link>
          </li>
        )}
        <li className="page-item number-btn active disabled">
          <Link
            className="page-link"
            to={'/back-stage/products/page/' + props.match.params.page}
          >
            {props.match.params.page}
          </Link>
        </li>
        {props.match.params.page >= backStageProdsTotalPages ? (
          ''
        ) : (
          <li className="page-item number-btn">
            <Link
              className="page-link"
              to={
                '/back-stage/products/page/' + (props.match.params.page * 1 + 1)
              }
            >
              {props.match.params.page * 1 + 1}
            </Link>
          </li>
        )}

        <li
          className={
            props.match.params.page >= backStageProdsTotalPages
              ? 'page-item disabled'
              : 'page-item'
          }
        >
          <Link
            className="page-link"
            to={
              '/back-stage/products/page/' + (props.match.params.page * 1 + 1)
            }
          >
            下一頁
          </Link>
        </li>
        <li
          className={
            props.match.params.page >= backStageProdsTotalPages
              ? 'page-item disabled'
              : 'page-item'
          }
        >
          <Link
            className="page-link"
            to={'/back-stage/products/page/' + backStageProdsTotalPages}
          >
            最後一頁
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(ProductsPaginationBackStage)
