import React, { useState, useEffect } from 'react'
import './storesMap.css'
import { GoSearch } from 'react-icons/go' //引用search icon
import CardStores from '../../../components/Yiling/StoresMap/CardStores' //門市卡片
import {
  fetchSql,
  addressSelector,
  selectCityA,
  selectSiteA,
} from '../HealthEnIndex/HealthDatabase' //引入方法

//引入元件
// import Navbar from "../Navbar/Navbar"; //共用元件 Nav
import SelectTagStore from '../../../components/Yiling/StoresMap/SelectTagStore' //下拉選單

function StoresMap() {
  const [storesMapCity, setStoresMapCity] = useState('') //下拉選單城市
  const [storesMapSite, setStoresMapSite] = useState('') //下拉選單區域
  const [searchDataStore, setSearchDataStore] = useState([]) //抓取門市資料庫
  const [inputCityIn, setInputCityIn] = useState([]) //city
  const [inputSiteIn, setInputSiteIn] = useState([]) //Site
  const [searchInStores, setSearchInStores] = useState('') //輸入框即時文字
  const [renderDataStore, setRenderDataStore] = useState([]) //顯示門市資料庫
  const [searchClick, setSearchClick] = useState('') //搜尋文字

  const dataBaseStore = async (v) => {
    const dataBaseStore = await fetchSql(v)
    // console.log(dataBaseStore);
    setSearchDataStore(dataBaseStore.rows)
  }

  //關鍵字篩選，fillterStore過濾後的門市資訊列表
  function fillterContent(arr, word) {
    const fillterStore = []
    console.log(word)
    for (let i = 0; i < arr.length; i++) {
      const keyWords = arr[i].sName + arr[i].s_address
      if (keyWords.indexOf(word) >= 0) {
        fillterStore.push(arr[i])
      }
    }
    setRenderDataStore(fillterStore)
  }

  useEffect(() => {
    dataBaseStore('stores_list')
    setInputCityIn(selectCityA) //城市
  }, [])

  //篩選
  useEffect(() => {
    if (storesMapCity === '' || storesMapCity === '縣市') {
      if (searchClick === '') {
        setRenderDataStore(searchDataStore)
      }
    } else {
      fillterContent(searchDataStore, storesMapCity + storesMapSite)
    }
  }, [searchDataStore, storesMapCity, storesMapSite])

  //搜尋框文字篩選
  useEffect(() => {
    if (searchClick === '') {
      setRenderDataStore(searchDataStore)
      setStoresMapCity('')
    } else {
      fillterContent(searchDataStore, searchClick)
      setStoresMapCity('')
    }
  }, [searchClick])

  //清空區域狀態
  useEffect(() => {
    if (storesMapCity !== '' && storesMapCity !== '縣市') {
      setStoresMapSite('')
    } else {
      setInputSiteIn([])
    }
  }, [storesMapCity])

  useEffect(() => {
    if (storesMapCity !== '' && storesMapCity !== '縣市') {
      setInputSiteIn(selectSiteA(storesMapCity)) //把城市帶入區域
    }
  }, [storesMapCity])

  return (
    <>
      {/* <Navbar /> */}
      <div className="storesMapAround">
        <div className="pageIII">
          {/* 麵包屑 */}
          <div className="breadListP">
            <a href="">
              <p>首頁</p>
            </a>
            <p className="arrowarooo">{'>'}</p>
            <a href="">
              <p>關於我們</p>
            </a>
            <p className="arrowarooo">{'>'}</p>
            <a href="">
              <p>門市資訊</p>
            </a>
          </div>

          <div className="classButtonStore">
            <p>門市資訊</p>
          </div>
        </div>
        {/* 縣市|區域|搜尋欄 */}
        <div className="selectAndInputAroundTT">
          <div className="selectAndInputAround">
            <div>
              <SelectTagStore
                storesMapCity={storesMapCity}
                setStoresMapCity={setStoresMapCity}
                storesMapSite={storesMapSite}
                setStoresMapSite={setStoresMapSite}
                inputCityIn={inputCityIn}
                inputSiteIn={inputSiteIn}
              />
            </div>

            <div className="useGapForSearch">
              <input
                className="storesInputMap"
                placeholder="店家、所屬道路名稱"
                onChange={(e) => {
                  setSearchInStores(e.target.value)
                }}
                value={searchInStores}
              />
              <button
                className="searchIconStores"
                onClick={(e) => {
                  setSearchClick(searchInStores)
                  setSearchInStores('') //清空即時文字區
                }}
              >
                <GoSearch />
              </button>
            </div>
          </div>
        </div>
        {/* 地址卡片區 */}
        <div className="cardPosition">
          {renderDataStore.map((v, i) => (
            <CardStores storeHome={v} key={i} />
          ))}
        </div>
      </div>
    </>
  )
}

export default StoresMap
