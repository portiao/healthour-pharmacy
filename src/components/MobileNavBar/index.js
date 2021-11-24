import './index.css'
// react-boostrap版本為4.6
import { Accordion, Card } from 'react-bootstrap'
import React from 'react'
import { withRouter } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import { HiOutlineMenu } from 'react-icons/hi'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// 引入config.js，devUrl=http://localhost:3000
import { devUrl } from '../../config'

function MobileNavBar(props) {
  // navbar主連結與子連結的標題、網址
  const navBarItem = [
    {
      mainNav: '關於我們',
      mainNavLink: '/',
      subNav: [
        {
          name: '品牌介紹',
          link: '/',
        },
        {
          name: '門市資訊',
          link: '/StoresMap',
        },
      ],
    },
    {
      mainNav: '消息專區',
      mainNavLink: '/',
      subNav: [
        {
          name: '活動專區',
          link: '/',
        },
        {
          name: '相關連結',
          link: '/',
        },
      ],
    },
    {
      mainNav: '保健知識',
      mainNavLink: '/',
      subNav: [
        {
          name: '保健百科',
          link: '/HealthEnCyc',
        },
        {
          name: '症狀篩檢',
          link: '/IconSearch_p1',
        },
        {
          name: '醫院|藥局',
          link: '/HospitalPage',
        },
      ],
    },
    {
      mainNav: '線上購物',
      mainNavLink: '/shop',
      subNav: [
        {
          name: '依照商品類別',
          link: '/prod-list/page/1',
        },
        {
          name: '依照身體部位',
          link: '/prod-list/page/categories/頭部/1',
        },
      ],
    },
  ]

  // navbar收合動畫
  const handleClose = () => {
    const navbody = document.querySelector('.nav-body')
    navbody.classList.toggle('show')
  }
  return (
    <>
      <div className="d-lg-none">
        {/* 最上方的headerbar (Logo & menu) */}
        <div className="header">
          <div className="d-flex">
            <div className="Logo-img">
              <img className="logoCut" src={`${devUrl}/images/Logo.png`} alt="#" />
            </div>
            <div className="icon-area">
              <HiOutlineMenu className="menu-icon" onClick={handleClose} />
            </div>
          </div>
        </div>

        <div className="nav-body">
          {/* 手風琴nav */}
          <Accordion defaultActiveKey="0">
            {navBarItem.map((v, i) => {
              return (
                <Card className="nav-bar" key={i}>
                  {/* 主要連結 */}
                  <Accordion.Toggle
                    className="title"
                    as={Card.Header}
                    eventKey={i + 1}
                    id={`card-header-${i}`}
                  >
                    <div className="row">
                      <div className="col">
                        {/* 主連結的名稱 & 連結 */}
                        <Link to={v.mainNavLink} className="mainNav">{v.mainNav}</Link>
                      </div>
                      <div className="col text-right">
                        <IoIosArrowDown className="down-arrow" />
                      </div>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={i + 1}>
                    {/* 次連結 */}
                    <Card.Body className="content">
                      {navBarItem[i].subNav.map((v, i) => {
                        return (
                          <Link to={v.link} className="link-style" key={i}>
                            {v.name}
                            <br />
                          </Link>
                        )
                      })}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              )
            })}
          </Accordion>
        </div>
      </div>
    </>
  )
}

export default withRouter(MobileNavBar)
