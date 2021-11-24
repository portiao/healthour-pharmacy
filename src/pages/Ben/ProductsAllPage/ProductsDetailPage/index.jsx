import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import Magnifier from 'react-magnifier'
import Banner from '../../../../components/Ben/Banner'
import MultiLevelBreadcrumb from '../../../../components/Ben/MultiLevelBreadcrumb'
import Search from '../../../../components/Ben/Search'
import SearchComputer from '../../../../components/Ben/SearchComputer'
import AsideCate from '../../../../components/Ben/AsideCate'
import BrowseRecordSlider from '../../../../components/Ben/BrowseRecordSlider'
import SpecialOfferSlider from '../../../../components/Ben/SpecialOfferSlider'
import OtherProductsSlider from '../../../../components/Ben/OtherProductsSlider'
import ProductItem from '../../../../components/Ben/ProductItem'
import './index.css'
// Modal功能
import { Modal, Button } from 'react-bootstrap'
import { BsFillCheckCircleFill } from 'react-icons/bs'

function ProductsDetailPage(props) {
  console.log(props)
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
    productCount,
    setProductCount,
    isAuth,
    setIsAuth,
  } = props

  // 是否載入中
  const [isLoading, setIsloading] = useState(true)
  // 追蹤按鈕 (是否追蹤中)
  const [isFollow, setIsFollow] = useState(false)

  // 頁簽切換
  const [changeBookMark, setChangeBookMark] = useState(0)

  // 追蹤的商品 (初始直接從localtorage拿資料設定)
  const [myFollow, setMyFollow] = useState(
    JSON.parse(localStorage.getItem('follow') || '[]')
  )

  // 購物車的商品 (初始直接從localtorage拿資料設定)
  const [myCart, setMyCart] = useState(
    JSON.parse(localStorage.getItem('cart') || '[]')
  )

  // modal狀態
  const [show, setShow] = useState(false)
  // modal要顯示的字
  const [word, setWord] = useState('')

  const handleCloseModal = () => setShow(false)
  const handleShowModal = () => {
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 1000)
  }

  // 資料庫的資料
  let [data, setData] = useState([])

  // 獲取localtorage 瀏覽過的商品並設定狀態
  const getBrowseRecordFromLocalStorage = () => {
    const newBrowseRecord = localStorage.getItem('browseRecord') || '[]'

    setMyBrowseRecord(JSON.parse(newBrowseRecord))
  }

  // localtorage有這筆follow資料，設定isFollow狀態為true
  const getFollowFromLocalStorage = () => {
    // console.log(myFollow)

    if (myFollow.length > 0) {
      const index = myFollow.findIndex((v) => {
        return v.sid === props.match.params.sid * 1
      })

      if (index !== -1) {
        setIsFollow(true)
      } else {
        setIsFollow(false)
      }
    }
  }

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

  useEffect(() => {
    setIsloading(true)
    // 異步執行
    ;(async () => {
      let r = await fetch(
        'http://localhost:3001/product/' + props.match.params.sid
      )
      let j = await r.json()
      if (j) {
        setData(j.data)
      }
    })()

    // 瀏覽過的商品 掛載獲取的localtorage
    getBrowseRecordFromLocalStorage()

    // follow狀態按鈕
    getFollowFromLocalStorage()

    setTimeout(() => {
      setIsloading(false)
    }, 500)
  }, [])

  // 更新
  useEffect(() => {
    setIsloading(true)
    ;(async () => {
      let r = await fetch(
        'http://localhost:3001/product/' + props.match.params.sid
      )
      let j = await r.json()
      if (j) {
        setData(j.data)
      }
    })()

    // follow狀態按鈕
    getFollowFromLocalStorage()

    setTimeout(() => {
      setIsloading(false)
    }, 500)
  }, [props.match.params.sid])

  // 追蹤
  const updateFollowToLocalStorage = (product) => {
    const currentFollow = JSON.parse(localStorage.getItem('follow') || '[]')

    currentFollow.push(product)

    localStorage.setItem('follow', JSON.stringify(currentFollow))

    // 設定資料
    setMyFollow(currentFollow)

    setIsFollow(true)
  }

  // 購物車
  const updateCartToLocalStorage = (product) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    // 加入的商品添加amount =1 資訊
    const newproduct = { ...product }
    newproduct.amount = 1
    currentCart.push(newproduct)

    // mycartDisplay運算
    let newMycartDisplay = []

    //尋找mycartDisplay
    for (let i = 0; i < currentCart.length; i++) {
      const index = newMycartDisplay.findIndex(
        (value) => value.sid === currentCart[i].sid
      )
      //有的話就數量+1
      if (index !== -1) {
        newMycartDisplay[index].amount += currentCart[i].amount
      } else {
        //沒有的話就把項目加入，數量為1
        const newItem = { ...currentCart[i] }
        newMycartDisplay = [...newMycartDisplay, newItem]
      }
    }
    localStorage.setItem('cart', JSON.stringify(newMycartDisplay))
    setProductCount(newMycartDisplay.length)

    // 設定資料
    setMyCart(newMycartDisplay)
  }

  // 取消追蹤
  const deleteFollowToLocalStorage = (product) => {
    const localStorageData = JSON.parse(localStorage.getItem('follow') || '[]')
    const currentProduct = product
    // console.log(localStorageData)
    // console.log(currentProduct)

    const newLocalStorageData =
      localStorageData.filter((v) => {
        return v.sid !== currentProduct.sid
      }) || []
    localStorage.setItem('follow', JSON.stringify(newLocalStorageData))

    setIsFollow(false)
  }

  const spinner = <Spinner animation="grow" variant="primary" />

  return (
    <>
      <Banner />
      <div className="container">
        <Modal
          show={show}
          onHide={handleCloseModal}
          {...props}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className="text-center">
            <BsFillCheckCircleFill className="BsFillCheckCircleFill  mr-3" />
            <span className="modal-body-word">{word}</span>
          </Modal.Body>
        </Modal>
        <Search
          searchWord={searchWord}
          setSearchWord={setSearchWord}
          setControlCate={setControlCate}
          setControlSmallCate={setControlSmallCate}
          setControlSmallBody={setControlSmallBody}
        />
        <div className="breadcrumb-search">
          <MultiLevelBreadcrumb />
          <SearchComputer
            searchWord={searchWord}
            setSearchWord={setSearchWord}
            setControlCate={setControlCate}
            setControlSmallCate={setControlSmallCate}
            setControlSmallBody={setControlSmallBody}
          />
          {/* <Search /> */}
        </div>
        <div className="productsDetailPage">
          {/* 側邊欄 */}
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
          {isLoading ? (
            spinner
          ) : (
            <div className="main">
              {/*桌機 藍色標題 */}
              <div className="title-blue-computer d-none d-lg-block">
                {data.Name}
              </div>
              {/* 上方資訊 */}
              <div className="product-area">
                {/* 商品圖 */}
                <div className="pic">
                  <Magnifier src={data.image} mgShape="square" />
                </div>
                {/* 結帳資訊 */}
                <div className="content">
                  <div id="title-blue-mobile" className="title">
                    {data.Name}
                  </div>
                  <div className="title-computer d-none d-lg-block">
                    {data.Name}
                  </div>
                  {/* 售價 */}
                  <div
                    className={
                      data.special_offer !== '' ? 'price line-through' : 'price'
                    }
                  >
                    售價${data.price}
                  </div>
                  {/* 特惠價 */}
                  <div className="special-offer">
                    {data.special_offer === ''
                      ? ''
                      : '特惠價$' + data.special_offer}
                  </div>
                  <div className="payment">
                    結帳方式 : 信用卡 / 貨到付款 / 超商取貨付款
                  </div>
                  <div className="delivery">
                    配送方式 : 宅配到府 / 超商取貨 / 門市自取
                  </div>

                  {/* 按鈕區 flex水平 */}
                  <div className="button-area">
                    {/* 追蹤商品 */}
                    <div
                      className={
                        isFollow ? 'follow-button hide' : 'follow-button'
                      }
                      onClick={() => {
                        isAuth
                          ? updateFollowToLocalStorage(data)
                          : props.history.push('/login')
                      }}
                    >
                      加入追蹤
                    </div>
                    <div
                      className={
                        isFollow
                          ? 'cancel-follow-button show'
                          : 'cancel-follow-button'
                      }
                      onClick={() => {
                        deleteFollowToLocalStorage(data)
                      }}
                    >
                      已追蹤
                    </div>
                    {/* 加入購物車 */}
                    <div
                      className="cart-button"
                      onClick={() => {
                        updateCartToLocalStorage(data)
                        // modal
                        setWord('加入成功')
                        handleShowModal()
                      }}
                    >
                      加入購物車
                    </div>
                  </div>
                </div>
              </div>
              {/* 商品規格資訊 */}
              <div className="info-area">
                {/* 頁簽 */}
                <div className="info-button">
                  {/* flex 水平 */}
                  <div className="spec">
                    <div
                      className={changeBookMark === 0 ? 'now' : ''}
                      onClick={() => {
                        setChangeBookMark(0)
                      }}
                    >
                      商品規格
                    </div>
                  </div>
                  <div className="delivery-notice">
                    <div
                      className={changeBookMark === 1 ? 'now' : ''}
                      onClick={() => {
                        setChangeBookMark(1)
                      }}
                    >
                      運送說明
                    </div>
                  </div>
                  <div className="return-notice">
                    <div
                      className={changeBookMark === 2 ? 'now' : ''}
                      onClick={() => {
                        setChangeBookMark(2)
                      }}
                    >
                      退貨需知
                    </div>
                  </div>
                </div>
                {/* 內容 */}
                <div className="info-content">
                  {/* 商品規格 */}
                  <div
                    className={
                      changeBookMark === 0
                        ? 'spec-content show'
                        : 'spec-content'
                    }
                  >
                    <h4>本商品規格</h4>
                    <p>品牌 / 製造廠 : {data.brand_company}</p>
                    <p>商品成分 / 商品材質 : {data.nutrient}</p>
                    <p>對應的身體部位 : {data.Location}</p>
                    <p>內容量 / 規格 : {data.quantity}</p>
                    <p>使用方法 : {data.Edible_Method}</p>
                    <p>產地 : {data.place_origin}</p>
                    <p>保存年限 : {data.EXP}</p>
                    <p>製造日期 : {data.MFD}</p>
                  </div>
                  {/* 配送須知 */}
                  <div
                    className={
                      changeBookMark === 1
                        ? 'delivery-notice-content show'
                        : 'delivery-notice-content'
                    }
                  >
                    {/* icon */}
                    <div className="icon">
                      <img
                        src="http://localhost:3000/images/icon/truck_nidai_white.png"
                        alt=""
                      />
                    </div>
                    {/* 內文 */}
                    <h4>商品運送說明</h4>
                    <p>
                      送貨方式：
                      <br />
                      透過宅配送達。除網頁另有特別標示外，均為常溫配送。
                      <br />
                      消費者訂購之商品若經配送兩次無法送達，再經本公司以電話與Email均無法聯繫逾三天者，本公司將取消該筆訂單，並且全額退款。
                      <br />
                      送貨範圍：
                      <br />
                      限台灣本島與離島地區註，部分離島地區包括連江馬祖、綠島、蘭嶼、琉球鄉…等貨件，將送至到岸船公司碼頭，需請收貨人自行至碼頭取貨。注意！收件地址請勿為郵政信箱。
                      <br />
                      產品責任險：
                      <br />
                      本網站產品已投保產物產品責任保險$250,000,000元。
                    </p>
                  </div>
                  {/* 退貨須知 */}
                  <div
                    className={
                      changeBookMark === 2
                        ? 'return-notice-content show'
                        : 'return-notice-content'
                    }
                  >
                    {/* icon */}
                    <div className="icon">
                      <img
                        src="http://localhost:3000/images/icon/takuhai_truck_man_nimotsu.png"
                        alt=""
                      />
                    </div>
                    {/* 內文 */}
                    <h4>商品退貨需知</h4>
                    <p>
                      所有在本商城購物的消費者，都可以依照消費者保護法的規定，享有商品貨到次日起七天猶豫期的權益。但猶豫期並非試用期，請留意，您所退回的商品必須回復原狀（須回復至商品到貨時的原始狀態）並且保持完整包裝（包括商品本體、配件、贈品、保證書、原廠包裝及所有附隨文件或資料的完整性），切勿缺漏任何配件或損毀原廠外盒。
                      <br />
                      如果您所購買的商品是屬於保存期限較短之商品，依據消費者保護法之規定，於收受商品後將無法享有七天猶豫期之權益且不得辦理退貨。
                      <br />
                      若您需辦理退貨，請利用會員中心「查訂單」或「退訂/退款查詢」的「退訂/退貨」功能填寫申請，我們將於接獲申請之次日起1個工作天內檢視您的退貨要求，檢視完畢後將以E-mail回覆通知您，並將委託本公司指定之宅配公司，在5個工作天內透過電話與您連絡前往取回退貨商品。請您保持電話暢通，並備妥原商品及所有包裝及附件，以便於交付予本公司指定之宅配公司取回（宅配公司僅負責收件，退貨商品仍由特約廠商進行驗收），宅配公司取件後會提供簽收單據給您，請注意留存。
                      <br />
                      退回商品時，請以本公司或特約廠商寄送商品給您時所使用的外包裝（紙箱或包裝袋），原封包裝後交付給前來取件的宅配公司；如果本公司或特約廠商寄送商品給您時所使用的外包裝（紙箱或包裝袋）已經遺失，請您在商品原廠外盒之外，再以其他適當的包裝盒進行包裝，切勿任由宅配單直接粘貼在商品原廠外盒上或書寫文字。
                      <br />
                      提醒您，原廠外盒及原廠包裝都屬於商品的一部分，若有遺失、毀損或缺件，可能影響您退貨的權益，也可能依照損毀程度扣除為回復原狀所必要的費用。
                      <br />
                      若因您要求退貨或換貨、或因本公司無法接受您全部或部分之訂單、或因契約解除或失其效力，而需為您辦理退款事宜時，您同意本公司得代您處理發票或折讓單等相關法令所要求之單據，以利本公司為您辦理退款。
                      <br />
                      本公司收到您所提出的申請後，若經確認無誤，將依消費者保護法之相關規定，返還您已支付之對價（含信用卡交易），退款日當天會再發送E-mail通知函給您。
                    </p>
                  </div>
                </div>
              </div>
              {/* 瀏覽過商品 */}
              {/* 手機輪播 */}
              <BrowseRecordSlider
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
              {/* 特惠價 */}
              <SpecialOfferSlider
                updateBrowseRecordToLocalStorage={
                  updateBrowseRecordToLocalStorage
                }
              />
              {/* 其他人也看過 */}
              <OtherProductsSlider
                updateBrowseRecordToLocalStorage={
                  updateBrowseRecordToLocalStorage
                }
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductsDetailPage)
