import React from 'react'
import PropTypes from 'prop-types'
import ProductRow from './ProductRow'
import PaginationProduct from './PaginationProduct'

function Product() {

    return (
        <div className="Product col-lg-9 col-md-8 col-12">
            <div className="tag-title" style={{padding: '0px'}}>
                <h2 style={{'margin-top': '0px'}}><span>Product</span></h2>
            </div>
            <div className="product-area">
                <ProductRow/>
                <ProductRow/>

                <PaginationProduct/>

            </div>
        </div>
    )
}

Product.propTypes = {}

export default Product
