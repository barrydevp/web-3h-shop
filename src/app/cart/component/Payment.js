import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Payment(props) {
    const {items} = props
    const totalPrice = useMemo(() => {
        return Math.round(items.reduce((prev, item) => {
            const {order_item, price} = item
            const {quantity} = order_item || {}

            return prev + price * (quantity || 0)
        }, 0) * 100) / 100
    }, [items])

    return (
        <div className="Payment payment">
            <div className="row">
                <div className="col-lg-7">
                    <div className="form-info">
                        <h1 className="title-form"><span
                            className="label label-danger">Tổng Hóa Đơn {totalPrice}$</span></h1>
                        <Link to="/checkout"><Button variant="success">Checkout</Button></Link>
                    </div>

                </div>
                <div className="col-lg-5">
                    <div className="banner-pay">
                        <img src="images/banner/banner15.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

Payment.propTypes = {
    items: PropTypes.array.isRequired,
}

export default Payment
