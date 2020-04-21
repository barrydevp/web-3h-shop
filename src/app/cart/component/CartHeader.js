import React from 'react'
import PropTypes from 'prop-types'

function CartHeader() {

    return (
        <thead className="CartHeader">
            <tr>
                <th>Hình ảnh</th>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Mã giảm giá</th>
                <th>Thành tiền</th>
                <th>Hủy</th>
            </tr>
        </thead>
    )
}

CartHeader.propTypes = {}

export default CartHeader
