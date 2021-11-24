import _ from 'lodash' //引入方法函示庫，react內建不需安裝
import './HospitalPage.css'
import StoresMapForGoogle from '../../../components/Chiao/HospitalMap/HospitalMap'
import React, { useState, useEffect } from 'react' //map定位地圖
import CateButton3 from '../../../components/Chiao/CateButton3'
import CateButtonComputer3 from '../../../components/Chiao/CateButtonComputer3'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMyLocation } from 'react-icons/md'
import { withRouter } from 'react-router-dom'
import CardStores from '../../../components/Chiao/CardForMap/CardStores'
import BreadCrumb from '../../../components/Chiao/BreadCrumb'

const Banner = './images/page_topbanner.png'

function HospitalPage(props) {
  const [allHospital, setAllHospital] = useState([])
  const [nearDistance, setNearDistance] = useState([]) //把最近距離+過濾區域的狀態
  const [hospitalKey, setHospitalKey] = useState('') //按下搜尋的狀態
  const [hospitalInput, setHospitalInput] = useState('') //寫入Input的狀態
  //要傳遞狀態至最近門市的按鈕(定位)，給子元素
  let getGRef = React.createRef()
  //最近門市資訊狀態
  const [nearShop, setNearShop] = useState('')
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

  useEffect(() => {
    const all = []
    if (valueSite !== '' && valueSite !== '地區') {
      for (let i = 0; i < allHospital.length; i++) {
        if (valueSite === allHospital[i].sSite) {
          all.push(allHospital[i])
        }
      }
      setNearDistance(all)
    }
  }, [valueSite]) //區域改變時候執行

  useEffect(() => {
    let a = []
    if (hospitalKey !== '') {
      allShop.forEach((v, i) => {
        const str = v.sName + v.s_address
        if (str.indexOf(hospitalKey) > -1) {
          a.push(v)
        }
      })
      setNearDistance(a)
      setValueCity('')
      setValueSite('')
    }
  }, [hospitalKey]) //搜尋欄改變時候執行

  //做兩個空陣列給區域跟門市
  // const optionSite = [];
  const optionShop = []
  //給select抓資料項目
  const [dataSite, setDataSite] = useState([])
  const [dataShop, setDataShop] = useState([])

  useEffect(() => {
    if (nearShop !== '') {
      setValueCity(nearShop.sCity)
      setValueSite(nearShop.sSite)
      setValueShop(nearShop.sName)
    }
  }, [nearShop]) //最近門市改變

  // １０２９新增------------------------------
  useEffect(() => {
    const v = _.find(allShop, { sName: valueShop })
    if (v !== undefined) {
      setNearShop(v)
    }
  }, [valueShop]) //門市改變

  // １０２９新增------------------------------

  useEffect(() => {
    const cityIndex = _.findIndex(selectShop, function (o) {
      return o.city === valueCity
    })
    // console.log(cityIndex);
    if (valueCity !== '' && valueCity !== '縣市') {
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
      <div className="chiao-banner">
        <img src={Banner} />
      </div>
      <div className="chiao-container2">
        <div className="choose-btn3">
          <BreadCrumb />
          <CateButtonComputer3 />
          <CateButton3 />
        </div>
        <div className="flex-container1">
          <div className="mapsearch-bar">
            <input
              className="mapsearch-bar1"
              type="text"
              placeholder="請輸入醫院或診所名稱"
              onChange={(e) => {
                setHospitalInput(e.target.value)
              }}
              value={hospitalInput}
            />
          </div>

          <div className="select-bar1">
            <select
              className="select1"
              onChange={(e) => {
                setValueCity(e.target.value)
              }}
              value={valueCity}
            >
              <option>縣市</option>
              {selectShop.length > 0 &&
                selectShop.map((v, i) => <option key={i}>{v.city}</option>)}
            </select>
          </div>

          <div className="select-bar2">
            <select
              className="select2"
              onChange={(e) => {
                setValueSite(e.target.value)
              }}
              value={valueSite}
            >
              <option>地區</option>
              {dataSite.length > 0 &&
                dataSite.map((v, i) => <option key={i}>{v.site}</option>)}
            </select>
          </div>

          <div className="mapsearch-btn">
            <button
              className="mapsearch-btn1"
              onClick={(e) => {
                setHospitalKey(hospitalInput)
                setHospitalInput('')
              }}
            >
              <AiOutlineSearch />
            </button>
          </div>

          <div className="nearby-btn">
            <button className="nearby-btn1" onClick={handleClick}>
              <MdMyLocation />
              我附近的醫院｜診所
            </button>
          </div>

          <div className="flex-container2">
            <div className="maptext">您附近有以下醫院或診所：</div>

            <div className="themap1">
              <div className="mapleft1">
                {/* <select
                  onChange={(e) => {
                    setValueShop(e.target.value)
                  }}
                  value={valueShop}
                >
                  <option>請選取指定門市</option>
                  {dataShop.length > 0 &&
                    dataShop.map((v, i) => <option key={i}>{v}</option>)}
                </select> */}
                {nearDistance.map((v, i) => (
                  <CardStores key={i} storeHome={v} />
                ))}
              </div>

              <div className="mapright" style={{ height: '80vh' }}>
                <StoresMapForGoogle
                  getGRef={getGRef}
                  nearShop={nearShop}
                  setNearShop={setNearShop}
                  allShop={allShop}
                  setAllShop={setAllShop}
                  setSelectShop={setSelectShop}
                  setAllHospital={setAllHospital}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(HospitalPage)
