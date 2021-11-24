/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import './PortiaAllPage.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from '../Home/HomePage' //引入首頁
import StoresMap from '../StoresMap/StoresMap' //門市資訊
import HealthEnCyc from '../HealthEnCyc/HealthEnCyc' //保健百科頁面
import HealthEnIndex from '../HealthEnIndex/HealthEnIndex' //保健百科頁面的內頁
import Select_shop from '../Select_Shop/Select_shop' //處方籤預約領藥

function PortiaAllPage(props) {
  const {
    setCloseStore,
    setIsAuth,
    setIsManager,
    updateBrowseRecordToLocalStorage,
    dis,
    setDis,
  } = props

  // 確認是否有登入 有的話就讓isAuth顯示true
  useEffect(() => {
    const userLogin = JSON.parse(localStorage.getItem('Member') || '[]')
    if (userLogin.length > 0) {
      setIsAuth(true)
      // 如果登入的是這個帳號，就讓管理者狀態顯示true
      if (userLogin[0].email === '123@yahoo.com.tw') {
        setIsManager(true)
      }
    }
  }, [props.location.pathname])
  return (
    <>
      {/* 主要內容 */}
      <Switch>
        <Route path="/StoresMap">
          <StoresMap />
        </Route>
        <Route path="/HealthEnCyc">
          <HealthEnCyc />
        </Route>
        <Route path="/HealthEnIndex/:Id">
          <HealthEnIndex />
        </Route>
        <Route path="/Select_shop">
          <Select_shop setCloseStore={setCloseStore} />
        </Route>
        <Route exact path="/">
          <HomePage
            updateBrowseRecordToLocalStorage={updateBrowseRecordToLocalStorage}
            dis={dis}
            setDis={setDis}
          />
        </Route>
      </Switch>
    </>
  )
}

export default withRouter(PortiaAllPage)
