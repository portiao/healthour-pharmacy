import React from 'react'
import { Link } from 'react-router-dom'
import { Accordion, Card } from 'react-bootstrap'
import { IoIosArrowDown } from 'react-icons/io'
import './index.css'

function AccordionFollow(props) {
  const { cateSelect, setCategoryTag, setMyTitle } = props
  return (
    // defaultActiveKey 預設要開啟的選單 對應eventKey的數字
    <Accordion defaultActiveKey="" className="accordion">
      <h4 className="cate-select-title">商品類別</h4>
      {/* 商品類別選單 */}
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <div className="cate-title">
            請選擇商品類別
            <IoIosArrowDown className="arrow" />
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body
            className="follow-option"
            onClick={() => {
              setCategoryTag('')
              setMyTitle('全部商品')
            }}
          >
            全部商品
          </Card.Body>
        </Accordion.Collapse>
        {cateSelect.map((v, i) => {
          return (
            <Accordion.Collapse eventKey="0" key={i}>
              <Card.Body
                className="follow-option"
                onClick={() => {
                  setCategoryTag(v)
                  setMyTitle(v)
                }}
              >
                {v}
              </Card.Body>
            </Accordion.Collapse>
          )
        })}
      </Card>
    </Accordion>
  )
}

export default AccordionFollow
