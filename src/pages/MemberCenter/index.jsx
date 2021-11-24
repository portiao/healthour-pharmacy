import { Route, Switch, NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import Member_revise from '../../pages/zi/會員中心-會員資料修改/Member_revise'
import Prescription_stage from '../../pages/zi/會員中心-處方進度追蹤/Prescription_stage'
import Member_BookMark from '../../components/Member_BookMark/Member_BookMark'
import ClientOrderDetail from './client-order-detail/index'
import ClientOrderList from './client-order-list/index'

function MemberCenter() {
  return (
    <>
      <Switch>
        {/* 會員中心-會員資料修改 */}
        <Route path="/User/Member_revise">
          <Member_BookMark />
          <Member_revise />
        </Route>
        {/* 會員中心-處方進度追蹤 */}
        <Route path="/User/Prescription_stage">
          <Member_BookMark />
          <Prescription_stage />
        </Route>
        {/* 會員中心-訂單列表 */}
        <Route path="/User/order-list/:id?">
          <Member_BookMark />
          <ClientOrderList />
        </Route>
        {/* 會員中心-訂單明細 */}
        <Route path="/User/order-detail/:order_sid?">
          <Member_BookMark />
          <ClientOrderDetail />
        </Route>
      </Switch>
    </>
  )
}

export default MemberCenter
