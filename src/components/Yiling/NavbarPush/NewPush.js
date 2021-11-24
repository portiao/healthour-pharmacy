import React, { useState } from "react";
import "./newPush.css";
import { RiArrowDropRightLine } from "react-icons/ri"; //右邊箭頭

function NewPush(props) {
  /*帶入最新消息及關於我們按鈕名稱*/
  const { name1, name2 } = props;
  /*按鈕狀態 0是第一個被按下*/
  const [buttonIndex, setButtonIndex] = useState(0);

  return (
    <>
      <div className="navPushDouble">
        <div className="navPushPsh">
          <div className="buttonPushName">
            <a
              href={`https://yahoo.com.tw/#${name1}`}
              target="_blank"
              className="changeHos"
            >
              <button
                onClick={() => {
                  setButtonIndex(0);
                }}
                className={
                  buttonIndex === 0
                    ? "buttonBlue button-blueFocus"
                    : "buttonBlue"
                }
              >
                <p>{name1}</p>
                <RiArrowDropRightLine />
              </button>
            </a>
            <a
              href={`https://yahoo.com.tw/#${name2}`}
              target="_blank"
              className="changeHos"
            >
              <button
                onClick={() => {
                  setButtonIndex(1);
                }}
                className={
                  buttonIndex === 1
                    ? "buttonBlue button-blueFocus"
                    : "buttonBlue"
                }
              >
                <p>{name2}</p>
                <RiArrowDropRightLine />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewPush;
