import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import ProductRow from './ProductRow'
import PaginationProduct from './PaginationProduct'
import ProductBlock from './ProductBlock'
import {Link} from 'react-router-dom'
import queryString from 'query-string'

function Product(props) {
    const {data, total, page, limit} = {...props.products}

    const renderProducts = useMemo(() => {
        if (!data) return false
        const rows = []

        let blocks = []

        data.forEach((e, i) => {
            if (!(i % 4) && i) {
                rows.push(<ProductRow key={i}>
                    {blocks}
                </ProductRow>)

                blocks = []
            }

            blocks.push(<ProductBlock key={e._id} product={e}/>)
        })

        rows.push(<ProductRow key={0}>
            {blocks}
        </ProductRow>)

        return rows
    }, [props.products])

    const renderSubCategories = useMemo(() => {
        const currentQueryString = queryString.stringify({
            category_parent_id: (props.productQuery && props.productQuery.category_parent_id) || 0,
            page: 1,
            limit: 16,
        })

        return props.categories.map(cat => {
            return (
                <Link to={`/shop?${currentQueryString}&category_id=${cat._id}`} data-id="80" className="col-2"><img
                    src={cat.image_path} alt={cat.name}/></Link>
            )
        })
    }, [props.categories])

    return (
        <div className="Product col-lg-9 col-md-8 col-12">
            <div className="tag-title" style={{padding: '0px'}}>
                <h2 style={{'marginTop': '0px'}}><span>Product</span></h2>
            </div>
            <div className="manu row">
                {renderSubCategories}
            </div>
            <div className="product-area">
                {renderProducts}

                <PaginationProduct query={props.productQuery} paging={{total, page, limit}}/>

            </div>
        </div>
    )
}

Product.propTypes = {
    products: PropTypes.object.isRequired,
}

export default Product
