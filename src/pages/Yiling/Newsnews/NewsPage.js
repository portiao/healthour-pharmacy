import React from "react";
import "./newsPage.css";


import AccordionNews from "../../../components/Yiling/AccordionNews/AccordionNews";
const newsDoctorP = "./images/photo/newsDoctor.jpg" //醫生最新消息圖


function NewsPage() {
  return (
    <>
      <h1 className="newsTitle">消息專區</h1>
      <h1 className="text-divider2">NEWS</h1>
      <div className="allNews">
        <div className="doctorPic">
          <img src={newsDoctorP}></img>
        </div>
        <div className="newPadding">
          <AccordionNews />
        </div>
      </div>
    </>
  );
}

export default NewsPage;
