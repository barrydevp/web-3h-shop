import React from 'react'
import PropTypes from 'prop-types'
import ProductBlock from './ProductBlock'

function ProductRow(props) {

    return (
        <div className="CartRow container middle-product">
            <div className="row">
                {props.children}
            </div>
        </div>
    )
}

ProductRow.propTypes = {}

export default ProductRow
