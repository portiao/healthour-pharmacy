import './index.css'

function Footer() {
  const topLink = [
    {
      theClass: 'login',
      one: '會員註冊',
      two: '會員登入',
      three: '處方簽查詢',
    },
    {
      theClass: 'shop',
      one: '線上購物',
      two: '商品分類',
      three: '依身體部位',
      four: '訂單查詢',
    },
    {
      theClass: 'health-knowledge',
      one: '保健知識',
      two: '保健百科',
      three: '症狀篩檢',
      four: '醫院|藥局',
    },
    {
      theClass: 'latest-news d-none d-lg-block',
      one: '最新消息',
      two: '活動專區',
      three: '相關連結',
    },
    {
      theClass: 'contact d-none d-lg-block',
      one: '聯絡我們',
      two: '品牌介紹',
      three: '最新消息',
      four: '門市資訊',
    },
  ]

  const bottomLink = [
    {
      theClass: 'latest-news',
      one: '最新消息',
      two: '活動專區',
      three: '相關連結',
    },
    {
      theClass: 'contact',
      one: '聯絡我們',
      two: '品牌介紹',
      three: '最新消息',
      four: '門市資訊',
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
      <footer>
        {/* 回到最上層 */}
        <div className="return-top">
          {/* 手機 */}
          <a href="#/" className="d-block d-lg-none" onClick={goToTop}>
            <img src="../images/icon/return-top.png" alt="" />
          </a>
          {/* 桌機 */}
          <a href="#/" className="d-none d-lg-block" onClick={goToTop}>
            <img src="../images/icon/big-return-top.png" alt="" />
          </a>
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
                {/* <button className="email-button d-block d-lg-none">訂閱</button> */}
                {/* 桌機 */}
                <button className="email-button d-none d-lg-block">
                  訂閱
                </button>
              </div>
            </div>

            {/* 站內連結 */}
            <div className="link-area">
              <div className="top">
                {topLink.map((v, i) => {
                  return (
                    <div key={i} className={v.theClass}>
                      <p>
                        <a href="#/">{v.one}</a>
                      </p>
                      <p>
                        <a href="#/">{v.two}</a>
                      </p>
                      <p>
                        <a href="#/">{v.three}</a>
                      </p>
                      <p>
                        <a href="#/">{v.four}</a>
                      </p>
                    </div>
                  )
                })}
              </div>

              <div className="bottom">
                {bottomLink.map((v, i) => {
                  return (
                    <div key={i} className={v.theClass}>
                      <p>
                        <a href="#/">{v.one}</a>
                      </p>
                      <p>
                        <a href="#/">{v.two}</a>
                      </p>
                      <p>
                        <a href="#/">{v.three}</a>
                      </p>
                      <p>
                        <a href="#/">{v.four}</a>
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          &copy;2019-2021 Healthour.All Rights Rserved.
        </div>
      </footer>
    </>
  )
}

export default Footer
