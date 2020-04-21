import React from 'react'
import Detail from './Detail'
import RelateProduct from './RelateProduct'

function ProductDetail() {

    return (
        <div className="ProductDetail mt-5">
            <Detail/>
            <RelateProduct/>
        </div>
    )
}

ProductDetail.propTypes = {}

export default ProductDetail
