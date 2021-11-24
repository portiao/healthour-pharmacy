import React, { useState, useEffect } from 'react'
import './Backstage_Prescription_Management.css'
import Axios from 'axios'

function Backstage_Prescription_Management() {
  const [getPrescription, setPrescription] = useState([])

  const getPrescriptions = (e) => {
    Axios.get('http://localhost:3003/Backstage_Prescription_Management').then(
      (response) => {
        setPrescription(response.data)
      }
    )
  }
  useEffect(() => {
    getPrescriptions()
  }, [])

  return (
    <>
      <div className="Backstage-Prescription-Management">
        <div className="Backstage-Prescription-Management-search-flex">
          <div className="Backstage-Prescription-Management-search-area">
            <div className="Backstage-Prescription-Management-search">
              <input
                className="Backstage-Prescription-Management-search-input"
                type="text"
                placeholder="姓名查詢"
              />
              <button className="Backstage-Prescription-Management-search-button">
                <img
                  src="http://localhost:3000/images/icon/magnifier.png"
                  alt=""
                />
              </button>
            </div>

            <div className="Backstage-Prescription-Management-search">
              <input
                className="Backstage-Prescription-Management-search-input"
                type="text"
                placeholder="身分證字號查詢"
              />
              <button className="Backstage-Prescription-Management-search-button">
                <img
                  src="http://localhost:3000/images/icon/magnifier.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="Backstage-Prescription-Management-prescription-select">
            <select name="select_stage" id="select-stage">
              <option value="0">請選擇調配進度</option>
              <option value="1">已上傳</option>
              <option value="2">調配中</option>
              <option value="3">等候領取</option>
              <option value="4">已領取</option>
            </select>

            <select
              name="mouth_stage"
              id="Backstage-Prescription-Management-month-stage"
            >
              <option value="0">八月份處方</option>
              <option value="1">九月份處方</option>
              <option value="2">十月份處方</option>
            </select>
          </div>
        </div>
        {getPrescription.map((val, i) => {
          return (
            <div
              key={val.sid}
              className="Backstage-Prescription-Management-prescription-card"
            >
              <div className="Backstage-Prescription-Management-infolist">
                <div className="Backstage-Prescription-Management-hidden-bar">
                  <img
                    src="http://localhost:3000/images/icon/up-arrow.png"
                    alt=""
                  />
                </div>
                <ul>
                  <div>
                    <li>
                      目前進度:
                      <select
                        name="change-stage"
                        id="change-stage"
                        className="Backstage-Prescription-Management-change-stage"
                      >
                        <option value="1">已上傳</option>
                        <option value="2">調配中</option>
                        <option value="3">等候領取</option>
                        <option value="4">已領取</option>
                      </select>
                    </li>
                    <li>病患姓名:{val.name}</li>
                    <li>連絡電話:{val.phone}</li>
                    <li>領藥門市:{val.Shop}</li>
                  </div>
                  <div>
                    <li>病患出生年月日:{val.birthday.substr(0, 10)}</li>
                    <li>醫院:{val.hospital}</li>
                    <li>身分證字號:{val.idNumber}</li>
                    <li>調劑次數:{val.selectFreq}</li>
                  </div>
                </ul>
              </div>
              <div className="Backstage-Prescription-Management-prescription-img">
                <img
                  className="Backstage-Prescription-Management-prescription-preview"
                  src="http://localhost:3000/images/prescriptionimg/台大處方簽.jpg"
                  alt=""
                />
                <a
                  href="http://localhost:3000/images/prescriptionimg/台大處方簽.jpg"
                  target="_blank"
                >
                  <img
                    className="Backstage-Prescription-Management-magnifier"
                    src="http://localhost:3000/images/icon/magnifier.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Backstage_Prescription_Management
