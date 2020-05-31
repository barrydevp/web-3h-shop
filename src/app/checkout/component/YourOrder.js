import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import CouponDetail from './CouponDetail'

function YourOrder(props) {
    const {totalPrice, totalOriginalPrice} = useMemo(() => {
        const {discount} = {discount: 0, ...props.coupon}

        let {totalPrice, totalOriginalPrice} = props.items.reduce((prev, item) => {
            const {totalPrice, totalOriginalPrice} = item

            return {
                totalPrice: prev.totalPrice + totalPrice,
                totalOriginalPrice: prev.totalOriginalPrice + totalOriginalPrice
            }
        }, {totalPrice: 0, totalOriginalPrice: 0})

        return {
            totalPrice: totalPrice * (100 - discount) / 100,
            totalOriginalPrice: totalOriginalPrice,
        }
    }, [props.items, props.coupon])

    return (
        <div className="YourOrder your-order">
            <h3 className="title-7 margin-bottom-50">Giỏ hàng của bạn</h3>
            <div className="your-order-table table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th className="product-name">Sản phẩm</th>
                        <th className="product-total">Tổng tiền</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.items.map(item => {
                        const {order_item, product, totalPrice, totalOriginalPrice} = item
                        const {name, discount} = product
                        const {quantity, _id} = order_item

                        return (
                            <tr key={`order-item-${_id}`}>
                                <td className="product-name">
                                    {`${name} (${quantity})`}
                                </td>
                                <td className="product-total">
                                    <strong>${totalPrice}</strong>
                                    {discount > 0 && <span>{totalOriginalPrice}</span>}
                                </td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td className="product-name order-total">
                            <strong>Cần thanh toán (Đã bao gồm chi phí ship và mã giảm giá)</strong>
                        </td>
                        <td className="product-total order-total">
                            <strong>${Math.round(totalPrice * 100) / 100}</strong>
                            {totalOriginalPrice - totalPrice > 0 &&
                            <span>{Math.round(totalOriginalPrice * 100) / 100}</span>}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

YourOrder.propTypes = {
    items: PropTypes.array.isRequired,
    orderId: PropTypes.number.isRequired,
}

export default YourOrder
