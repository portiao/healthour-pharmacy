import React from 'react'
import { Link } from 'react-router-dom'

function CategoryIcon(props) {
  const {
    id,
    path,
    name,
    handleCate,
    setCateWord,
    setControlCate,
    setControlSmallCate,
    setControlSmallBody,
  } = props

  return (
    <Link
      to={'/prod-list/page/categories/' + name + '/' + 1}
      onClick={() => {
        setCateWord(name)
        setControlCate(0)
        setControlSmallCate(id)
        setControlSmallBody('')
      }}
    >
      <div className="item" onClick={handleCate}>
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

export default CategoryIcon
