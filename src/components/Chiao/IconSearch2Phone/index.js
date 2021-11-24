import React from 'react'
import './index.css'

function IconSearch2Phone(props) {
  return (
    <div className="container">
      <div className="iconsearch2phone">
        <ul className="flex-container center">
          <li className="flex-item">
            <ul className="icon-bd-left">
              <a href="/">
                <li>眼科</li>
                <li>耳鼻喉科</li>
                <li>牙科</li>
                <li>骨科</li>
                <li>神經外科</li>
              </a>
            </ul>
          </li>
          <li className="flex-item">
            <a href="/">
              <div className="icon-bd">
                <img
                  src={require('../img/body2.png').default}
                  alt=""
                />
              </div>
            </a>
          </li>
          <li className="flex-item">
            <ul className="icon-bd-right">
              <a href="/">
                <li>消化內科</li>
                <li>心臟內科</li>
                <li>胸腔科</li>
                <li>泌尿科</li>
                <li>腎臟內科</li>
              </a>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default IconSearch2Phone
