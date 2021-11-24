import React from 'react'
import { Link } from 'react-router-dom'

function CateBodyIcon(props) {
  const {
    id,
    path,
    name,
    handlelocation,
    setLocationWord,
    setControlSmallBody,
    setControlCate,
    setControlSmallCate,
  } = props

  return (
    <Link
      to={'/prod-list/page/categories/' + name + '/' + 1}
      onClick={() => {
        setControlSmallBody(id)
        setControlCate(1)
        setControlSmallCate('')
        setLocationWord(name)
      }}
    >
      <div className="item" onClick={handlelocation}>
        <div className="icon">
          <img src={path} alt="" />
        </div>
        <div className="name">{name}</div>
        <div className="arrow">
          <img src="http://localhost:3000/images/arrow/blueArrow.jpg" alt="" />
        </div>
      </div>
    </Link>
  )
}

export default CateBodyIcon
