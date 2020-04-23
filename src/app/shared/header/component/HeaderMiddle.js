import React, {useState, useEffect, useCallback, useContext} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShopify} from '@fortawesome/free-brands-svg-icons'
import SelectCategory from './SelectCategory'
import getHistory from '../../../../store/getHistory'
import SearchProduct from './SearchProduct'
import CategoryContext from '../../../context/category/CategoryContext'
import ProductContext from '../../../context/product/ProductContext'
import {Badge} from 'react-bootstrap'

function HeaderMiddle() {
    const {categoryContext} = useContext(CategoryContext)
    const {productContext, setProductContext} = useContext(ProductContext)
    const {rootCategories, query: categoryQuery} = categoryContext
    const {query: productQuery} = productContext

    const onSetProductQuery = useCallback((query) => {
        setProductContext(({query: prevQuery, ...leftState}) => {
            return {
                ...leftState,
                query: {
                    ...prevQuery,
                    ...query,
                }
            }
        })
    }, [])

    const handleSearch = useCallback(() => {
        getHistory().push(`/shop?${'category_id=' + productQuery.category_id}&${'name=' + productQuery.name}`)
    }, [productQuery])


    return (
        <div className="HeaderMiddle header-middle-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-12">
                        <div className="site-logo">
                            <Link to="/"><img src="images\logo\logo.png" alt=""/></Link>
                        </div>
                    </div>
                    <div className="col-lg-7 col-12">
                        <div className="header-search d-flex align-items-center row clearfix">
                            <SelectCategory rootCategories={rootCategories} selectedValue={productQuery.category_id}
                                            onSetProductQuery={onSetProductQuery}/>
                            <SearchProduct productQuery={productQuery} handleSearch={handleSearch}
                                           onSetProductQuery={onSetProductQuery}/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-12">
                        <div className="shop-cart-menu float-right">
                            <li>
                                <Link to="cart">
                                    <FontAwesomeIcon size="2x" icon={faShopify}/>
                                    <Badge variant="danger"></Badge>
                                </Link>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

HeaderMiddle.propTypes = {}

export default HeaderMiddle
