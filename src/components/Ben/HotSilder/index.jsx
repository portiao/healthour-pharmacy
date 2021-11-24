import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import HotProductItem from '../HotProductItem'
import './index.css'

export default class HotSilder extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const settings = {
      arrow: true,
      dots: false,
      infinite: true,
      // autoplay: true,
      // autoplaySpeed: 1500,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
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
        <Slider className="hotSilder" {...settings}>
          {this.props.Top5list.map((product, i) => {
            return (
              <Link
                key={product.product_id}
                to={'/prod-list/prod/' + product.product_id}
                onClick={() => {
                  this.props.updateBrowseRecordToLocalStorage(product)
                }}
              >
                <HotProductItem number={i} {...product} />
              </Link>
            )
          })}
        </Slider>
      </div>
    )
  }
}
