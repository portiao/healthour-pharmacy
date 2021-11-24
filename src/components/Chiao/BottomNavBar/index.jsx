import './index.css'

function BottomNavBar() {
  const navBarContent = [
    {
      item: 'item',
      icon: 'icon',
      src: '../images/icon/receive.png',
      text: '處方領藥',
    },
    {
      item: 'item',
      icon: 'icon',
      src: '../images/icon/follow-prod.png',
      text: '追蹤商品',
    },
    {
      item: 'item',
      icon: 'icon',
      src: '../images/icon/cart.png',
      text: '購物車',
    },
    {
      item: 'item',
      icon: 'icon',
      src: '../images/icon/login.png',
      text: '會員登入',
    },
  ]

  return (
    <>
      {/* 手機 底部浮動navbar */}
      <div className="bottom-navbar">
        {navBarContent.map((v, i) => {
          return (
            <div key={i} className={v.item}>
              <a href="#/">
                <div className={v.icon}>
                  <img src={v.src} alt="" />
                </div>
                <div className="text">{v.text}</div>
              </a>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default BottomNavBar
