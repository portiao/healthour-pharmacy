import React, { useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './index.css'

function SearchComputer(props) {
  const {
    searchWord,
    setSearchWord,
    setControlCate,
    setControlSmallCate,
    setControlSmallBody,
  } = props

  useEffect(() => {
    setSearchWord('')
  }, [props.location.pathname])

  return (
    <div className="search-computer">
      <input
        className="search-input"
        type="text"
        placeholder="請輸入商品名稱"
        value={searchWord}
        onChange={(e) => {
          setSearchWord(e.target.value)
        }}
      />
      <Link
        // 有搜索內容就跳轉，沒有就轉到商品列表
        to={
          searchWord
            ? `/prod-list/page/search/${searchWord}/1`
            : '/prod-list/page/1'
        }
        onClick={() => {
          setControlCate(0)
          setControlSmallCate('全部商品')
          setControlSmallBody('')
        }}
      >
        <button className="search-button">
          <img src="http://localhost:3000/images/icon/717122.png" alt="" />
        </button>
      </Link>
    </div>
  )
}

export default withRouter(SearchComputer)
