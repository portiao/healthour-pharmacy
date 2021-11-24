import React, { useState, useEffect, useImperativeHandle } from 'react'
import { withRouter } from 'react-router-dom' //Refs節點
import _ from 'lodash' //引入方法函示庫，react內建不需安裝
// import { GoogleKey } from '../Key'
import GoogleMapReact from 'google-map-react'
import { MdLocationOn } from 'react-icons/md' //座標
import { FcBusinessman } from 'react-icons/fc' //人物招手
import './HospitalMap.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMyLocation } from 'react-icons/md'
// import { GoLocation } from 'react-icons/go'
// import { BsTelephone } from 'react-icons/bs'
// import { AiOutlineClockCircle } from 'react-icons/ai'
// import { ImMap2 } from 'react-icons/im'

// 標記樣式
const AnyReactComponent = ({ text, src }) => (
  <div>
    <p className="googleIconColorFor1">{text}</p> {src}
  </div>
)

function HospitalMap(props) {
  // 以下為StoresMap內容----------------------------------------------
  const {
    getGRef,
    nearShop,
    setNearShop,
    allShop,
    setAllShop,
    setSelectShop,
    setAllHospital,
  } = props

  //useImperativeHandle讓getG可以在父元素訪問,透過Ref(節點)
  useImperativeHandle(getGRef, () => {
    return {
      getG: getG,
    }
  })

  // 方法的集合(目前用來算距離)
  const [mapApi, setMapApi] = useState({})
  //載入資料庫狀態(fetch使用)
  const [stores, setStores] = useState([])
  //目前位置
  const [getGps, setGetGps] = useState({
    lat: 25.0339007,
    lng: 121.5412095,
  })
  // 地圖初始中心點跟放大倍率
  const defaultProps = {
    center: {
      lat: 25.0339007,
      lng: 121.5412095,
    },
    zoom: 9,
  }
  //人物icon是否顯示的狀態
  const [peopleShow, setPeopleShow] = useState(false)
  //最近門市是否顯示對照figma
  const [storesLocalShow, setStoresLocalShow] = useState(false)
  //門市距離的狀態(最近門市)
  const [storesState, setStoresState] = useState([])

  // 方法的集合(目前用來算距離)
  const apiHasLoaded = (map, maps) => {
    setMapApi(maps)
  }

  //顯示輸入框的狀態
  const [inputValue, setInputValue] = useState('')

  //fetch資料庫的方法
  //抓取Node.js門市資訊→透過googleapi解析座標→把資訊更新到React門市資訊的狀態
  const fetchSql = async () => {
    const result = await fetch(`http://localhost:3001/hospital/api/list`).then(
      (res) => res.json()
    )
    // console.log(result.rows)
    //setStores(result.rows);
    //let location = await fetchLatLng("總統府");

    //抓取資料庫中的地址遍瀝它
    //創造新陣列(展開運算子)
    const newStores = [...result.rows]
    //城市跟區域的集合
    const togetherS = []

    for (let i = 0; i < newStores.length; i += 1) {
      //   newStores[i].location = await fetchLatLng(newStores[i].s_address);
      // 把經度跟緯度合併成座標的物件
      newStores[i].location = {
        // 字串轉浮點數，不然抓不到距離，以後資料庫經緯度要用'浮點數'
        lat: parseFloat(newStores[i].slat),
        lng: parseFloat(newStores[i].slng),
      }

      //push城市進去 ,sites區域總集合
      togetherS.push({ city: newStores[i].sCity, sites: [] })
    }
    //刪除多餘的城市名稱
    const newTogetherS = _.uniqBy(togetherS, function (o) {
      return o.city
    })

    //城市跑完後過濾區域
    for (let i = 0; i < newStores.length; i += 1) {
      //1.城市在哪裡
      // city:newStores[i].sCity
      const cityIndex = _.findIndex(newTogetherS, function (o) {
        return o.city === newStores[i].sCity
      })
      newTogetherS[cityIndex].sites.push({ site: newStores[i].sSite, shop: [] })
    }
    //刪除多餘的區域名稱
    for (let i = 0; i < newTogetherS.length; i += 1) {
      newTogetherS[i].sites = _.uniqBy(newTogetherS[i].sites, function (o) {
        return o.site
      })
    }

    //區域跑完過濾門市
    for (let i = 0; i < newStores.length; i += 1) {
      //1.城市+區域在哪裡
      // city:newStores[i].sCity
      const cityIndex2 = _.findIndex(newTogetherS, function (o) {
        return o.city === newStores[i].sCity
      })
      const SiteIndex = _.findIndex(
        newTogetherS[cityIndex2].sites,
        function (o) {
          return o.site === newStores[i].sSite
        }
      )
      newTogetherS[cityIndex2].sites[SiteIndex].shop.push(newStores[i].sName)
    }
    //回傳下拉選單門市給父元素
    setSelectShop(newTogetherS)
    // console.log(newTogetherS);

    setStores(newStores) //子元素的狀態
    setAllShop(newStores) //父元素門市資訊的狀態
    setAllHospital(newStores) //未算距離前也要有醫院資訊
  }
  useEffect(() => {
    fetchSql()
  }, [])

  //地址轉經緯度
  // const fetchLatLng = async (addr) => {
  //   const result = await fetch(
  //     `https://maps.google.com/maps/api/geocode/json?&address=${addr}&result_type=street_address&language=zh-TW&sensor=true&key=${GoogleKey}`
  //   ).then((res) => res.json())
  //   // console.log(result.results[0].geometry.location)
  //   return result.results[0].geometry.location
  // }

  //定位 getG
  const getG = () => {
    //要等門市資訊fetch完成才能執行定位，卡條件stores.length !== 0
    if (navigator.geolocation && stores.length !== 0) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
        setGetGps(pos)
        setPeopleShow(true)

        //拷貝門市資訊
        const newStores = [...stores]

        //console.log(newStores);
        // for (let i = 0; i < newStores.length; i++) {
        //   //加入計算距離的參數 (人 ,地點)
        //   //1029修改內容------------------------------------------
        //   newStores[i].distance = await listDistanceMatrixService(
        //     pos,
        //     newStores[i].location
        //   )
        // }
        // 1029修改內容------------------------------------------
        //console.log(newStores[i].distance, i);
        //}
        //console.log(newStores);

        // //一次取多點距離--------------------１０２９這邊新增****
        // //提出經緯度陣列
        const newlocation = []
        for (let i = 0; i < newStores.length; i++) {
          newlocation.push(newStores[i].location)
        }

        //v是分割陣列的起點
        let v = 0
        let newDistance = []

        //一次丟取25個位置資訊去要距離,Math.ceil=無條件進位,算要取幾次距離用的
        for (let i = 0; i < Math.ceil(newlocation.length / 25); i++) {
          // console.log(newlocation.slice(v, v + 25));
          newDistance.push(
            await listDistanceMatrixService(pos, newlocation.slice(v, v + 25))
          )
          v = v + 25
        }

        //陣列減少維度_.flattenDeep(arr)
        newDistance = _.flattenDeep(newDistance)
        // console.log(newDistance);

        //把取得的經緯度加進去門市資訊內
        for (let i = 0; i < newDistance.length; i++) {
          newStores[i].distance = newDistance[i].distance
        }
        // console.log(newStores)

        //一次取多點距離--------------------以上是１０２９新增****

        //依照位置排序
        newStores.sort((a, b) => {
          // 陣列.sort()是排序功能
          return a.distance.value - b.distance.value //a-b是小到大,b-a是大到小
        })

        setStoresState(newStores) //排序過後的門市資訊放入狀態
        setStoresLocalShow(true) //最近門市已找到(true)
        setInputValue(newStores[0].sName) //輸入框放入最近門市的名稱

        setAllHospital(newStores) //把排序過後的醫院丟到上層

        //[0]一次只顯示最近的一間
        setNearShop(newStores[0]) //把值傳遞到父元素
      })
    } else {
    }
  }
  //計算距離
  async function listDistanceMatrixService(originAddress, destinationAddress) {
    // 初始化DistanceMatrixService,參考-> https://developers.google.cn/maps/documentation/javascript/distancematrix?hl=zh-cn
    const service = new mapApi.DistanceMatrixService()
    // 建立請求物件request
    const request = {
      //屬性可參考->https://www.oxxostudio.tw/articles/201810/google-maps-19-directions.html
      origins: [originAddress], //起點位置
      destinations: destinationAddress, //目標位置
      travelMode: mapApi.TravelMode.DRIVING, //時間用開車去算,但我只看距離
      unitSystem: mapApi.UnitSystem.METRIC, //距離單位系統有 UnitSystem.METRIC ( 公里 ) 和 UnitSystem.IMPERIAL ( 英里 ) 兩個選項，預設為 UnitSystem.METRIC。
      avoidHighways: false, //忽略高速公路，可設定 true 或 false。
      avoidTolls: false, //忽略收費公路，可設定 true 或 false。
    }
    // 取得結果
    let distance = service.getDistanceMatrix(request).then((response) => {
      //console.log(response);
      return response.rows[0].elements // 把距離的參數return出去到外層
    })
    return distance // 把距離的參數return出去到函數外面
  }
  //顯示input值
  const inputEnter = (e) => {
    setInputValue(e.target.value)
  }
  // 以上為StoresMap內容----------------------------------------------

  return (
    <div className="flex-container2">
      {/* <div className="maptext">您附近有以下醫院或診所：</div> */}
      <div className="themap">
        <div className="mapleft">
          {/* 輸入地址  onKeyup是鍵盤事件 
                <input
                  type="text"
                  onChange={(e) => {
                    inputEnter(e)
                  }}
                  value={inputValue}
                />
                {storesLocalShow && (
                  <p>
                    {storesState[0].sName},{storesState[0].s_address},
                    {storesState[0].sLocal_phone},{storesState[0].s_time}
                  </p>
                )}
              </div> */}
        </div>
        <div className="mapright" style={{ height: '80vh' }}>
          <GoogleMapReact
            center={getGps}
            // bootstrapURLKeys={{ key: GoogleKey }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
          >
            {/* <AnyReactComponent lat={25.04} lng={121.5} text="My Marker" src={faStreetView}/> */}
            {stores.map((v, i) => (
              <AnyReactComponent
                key={v.sId}
                lat={v.location.lat}
                lng={v.location.lng}
                text={v.sName}
                src={<MdLocationOn style={{ color: 'blue' }} size="2em" />}
              />
            ))}
            {peopleShow && (
              <AnyReactComponent
                lat={getGps.lat}
                lng={getGps.lng}
                text={'您所在的位置'}
                src={<FcBusinessman style={{ color: 'red' }} size="4em" />}
              />
            )}
          </GoogleMapReact>
        </div>
      </div>
    </div>
  )
}

export default withRouter(HospitalMap)
