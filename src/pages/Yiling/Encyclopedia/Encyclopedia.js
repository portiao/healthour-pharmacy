import React from "react";
import "./encyclopedia.css";
import { Link } from "react-router-dom";

const iconList = [
  { enName: "/HealthEnIndex/heart", chName: "心臟" },
  { enName: "/HealthEnIndex/kidney", chName: "腎臟" },
  { enName: "/HealthEnIndex/liver", chName: "肝臟" },
  { enName: "/HealthEnIndex/lung", chName: "肺臟" },
  { enName: "/HealthEnIndex/stomach", chName: "腸胃" },
  {
    enName: "/HealthEnIndex/Urinary_Tract",
    chName: "泌尿道",
  },
  {
    enName: "/HealthEnIndex/brain",
    chName: "腦神經",
  },
  { enName: "/HealthEnIndex/bone", chName: "骨、關節" },
  { enName: "/HealthEnIndex/teeth", chName: "牙齒、口腔" },
  { enName: "/HealthEnIndex/eye", chName: "眼睛" },
  { enName: "/HealthEnIndex/ear", chName: "耳鼻喉" },
  { enName: "/HealthEnIndex/skin", chName: "皮膚" },
  { enName: "/HealthEnIndex/drink", chName: "飲品百科" },
  { enName: "/HealthEnIndex/body", chName: "身心百科" },
  { enName: "/HealthEnIndex/nutrition", chName: "營養百科" },
];

function Encyclopedia() {
  return (
    <div>
      <div className="encTitle">
        <h1 className="text-divider3">保健百科</h1>
      </div>
      <div className="forIconList">
        <div className="line1icon">
          {iconList.map((v, i) => (
            <div className="allIcon" key={i}>
              <div className="liImg">
                {
                  <Link to={v.enName} className="chandePageEnc">
                    <img
                      src={`http://localhost:3000/images/encyclopedia/${v.chName}.png`}
                      alt={v.chName}
                    />

                    <p>{v.chName}</p>
                  </Link>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Encyclopedia;
