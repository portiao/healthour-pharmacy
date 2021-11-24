import './Register.css'
import { useState } from 'react'
import Axios from 'axios'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [idNumber, setIdNumber] = useState('')
  const [mobile, setMobile] = useState('')
  const [address, setAddress] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (email !== '' && password !== '') {
      Axios.post('http://localhost:3003/create', {
        email: email,
        password: password,
        name: name,
        birthday: birthday,
        idNumber: idNumber,
        mobile: mobile,
        address: address,
      })
        .then((res) => {
          alert('註冊成功，將轉跳到首頁!')
          window.location.href = '/'
        })
        .catch((err) => {
          console.log(err)
          alert('註冊失敗!', e)
        })
    }
  }

  return (
    <>
      <div className="zi-register">
        <img
          className="zi-register-background"
          src="http://localhost:3000/images/background/loginBackground.png"
          alt=""
        />
        <div className="zi-register-card">
          <div className="zi-register-card-content">
            <h1>會員註冊</h1>
            <p>請填寫「欲至門市領藥的聯絡人」資料</p>
            <div className="zi-register-card-line"></div>
            <form className="zi-register-form-content" action="">
              <label htmlFor="E-mail">電子郵件</label>
              <input
                type="email"
                id="E-mail"
                value={email}
                className="Email-text"
                placeholder="請輸入電子郵件"
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <label htmlFor="Password">密碼</label>
              <input
                value={password}
                type="password"
                id="Password"
                className="zi-register-Password-text"
                placeholder="請輸入6位數密碼"
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
              <label htmlFor="Name">姓名</label>
              <input
                type="text"
                id="Name"
                className="zi-register-Name-text"
                placeholder="請輸入姓名"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
              <label htmlFor="Birthday">生日</label>
              <input
                type="date"
                id="Birthday"
                className="zi-register-Birthday-text"
                placeholder="請輸入生日"
                value={birthday}
                onChange={(e) => {
                  setBirthday(e.target.value)
                }}
              />
              <label htmlFor="Id-number">身分證字號</label>
              <input
                type="text"
                id="Id-number"
                className="zi-register-Id-number"
                placeholder="請輸入身分證字號"
                value={idNumber}
                onChange={(e) => {
                  setIdNumber(e.target.value)
                }}
              />

              <label htmlFor="Mobile">手機號碼</label>
              <input
                type="text"
                id="Mobile"
                className="zi-register-Mobile"
                placeholder="請輸入手機號碼"
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value)
                }}
              />

              <label htmlFor="Address">聯絡地址</label>
              <input
                type="text"
                id="Address"
                className="zi-register-Address"
                placeholder="請輸入聯絡地址"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value)
                }}
              />
              <div className="zi-register-checkbox-flex">
                <input type="checkbox" id="zi-register-Checkbox" />
                <p>
                  我已經閱讀 <a href="/">隱私權條款</a> 並已同意
                </p>
              </div>
              <div className="zi-register-button-flex">
                <button
                  type="submit"
                  className="zi-register-submit"
                  onClick={submit}
                >
                  確認送出
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
