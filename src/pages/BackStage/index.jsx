import React, { useState } from 'react'
import './index.css'
import { Route, Switch, NavLink } from 'react-router-dom'
import BookMart from '../../components/Ben/BookMart'
import ProductsSearchPageBackStage from './ProductsSearchPageBackStage'
import ProductsManagementPage from './ProductsManagementPage'
import EditProductsPage from './EditProductsPage'
import AddProductsPage from './AddProductsPage'
import Backstage_Member_Management from './Backstage_Member_Management/Backstage_Member_Management'
import Backstage_Prescription_Management from './Backstage_Prescription_Management/Backstage_Prescription_Management'
import ManagerOrderList from './manager-order-list/index'
import ManagerOrderDetail from './manager-order-detail/index'
import ManagerOperationData from './manager-operation-data'

// forceRefresh={true}
function BackStage(props) {
  const { optionNow, setOptionNow } = props

  // 回傳給footer商品sid
  const { editSid, setEditSid } = props
  // 後臺商品搜索關鍵字
  const [backStageProdSearchWord, setBackStageProdSearchWord] = useState('')

  // 後台商品totalPages
  const [backStageProdsTotalPages, setBackStageProdsTotalPages] = useState(0)

  // 後台訂單編號搜尋
  const [orderSidSearch, setOrderSidSearch] = useState('')
  return (
    <>
      <Switch>
        {/* 後台商品搜索頁 */}
        <Route path="/back-stage/products/page/search/:word/:number">
          <BookMart optionNow={optionNow} setOptionNow={setOptionNow} />
          <ProductsSearchPageBackStage
            backStageProdSearchWord={backStageProdSearchWord}
            setBackStageProdSearchWord={setBackStageProdSearchWord}
            backStageProdsTotalPages={backStageProdsTotalPages}
            setBackStageProdsTotalPages={setBackStageProdsTotalPages}
            setOptionNow={setOptionNow}
          />
        </Route>
        {/* 後台商品列表頁 */}
        <Route path="/back-stage/products/page/:page">
          <BookMart optionNow={optionNow} setOptionNow={setOptionNow} />
          <ProductsManagementPage
            backStageProdSearchWord={backStageProdSearchWord}
            setBackStageProdSearchWord={setBackStageProdSearchWord}
            backStageProdsTotalPages={backStageProdsTotalPages}
            setBackStageProdsTotalPages={setBackStageProdsTotalPages}
            setOptionNow={setOptionNow}
          />
        </Route>
        {/* 後台商品編輯頁 */}
        <Route path="/back-stage/products/edit/:sid">
          <EditProductsPage setEditSid={setEditSid} />
        </Route>
        {/* 後台新增商品頁 */}
        <Route path="/back-stage/products/add">
          <AddProductsPage
            backStageProdsTotalPages={backStageProdsTotalPages}
          />
        </Route>
        {/* 後台會員管理列表頁面 */}
        <Route path="/back-stage/Backstage_Member_Management">
          <BookMart optionNow={optionNow} setOptionNow={setOptionNow} />
          <Backstage_Member_Management />
        </Route>
        {/* 後台處方管理列表頁面 */}
        <Route path="/back-stage/Backstage_Prescription_Management">
          <BookMart optionNow={optionNow} setOptionNow={setOptionNow} />
          <Backstage_Prescription_Management />
        </Route>
        {/* 後台訂單列表 */}
        <Route path="/back-stage/order-list">
          <BookMart optionNow={optionNow} setOptionNow={setOptionNow} />
          <ManagerOrderList
            orderSidSearch={orderSidSearch}
            setOrderSidSearch={setOrderSidSearch}
          />
        </Route>
        {/* 後台訂單明細 */}
        <Route path="/back-stage/order-detail/:order_sid">
          <BookMart optionNow={optionNow} setOptionNow={setOptionNow} />
          <ManagerOrderDetail />
        </Route>
        {/* TODO：後台營業數據 */}
        <Route path="/back-stage/operation-data">
          <BookMart optionNow={optionNow} setOptionNow={setOptionNow} />
          <ManagerOperationData />
        </Route>
      </Switch>
    </>
  )
}

export default BackStage
