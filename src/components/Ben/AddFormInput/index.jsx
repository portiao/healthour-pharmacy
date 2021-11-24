import React from 'react'
import './index.css'

function AddFormInput(props) {
  const { autoInput } = props
  const inputTitle = [
    { title: '商品名稱', englishTitle: 'Name', example: '五彩葉黃素' },
    {
      title: '商品圖片',
      englishTitle: 'image',
      example: 'http://localhost:3000/images/products/products(33).jpeg',
    },
    { title: '商品類別', englishTitle: 'categories', example: '保健食品' },
    { title: '身體部位', englishTitle: 'Location', example: '眼睛' },
    {
      title: '品牌 / 製造公司',
      englishTitle: 'brand_company',
      example: 'Aicom',
    },
    { title: '內容量 / 規格', englishTitle: 'quantity', example: '60 PC' },
    {
      title: '成分 / 材質',
      englishTitle: 'nutrient',
      example:
        '酵母鋅、金盞花萃取物、紅藻萃取物、維生素E、山桑子萃取、微藻DHA、黑大豆種皮萃取物、流行鍊球菌發酵物',
    },
    { title: '售價', englishTitle: 'price', example: '750' },
    { title: '特惠價', englishTitle: 'special_offer', example: '680' },
    { title: '使用方法', englishTitle: 'Edible_Method', example: '1日/2粒' },
    { title: '產地', englishTitle: 'place_origin', example: '台灣' },
    { title: '保存期限', englishTitle: 'EXP', example: '3年' },
    { title: '製造日期', englishTitle: 'MFD', example: '詳見包裝' },
  ]
  return (
    <>
      <label htmlFor="sid">編號</label>
      <input type="text" id="sid" name="sid" disabled={true} />

      {inputTitle.map((v, i) => {
        return (
          <div>
            <label htmlFor={v.englishTitle}>{v.title}</label>
            <input
              type="text"
              id={v.englishTitle}
              name={v.englishTitle}
              value={autoInput ? v.example : ''}
            />
          </div>
        )
      })}

      {/* <div className="control-input">
        <input type="text" id="text" />
        <input type="file" id="file" />
      </div> */}
    </>
  )
}

export default AddFormInput
