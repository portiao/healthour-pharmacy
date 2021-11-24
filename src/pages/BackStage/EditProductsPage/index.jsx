import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import EditFormInput from '../../../components/Ben/EditFormInput'
import './index.css'

function EditProductsPage(props) {
  // 回傳給footer的狀態
  const { setEditSid, setOptionNow } = props
  const [data, setData] = useState('')

  useEffect(() => {
    // 異步執行
    ;(async () => {
      let r = await fetch(
        'http://localhost:3001/product/' + props.match.params.sid
      )
      let j = await r.json()
      if (j) {
        setData(j.data)
      }
    })()

    // 回傳給footer的狀態
    setEditSid(props.match.params.sid)
  }, [])

  const editForm = (e) => {
    e.preventDefault()
    const fd = new FormData(document.edit_form)
    fetch('http://localhost:3001/product/' + props.match.params.sid, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(fd).toString(),
    })
      .then((r) => r.json())
      .then((obj) => {
        console.log(JSON.stringify(obj, null, 4))
      })

    alert('商品更新成功')
    props.history.push('/back-stage/products/page/1')
    // window.location.reload()
  }

  return (
    <>
      <div className="editProductsPage">
        {/* 背景圖片 */}
        <div className="background">
          {/* 自訂容器寬度 */}
          <div className="container873">
            {/* 主體區域 */}
            <div className="main">
              <h2 className="title">更新商品</h2>
              <form name="edit_form" onSubmit={editForm}>
                <EditFormInput data={data} setData={setData} />
                <button type="sumbit">更新</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(EditProductsPage)
