import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom'
import BookMart from '../../../components/Ben/BookMart'
import SearchComputerBackStage from '../../../components/Ben/SearchComputerBackStage'
import SearchBackStage from '../../../components/Ben/SearchBackStage'
import ProductsManagementItem from '../../../components/Ben/ProductsManagementItem'
import ProductsPaginationSearchBackStage from '../../../components/Ben/ProductsPaginationSearchBackStage'
import './index.css'

function ProductsSearchPageBackStage(props) {
  const {
    backStageProdSearchWord,
    setBackStageProdSearchWord,
    backStageProdsTotalPages,
    setBackStageProdsTotalPages,
    optionNow,
    setOptionNow,
  } = props
  let [data, setData] = useState({})

  const [isLoading, setIsloading] = useState(true)

  // 搜索框
  const handleSearch = () => {
    // connect to node
    // set products state
    if (props.match.params.word !== '') {
      ;(async () => {
        let r = await fetch(
          `http://localhost:3001/product?keyword=${props.match.params.word}&page=${props.match.params.number}`
        )
        let j = await r.json()
        if (j.totalRows) {
          setData(j)
          setBackStageProdsTotalPages(j.totalPages)
        }
      })()
    }
  }

  useEffect(() => {
    setIsloading(true)
    // 傳遞給按鈕
    setBackStageProdSearchWord(props.match.params.word)

    handleSearch()

    setTimeout(() => {
      setIsloading(false)
    }, 500)
  }, [])

  // 換頁時更新狀態請求
  useEffect(() => {
    setIsloading(true)

    // 傳遞給按鈕
    setBackStageProdSearchWord(props.match.params.word)

    handleSearch()

    setTimeout(() => {
      setIsloading(false)
    }, 500)
  }, [
    props.match.params.word,
    props.match.params.number,
    props.location.pathname,
  ])

  useEffect(() => {
    setOptionNow(2)
  }, [
    props.location.pathname ===
      '/back-stage/products/page/' + props.match.params.page,
  ])

  const spinner = <Spinner animation="grow" variant="primary" />

  return (
    <>
      <div className="container">
        <div className="productsManagementPage">
          <div className="main">
            {/* 手機搜索框 */}
            <SearchBackStage
              backStageProdSearchWord={backStageProdSearchWord}
              setBackStageProdSearchWord={setBackStageProdSearchWord}
            />
            <div className="control">
              {/* 空白div 調整位置用 */}
              <div className="blank"></div>
              {/* 新增商品按鈕 */}
              <div className="add">
                <Link to={'/back-stage/products/add'}>新增商品</Link>
              </div>
              {/* 桌機搜索框 */}
              <SearchComputerBackStage
                backStageProdSearchWord={backStageProdSearchWord}
                setBackStageProdSearchWord={setBackStageProdSearchWord}
              />
            </div>

            {/* 商品顯示區 */}
            <div className="products-list">
              {/* 手機板 標題 */}
              <div className="title-mobile">
                <p>編號</p>
                <p>
                  商品
                  <br />
                  名稱
                </p>
                <p>
                  商品
                  <br />
                  類別
                </p>
                <p>售價</p>
              </div>
              {/* 桌機版 標題*/}
              <div className="title-computer">
                <p>編號</p>
                <p>商品名稱</p>
                <p>商品圖</p>
                <p>商品類別</p>
                <p>身體部位</p>
                <p>
                  品牌
                  <br />
                  製造公司
                </p>
                <p>
                  內容量
                  <br />
                  規格
                </p>
                <p>售價</p>
                <p>產地</p>
                {/* 空白div 替補buttons的位置 */}
                <div></div>
                <div></div>
              </div>

              {/* item */}
              {isLoading
                ? spinner
                : data.rows
                ? data.rows.map((product) => {
                    return <ProductsManagementItem {...product} />
                  })
                : ''}
            </div>
            {/* 分頁按鈕 */}
            <ProductsPaginationSearchBackStage
              backStageProdSearchWord={backStageProdSearchWord}
              backStageProdsTotalPages={backStageProdsTotalPages}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductsSearchPageBackStage)
