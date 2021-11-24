import React from 'react'
import { withRouter } from 'react-router-dom'
import LinkArea from './LinkArea'
import './index.css'

function Footer(props) {
  const {
    setControlCate,
    setControlSmallCate,
    setControlSmallBody,
    location,
    editSid,
  } = props

  // console.log('footer', location.pathname)
  // console.log('footer', props)

  // 連結資料
  const topLink = [
    {
      theClass: 'login',
      content: [
        { name: '會員註冊', link: '' },
        { name: '會員登入', link: '' },
        { name: '處方簽查詢', link: '' },
      ],
    },
    {
      theClass: 'shop',
      content: [
        {
          name: '線上購物',
          link: '/shop',
        },
        {
          name: '商品分類',
          link: '/prod-list/page/1',
        },
        {
          name: '依身體部位',
          link: '/prod-list/page/categories/頭部/1',
        },
        { name: '訂單查詢', link: '' },
      ],
    },
    {
      theClass: 'health-knowledge',
      content: [
        { name: '保健知識', link: '' },
        { name: '保健百科', link: '' },
        { name: '症狀篩檢', link: '' },
        { name: '醫院|藥局', link: '' },
      ],
    },
    {
      theClass: 'latest-news d-none d-lg-block',
      content: [
        { name: '最新消息', link: '' },
        { name: '活動專區', link: '' },
        { name: '相關連結', link: '' },
      ],
    },
    {
      theClass: 'contact d-none d-lg-block',
      content: [
        { name: '聯絡我們', link: '' },
        { name: '品牌介紹', link: '' },
        { name: '最新消息', link: '' },
        { name: '門市資訊', link: '' },
      ],
    },
  ]
  // 連結資料
  const bottomLink = [
    {
      theClass: 'latest-news d-none d-lg-block',
      content: [
        { name: '最新消息', link: '' },
        { name: '活動專區', link: '' },
        { name: '相關連結', link: '' },
      ],
    },
    {
      theClass: 'contact d-none d-lg-block',
      content: [
        { name: '聯絡我們', link: '' },
        { name: '品牌介紹', link: '' },
        { name: '最新消息', link: '' },
        { name: '門市資訊', link: '' },
      ],
    },
  ]

  function goToTop() {
    let scrollToTop = window.setInterval(function () {
      let pos = window.pageYOffset
      if (pos > 0) {
        window.scrollTo(0, pos - 20) // 每一次滾動多遠
      } else {
        window.clearInterval(scrollToTop)
      }
    }, 2)
  }

  return (
    <>
      <footer
        // 後台的添加商品頁和編輯商品頁，不加mb
        style={
          location.pathname === '/back-stage/products/add' ||
          location.pathname === '/back-stage/products/edit/' + editSid
            ? { marginTop: 0 }
            : { marginTop: '80px' }
        }
      >
        {/* 回到最上層 */}
        <div className="return-top">
          {/* 手機 */}
          <div
            className="d-block d-lg-none"
            style={{ cursor: 'pointer' }}
            onClick={goToTop}
          >
            <img
              src="http://localhost:3000/images/icon/return-top.png"
              alt=""
            />
          </div>
          {/* 桌機 */}
          <div
            className="d-none d-lg-block"
            style={{ cursor: 'pointer' }}
            onClick={goToTop}
          >
            <img
              src="http://localhost:3000/images/icon/big-return-top.png"
              alt=""
            />
          </div>
        </div>
        <div className="container">
          <div className="main">
            {/* email */}
            <div className="email">
              <div className="title">請輸入E-mail，即可訂閱電子報</div>
              {/* 裝input和button */}
              <div className="email-box">
                <input
                  type="text"
                  className="email-input"
                  placeholder="Enter your email address"
                />
                {/* 手機 */}
                <button className="email-button d-block d-lg-none">訂閱</button>
                {/* 桌機 */}
                <button className="email-button d-none d-lg-block">
                  SUBSCRIBE ME
                </button>
              </div>
            </div>

            {/* 站內連結 */}
            <LinkArea
              topLink={topLink}
              bottomLink={bottomLink}
              setControlCate={setControlCate}
              setControlSmallCate={setControlSmallCate}
              setControlSmallBody={setControlSmallBody}
            />
          </div>
        </div>
        <div className="copyright">
          &copy;2019-2021 Healthour.All Rights Rserved.
        </div>
      </footer>
    </>
  )
}

export default withRouter(Footer)
