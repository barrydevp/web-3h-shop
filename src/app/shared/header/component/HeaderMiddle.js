import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShopify} from '@fortawesome/free-brands-svg-icons'
import {getRootCategory} from '../../../../services/api/CategoryServices'

function HeaderMiddle() {
    const [rootCategories, setRootCategories] = useState([])

    useEffect(async() => {
        try {
            const {data, success, message} = await getRootCategory()
            if(!success) {
                throw new Error(message)
            }

            setRootCategories(data.data || [])

        } catch(error) {
            alert(error.message || "error")
        }
    }, [])

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
                            <div className="col-0 col-md-4 category-select float-left">
                                <select
                                    className="d-none d-md-block col-md-4 browser-default nice-select-menu">
                                    <option selected>Danh mục sản phẩm</option>
                                    {rootCategories && rootCategories.map(cat => {
                                        return <option value={cat._id}>{cat.name}</option>
                                    })}
                                </select>
                            </div>
                            <div className="col-12 col-md-8 header-search-form mw-100">
                                <div className="row">
                                    <input className="col-6 col-md-8" type="text" name="search"
                                           placeholder="Tìm kiếm sản phẩm..."/>
                                    <input className="col-6 col-md-4" type="submit" name="submit" value="Tìm Kiếm"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-12">
                        <div className="shop-cart-menu float-right">
                            <li>
                                <Link to="cart">
                                    <FontAwesomeIcon size="2x" icon={faShopify}/>
                                    <span>3</span>
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
