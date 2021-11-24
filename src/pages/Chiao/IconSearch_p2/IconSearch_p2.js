import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-scroll'

import './IconSearch_p2.css'
import '../../../App.css'
import { AiOutlineArrowRight } from 'react-icons/ai'

import CateNav from '../../../components/Chiao/CateNav'
import CateButton2 from '../../../components/Chiao/CateButton2'
import CateButtonComputer2 from '../../../components/Chiao/CateButtonComputer2'
import BreadCrumb from '../../../components/Chiao/BreadCrumb'
const Banner = './images/page_topbanner.png'

function IconSearch_p2(props) {
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
        <div className="side-menu-2">
          <BreadCrumb />
          <CateNav />
        </div>

        <div className="main">
          <div className="choose-btn2">
            <CateButtonComputer2 />
            <CateButton2 />
          </div>
          <div className="icon-btn2">
            <ul className="icon-bd-left">
              <li>
                <Link
                  href="/"
                  to="box1-1"
                  smooth={true}
                  duration={1000}
                  className="icon-bd-left1"
                  offset={-120}
                >
                  <img src={'./images/icons/body/eye.png'} alt="" />
                  眼科
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  to="box1-2"
                  smooth={true}
                  duration={1000}
                  className="icon-bd-left1"
                  offset={-120}
                >
                  <img src={'./images/icons/body/nose.png'} alt="" />
                  耳鼻喉科
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  to="box1-3"
                  smooth={true}
                  duration={1000}
                  className="icon-bd-left1"
                  offset={-120}
                >
                  <img src={'./images/icons/body/tooth.png'} alt="" />
                  牙科
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  to="box1-4"
                  smooth={true}
                  duration={1000}
                  className="icon-bd-left1"
                  offset={-120}
                >
                  <img src={'./images/icons/body/bone.png'} alt="" />
                  骨科
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  to="box1-5"
                  smooth={true}
                  duration={1000}
                  className="icon-bd-left1"
                  offset={-120}
                >
                  <img src={'./images/icons/body/brain.png'} alt="" />
                  神經外科
                </Link>
              </li>
            </ul>

            <div className="icon-bd">
              <img src={'./images/body2.png'} alt="" />
            </div>

            <ul className="icon-bd-right">
              <li>
                <Link
                  href="/"
                  to="box1-6"
                  smooth={true}
                  duration={1000}
                  className="icon-bd-right2"
                  offset={-120}
                >
                  <img src={'./images/icons/body/intestine.png'} alt="" />
                  消化內科
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  to="box1-7"
                  smooth={true}
                  duration={1000}
                  className="icon-bd-right2"
                  offset={-120}
                >
                  <img src={'./images/icons/body/heart.png'} alt="" />
                  心臟內科
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  to="box1-8"
                  smooth={true}
                  duration={1000}
                  className="icon-bd-right2"
                  offset={-120}
                >
                  <img src={'./images/icons/body/body.png'} alt="" />
                  胸腔科　
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  to="box1-9"
                  smooth={true}
                  duration={1000}
                  className="icon-bd-right2"
                  offset={-120}
                >
                  <img src={'./images/icons/body/urinary-tract.png'} alt="" />
                  泌尿科　
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  to="box1-10"
                  smooth={true}
                  duration={1000}
                  className="icon-bd-right2"
                  offset={-120}
                >
                  <img src={'./images/icons/body/kidney.png'} alt="" />
                  腎臟內科
                </Link>
              </li>
            </ul>
          </div>

          <div className="box1" id="box1-1">
            <div className="box-left">
              <p>眼科</p>
            </div>
            <div className="box-right">
              <p>
                眼睛紅腫痛、分泌物增加、乾澀、溢淚、視力糢糊、飛蚊症、眼位不正及複視等眼睛症狀。
                圓錐角膜、乾眼症等角膜疾病、青光眼、白內障、眼瞼內外翻及下垂等疾病、糖尿病視網膜病變、視網膜剝離、黃斑部病變、視神經病變、葡萄膜炎、斜弱視、眼外傷等眼科疾病。
              </p>

              <button
                className="search-btn"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/HospitalPage'
                }}
              >
                找尋附近醫院｜診所
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>

          <div className="box1" id="box1-2">
            <div className="box-left">
              <p>耳鼻喉科</p>
            </div>
            <div className="box-right">
              <p>
                聽力障礙、眩暈症、耳鳴、中耳炎、中耳積水、鼻中隔彎曲、鼻炎、鼻竇炎、鼻過敏及減過敏治療、鼻咽、扁桃、舌、口腔病變、打鼾、發聲障礙、嘶啞、喉頭病變及語言治療、吞嚥障礙、氣道及消化道異物、頭頸部腫瘤、顏面神經障礙等。
              </p>
              <button
                className="search-btn"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/HospitalPage'
                }}
              >
                找尋附近醫院｜診所
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>

          <div className="box1" id="box1-3">
            <div className="box-left">
              <p>牙科</p>
            </div>
            <div className="box-right">
              <p>
                牙齦出血、牙齒動搖、牙周再生、根管治療、牙齒漂白、一般拔牙、困難拔牙、顎顳關節疼痛、人工植牙、顎顏面整形、齒列矯正、假牙膺復、老人牙科、兒童牙科。
              </p>
              <button
                className="search-btn"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/HospitalPage'
                }}
              >
                找尋附近醫院｜診所
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>

          <div className="box1" id="box1-4">
            <div className="box-left">
              <p>骨科</p>
            </div>
            <div className="box-right">
              <p>
                骨折、肌肉韌帶損傷、脫臼、腕隧道症候群、肩關節炎、痛風、腰背痛、脊椎側彎、腰頸椎退化性病變、椎間板突出、人工關節置換術、骨質疏鬆、骨腫瘤、手外科、顯微手術、運動傷害。因小兒麻痺、腦性痲痺、先天缺陷或其他原因所引起的肢體畸型矯正手術等。
              </p>
              <button
                className="search-btn"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/HospitalPage'
                }}
              >
                找尋附近醫院｜診所
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>

          <div className="box1" id="box1-5">
            <div className="box-left">
              <p>神經外科</p>
            </div>
            <div className="box-right">
              <p>
                腦及脊椎之腫瘤、腦外傷、腦出血、水腦症、脊椎、顱顏面畸型、腦梗塞、腦血管畸型、腦血管動脈瘤、頸(腰)椎退化性病變、椎間盤脫出、三叉神經痛、頭痛、癌症痛、半邊顏面神經攣縮、手足多汗症、狐臭、運動異常、脊椎壓迫性骨折、癲癇等。
              </p>
              <button
                className="search-btn"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/HospitalPage'
                }}
              >
                找尋附近醫院｜診所
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>

          <div className="box1" id="box1-6">
            <div className="box-left">
              <p>消化內科</p>
            </div>
            <div className="box-right">
              <p>
                黃疸、食慾不振、吞嚥困難、腹脹、腹痛、腹瀉等症狀引起的食道、胃、腸、肝、膽、胰臟等消化道疾病。如：消化性潰瘍、幽門螺旋桿菌感染、腸胃機能障礙、大腸急燥症、胃食道逆流疾病、食道癌、胃癌、大腸癌、膽結石、胰臟炎、胰臟癌、肝硬化、肝癌、B型肝炎。
              </p>
              <button
                className="search-btn"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/HospitalPage'
                }}
              >
                找尋附近醫院｜診所
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>

          <div className="box1" id="box1-7">
            <div className="box-left">
              <p>心臟內科</p>
            </div>
            <div className="box-right">
              <p>
                各種心臟及周邊血管疾病，如：高血壓、瓣膜性心臟病、冠狀動脈疾病（心絞痛、心肌梗塞）、先天性心臟病、周邊血管栓塞或梗塞、心律不整及心肌衰竭。
              </p>
              <button
                className="search-btn"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/HospitalPage'
                }}
              >
                找尋附近醫院｜診所
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>

          <div className="box1" id="box1-8">
            <div className="box-left">
              <p>胸腔科</p>
            </div>
            <div className="box-right">
              <p>
                咳嗽、咳血(血痰)、呼吸困難、胸痛上呼吸道感染、支氣管炎、肺炎、肺膿瘍、肺結核、哮喘、慢性阻塞性肺病、肋膜炎併發肋膜腔積水等呼吸系統疾病。
              </p>
              <button
                className="search-btn"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/HospitalPage'
                }}
              >
                找尋附近醫院｜診所
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>

          <div className="box1" id="box1-9">
            <div className="box-left">
              <p>泌尿科</p>
            </div>
            <div className="box-right">
              <p>
                攝護腺治療、尿路結石治療、泌尿生殖系統攝護腺癌、腎臟癌、輸尿管癌、膀胱癌、腎上腺腫瘤之診治、尿路感染、女性排尿障礙、小兒泌尿系統手術（輸尿管狹窄、逆流、尿道下裂、疝氣、陰囊水腫、隱睪症、包皮）、腎臟移植手術性功能及機能障礙等手術治療。
              </p>
              <button
                className="search-btn"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/HospitalPage'
                }}
              >
                找尋附近醫院｜診所
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>

          <div className="box1" id="box1-10">
            <div className="box-left">
              <p>腎臟內科</p>
            </div>
            <div className="box-right">
              <p>
                腎結石、泌尿道結石、尿路感染、腰痛、尿毒、尿蛋白、慢性腎臟炎、多囊腎、血尿。
              </p>
              <button
                className="search-btn"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/HospitalPage'
                }}
              >
                找尋附近醫院｜診所
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(IconSearch_p2)
