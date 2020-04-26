import React from 'react'

function CartHeader() {

    return (
        <thead className="CartHeader">
            <tr>
                <th>Hình ảnh</th>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th>Hủy</th>
            </tr>
        </thead>
    )
}

CartHeader.propTypes = {}

export default CartHeader
