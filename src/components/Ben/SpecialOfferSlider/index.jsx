import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ProductItem from '../ProductItem'
import './index.css'

class SpecialOfferSlider extends Component {
  constructor(props) {
    super(props)
    this.state = { data: '' }
  }

  componentDidMount() {
    // 查詢特惠價大於0的商品
    ;(async () => {
      let r = await fetch(
        'http://localhost:3001/product/no-paging?special_offer=0'
      )
      let j = await r.json()
      if (j.totalRows) {
        this.setState({ data: j.rows })
      }

      // react篩選法
      // const specialPriceArray = this.state.data
      //   ? this.state.data.filter((product) => {
      //       return product.special_offer !== ''
      //     })
      //   : ''
      // this.setState({ specialPriceProduct: specialPriceArray })
    })()
  }

  render() {
    const settings = {
      arrow: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
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
        <div className="special-offer">
          <div className="title">
            <div className="notebook-icon">
              <img src="http://localhost:3000/images/icon/1011813.png" alt="" />
            </div>
            <div className="circle-icon">
              <img src="http://localhost:3000/images/icon/3561625.png" alt="" />
            </div>
            <div className="text">
              <p>特惠價</p>
            </div>
          </div>
        </div>
        <Slider className="specialOfferSlider" {...settings}>
          {/* 亂數排序 */}
          {this.state.data
            ? this.state.data
                .sort(() => Math.random() - 0.5)
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
                })
            : ''}
        </Slider>
      </div>
    )
  }
}

export default withRouter(SpecialOfferSlider)
