import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { hotData } from '../../../../hotData'
import Banner from '../../../../components/Ben/Banner'
import MultiLevelBreadcrumb from '../../../../components/Ben/MultiLevelBreadcrumb'
import BrowseRecordSlider from '../../../../components/Ben/BrowseRecordSlider'
import CategoryIcon from '../../../../components/Ben/CategoryIcon'
import CateBodyIcon from '../../../../components/Ben/CateBodyIcon'
import HotSilder from '../../../../components/Ben/HotSilder'
import SearchComputer from '../../../../components/Ben/SearchComputer'
import Search from '../../../../components/Ben/Search'
import ProductItem from '../../../../components/Ben/ProductItem'
import AsideCate from '../../../../components/Ben/AsideCate'
import './index.css'

function ProductsFirstPage(props) {
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
    searchWord,
    setSearchWord,
  } = props

  const [controlCateButton, setControlCateButton] = useState(0)

  const [myBrowseRecord, setMyBrowseRecord] = useState([])

  // 資料庫資料
  let [data, setData] = useState([])

  const [purchasedList, setPurchasedList] = useState([])

  // 商品類別
  const handleCate = () => {
    // connect to node
    // set products state
    if (cateWord !== '') {
      ;(async () => {
        let r = await fetch(
          `http://localhost:3001/product?category=${cateWord}`
        )
        let j = await r.json()
        if (j.totalRows) {
          setData(j)
        }
      })()
    }
  }

  // 依照身體部位
  const handlelocation = () => {
    // connect to node
    // set products state
    if (locationWord !== '') {
      ;(async () => {
        let r = await fetch(
          `http://localhost:3001/product?location=${locationWord}`
        )
        let j = await r.json()
        if (j.totalRows) {
          setData(j)
        }
      })()
    }
  }

  const getBrowseRecordFromLocalStorage = () => {
    const newBrowseRecord = localStorage.getItem('browseRecord') || '[]'

    setMyBrowseRecord(JSON.parse(newBrowseRecord))
  }

  useEffect(() => {
    getBrowseRecordFromLocalStorage()
  }, [])

  // 獲取熱門商品前5名
  useEffect(() => {
    // fetch 最新一筆資料
    const getInfo = async () => {
      const r = await axios.get(
        'http://localhost:3001/cart/purchased-product/all'
      )
      // data 是回傳的自動命名
      setPurchasedList(r.data)
    }
    getInfo()
  }, [])

  // 計算商品銷量加總
  let saleslist = []
  let salesobj = {}

  purchasedList.forEach((el) => {
    if (!salesobj[el.product_id]) {
      const item = {
        product_id: el.product_id,
        sid: el.product_id,
        Name: el.Name,
        quantity: el.quantity,
        image: el.image,
        price: el.price,
        special_offer: el.special_offer,
      }
      salesobj[el.product_id] = item
      saleslist.push(item)
    } else {
      salesobj[el.product_id].quantity += el.quantity
    }
  })

  // 銷量進行排序(大->小)
  saleslist.sort(function (a, b) {
    if (a.quantity < b.quantity) {
      return 1
    }
    if (a.quantity > b.quantity) {
      return -1
    }
    return 0
  })

  // 銷量的前5名
  let Top5list = []
  for (let i = 0; i < saleslist.length; i++) {
    if (i >= 5) {
      break
    }
    Top5list.push(saleslist[i])
  }

  console.log('Top5list', Top5list)

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
        <div className="productsFirstPage">
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
            {/* 手機版搜索框 */}
            <Search
              searchWord={searchWord}
              setSearchWord={setSearchWord}
              setControlCate={setControlCate}
              setControlSmallCate={setControlSmallCate}
              setControlSmallBody={setControlSmallBody}
            />
            {/* 熱門商品 */}
            {/* title */}
            <div className="hot">
              <div className="title">
                <div className="notebook-icon">
                  <img
                    src="http://localhost:3000/images/icon/1011813.png"
                    alt=""
                  />
                </div>
                <div className="circle-icon">
                  <img
                    src="http://localhost:3000/images/icon/3561625.png"
                    alt=""
                  />
                </div>
                <div className="text">
                  <p>熱門商品</p>
                </div>
              </div>
            </div>
            {/* 熱門商品輪播 */}
            <HotSilder
              Top5list={Top5list}
              updateBrowseRecordToLocalStorage={
                updateBrowseRecordToLocalStorage
              }
            />
            {/* 桌機 類別選擇頁簽 */}
            <div className="cate-button-computer">
              <div className="cate-option">
                <div
                  className={controlCateButton === 0 ? 'now' : ''}
                  onClick={() => {
                    setControlCateButton(0)
                  }}
                >
                  商品類別
                </div>
              </div>
              <div className="body-option">
                <div
                  className={controlCateButton === 1 ? 'now' : ''}
                  onClick={() => {
                    setControlCateButton(1)
                  }}
                >
                  依照身體部位
                </div>
              </div>
            </div>
            {/* 手機 類別選擇按鈕 */}
            <div className="cate-button">
              <div
                className={controlCateButton === 0 ? 'cate now' : 'cate'}
                onClick={() => {
                  setControlCateButton(0)
                }}
              >
                商品類別
              </div>
              <div
                className={controlCateButton === 1 ? 'body now' : 'body'}
                onClick={() => {
                  setControlCateButton(1)
                }}
              >
                依照身體部位
              </div>
            </div>
            <div className="category-show-area">
              {/* 類別icon */}
              <div
                className={
                  controlCateButton === 0
                    ? 'item-group-cate now'
                    : 'item-group-cate'
                }
              >
                {/* 全部商品 */}
                <Link
                  to={'/prod-list/page/1'}
                  onClick={() => {
                    setControlCate(0)
                    setControlSmallCate('全部商品')
                    setControlSmallBody('')
                  }}
                >
                  <div className="item">
                    <div className="icon">
                      <img
                        src="http://localhost:3000/images/icon/1562055.png"
                        alt=""
                      />
                    </div>
                    <div className="name">全部商品</div>
                    <div className="arrow">
                      <img
                        src="http://localhost:3000/images/arrow/blueArrow.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
                {/* 商品種類 */}
                {cates.map((v, i) => {
                  return (
                    <CategoryIcon
                      key={i}
                      id={i}
                      path={v.path}
                      name={v.name}
                      handleCate={handleCate}
                      setCateWord={setCateWord}
                      setControlCate={setControlCate}
                      setControlSmallCate={setControlSmallCate}
                      setControlSmallBody={setControlSmallBody}
                    />
                  )
                })}
              </div>
              {/* 身體icon */}
              <div
                className={
                  controlCateButton === 1
                    ? 'item-group-body now'
                    : 'item-group-body'
                }
              >
                {bodys.map((v, i) => {
                  return (
                    <CateBodyIcon
                      key={i}
                      id={i}
                      path={v.path}
                      name={v.name}
                      english={v.english}
                      handlelocation={handlelocation}
                      setLocationWord={setLocationWord}
                      setControlSmallBody={setControlSmallBody}
                      setControlCate={setControlCate}
                      setControlSmallCate={setLocationWord}
                    />
                  )
                })}
              </div>
            </div>
            {/* 瀏覽過的商品 */}
            {/* 手機輪播 */}
            <BrowseRecordSlider
              myBrowseRecord={myBrowseRecord}
              updateBrowseRecordToLocalStorage={
                updateBrowseRecordToLocalStorage
              }
            />
            {/* 桌機 */}
            <div className="browse-record-item-group">
              {myBrowseRecord
                ? myBrowseRecord
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
                    })
                : ''}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsFirstPage
