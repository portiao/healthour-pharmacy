import './Login.css'
import { Link, withRouter } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'

function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = (e) => {
    e.preventDefault() // prevent form refresh
    if (email !== '' && password !== '') {
      Axios.post('http://localhost:3003/login', {
        email: email,
        password: password,
      })
        .then((res) => {
          // 將登入的資料存入localStorage
          alert('登入成功!')
          console.log(res)
          localStorage.setItem('Member', JSON.stringify(res.data))
          // 登入成功跳轉至首頁 (原本是goback，但這樣登出原帳號後換下一個帳號登入，會跳轉至前一個人的頁面)
          props.history.push('/')
        })
        .catch((e) => {
          if (e.res.status === 500) {
            alert('帳號或密碼錯誤！')
          }
        })
    } else if (email === '') {
      alert('請輸入帳號!')
    } else {
      alert('請輸入密碼!')
    }
  }

  return (
    <>
      <div className="zi-Login">
        <img
          className="zi-Login-background"
          src="http://localhost:3000/images/background/loginBackground.png"
          alt=""
        />
        <div className="zi-Login-card">
          <div className="zi-Login-card-content">
            <h1>會員登入</h1>
            <p>請填寫「欲至門市領藥的聯絡人」註冊資料</p>
            <div className="zi-Login-card-line"></div>
            <form className="zi-Login-form-content" action="">
              <label htmlFor="E-mail">電子郵件</label>
              <input
                type="email"
                id="E-mail"
                className="Email-text"
                placeholder="請輸入電子郵件"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <div className="zi-Login-password-text">
                <label htmlFor="Password">密碼</label>
                {/* <a className="zi-Login-forget-pw" href="/#">
                  忘記密碼?
                </a> */}
              </div>
              <input
                type="password"
                id="Password"
                className="zi-Login-Password-text"
                placeholder="請輸入6位數密碼"
                minLength="6"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />

              <div className="zi-Login-button-flex">
                <Link to="/register">
                  {/* <a src="/register"> */}
                    <button type="button" className="zi-Login-register">
                      註冊會員
                    </button>
                  {/* </a> */}
                </Link>
                <button
                  type="submit"
                  className="zi-Login-login"
                  onClick={login}
                >
                  登入
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(Login)
