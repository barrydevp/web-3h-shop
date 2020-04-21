import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {faShopify} from '@fortawesome/free-brands-svg-icons'
import {faBolt, faIdBadge} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function HeaderBottom() {

    return (
        <div id="sticky-header" className="HeaderBottom header-bottom-area">
            <nav className="navbar sticky-top navbar-expand-lg main-menu" role="navigation">
                <div className="container">
                    <div className="float-left">
                        <button type="button" className="navbar-toggler" data-toggle="collapse"
                                data-target=".navbar-shop-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">Home</Link>
                    </div>
                    <div className="collapse navbar-collapse navbar-shop-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item icon-flash">
                                <Link className="nav-link" to="#">Flash <FontAwesomeIcon icon={faBolt}/> Sale</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">Shop</Link>
                            </li>
                        </ul>
                        <div className="hotline clearfix d-none d-lg-block">
                            <div className="hotline-icon">
                                <FontAwesomeIcon icon={faIdBadge}/>
                            </div>
                            <div className="hotline-number">
                                <span><strong>(+84) 00 000 0000</strong></span>
                                <span>support@3h-shop.com</span>
                            </div>
                        </div>
                        <div className="bag-cart">
                            <Link to="/cart"><FontAwesomeIcon size="2x" icon={faShopify}/><sup>3</sup></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

HeaderBottom.propTypes = {}

export default HeaderBottom
