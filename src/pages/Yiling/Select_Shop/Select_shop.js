/* eslint-disable no-unused-vars */
import './Select_shop.css'
import { Link } from 'react-router-dom'
// import Googlemap from './Googlemap.js'
import _ from 'lodash' //引入方法函示庫，react內建不需安裝
import StoresMapForGoogle from '../../../components/Yiling/StoresMap/StoresMapForGoogle'
import React, { useState, useEffect } from 'react'
import { GrMapLocation } from 'react-icons/gr' //引用map icon
import CardStores from '../../../components/Yiling/StoresMap/CardStores' //門市卡片
import Axios from 'axios'
const Background = './images/photo/預約領藥背景圖.jpg'
const Placeholder = './images/photo/placeholder.png' //map定位地圖

function Select_shop(props) {
  //最近門市資訊狀態
  const [nearShop, setNearShop] = useState('')

  const { setCloseStore } = props //給梓庭用

  useEffect(() => {
    setCloseStore(nearShop)
  }, [nearShop])

  //要傳遞狀態至最近門市的按鈕(定位)，給子元素
  let getGRef = React.createRef()

  //全部門市資訊狀態
  // 參考
  // [
  //   {
  //     city: "城市1",
  //     sites: [
  //       { site: "城市1區域1", shop: ["區域1門市1", "區域1門市2"] },
  //       { site: "城市1區域2", shop: ["區域2門市1", "區域2門市2"] },
  //     ],
  //   },

  // ];

  const [allShop, setAllShop] = useState([])

  //過濾完Select的資料狀態
  const [selectShop, setSelectShop] = useState([])
  //做Select 的狀態 有city, site, shop 三個
  const [valueCity, setValueCity] = useState('') //城市
  const [valueSite, setValueSite] = useState('') //區域
  const [valueShop, setValueShop] = useState('') //門市

  //做兩個空陣列給區域跟門市
  // const optionSite = [];
  const optionShop = []
  //給select抓資料項目
  const [dataSite, setDataSite] = useState([])
  const [dataShop, setDataShop] = useState([])

  //上傳選取門市到處方資料庫裡
  const submit = (e) => {
    e.preventDefault()
    if (valueShop !== '') {
      Axios.post('http://localhost:3003/Select_Shop', {
        Shop: valueShop,
      })
        .then((res) => {
          console.log(valueShop)
          alert('上傳成功，調劑完畢後會在第一時間連絡您')
          window.location.href = '/'
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  //回到上一頁
  const nextpage = (e) => {
    e.preventDefault()
    window.location.href = '/Prescription_Reserve'
  }

  useEffect(() => {
    if (nearShop !== '') {
      setValueCity(nearShop.sCity)
      setValueSite(nearShop.sSite)
      setValueShop(nearShop.sName)
    }
  }, [nearShop]) //最近門市改變

  useEffect(() => {
    const v = _.find(allShop, { sName: valueShop })
    if (v !== undefined) {
      setNearShop(v)
    }
  }, [valueShop]) //門市改變

  useEffect(() => {
    const cityIndex = _.findIndex(selectShop, function (o) {
      return o.city === valueCity
    })
    // console.log(cityIndex);
    if (valueCity !== '') {
      const optionSite = JSON.parse(JSON.stringify(selectShop[cityIndex].sites))
      setDataSite(optionSite)
    }
  }, [valueCity]) //城市改變

  useEffect(() => {
    let SiteIndex = 0
    const cityIndex2 = _.findIndex(selectShop, function (o) {
      return o.city === valueCity
    })
    if (cityIndex2 > -1) {
      SiteIndex = _.findIndex(selectShop[cityIndex2].sites, function (o) {
        return o.site === valueSite
      })
      // console.log(SiteIndex)
    }

    // console.log(selectShop[cityIndex2].sites);

    if (valueCity !== '' && valueSite !== '') {
      const optionShop = JSON.parse(
        JSON.stringify(selectShop[cityIndex2].sites[SiteIndex].shop)
      )
      setDataShop(optionShop)
    }
  }, [valueSite]) //區域改變

  function handleClick() {
    setNearShop('')
    getGRef.current.getG()
  }
  return (
    <>
      <div className="zi-select-shop">
        <img className="zi-select-shop-background" src={Background} alt="" />
        <div className="zi-select-shop-form-list">
          <div className="zi-select-shop-card-content">
            <h1>選取領藥門市</h1>
            <p>可自行選取門市，也可自動找尋最近門市</p>
            <div className="zi-select-shop-card-line"></div>
            <div className="zi-select-shop-autofindbtn" onClick={handleClick}>
              <img src={Placeholder} alt="" />
              自動搜尋最近門市
            </div>
            <form className="zi-select-shop-form-content" action="">
              <label className="zi-select-shop-city-label" htmlFor="city">
                城市
              </label>
              <select
                onChange={(e) => {
                  setValueCity(e.target.value)
                }}
                value={valueCity}
              >
                <option>請選取指定城市</option>
                {selectShop.length > 0 &&
                  selectShop.map((v, i) => <option key={i}>{v.city}</option>)}
              </select>

              <label>區域</label>

              <select
                onChange={(e) => {
                  setValueSite(e.target.value)
                }}
                value={valueSite}
              >
                <option>請選取區域</option>
                {dataSite.length > 0 &&
                  dataSite.map((v, i) => <option key={i}>{v.site}</option>)}
              </select>

              <label>門市</label>
              <select
                onChange={(e) => {
                  setValueShop(e.target.value)
                }}
                value={valueShop}
              >
                <option>請選取指定門市</option>
                {dataShop.length > 0 &&
                  dataShop.map((v, i) => <option key={i}>{v}</option>)}
              </select>
            </form>

            {/* 卡片元件 */}
            <div className="cardAddWithMap">
              {nearShop !== '' ? <CardStores storeHome={nearShop} /> : ''}
            </div>
          </div>

          <div className="zi-select-shop-map-group">
            <div className="zi-select-shop-map-area">
              <StoresMapForGoogle
                getGRef={getGRef}
                nearShop={nearShop}
                setNearShop={setNearShop}
                allShop={allShop}
                setAllShop={setAllShop}
                setSelectShop={setSelectShop}
              />
            </div>
          </div>
        </div>
        <div className="zi-select-shop-button-flex">
          {/* <button type="submit" className="zi-select-shop-backstep" onClick={backpage}>
            上一步
          </button> */}
          <Link to="/Prescription_Reserve">
            <button type="submit" className="zi-select-shop-form-submit">
              下一步
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Select_shop
