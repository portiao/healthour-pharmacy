import React, { useState, useEffect } from "react";
import "./activePage.css";
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";

function ActivePage() {
  //活動訊息的位置
  const [activeCon, setActiveCon] = useState(0);
  //顯示最新消息資料
  const activeWord = [
    {
      year: "2021",
      date: "11.21",
      word: "【 新店開幕 】 11 / 21 林口文化店 盛大開幕  好康大放送",
    },
    {
      year: "2021",
      date: "10.30",
      word: "【 年節活動 】 萬聖節活動 ~ 不給糖就搗蛋",
    },
    {
      year: "2021",
      date: "10.15",
      word: "【 新店開幕 】 10 / 15 板橋大遠百店 盛大開幕  好康大放送",
    },
    {
      year: "2021",
      date: "09.21",
      word: "【 活動快訊 】 09 / 21 Healthour 全台周年慶",
    },
    {
      year: "2021",
      date: "08.08",
      word: "【 年節活動 】 08 / 08 祝天下爸爸父親節快樂，男性用品八折優惠~",
    },
  ];

  useEffect(() => {
    let t = setTimeout(() => {
      if (activeCon < 4) {
        setActiveCon(activeCon + 1);
      } else {
        setActiveCon(0);
      }
    }, 1500);
    return () => {
      // 防止產生過多的計時器
      clearInterval(t);
    };
  });

  return (
    <>
      <div className="active">
        <div className="activeDate">
          <p className="activeP1">{activeWord[activeCon].year}</p>
          <p className="activeP2">{activeWord[activeCon].date}</p>
        </div>
        <div className="activeNews">
          <p>{activeWord[activeCon].word}</p>
        </div>
        <div className="activeArrow">
          <p className="activeLine">
            <MdArrowDropUp
              onClick={(e) => {
                if (activeCon > 1) {
                  setActiveCon(activeCon - 1);
                } else {
                  setActiveCon(4);
                }
              }}
            />
          </p>
          <p
            className="activeLine2"
            onClick={(e) => {
              if (activeCon < 4) {
                setActiveCon(activeCon + 1);
              } else {
                setActiveCon(0);
              }
            }}
          >
            <MdArrowDropDown />
          </p>
        </div>
      </div>
    </>
  );
}

export default ActivePage;
