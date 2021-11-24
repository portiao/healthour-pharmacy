import React, { useState, useEffect, useRef } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Spinner, Accordion, Card } from 'react-bootstrap'
import { IoIosArrowDown } from 'react-icons/io'
import Banner from '../../../../components/Ben/Banner'
import MultiLevelBreadcrumb from '../../../../components/Ben/MultiLevelBreadcrumb'
import AccordionFollow from '../../../../components/Ben/AccordionFollow'
import ProductItem from '../../../../components/Ben/ProductItem'
import FollowCateNav from '../../../../components/Ben/FollowCateNav'
import './index.css'

function ProductsFollowPage(props) {
  const { cates, cateSelect, updateBrowseRecordToLocalStorage } = props

  // 搜索關鍵字
  const [searchWord, setSearchWord] = useState('')
  // 搜索框Ref
  const searchComputerInput = useRef()
  // 搜索框Ref
  const searchInput = useRef()
  // 分類
  const [categoryTag, setCategoryTag] = useState('')
  const [controlCate, setControlCate] = useState('')
  const [controlSmallCate, setControlSmallCate] = useState('')
  const [myTitle, setMyTitle] = useState('全部商品')
  // 追蹤資料
  const [myFollow, setMyFollow] = useState([])
  // 排序資料
  const [displayMyFollow, setDisplayMyFollow] = useState([])
  // 是否載入中
  const [isLoading, setIsloading] = useState(true)

  function getFollowFromLocalStorage() {
    const newFollow = localStorage.getItem('follow') || '[]'

    // console.log(JSON.parse(newFollow))

    setMyFollow(JSON.parse(newFollow))
    setDisplayMyFollow(JSON.parse(newFollow))
  }

  // 搜索用函式
  const handleSearch = (myFollow, searchWord) => {
    let newMyFollow = []

    if (searchWord) {
      newMyFollow = myFollow.filter((product) => {
        return product.Name.includes(searchWord)
      })
    } else {
      newMyFollow = [...myFollow]
    }

    return newMyFollow
  }
  // 類別用函式
  const handleCategoryTag = (myFollow, categoryTag) => {
    let newMyFollow = []

    if (categoryTag) {
      newMyFollow = myFollow.filter((product) => {
        return product.categories.includes(categoryTag)
      })
    } else {
      newMyFollow = [...myFollow]
    }

    return newMyFollow
  }

  useEffect(() => {
    setIsloading(true)

    getFollowFromLocalStorage()

    setTimeout(() => {
      setIsloading(false)
    }, 500)
  }, [])

  useEffect(() => {
    setIsloading(true)
    let newMyFollow = []

    // 處理搜尋
    newMyFollow = handleSearch(myFollow, searchWord)
    // 處理分類
    newMyFollow = handleCategoryTag(newMyFollow, categoryTag)

    setDisplayMyFollow(newMyFollow)

    setTimeout(() => {
      setIsloading(false)
    }, 500)
  }, [searchWord, categoryTag, myFollow])

  // 載入中
  const spinner = <Spinner animation="grow" variant="primary" />

  return (
    <>
      <Banner />
      <div className="container">
        <div className="breadcrumb-search">
          <MultiLevelBreadcrumb />
          {/* 搜索框 桌機*/}
          <div className="search-follow">
            <input
              ref={searchComputerInput}
              className="search-input"
              type="text"
              placeholder="請輸入商品名稱"
            />
            <button className="search-button">
              <img
                src="http://localhost:3000/images/icon/717122.png"
                alt=""
                onClick={() => {
                  setSearchWord(searchComputerInput.current.value)
                }}
              />
            </button>
          </div>
        </div>

        {/* 主頁面 */}
        <div className="productsFollowPage">
          {/* 類別側邊欄 */}
          <div className="aside">
            {/* 標題 */}
            <h3 className="title">追蹤中商品</h3>
            {/* 類別內容 */}
            <FollowCateNav
              cates={cates}
              setCategoryTag={setCategoryTag}
              setControlCate={setControlCate}
              setControlSmallCate={setControlSmallCate}
              controlCate={controlCate}
              controlSmallCate={controlSmallCate}
            />
          </div>

          <div className="main">
            {/* 手機 主標題 */}
            <div className="main-title-follow">
              <div className="text">
                <p>追蹤中商品</p>
              </div>
              <div className="line"></div>
            </div>
            {/* 搜索框 手機 */}
            <div className="search-follow mobile">
              <input
                ref={searchInput}
                className="search-input"
                type="text"
                placeholder="請輸入商品名稱"
              />
              <button className="search-button">
                <img
                  src="http://localhost:3000/images/icon/717122.png"
                  alt=""
                  onClick={() => {
                    setSearchWord(searchInput.current.value)
                    setMyTitle('搜尋的商品')
                  }}
                />
              </button>
            </div>

            {/* 商品類別 手機 */}
            {/* 標題和下拉選單 */}
            <AccordionFollow
              cateSelect={cateSelect}
              setCategoryTag={setCategoryTag}
              setMyTitle={setMyTitle}
            />

            {/* 商品顯示區 */}
            <h4 className="cate-title-blue">{myTitle}</h4>

            {myFollow.length > 0 ? (
              <div className="products-item-group">
                {isLoading
                  ? spinner
                  : displayMyFollow.map((product) => {
                      return (
                        <Link
                          key={product.sid}
                          to={'/prod-list/prod/' + product.sid}
                          onClick={() => {
                            updateBrowseRecordToLocalStorage(product)
                          }}
                        >
                          <ProductItem {...product} />
                        </Link>
                      )
                    })}
              </div>
            ) : (
              <div className="no-follow">尚未追蹤任何商品</div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductsFollowPage)
