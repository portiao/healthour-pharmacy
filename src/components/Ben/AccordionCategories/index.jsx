import React from 'react'
import { Link } from 'react-router-dom'
import { Accordion, Card } from 'react-bootstrap'
import { IoIosArrowDown } from 'react-icons/io'
import './index.css'

function AccordionCategories(props) {
  const { cateSelect, bodySelect } = props
  return (
    // defaultActiveKey 預設要開啟的選單 對應eventKey的數字
    <Accordion defaultActiveKey="" className="accordion">
      {/* 商品類別 */}
      <h4 className="cate-select-title">商品類別</h4>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <div className="cate-title">
            請選擇商品類別
            <IoIosArrowDown className="arrow" />
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Link to={'/prod-list/page/1'}>
            <Card.Body>全部商品</Card.Body>
          </Link>
        </Accordion.Collapse>
        {cateSelect.map((v, i) => {
          return (
            <Accordion.Collapse eventKey="0" key={i}>
              <Link to={'/prod-list/page/categories/' + v + '/' + 1}>
                <Card.Body>{v}</Card.Body>
              </Link>
            </Accordion.Collapse>
          )
        })}
      </Card>
      {/* 依照身體部位 */}
      <h4 className="body-select-title">依照身體部位</h4>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          <div className="body-title">
            請選擇身體部位
            <IoIosArrowDown className="arrow" />
          </div>
        </Accordion.Toggle>
        {bodySelect.map((v, i) => {
          return (
            <Accordion.Collapse eventKey="1" key={i}>
              <Link to={'/prod-list/page/categories/' + v + '/' + 1}>
                <Card.Body>{v}</Card.Body>
              </Link>
            </Accordion.Collapse>
          )
        })}
      </Card>
    </Accordion>
  )
}

export default AccordionCategories
