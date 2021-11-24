import { withRouter, Link } from 'react-router-dom'
import './index.css'

function BreadCrumb(props) {
  console.log(props)
  const { location } = props

  const pathnameList = ['/iconsearch_p1', '/iconsearch_p2', '/HospitalPage']
  const pathnameTextList = ['症狀篩檢', '症狀篩檢', '醫院｜診所']

  const convertPathnameToText = (pathname) => {
    const index = pathnameList.findIndex((v) => v === pathname)
    if (index > -1)
      return (
        <li className="breadcrumb-item active" aria-current="page">
          {pathnameTextList[index]}
        </li>
      )
    return ''
  }

  return (
    <>
      <nav aria-label="pchiao-breadcrumb">
        <ol className="chiao-breadcrumb">
          <li className="chiao-breadcrumb-item">
            <Link to="/">首頁</Link>
          </li>
          {convertPathnameToText(location.pathname)}
        </ol>
      </nav>
    </>
  )
}

export default withRouter(BreadCrumb)
