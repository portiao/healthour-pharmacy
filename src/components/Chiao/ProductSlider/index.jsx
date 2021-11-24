import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ProductItem from '../ProductItem 商品item'
import './index.css'

export default class ProductSlider extends Component {
  render() {
    const settings = {
      arrow: true,
      dots: false,
      infinite: true,
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
        <Slider className="productSlider" {...settings}>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </Slider>
      </div>
    )
  }
}
