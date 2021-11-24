import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'
import ShoppingCart1 from './shoppingCart-1/index'
import ShoppingCart2 from './shoppingCart-2/index'
import ShoppingCart3 from './shoppingCart-3/index'

function App(props) {
  const { productCount, setProductCount, setIsAuth,setIsManager } = props

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
      <Switch>
        <Route path="/cart">
          <ShoppingCart1
            productCount={productCount}
            setProductCount={setProductCount}
          />
        </Route>
        <Route path="/checkout">
          <ShoppingCart2 />
        </Route>
        <Route path="/order-check/:order_sid?">
          <ShoppingCart3 />
        </Route>
      </Switch>
    </>
  )
}

export default withRouter(App)
