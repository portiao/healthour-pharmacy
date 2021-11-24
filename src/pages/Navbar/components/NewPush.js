import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDropRightLine } from 'react-icons/ri' //右邊箭頭

function NewPush(props) {
  /*帶入最新消息及關於我們按鈕名稱*/
  const { name1, name2, pos1, pos2, path1, path2 } = props
  /*按鈕狀態 0是第一個被按下*/
  const [buttonIndex, setButtonIndex] = useState(0)

  return (
    <>
      <div className="navPushDouble">
        <div className="navPushPsh">
          <div className="buttonPushName">
            <a>
              <button
                onClick={() => {
                  setButtonIndex(0)
                  window.scrollTo({ top: pos1, behavior: 'smooth' })
                }}
                className={
                  buttonIndex === 0
                    ? 'buttonBlue button-blueFocus'
                    : 'buttonBlue'
                }
              >
                <p>{name1}</p>
                <RiArrowDropRightLine />
              </button>
            </a>
            <Link to={path2} className="changeHos">
              <button
                onClick={() => {
                  setButtonIndex(1)
                  window.scrollTo({ top: pos2, behavior: 'smooth' })
                }}
                className={
                  buttonIndex === 1
                    ? 'buttonBlue button-blueFocus'
                    : 'buttonBlue'
                }
              >
                <p>{name2}</p>
                <RiArrowDropRightLine />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewPush
