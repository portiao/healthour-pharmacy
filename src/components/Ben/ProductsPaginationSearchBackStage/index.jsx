import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './index.scss'

function ProductsPaginationSearch(props) {
  const { backStageProdSearchWord, backStageProdsTotalPages } = props
  return (
    <div className="pagination-wrap">
      <ul className="pagination">
        <li
          className={
            props.match.params.number - 1 <= 0
              ? 'page-item disabled'
              : 'page-item'
          }
        >
          <Link
            className="page-link"
            to={
              '/back-stage/products/page/search/' +
              backStageProdSearchWord +
              '/1'
            }
          >
            第一頁
          </Link>
        </li>
        <li
          className={
            props.match.params.number - 1 <= 0
              ? 'page-item disabled'
              : 'page-item'
          }
        >
          <Link
            className="page-link"
            to={
              '/back-stage/products/page/search/' +
              backStageProdSearchWord +
              '/' +
              (props.match.params.number - 1)
            }
          >
            上一頁
          </Link>
        </li>
        {props.match.params.number - 1 <= 0 ? (
          ''
        ) : (
          <li className="page-item number-btn">
            <Link
              className="page-link"
              to={
                '/back-stage/products/page/search/' +
                backStageProdSearchWord +
                '/' +
                (props.match.params.number - 1)
              }
            >
              {props.match.params.number - 1}
            </Link>
          </li>
        )}
        <li className="page-item number-btn active disabled">
          <Link
            className="page-link"
            to={
              '/back-stage/products/page/search/' +
              backStageProdSearchWord +
              '/' +
              props.match.params.number
            }
          >
            {props.match.params.number}
          </Link>
        </li>
        {props.match.params.number >= backStageProdsTotalPages ? (
          ''
        ) : (
          <li className="page-item number-btn">
            <Link
              className="page-link"
              to={
                '/back-stage/products/page/search/' +
                backStageProdSearchWord +
                '/' +
                (props.match.params.number * 1 + 1)
              }
            >
              {props.match.params.number * 1 + 1}
            </Link>
          </li>
        )}

        <li
          className={
            props.match.params.number >= backStageProdsTotalPages
              ? 'page-item disabled'
              : 'page-item'
          }
        >
          <Link
            className="page-link"
            to={
              '/back-stage/products/page/search/' +
              backStageProdSearchWord +
              '/' +
              (props.match.params.number * 1 + 1)
            }
          >
            下一頁
          </Link>
        </li>
        <li
          className={
            props.match.params.number >= backStageProdsTotalPages
              ? 'page-item disabled'
              : 'page-item'
          }
        >
          <Link
            className="page-link"
            to={
              '/back-stage/products/page/search/' +
              backStageProdSearchWord +
              '/' +
              backStageProdsTotalPages
            }
          >
            最後一頁
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(ProductsPaginationSearch)
