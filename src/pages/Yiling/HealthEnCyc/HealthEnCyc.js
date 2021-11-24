import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineRight } from 'react-icons/ai'
import { dataNameImport } from '../HealthEnIndex/HealthDatabase' //引入方法
import _ from 'lodash' //引入方法函示庫，react內建不需安裝
import './healthEnCyc.css'

const iconList = [
  '心臟',
  '腎臟',
  '肝臟',
  '肺臟',
  '腸胃',
  '泌尿道',
  '腦神經',
  '骨、關節',
  '牙齒、口腔',
  '眼睛',
  '耳鼻喉',
  '皮膚',
  '飲品百科',
  '身心百科',
  '營養百科',
]

function HealthEnCyc() {
  //尋找中英文對照
  const [ChEn, serChEn] = useState([])

  useEffect(() => {
    const En = []
    //中英文轉換迴圈(字典)
    for (let i = 0; i < iconList.length; i++) {
      En.push(_.findKey(dataNameImport, { name: iconList[i] }))
      // console.log(iconList[i]);
    }
    serChEn(En)
    // console.log(En);
  }, [])

  return (
    <>
      <div>
        <img
          className="healthQPic"
          src="http://localhost:3000/images/photo/jamie-street-vcn2ndJ5LwE-unsplash.jpg"
          alt=""
        />
      </div>
      <div className="rightSideAll">
        <div className="breadWithCate">
          {/* 麵包屑 */}
          <div className="breadListHealth">
            <a href="">
              <p>首頁</p>
            </a>
            <p className="arrowHealth">{'>'}</p>
            <a href="">
              <p>保健知識</p>
            </a>
            <p className="arrowHealth">{'>'}</p>
            <a href="">
              <p>保健百科</p>
            </a>
          </div>
          {/* 側邊類別欄位 */}
          <div className="HealthCateAll">
            <div className="healthLineAndKnowledge">
              <div className="healthLineP"></div>
              <p className="healthKnowledge">保健知識</p>
            </div>
            <div className="healthAllCate">
              <Link to="/HealthEnCyc">
                <div className="healthArrowP">
                  <p>保健百科</p>
                  <div>
                    <AiOutlineRight />
                  </div>
                </div>
              </Link>
              <Link to="/IconSearch_p1">
                <div className="healthArrowP">
                  <p>症狀篩檢</p>
                  <div>
                    <AiOutlineRight />
                  </div>
                </div>
              </Link>
              <Link to="/HospitalPage">
                <div className="healthArrowP">
                  <p>醫院 | 診所</p>
                  <div>
                    <AiOutlineRight />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="allClassButtonHealth">
          {/* 保健百科title */}
          <div className="classButtonHealth">
            <p>保健百科</p>
          </div>
          {/* 保健百科 */}
          <div className="forIconList lineTopForTitle">
            <div className="line1icon">
              {iconList.map((v, i) => (
                <div className="allIcon" key={i}>
                  <div className="liImg ">
                    <a
                      className="chandePageEnc"
                      href={`http://localhost:3000/HealthEnIndex/${ChEn[i]}`}
                    >
                      <img
                        src={`http://localhost:3000/images/encyclopedia/${v}.png`}
                        alt={v}
                      />
                      <p>{v}</p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HealthEnCyc
