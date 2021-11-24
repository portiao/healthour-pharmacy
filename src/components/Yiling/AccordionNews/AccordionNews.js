import React, { Component, useState, useEffect } from "react";
import "./accordionNews.css";

const data = [
  {
    title: "2021-11-21 【 新店開幕 】 11 / 21 林口文化店 盛大開幕  好康大放送",
    sTime: "【 時間 】 2021-11-21 10:00 a.m",
    sPhone: "【 電話 】 02 2608 0711",
    sAddress: "【 地址 】 新北市林口區文化三路一段425號 ",
  },
  {
    title: "2021-10-30 【 年節活動 】 萬聖節活動 ~ 不給糖就搗蛋",
    sTime: "【 時間 】 2021-10-30 10:00 a.m",
    sPhone: "",
    sAddress: "【 活動 】 一起參加萬聖變裝 Party",
  },
  {
    title: "2021-10-15 【 新店開幕 】 10 / 15 板橋大遠百店 盛大開幕  好康大放送",
    sTime: "【 時間 】 2021-10-15 09:00 a.m",
    sPhone: "【 電話 】 02 2788 0645",
    sAddress: "【 地址 】 遠東百貨板橋中山店3樓",
  },
  {
    title: "2021-09-21 【 活動快訊  】 09 / 21 Healthour 全台周年慶",
    sTime: "【 時間 】 2021-09-21 至 2021-09-30",
    sPhone: "",
    sAddress: "多樣優惠好禮，歡迎選購",
  },
  {
    title: "2021-08-08 【 年節活動 】 08 / 08 祝天下爸爸父親節快樂",
    sTime: "【 時間 】 2021-08-06 至 2021-08-10",
    sPhone: "",
    sAddress: "男性用品八折優惠~",
  },
];

const AccordionItem = (props) => {
  const [heightItem, setHeightItem] = useState(0);
  useEffect(() => {
    setHeightItem(
      props.visable
        ? document.getElementById(`item_${props.index}`).scrollHeight
        : 0
    );
  });
  //增加visable
  const { item, index, setVisable, visable } = props;
  return (
    <div onClick={() => setVisable(index)}>
      <div className="titlePo">
        <div>{item.title}</div>
        {/* 檢查是否被打開 */}
        <div className={visable ? 'focus' : 'unfocus'}></div>
      </div>
      <div
        className="content-boxP"
        style={{ height: heightItem }}
        id={`item_${index}`}
      >
        <div className="newBoxPo">
          <p>{item.sTime}</p>
          <p>{item.sPhone}</p>
          <p> {item.sAddress}</p>
        </div>
      </div>
    </div>
  );
};
const Accordion = () => {
  const [visable, setVisable] = useState([true, false, false, false, false]);
  const setVisableChild = (key) => {
    setVisable(visable.map((one, index) => (key == index ? true : false)));
  };
  return (
    <div className="accordionPortia">
      {data.map((item, index) => {
        return (
         
          <AccordionItem
            item={item}
            key={index}
            index={index}
            visable={visable[index]}
            setVisable={setVisableChild}
          />
        );
      })}
    </div>
  );
};
export default Accordion
