/* eslint-disable no-dupe-keys */
export const fetchSql = async (hel) => {
  const result = await fetch(
    `http://localhost:3001/stores-list/api/${hel}`
  ).then((res) => res.json());
  return result; //把fetch出來的資料回傳出去
};

export const dataNameImport = {
  heart: { name: "心臟" },
  kidney: { name: "腎臟" },
  liver: { name: "肝臟" },
  lung: { name: "肺臟" },
  stomach: { name: "腸胃" },
  Urinary_Tract: { name: "泌尿道" },
  brain: { name: "腦神經" },
  bone: { name: "骨、關節" },
  teeth: { name: "牙齒、口腔" },
  eye: { name: "眼睛" },
  ear: { name: "耳鼻喉" },
  skin: { name: "皮膚" },
  drink: { name: "飲品百科" },
  body: { name: "身心百科" },
  nutrition: { name: "營養百科" },
};

export const addressSelector = {
  臺北市: {
    士林區: "",
    萬華區: "",
    松山區: "",
    中山區: "",
    大同區: "",
  },
  新北市: {
    板橋區: "",
    樹林區: "",
    土城區: "",
  },
  桃園市: {
    楊梅區: "",
    中壢區: "",
  },
  新竹市: {
    東區: "",
  },
  臺中市: {
    西區: "",
    烏日區: "",
    太平區: "",
  },
  屏東縣: {
    屏東市: "",
  },
};


//篩選城市|區域
export const selectCityA = Object.getOwnPropertyNames(addressSelector);

//getOwnPropertyNames()→印出物件內的key
export const selectSiteA = (cityname) => {
  return Object.getOwnPropertyNames(addressSelector[cityname]);
};
