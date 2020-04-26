import React from 'react'

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
