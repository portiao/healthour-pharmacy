import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ProductItem from '../ProductItem'
import './index.css'

export default class BrowseRecordSlider extends Component {
  constructor(props) {
    super(props)
    this.state = { myBrowseRecord: [] }
  }

  getBrowseRecordFromLocalStorage = () => {
    const newBrowseRecord = localStorage.getItem('browseRecord') || '[]'

    this.setState({ myBrowseRecord: JSON.parse(newBrowseRecord) })
  }

  componentDidMount() {
    this.getBrowseRecordFromLocalStorage()
  }

  render() {
    const settings = {
      arrow: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      responsive: [
        {
          // 螢幕寬度小於992
          breakpoint: 992,
          settings: {
            slidesToShow: 1, //一次顯示1個
            slidesToScroll: 1, //切換下一頁時移動1個
          },
        },
      ],
    }
    return (
      <div>
        <div className="browse-record">
          <div className="title">
            <div className="notebook-icon">
              <img src="http://localhost:3000/images/icon/1011813.png" alt="" />
            </div>
            <div className="circle-icon">
              <img src="http://localhost:3000/images/icon/3561625.png" alt="" />
            </div>
            <div className="text">
              <p>瀏覽過的商品</p>
            </div>
          </div>
        </div>
        <Slider className="browseRecordSlider" {...settings}>
          {this.state.myBrowseRecord
            .slice(0)
            .reverse()
            .map((product) => {
              return (
                <Link
                  key={product.sid}
                  to={'/prod-list/prod/' + product.sid}
                  onClick={() => {
                    this.props.updateBrowseRecordToLocalStorage(product)
                  }}
                >
                  <ProductItem {...product} />
                </Link>
              )
            })}
        </Slider>
      </div>
    )
  }
}
