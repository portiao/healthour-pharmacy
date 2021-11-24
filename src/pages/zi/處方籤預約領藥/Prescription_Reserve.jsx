import './Prescription_Reserve.css'
import { useState } from 'react'
import Axios from 'axios'
const prescriptionimg = document.querySelector('#prescriptionimg')

function Prescription_Reserve(props) {
  const { closeStore } = props
  // const prescriptionimg = document.querySelector('#prescriptionimg')
  const [name, setName] = useState('')
  const [idNumber, setIdNumber] = useState('')
  const [birthday, setBirthday] = useState('')
  const [hospital, setHospital] = useState('')
  const [phone, setPhone] = useState('')
  const [selectFreq, setSelectFreq] = useState('')
  const [file, setFile] = useState('')
  const shop = closeStore.sName

  //上傳圖片並預覽(未上傳到後端)
  const onChange = (e) => {
    const file = e.target.files.item(0) // 取得選中檔案們的一個檔案
    const fileReader = new FileReader() // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
    const fileLoad = (e) => {
      setFile({
        img: e.target.result, // 讀取到DataURL後，儲存在result裡面，指定為img
      })
    }
    fileReader.addEventListener('load', fileLoad)
    fileReader.readAsDataURL(file) // 讀取完檔案後，變成URL
  }
  console.log(file)

  const submit = (e) => {
    e.preventDefault()
    if (
      name !== '' &&
      idNumber !== '' &&
      birthday !== '' &&
      hospital !== '' &&
      phone !== '' &&
      selectFreq !== ''
    ) {
      Axios.post('http://localhost:3003/Prescription_Reserve', {
        name: name,
        idNumber: idNumber,
        birthday: birthday,
        hospital: hospital,
        phone: phone,
        selectFreq: selectFreq,
        shop: shop,
      })
        .then((res) => {
          alert('上傳成功，調劑完畢後會在第一時間連絡您')
          console.log('上傳成功')
          window.location.href = '/'
        })
        .catch((err) => {
          console.log(err)
          alert('請填寫完整資料', e)
        })
    }
  }
  return (
    <>
      <div className="zi-Prescription">
        <img
          className="zi-Prescription-background"
          src="http://localhost:3000/images/background/Prescription_Reserve_background.jpg"
          alt=""
        />
        <div className="zi-Prescription-form-list">
          <div className="zi-Prescription-card-content">
            <h1>填寫處方資料</h1>
            <p>建議您，至少提前一個禮拜預約，方便門市備藥喔</p>
            <div className="zi-Prescription-card-line"></div>
            <form className="zi-Prescription-form-content" action="">
              <label htmlFor="Name">姓名</label>
              <input
                type="text"
                id="Name"
                className="zi-Prescription-Name-text"
                placeholder="請輸入姓名"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />

              <label htmlFor="Id-number">身分證字號</label>
              <input
                type="text"
                id="Id-number"
                className="zi-Prescription-Id-number"
                placeholder="請輸入身分證字號"
                maxLength="10"
                minLength="10"
                value={idNumber}
                onChange={(e) => {
                  setIdNumber(e.target.value)
                }}
              />

              <label htmlFor="Birthday">病患出生年月日</label>
              <input
                type="date"
                id="Birthday"
                className="zi-Prescription-Birthday-text"
                placeholder="請輸入生日"
                value={birthday}
                onChange={(e) => {
                  setBirthday(e.target.value)
                }}
              />

              <label htmlFor="Hospital">開立處方醫院</label>
              <input
                type="text"
                id="Hospital"
                className="zi-Prescription-Hospital"
                placeholder="請輸入開立處方醫院"
                value={hospital}
                onChange={(e) => {
                  setHospital(e.target.value)
                }}
              />

              <label htmlFor="Mobile">聯絡電話</label>
              <input
                type="text"
                id="Mobile"
                className="zi-Prescription-Mobile"
                placeholder="請輸入聯絡電話"
                maxLength="10"
                minLength="10"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value)
                }}
              />
              <section id="Freq-section">
                <label htmlFor="Freq">第幾次調劑</label>
                <select
                  name="Freq"
                  id="Freq"
                  value={selectFreq}
                  onChange={(e) => {
                    setSelectFreq(e.target.value)
                  }}
                >
                  <option value="">請選取調劑次數</option>
                  <option value="1">第一次調劑</option>
                  <option value="2">第二次調劑</option>
                  <option value="3">第三次調劑</option>
                </select>
              </section>
            </form>
          </div>
          <form>
            <div className="zi-Prescription-uploadimg-group">
              <p>上傳處方圖片(請上傳JPG或是PNG圖檔)</p>
              <input
                type="file"
                className="zi-Prescriptionimg-submit"
                onChange={onChange}
              />
              <div className="zi-Prescription-uploadpic">
                <img src={file.img} alt="" />
              </div>
            </div>
            <div className="zi-Prescription-button-flex">
              <button
                type="submit"
                className="zi-Prescription-submit"
                onClick={submit}
              >
                送出
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Prescription_Reserve
