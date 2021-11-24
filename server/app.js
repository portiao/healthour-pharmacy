const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const multer = require('multer') //上傳圖片的套件
const fs = require('fs').promises
const uploadprescription = multer({ dest: '../public/tem_uploads' })
const uploadprescription2 = require('../modules/upload-images')
app.use(express.static('public'))

/* 跨域許可 */
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use(express.json())

/* 連線設定 */
const db = mysql.createConnection({
  user: 'ben' /* 帳號 */,
  host: 'localhost' /* 主機 */,
  password: 'admin' /* 密碼 */,
  database: 'healthour' /* 資料庫名稱 */,
})

/* 註冊功能 */
app.post('/create', (req, res) => {
  console.log(req.body)
  const email = req.body.email
  const password = req.body.password
  const name = req.body.name
  const birthday = req.body.birthday
  const idNumber = req.body.idNumber
  const mobile = req.body.mobile
  const address = req.body.address

  /* 將註冊資料寫入資料庫 */
  db.query(
    `INSERT INTO users (email, password, name, birthday, idNumber, mobile, address) VALUES ('${email}', '${password}', '${name}', '${birthday}', '${idNumber}', '${mobile}', '${address}')`,
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send('寫入成功')
      }
    }
  )
})

/* 登入功能並將資料傳到前端 */
app.post('/login', function (req, res) {
  console.log(req.body)
  const email = req.body.email
  const password = req.body.password
  db.query(
    `SELECT * FROM users WHERE email='${email}' AND password='${password}'`,
    function (err, rows, fields) {
      console.log(rows)
      if (rows.length === 0) {
        return res.status(500).send('登入失敗!')
      }
      return res.send(rows)
    }
  )
})

/* 會員列表讀取功能 */
app.get('/Backstage_Member_Management', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

/* 處方籤資料寫入功能 */
app.post('/Prescription_Reserve', (req, res) => {
  // console.log(req.body)
  const name = req.body.name
  const idNumber = req.body.idNumber
  const birthday = req.body.birthday
  const hospital = req.body.hospital
  const phone = req.body.phone
  const selectFreq = req.body.selectFreq
  const Shop = req.body.shop
  // const fm = 'YYYY-MM-DD HH:mm:ss'
  // const created_at = moment().format(fm)
  // const image = ''
  /* 將處方資料寫入資料庫 */
  db.query(
    `INSERT INTO prescription (name, idNumber, birthday, hospital,  phone, selectFreq, Shop) VALUES ('${name}', '${idNumber}', '${birthday}', '${hospital}', '${phone}', '${selectFreq}', '${Shop}')`,
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send('寫入成功')
      }
    }
  )
})

/* 資料表處方資料讀取功能 */
app.get('/Backstage_Prescription_Management', (req, res) => {
  db.query('SELECT * FROM prescription', (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

// 使用老師的upload-images.js範例上傳處方簽圖片
app.post(
  '/uploadprescription2',
  uploadprescription2.single('prescriptionimg'),
  async (req, res) => {
    res.json(req.file.filename)
  }
)

/* 阜號 */
app.listen(3003, () => {
  console.log('yey, your server is running on port 3003')
})
