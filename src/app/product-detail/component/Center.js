import React, {useCallback, useContext, useState} from 'react'
import PropTypes from 'prop-types'
import CurrentContext from '../../context/current/CurrentContext'
import {insertOrderItem} from '../../../services/api/OrderServices'
import {useHistory} from 'react-router-dom'

function Center(props) {
    const {currentContext/*, fetchCurrentOrder*/} = useContext(CurrentContext)
    const {orderId} = currentContext
    const {_id, name, out_price, discount, description} = props.product
    const price = Math.round(out_price * (1 - discount) * 100) / 100
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    // const discountPrice = Math.round((out_price - price) * 100) / 100

    const insertItem = useCallback(async ({orderId, productId, productName}) => {
        if (!orderId) {
            alert('Đã có lỗi xảy ra vui lòng refresh lại trang hoặc ấn F5')

            return
        }

        if (loading) return

        setLoading(true)

        try {
            const {data, success, message} = await insertOrderItem(orderId, {
                product_id: productId,
                quantity: 1,
            })
            if (!success) {
                throw new Error(message)
            }
            // console.log(data)
            alert(`Thêm thành công ${productName} vào giỏ hàng.`)

            history.push('/cart')

            // fetchCurrentOrder()

        } catch (error) {
            alert(error.message || 'error')
        }

        setLoading(false)
    }, [])

    return (
        <div className="Center price_sale col-12 col-md-4">
            <div className="area_price">
                <strong>{`${price}$`}</strong>
                {!!discount && <span className="hisprice">{out_price}$</span>}
                <label className="installment">Trả góp 0%</label>
            </div>

            <div className="c_m">
                <div className="memory memory2 ">
                    <div className="m_default">
                        Bạn đang xem phiên bản: <b>256GB</b>
                        <label className="installment">Trả góp 0%</label>
                    </div>
                    <a className="item i2 active " href="/dtdd/iphone-11-pro-256gb">
                        <span><i className="iconmobile-opt"></i>256GB</span>
                        <strong>{`${price}$`}</strong>
                    </a>
                </div>
            </div>
            <div className="clr"></div>

            <div className="area_promotion once zero">
                <strong data-count="1">Khuyến mãi</strong>
                <div className="infopr">
                    <span className="pro564306">
                        {description}<a
                        href="https://www.thegioididong.com/tin-tuc/dong-ho-giam-gia-thang-moi-1246102" target="_blank">(click xem chi tiết)</a>
                    </span>
                </div>

                <div className="vipservice">
                    <b>Chọn thêm các dịch vụ <b>miễn phí chỉ có ở 3H-Shop</b></b>
                    <div className="o1">
                        <a href="#" className="first check">
                            <input type="checkbox" value="true"/>
                            <span>Giao ngay từ cửa hàng gần bạn nhất</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="notechoose"></div>

            <div className="area_order area_orderM">

                <button className={`buy_now ${loading || !orderId ? 'disabled' : ''}`}
                        onClick={() => {
                            !loading && insertItem({orderId, productId: _id, productName: name})
                        }}
                        disabled={loading || !orderId}>
                    <b>Mua ngay</b>
                    <span>Giao tận nơi hoặc nhận tại siêu thị</span>
                </button>

                <a id="tra-gop" className="buy_repay " href="/tra-gop/dtdd/iphone-11-pro-256gb">
                    <b>Mua trả góp 0%</b>
                    <span>Thủ tục đơn giản</span>
                </a>
                <a className="buy_repay s " href="/tra-gop/dtdd/iphone-11-pro-256gb?m=credit">
                    <b>Trả góp qua thẻ</b>
                    <span>Visa, Master, JCB</span>
                </a>
            </div>

            <div className="callorder">
                <div className="ct">
                    <span>Gọi đặt mua: <a href="tel:18001060">1800.1060</a> (miễn phí - 7:30-22:00)</span>
                </div>
            </div>
        </div>
    )
}

Center.propTypes = {
    product: PropTypes.object.isRequired,
}

export default Center
