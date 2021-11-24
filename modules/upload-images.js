const multer = require('multer')
const { v4: uuidv4 } = require('uuid') // uuid:生成不同進位的id名稱

const extMap = {
  // 透過檔案的req.file.mimetype 來去給副檔名
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/gif': '.gif',
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // 決定檔案存放資料夾
    cb(null, __dirname + '/../public/images/prescriptionimg')
  },
  filename: (req, file, cb) => {
    // 更改檔案名稱
    cb(null, uuidv4() + extMap[file.mimetype])
  },
})

const fileFilter = (req, file, cb) => {
  // 篩選要上傳的檔案是否為規定的格式
  cb(null, !!extMap[file.mimetype])
}

module.exports = multer({ storage, fileFilter }) // 會先經過fileFilter判定是否符合格式，才會到上傳檔案的部分，執行順序會以他內部設定去執行(會以fileFilter為優先)
