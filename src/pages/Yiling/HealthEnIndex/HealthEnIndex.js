import React, { useState, useEffect } from 'react'
import './healthEnIndex.css'
import { fetchSql, dataNameImport } from './HealthDatabase' //引入方法
import { useParams, withRouter } from 'react-router-dom'
import _ from 'lodash' //引入方法函示庫，react內建不需安裝

function HealthEnIndex(props) {
  const [dataBaseAll, setDatabaseAll] = useState([])
  const [dataPathId, setDataPathId] = useState('')

  let { Id } = useParams()

  const searchInDatabase = async (v) => {
    const searchInDatabase = await fetchSql(v)
    // 依照位置排序
    searchInDatabase.rows.sort((a, b) => {
      // 陣列.sort()是排序功能
      return a.sId - b.sId //a-b是小到大,b-a是大到小
    })
    setDatabaseAll(searchInDatabase.rows)
  }

  useEffect(() => {
    searchInDatabase(Id)
    setDataPathId(_.get(dataNameImport, `${Id}.name`))
  }, [])

  // Id改變時，重新渲染頁面
  useEffect(() => {
    searchInDatabase(Id)
    setDataPathId(_.get(dataNameImport, `${Id}.name`))
  }, [props.match.params.Id])

  // console.log(dataNameImport.Id.name);
  // const name = _.get(dataNameImport, `${Id}.name`);

  return (
    <>
      <div>
        <img
          className="healthQPic"
          src="http://localhost:3000/images/photo/jamie-street-vcn2ndJ5LwE-unsplash.jpg"
          alt=""
        />
      </div>
      <div className="thisHealthPage">
        <div className="indexAllContent">
          {/* 麵包屑 */}
          <div className="breadListHealth">
            <a href="">
              <p>首頁 </p>
            </a>
            <p className="arrowHealth">{'>'}</p>
            <a href="">
              <p>保健知識</p>
            </a>
            <p className="arrowHealth">{'>'}</p>
            <a href="">
              <p>保健百科</p>
            </a>
            <p className="arrowHealth">{'>'}</p>
            <a href="">
              <p>{dataPathId}</p>
            </a>
          </div>
          <div className="IncludeImgDetail">
            <p className="heartHealthIndex">{dataPathId}</p>
            {/* <img
              className="imgHeartDetail"
              src="./images/photo/heart img.png"
              alt="心臟詳細圖"
            /> */}
          </div>
        </div>
        <div className="pIndexAll">
          {/* 要回傳的值用map方法回傳 ，變歷變資料→v*/}
          {dataBaseAll.map((v, i) => {
            return (
              <div className="pIndexAllOne" key={i}>
                <p className="pIndex">{v.sName}</p>
                <p className="pIndexContent">{v.sContent}</p>
              </div>
            )
          })}

          {/* <div className="pIndexAllOne">
            <p className="pIndex">二尖瓣脫垂</p>
            <p className="pIndexContent">
              二尖瓣位於左心房以及左心室之間，當心臟舒張時，二尖瓣打開，讓左心房的血液流到左心室；心臟收縮時，血液流向主動脈，同時二尖瓣關閉，可以讓血液不會逆流回左心房。一旦心臟收縮時，二尖瓣向左心房凸起，就稱為二尖瓣脫垂。
            </p>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default withRouter(HealthEnIndex)
