import React, { useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './index.css'

function Search(props) {
  const { backStageProdSearchWord, setBackStageProdSearchWord } = props

  useEffect(() => {
    setBackStageProdSearchWord('')
  }, [props.location.pathname])

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="請輸入商品名稱"
        value={backStageProdSearchWord}
        onChange={(e) => {
          setBackStageProdSearchWord(e.target.value)
        }}
      />
      <Link
        // 有搜索內容就跳轉，沒有就轉到商品列表
        to={
          backStageProdSearchWord
            ? `/back-stage/products/page/search/${backStageProdSearchWord}/1`
            : '/back-stage/products/page/1'
        }
      >
        <button className="search-button">
          <img src="http://localhost:3000/images/icon/717122.png" alt="" />
        </button>
      </Link>
    </div>
  )
}

export default withRouter(Search)
