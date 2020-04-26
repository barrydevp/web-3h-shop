import React from 'react'
import PropTypes from 'prop-types'

function SearchProduct(props) {
    const productName = (props.productQuery && props.productQuery.name) || ''

    return (
        <div className="SearchProduct col-12 col-md-8 header-search-form mw-100">
            <div className="row">
                <input value={productName} className="col-6 col-md-8" type="text" name="search"
                       placeholder="Tìm kiếm sản phẩm..."
                       onChange={(event) => props.onSetProductQuery({name: event.target.value})}/>
                <input className="col-6 col-md-4" type="submit" name="submit" value="Tìm Kiếm"
                       onClick={props.handleSearch}/>
            </div>
        </div>
    )
}

SearchProduct.propTypes = {
    productQuery: PropTypes.object.isRequired,
    handleSearch: PropTypes.func.isRequired,
}

export default SearchProduct
