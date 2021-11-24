import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import Banner from '../../../../components/Ben/Banner'
import MultiLevelBreadcrumb from '../../../../components/Ben/MultiLevelBreadcrumb'
import BrowseRecordSlider from '../../../../components/Ben/BrowseRecordSlider'
import Search from '../../../../components/Ben/Search'
import SearchComputer from '../../../../components/Ben/SearchComputer'
import AccordionCategories from '../../../../components/Ben/AccordionCategories'
import ProductItem from '../../../../components/Ben/ProductItem'
import AsideCate from '../../../../components/Ben/AsideCate'
import ProductsPagination from '../../../../components/Ben/ProductsPagination'
import './index.css'

function ProductsClickedPage(props) {
  const {
    cates,
    bodys,
    cateWord,
    setCateWord,
    locationWord,
    setLocationWord,
    controlCate,
    setControlCate,
    controlSmallCate,
    setControlSmallCate,
    controlSmallBody,
    setControlSmallBody,
    updateBrowseRecordToLocalStorage,
    myBrowseRecord,
    setMyBrowseRecord,
    searchWord,
    setSearchWord,
    cateSelect,
    bodySelect,
  } = props

  const [isLoading, setIsloading] = useState(true)
  // const [myBrowseRecord, setMyBrowseRecord] = useState([])

  // 資料庫資料
  let [data, setData] = useState([])
  // 資料總數
  let [totalPages, setTotalPages] = useState(0)

  // 獲取localStorage瀏覽商品紀錄
  function getBrowseRecordFromLocalStorage() {
    const newBrowseRecord = localStorage.getItem('browseRecord') || '[]'

    setMyBrowseRecord(JSON.parse(newBrowseRecord))
  }

  // 商品類別
  const handleCate = () => {
    // connect to node
    // set products state
    ;(async () => {
      let r = await fetch(`http://localhost:3001/product?category=${cateWord}`)
      let j = await r.json()
      if (j.totalRows) {
        setData(j)
        setTotalPages(j.totalPages)
      }
    })()
  }

  // 依照身體部位
  const handlelocation = () => {
    // connect to node
    // set products state
    ;(async () => {
      let r = await fetch(
        `http://localhost:3001/product?location=${locationWord}`
      )
      let j = await r.json()
      if (j.totalRows) {
        setData(j)
        setTotalPages(j.totalPages)
      }
    })()
  }

  useEffect(() => {
    setIsloading(true)

    // 獲取資料庫的資料
    ;(async () => {
      let r = await fetch(
        'http://localhost:3001/product?page=' + props.match.params.page
      )
      let j = await r.json()
      if (j.totalRows) {
        setData(j)
        setTotalPages(j.totalPages)
      }

      // 掛載localStorage瀏覽商品紀錄
      getBrowseRecordFromLocalStorage()

      setTimeout(() => {
        setIsloading(false)
      }, 500)
    })()
  }, [])

  // 換頁時更新狀態請求
  useEffect(() => {
    setIsloading(true)
    ;(async () => {
      let r = await fetch(
        'http://localhost:3001/product?page=' + props.match.params.page
      )
      let j = await r.json()
      if (j.totalRows) {
        setData(j)
        setTotalPages(j.totalPages)
      }
    })()
    setTimeout(() => {
      setIsloading(false)
    }, 500)
  }, [props.match.params.page])

  const spinner = <Spinner animation="grow" variant="primary" />

  return (
    <>
      <Banner />
      <div className="container">
        <div className="breadcrumb-search">
          <MultiLevelBreadcrumb />
          <SearchComputer
            searchWord={searchWord}
            setSearchWord={setSearchWord}
            setControlCate={setControlCate}
            setControlSmallCate={setControlSmallCate}
            setControlSmallBody={setControlSmallBody}
          />
        </div>
        <div className="productsClickedPage">
          <AsideCate
            cates={cates}
            bodys={bodys}
            handleCate={handleCate}
            setCateWord={setCateWord}
            handlelocation={handlelocation}
            setLocationWord={setLocationWord}
            controlCate={controlCate}
            setControlCate={setControlCate}
            controlSmallCate={controlSmallCate}
            setControlSmallCate={setControlSmallCate}
            controlSmallBody={controlSmallBody}
            setControlSmallBody={setControlSmallBody}
          />

          <div className="main">
            {/* 手機版 主標題 */}
            <div className="main-title">
              <div className="text">
                <p>線上購物</p>
              </div>
              <div className="line"></div>
            </div>
            <Search
              searchWord={searchWord}
              setSearchWord={setSearchWord}
              setControlCate={setControlCate}
              setControlSmallCate={setControlSmallCate}
              setControlSmallBody={setControlSmallBody}
            />

            {/* 商品類別 + 身體部位 選單 手機 */}
            <AccordionCategories
              cateSelect={cateSelect}
              bodySelect={bodySelect}
            />

            {/* 商品顯示區 */}
            <h4 className="cate-title-blue">全部商品</h4>
            <div className="products-item-group">
              {/* 迴圈 displayData */}
              {isLoading
                ? spinner
                : data.rows
                ? data.rows.map((product) => {
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
                  })
                : ''}
            </div>

            {/* 分頁按鈕 */}
            <ProductsPagination totalPages={totalPages} />

            {/* 瀏覽過的商品 輪播 手機 */}
            <BrowseRecordSlider
              updateBrowseRecordToLocalStorage={
                updateBrowseRecordToLocalStorage
              }
            />
          </div>

          {/* 瀏覽過的商品 aside 桌機 */}
          <div className="aside-browse-recode">
            <div className="title">瀏覽過的商品</div>
            {myBrowseRecord
              .slice(0)
              .reverse()
              .map((product) => {
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
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductsClickedPage)
