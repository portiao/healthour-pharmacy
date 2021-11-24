import React from 'react'
import './index.css'

function EditFormInput(props) {
  const { data, setData } = props
  return (
    <>
      <label htmlFor="sid">編號</label>
      <input type="text" id="sid" name="sid" value={data.sid} disabled={true} />

      <label htmlFor="Name">商品名稱</label>
      <input
        type="text"
        id="Name"
        name="Name"
        value={data.Name}
        onChange={(e) => {
          setData({ ...data, Name: e.target.value })
        }}
      />

      <label htmlFor="image">商品圖片</label>
      <input
        type="text"
        id="image"
        name="image"
        value={data.image}
        onChange={(e) => {
          setData({ ...data, image: e.target.value })
        }}
      />

      {/* <div className="control-input">
        <input type="text" id="text" />
        <input type="file" id="file" />
      </div> */}
      <label htmlFor="categories">商品類別</label>
      <input
        type="text"
        id="categories"
        name="categories"
        value={data.categories}
        onChange={(e) => {
          setData({ ...data, categories: e.target.value })
        }}
      />

      <label htmlFor="Location">身體部位</label>
      <input
        type="text"
        id="Location"
        name="Location"
        value={data.Location}
        onChange={(e) => {
          setData({ ...data, Location: e.target.value })
        }}
      />

      <label htmlFor="brand_company">品牌 / 製造公司</label>
      <input
        type="text"
        id="brand_company"
        name="brand_company"
        value={data.brand_company}
        onChange={(e) => {
          setData({ ...data, brand_company: e.target.value })
        }}
      />

      <label htmlFor="quantity">內容量 / 規格</label>
      <input
        type="text"
        id="quantity"
        name="quantity"
        value={data.quantity}
        onChange={(e) => {
          setData({ ...data, quantity: e.target.value })
        }}
      />

      <label htmlFor="nutrient"> 成分 / 材質</label>
      <input
        type="text"
        id="nutrient"
        name="nutrient"
        value={data.nutrient}
        onChange={(e) => {
          setData({ ...data, nutrient: e.target.value })
        }}
      />

      <label htmlFor="price">售價</label>
      <input
        type="text"
        id="price"
        name="price"
        value={data.price}
        onChange={(e) => {
          setData({ ...data, price: e.target.value })
        }}
      />

      <label htmlFor="price">特惠價</label>
      <input
        type="text"
        id="special_offer"
        name="special_offer"
        value={data.special_offer}
        onChange={(e) => {
          setData({ ...data, special_offer: e.target.value })
        }}
      />

      <label htmlFor="Edible_Method">使用方法</label>
      <input
        type="text"
        id="Edible_Method"
        name="Edible_Method"
        value={data.Edible_Method}
        onChange={(e) => {
          setData({ ...data, Edible_Method: e.target.value })
        }}
      />

      <label htmlFor="place_origin">產地</label>
      <input
        type="text"
        id="place_origin"
        name="place_origin"
        value={data.place_origin}
        onChange={(e) => {
          setData({ ...data, place_origin: e.target.value })
        }}
      />

      <label htmlFor="EXP">保存期限</label>
      <input
        type="text"
        id="EXP"
        name="EXP"
        value={data.EXP}
        onChange={(e) => {
          setData({ ...data, EXP: e.target.value })
        }}
      />

      <label htmlFor="MFD">製造日期</label>
      <input
        type="text"
        id="MFD"
        name="MFD"
        value={data.MFD}
        onChange={(e) => {
          setData({ ...data, MFD: e.target.value })
        }}
      />
    </>
  )
}

export default EditFormInput
