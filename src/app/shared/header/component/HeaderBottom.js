import React from 'react'
import PropTypes from 'prop-types'
import {faShopify} from '@fortawesome/free-brands-svg-icons'
import {faBolt, faIdBadge} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function HeaderBottom() {

    return (
        <div id="sticky-header" class="HeaderBottom header-bottom-area">
            <nav class="navbar main-menu" role="navigation">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse"
                                data-target=".navbar-shop-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="home.html">Home</a>
                    </div>
                    <div class="collapse navbar-collapse navbar-shop-collapse">
                        <ul class="nav navbar-nav">
                            <li class="icon-flash">
                                <a href="#">Flash <FontAwesomeIcon icon={faBolt}/> Sale</a>
                            </li>
                            <li><a href="#">Shop</a></li>
                        </ul>
                        <div class="nav navbar-nav navbar-right">
                            <div class="hotline clearfix pull-right d-none d-lg-block">
                                <div class="hotline-icon">
                                    <FontAwesomeIcon icon={faIdBadge}/>
                                </div>
                                <div class="hotline-number">
                                    <span><strong>(+84) 00 000 0000</strong></span>
                                    <span>support@3h-shop.com</span>
                                </div>
                            </div>
                            <div class="bag-cart">
                                <a href="cart.html"><FontAwesomeIcon size="2x" icon={faShopify}/><sup>3</sup></a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

HeaderBottom.propTypes = {}

export default HeaderBottom
