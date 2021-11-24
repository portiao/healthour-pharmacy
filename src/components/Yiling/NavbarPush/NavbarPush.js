import React, { useState } from "react";
import "./navbarPush.css";

import { RiArrowDropRightLine } from "react-icons/ri"; //右邊箭頭

const iconList = ["心臟", "腎臟", "肝臟", "肺臟", "腸胃", "泌尿道"];
const iconSick = ["流鼻水", "疲憊", "心悸", "噁心、嘔吐", "咳嗽", "呼吸困難"];

function NavbarPush() {
  /*按鈕狀態 0是第一個被按下*/
  const [buttonIndex, setButtonIndex] = useState(0);

  /**icon render(渲染) */
  function iconRender(arr) {
    return (
      <div className="navforIconList">
        <div className="navline1icon">
          {arr.map((v, i) => (
            <div className="navallIcon" key={i}>
              <div className="navliImg">
              <a className="navChandePageEnc" href={`https://www.youtube.com/#${v}`} target="_blank">
                <img src={`../../images/encyclopedia/${v}.png`} alt={v} />
                <p>{v}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="navPushDouble">
        <div className="navPushPsh">
          <div className="buttonPushName">
            <button
              onClick={() => {
                setButtonIndex(0);
              }}
              className={
                buttonIndex === 0 ? "buttonBlue button-blueFocus" : "buttonBlue"
              }
            >
              <p>保健百科</p>
              <RiArrowDropRightLine />
            </button>

            <button
              onClick={() => {
                setButtonIndex(1);
              }}
              className={
                buttonIndex === 1 ? "buttonBlue button-blueFocus" : "buttonBlue"
              }
            >
              <p>症狀篩檢</p>
              <RiArrowDropRightLine />
            </button>
            <a href="https://yahoo.com.tw" target="_blank" className="changeHos">
              <button
                onClick={() => {
                  setButtonIndex(2);
                }}
                className={
                  buttonIndex === 2
                    ? "buttonBlue button-blueFocus Hos"
                    : "buttonBlue Hos"
                }
              >
                <p>醫院 | 診所</p>
                <RiArrowDropRightLine />
              </button>
            </a>
          </div>
          <div>
            {buttonIndex === 0 ? iconRender(iconList) : iconRender(iconSick)}
          </div>
        </div>
        <div className="arrowEnterAgain">
          <a href="">
            <img src="../../../images/photo/enter.png" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}

export default NavbarPush;
