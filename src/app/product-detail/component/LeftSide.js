import React from 'react'
import PropTypes from 'prop-types'

function LeftSide(props) {
    const {image_path, name} = props.product

    return (
        <div className="LeftSide picture col-6 col-md-4">
            <img src={image_path}
                 alt={name}/>
            <span className="text-viewimage">Xem hình thực tế sản phẩm</span>
        </div>
    )
}

LeftSide.propTypes = {
    product: PropTypes.object.isRequired,
}

export default LeftSide
