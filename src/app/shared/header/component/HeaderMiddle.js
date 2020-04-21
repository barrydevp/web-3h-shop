import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShopify} from '@fortawesome/free-brands-svg-icons'
import PropTypes from 'prop-types'

function HeaderMiddle() {

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
                        <div className="header-search clearfix">
                            <div className="category-select float-left">
                                <select className="browser-default custom-select nice-select-menu">
                                    <option selected>Danh mục sản phẩm</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="header-search-form">
                                <form method="" action="#">
                                    <input type="text" name="search" placeholder="Tìm kiếm sản phẩm..."/>
                                    <input type="submit" name="submit" value="Tìm Kiếm"/>
                                </form>
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
