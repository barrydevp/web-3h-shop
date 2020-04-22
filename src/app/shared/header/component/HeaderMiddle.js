import React, {useState, useEffect, useCallback, useContext} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShopify} from '@fortawesome/free-brands-svg-icons'
import {getRootCategory} from '../../../../services/api/CategoryServices'
import SelectCategory from './SelectCategory'
import getHistory from '../../../../store/getHistory'
import SearchProduct from './SearchProduct'
import CategoryContext from '../../../context/category/CategoryContext'
import {Badge} from 'react-bootstrap'

function HeaderMiddle() {
    const {value: categoryContext, dispatch: setCategoryContext} = useContext(CategoryContext)

    const [rootCategories, setRootCategories] = useState([])
    const [queryProduct, setQueryProduct] = useState({
        category_id: 0,
        name: '',
        sort: '',
    })

    useEffect(() => {
        (async () => {
            try {
                const {data, success, message} = await getRootCategory()
                if (!success) {
                    throw new Error(message)
                }

                setRootCategories(data.data || [])

            } catch (error) {
                alert(error.message || 'error')
            }
        })()

    }, [])

    const onSetQueryProduct = useCallback((query) => {
        setQueryProduct((prevQuery) => {
            return {
                ...prevQuery,
                ...query
            }
        })
    }, [])

    const handleSearch = useCallback(() => {
        getHistory().push(`/shop?${'category_id=' + queryProduct.category_id}&${'name=' + queryProduct.name}`)
    }, [queryProduct])


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
                            <SelectCategory rootCategories={rootCategories} selectedValue={queryProduct.category_id}
                                            onSetQueryProduct={onSetQueryProduct}/>
                            <SearchProduct queryProduct={queryProduct} handleSearch={handleSearch}
                                           onSetQueryProduct={onSetQueryProduct}/>
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
