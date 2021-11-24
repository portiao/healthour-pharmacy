import React from 'react'
import { Link } from 'react-router-dom'

function LinkArea(props) {
  const {
    topLink,
    bottomLink,
    setControlCate,
    setControlSmallCate,
    setControlSmallBody,
  } = props

  return (
    <>
      {/* 站內連結 */}
      <div className="link-area">
        <div className="top">
          {topLink.map((v, i) => {
            return (
              <div className={v.theClass} key={i}>
                {topLink[i].content.map((val, i) => {
                  return (
                    <p key={i}>
                      <Link
                        to={val.link}
                        onClick={() => {
                          setControlCate('')
                          setControlSmallCate('')
                          setControlSmallBody('')
                        }}
                      >
                        {val.name}
                      </Link>
                    </p>
                  )
                })}
              </div>
            )
          })}
        </div>

        <div className="bottom">
          {bottomLink.map((v, i) => {
            return (
              <div className={v.theClass} key={i}>
                {bottomLink[i].content.map((val, i) => {
                  return (
                    <p key={i}>
                      <Link
                        to={val.link}
                        onClick={() => {
                          setControlCate('')
                          setControlSmallCate('')
                          setControlSmallBody('')
                        }}
                      >
                        {val.name}
                      </Link>
                    </p>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default LinkArea
