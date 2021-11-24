import './homePage.css'
import React, { useState } from 'react'

// 引入page
import PHeader from '../PHeader/PHeader' //header
import PopularProduct from '../PopularProductPage/PopularProduct' //熱門商品輪播
import NewsPage from '../Newsnews/NewsPage' //最新消息
import Encyclopedia from '../Encyclopedia/Encyclopedia' //百健保科
import AboutUS from '../AboutUs/AboutUS' //關於我們
import Link from '../ContentLink/Link' //相關連結

function HomePage(props) {
  const { updateBrowseRecordToLocalStorage, dis , setDis } = props
  // const [dis, setDis] = useState(true)

  return (
    <div className="homePage">
      {dis === true && (
        <div
          className="activeBig"
          onClick={(e) => {
            setDis(false)
          }}
        >
          <div className="cancelMove">
            <img src="./images/photo/jump.jpg" alt="" className="jumpSco" />

            <img
              src="./images/photo/cancel.png"
              alt=""
              className="cancelBtnN"
            />
          </div>
        </div>
      )}

      <div className="headerBack">
        <PHeader />
      </div>
      <PopularProduct
        updateBrowseRecordToLocalStorage={updateBrowseRecordToLocalStorage}
      />
      <NewsPage />
      <Encyclopedia />
      <div className="aboutUsMM">
        <AboutUS />
      </div>
      <div className="contentLink">
        <Link />
      </div>
    </div>
  )
}

export default HomePage
