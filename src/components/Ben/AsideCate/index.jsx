import React, { useState } from 'react'
import CateNav from '../CateNav'
import './index.css'

function AsideCate(props) {
  const {
    handleCate,
    setCateWord,
    handlelocation,
    setLocationWord,
    cates,
    bodys,
    controlCate,
    setControlCate,
    controlSmallCate,
    setControlSmallCate,
    controlSmallBody,
    setControlSmallBody,
  } = props
  return (
    <div className="aside-cate">
      <h3 className="now-cate">{controlCate ? '依照身體部位' : '商品類別'}</h3>
      <CateNav
        cates={cates}
        bodys={bodys}
        controlCate={controlCate}
        setControlCate={setControlCate}
        controlSmallCate={controlSmallCate}
        setControlSmallCate={setControlSmallCate}
        controlSmallBody={controlSmallBody}
        setControlSmallBody={setControlSmallBody}
        handleCate={handleCate}
        setCateWord={setCateWord}
        handlelocation={handlelocation}
        setLocationWord={setLocationWord}
      />
    </div>
  )
}

export default AsideCate
