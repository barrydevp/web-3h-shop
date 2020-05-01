import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import {useHistory} from 'react-router-dom'

const priceFilter = {
    'Tất cả': {
        start_out_price: '',
        end_out_price: '',
    },
    'Dưới 100$': {
        start_out_price: '',
        end_out_price: 100,
    },
    'Từ 100 - 200$': {
        start_out_price: 100,
        end_out_price: 200,
    },
    'Từ 200 - 400$': {
        start_out_price: 200,
        end_out_price: 400,
    },
    'Từ 400 - 700$': {
        start_out_price: 400,
        end_out_price: 700,
    },
    'Trên 700$': {
        start_out_price: 700,
        end_out_price: '',
    }
}

const convertPriceFilter = ({start_out_price, end_out_price}) => {
    // console.log(start_out_price, end_out_price)
    for (const key in priceFilter) {
        if (start_out_price) {
            if (parseFloat(priceFilter[key].start_out_price) === parseFloat(start_out_price)) return key
        }

        if (end_out_price) {
            if (parseFloat(priceFilter[key].end_out_price) === parseFloat(end_out_price)) return key
        }
    }

    return 'Tất cả'
}

function SideBar(props) {
    const rootCategories = [{_id: 0, name: 'All'}, ...props.rootCategories]
    const {productQuery} = props
    const history = useHistory()

    const handleFilter = useCallback((query) => {
        const _queryString = queryString.stringify({
            ...productQuery,
            page: 1,
            limit: 16,
            ...query,
        })

        history.push(`/shop?${_queryString}`)
    }, [productQuery])


    return (
        <div className="SideBar col-lg-3 col-md-4 col-12">
            <div className="sidebar-area shop-sidebar">
                <div className="categories tag-title">
                    <h2 style={{'marginTop': '0px'}}><span>Categories</span></h2>
                    <div className="list-group">
                        {rootCategories && rootCategories.map(cat => {
                            return (
                                <div key={`cat-${cat.name}`}
                                     className={`${(productQuery && parseInt(productQuery.category_parent_id) === cat._id) || (cat._id === 0 && !productQuery.category_parent_id) ? 'focus' : ''} list-group-item`}
                                     onClick={() => history.push(`/shop?category_parent_id=${cat._id}`)}>{cat.name}</div>
                            )
                        })}
                    </div>
                </div>
                <div className="filter-product">
                    <div className="tag-title">
                        <h2><span>Filter</span></h2>
                    </div>
                    <select value={productQuery['sort[]'] || ''}
                            onChange={(e) => handleFilter({'sort[]': e.target.value})}>
                        <option value="">Sắp xếp</option>
                        <option value="out_price asc">Giá thấp đến cao</option>
                        <option value="out_price desc">Giá cao đến thấp</option>
                    </select>
                    <div className="list-group">
                        {Object.keys(priceFilter).map(key => {
                            return (
                                <div key={`filter-${key}`}
                                     className={`${key === convertPriceFilter(productQuery) ? 'focus' : ''} list-group-item`}
                                     onClick={() => handleFilter(priceFilter[key])}>{key}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

SideBar.propTypes = {
    rootCategories: PropTypes.array.isRequired,
    productQuery: PropTypes.object.isRequired,
}

export default SideBar
