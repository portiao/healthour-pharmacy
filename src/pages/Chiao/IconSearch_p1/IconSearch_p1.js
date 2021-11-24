import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-scroll'
import { Accordion, Card } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './IconSearch_p1.css'
import '../../../App.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { IoMdArrowDropdown } from 'react-icons/io'

import ProductItem from '../../../components/Chiao/ProductItem'
import ProductItem1 from '../../../components/Chiao/ProductItem1'
import ProductItem2 from '../../../components/Chiao/ProductItem2'

import CateNav from '../../../components/Chiao/CateNav'
import CateButton from '../../../components/Chiao/CateButton'
import CateButtonComputer from '../../../components/Chiao/CateButtonComputer'
import BreadCrumb from '../../../components/Chiao/BreadCrumb'

const Banner = './images/page_topbanner.png'

function IconSearch_p1(props) {
  const { setIsAuth,setIsManager } = props
  // 確認是否有登入 有的話就讓isAuth顯示true
  useEffect(() => {
    const userLogin = JSON.parse(localStorage.getItem('Member') || '[]')
    if (userLogin.length > 0) {
      setIsAuth(true)
       // 如果登入的是這個帳號，就讓管理者狀態顯示true
      if (userLogin[0].email === '123@yahoo.com.tw') {
        setIsManager(true)
      }
    }
    
  }, [props.location.pathname])
  return (
    <>
      <div className="chiao-banner">
        <img src={Banner} />
      </div>
      <div className="chiao-container">
        <div className="side-menu">
          <BreadCrumb />
          <CateNav />
        </div>

        <div className="main">
          <div className="choose-btn">
            <CateButtonComputer />
            <CateButton />
          </div>

          <div className="icon-btn" id={'tab-bar'}>
            <div className="icontext">
              <p>常見症狀</p>
            </div>

            <div className="icon-btn-1">
              <Link
                href="/"
                className="chiao-card"
                to="item-1"
                smooth={true}
                duration={1000}
                offset={-120}
              >
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/runny-nose.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">流鼻水</p>
                </div>
              </Link>

              <Link
                href="/"
                className="chiao-card"
                to="item-2"
                smooth={true}
                duration={1000}
                offset={-120}
              >
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/weakness.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">疲憊</p>
                </div>
              </Link>

              <Link
                href="/"
                className="chiao-card"
                to="item-3"
                smooth={true}
                duration={1000}
                offset={-120}
              >
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/heart.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">心悸</p>
                </div>
              </Link>

              <Link href="/" className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/vomit.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">噁心/嘔吐</p>
                </div>
              </Link>
              <Link href="/" className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/cough.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">咳嗽</p>
                </div>
              </Link>
              <Link href="/" className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/difficulty-breathing.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">呼吸困難</p>
                </div>
              </Link>
              <Link href="/" className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/dizzy.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">頭暈</p>
                </div>
              </Link>
              <Link href="/" className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/dizzy 2.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">昏倒</p>
                </div>
              </Link>
              <Link href="/" className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/waist.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">體重減輕</p>
                </div>
              </Link>
              <Link href="/" className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/fat.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">體重增加</p>
                </div>
              </Link>
            </div>

            <div className="box"></div>
            <div className="icontext">
              <p>疼痛</p>
            </div>
            <div className="icon-btn-1">
              <div className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/headache.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">頭痛</p>
                </div>
              </div>
              <div className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/chest-pain-or-pressure.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">胸痛</p>
                </div>
              </div>
              <div className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/diarrhea.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">腹痛</p>
                </div>
              </div>
              <div className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/sore-throat.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">喉嚨痛</p>
                </div>
              </div>
              <div className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/back-pain.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">背部疼痛</p>
                </div>
              </div>
              <div className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/inflammation.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">肩頸痛</p>
                </div>
              </div>
              <div className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/pain-in-joints.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">關節痛</p>
                </div>
              </div>
              <div className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/boy.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">牙痛</p>
                </div>
              </div>
            </div>

            <div className="box"></div>
            <div className="icontext">
              <p>皮膚異常</p>
            </div>
            <div className="icon-btn-1">
              <div className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/pimples.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">腫脹</p>
                </div>
              </div>
              <div className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/rash.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">皮疹</p>
                </div>
              </div>
              <div className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/itching.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">癢</p>
                </div>
              </div>
            </div>

            <div className="box"></div>
            <div className="icontext">
              <p>大便/尿液異常</p>
            </div>
            <div className="icon-btn-1">
              <div className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/constipation.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">便秘</p>
                </div>
              </div>
              <div className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/diarrhea (1).png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">腹瀉</p>
                </div>
              </div>
              <div className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/urinary-tract.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">血尿</p>
                </div>
              </div>
              <div className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/poop.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">血便</p>
                </div>
              </div>
              <div className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/toilet.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">頻尿</p>
                </div>
              </div>
            </div>

            <div className="box"></div>
            <div className="icontext">
              <p>精神症狀</p>
            </div>
            <div className="icon-btn-1">
              <div className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/insomnia.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">失眠</p>
                </div>
              </div>
              <div className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/nervous.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">焦慮/憂鬱</p>
                </div>
              </div>
              <div className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/frustrated.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">沮喪</p>
                </div>
              </div>
              <div className="chiao-card">
                <div className="pic">
                  <img
                    src={'./images/icons/symptom/anorexia.png'}
                    className="card-img-top"
                    alt=""
                  />
                </div>

                <div className="chiao-card-body">
                  <p className="chiao-card-text">厭食症</p>
                </div>
              </div>
            </div>

            <div className="box"></div>
            <div className="box2">
              <p>建議看診科別｜推薦商品</p>
            </div>

            <div className="pchaio-accordionItem">
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <div className="chiao-accordion-icon" id="item-1">
                      <img
                        src={'./images/icons/symptom/runny-nose.png'}
                        alt=""
                      />

                      <p>
                        流鼻水
                        <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            耳鼻喉科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            小兒科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>

                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem1 />
                            <ProductItem2 />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    <div className="chiao-accordion-icon" id="item-2">
                      <img src={'./images/icons/symptom/weakness.png'} alt="" />
                      <p>
                        疲憊
                        <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            耳鼻喉科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            新陳代謝科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            神經內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem1 />
                            <ProductItem2 />

                            {/* <ProductSlider /> */}
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    <div className="chiao-accordion-icon" id="item-3">
                      <img src={'./images/icons/symptom/heart.png'} alt="" />
                      <p>
                        心悸
                        <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    <div className="chiao-accordion-icon" id="item-4">
                      <img src={'./images/icons/symptom/vomit.png'} alt="" />
                      <p>
                        噁心/嘔吐
                        <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="4">
                    <div className="chiao-accordion-icon" id="item-5">
                      <img src={'./images/icons/symptom/cough.png'} alt="" />
                      <p>
                        咳嗽 <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="5">
                    <div className="chiao-accordion-icon" id="item-6">
                      <img
                        src={'./images/icons/symptom/difficulty-breathing.png'}
                        alt=""
                      />
                      <p>
                        呼吸困難 <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="5">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="6">
                    <div className="chiao-accordion-icon">
                      <img src={'./images/icons/symptom/dizzy.png'} alt="" />
                      <p>
                        頭暈 <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="6">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="7">
                    <div className="chiao-accordion-icon">
                      <img src={'./images/icons/symptom/dizzy 2.png'} alt="" />
                      <p>
                        昏倒 <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="7">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="8">
                    <div className="chiao-accordion-icon">
                      <img src={'./images/icons/symptom/waist.png'} alt="" />
                      <p>
                        體重減輕 <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="8">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="9">
                    <div className="chiao-accordion-icon">
                      <img src={'./images/icons/symptom/fat.png'} alt="" />
                      <p>
                        體重增加 <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="9">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="10">
                    <div className="chiao-accordion-icon">
                      <img src={'./images/icons/symptom/headache.png'} alt="" />
                      <p>
                        頭痛 <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="10">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="11">
                    <div className="chiao-accordion-icon">
                      <img
                        src={
                          './images/icons/symptom/chest-pain-or-pressure.png'
                        }
                        alt=""
                      />
                      <p>
                        胸痛 <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="11">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="12">
                    <div className="chiao-accordion-icon">
                      <img src={'./images/icons/symptom/diarrhea.png'} alt="" />
                      <p>
                        腹痛 <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="12">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="13">
                    <div className="chiao-accordion-icon">
                      <img
                        src={'./images/icons/symptom/sore-throat.png'}
                        alt=""
                      />
                      <p>
                        喉嚨痛 <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="13">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="14">
                    <div className="chiao-accordion-icon">
                      <img
                        src={'./images/icons/symptom/back-pain.png'}
                        alt=""
                      />
                      <p>
                        背部疼痛 <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="14">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="15">
                    <div className="chiao-accordion-icon">
                      <img
                        src={'./images/icons/symptom/inflammation.png'}
                        alt=""
                      />
                      <p>
                        肩頸痛 <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="15">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="16">
                    <div className="chiao-accordion-icon">
                      <img
                        src={'./images/icons/symptom/pain-in-joints.png'}
                        alt=""
                      />
                      <p>
                        關節痛 <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="16">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="17">
                    <div className="chiao-accordion-icon">
                      <img src={'./images/icons/symptom/boy.png'} alt="" />
                      <p>
                        牙痛 <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="17">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="18">
                    <div className="chiao-accordion-icon">
                      <img src={'./images/icons/symptom/pimples.png'} alt="" />
                      <p>
                        腫脹 <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="18">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="19">
                    <div className="chiao-accordion-icon">
                      <img src={'./images/icons/symptom/rash.png'} alt="" />
                      <p>
                        皮疹 <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="19">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="20">
                    <div className="chiao-accordion-icon">
                      <img src={'./images/icons/symptom/itching.png'} alt="" />
                      <p>
                        癢 <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="20">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="21">
                    <div className="chiao-accordion-icon">
                      <img
                        src={'./images/icons/symptom/constipation.png'}
                        alt=""
                      />
                      <p>
                        便秘 <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="21">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="22">
                    <div className="chiao-accordion-icon">
                      <img
                        src={'./images/icons/symptom/diarrhea (1).png'}
                        alt=""
                      />
                      <p>
                        腹瀉 <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="22">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="23">
                    <div className="chiao-accordion-icon">
                      <img
                        src={'./images/icons/symptom/urinary-tract.png'}
                        alt=""
                      />
                      <p>
                        血尿 <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="23">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="24">
                    <div className="chiao-accordion-icon">
                      <img src={'./images/icons/symptom/poop.png'} alt="" />
                      <p>
                        血便 <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="24">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="25">
                    <div className="chiao-accordion-icon">
                      <img src={'./images/icons/symptom/toilet.png'} alt="" />
                      <p>
                        頻尿 <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="25">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="26">
                    <div className="chiao-accordion-icon">
                      <img src={'./images/icons/symptom/insomnia.png'} alt="" />
                      <p>
                        失眠 <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="26">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="27">
                    <div className="chiao-accordion-icon">
                      <img src={'./images/icons/symptom/nervous.png'} alt="" />
                      <p>
                        焦慮/憂鬱
                        <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="27">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="28">
                    <div className="chiao-accordion-icon">
                      <img
                        src={'./images/icons/symptom/frustrated.png'}
                        alt=""
                      />
                      <p>
                        沮喪
                        <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="28">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="29">
                    <div className="chiao-accordion-icon">
                      <img src={'./images/icons/symptom/anorexia.png'} alt="" />
                      <p>
                        厭食症
                        <IoMdArrowDropdown />
                      </p>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="29">
                    <Card.Body>
                      <div className="result">
                        <div className="suggest">
                          <p>建議結果</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，建議您可以先到以下科別就醫：
                          </span>
                        </div>

                        <div className="suggest-1">
                          <p>
                            <AiOutlineCheckCircle />
                            胸腔科
                          </p>
                          <p>
                            <AiOutlineCheckCircle />
                            心臟內科
                          </p>
                        </div>

                        <div className="suggest-btn">
                          <button
                            className="search-btn"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = '/HospitalPage'
                            }}
                          >
                            <span>找尋附近醫院｜診所</span>
                            <AiOutlineArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="chiao-product">
                        <div className="suggest">
                          <p>推薦商品</p>
                          <img
                            src={'./images/icons/Dialogue_bear.svg'}
                            alt=""
                          />
                          <span>
                            依據您的症狀，提供您以下適合緩解此症狀之商品：
                          </span>
                          <div className="yourproduct">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(IconSearch_p1)
