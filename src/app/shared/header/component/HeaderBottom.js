import React from 'react'
import {Link} from 'react-router-dom'
import {faShopify} from '@fortawesome/free-brands-svg-icons'
import {faBolt, faIdBadge} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Navbar, Nav} from 'react-bootstrap'

function HeaderBottom() {

    return (
        <div id="sticky-header" className="HeaderBottom header-bottom-area header-nav main-menu">
            <Navbar expand="lg" sticky="top">
                <div className="container col-6 col-md-9 ml-md-5">
                    <Nav className="mr-auto">
                        <Nav><Link className="nav-link link-nav" to="/">Home</Link></Nav>
                        <Nav><Link className="nav-link link-nav" to="#">Flash <FontAwesomeIcon
                            icon={faBolt}/> Sale</Link></Nav>
                        <Nav><Link className="nav-link link-nav" to="/shop">Shop</Link></Nav>
                    </Nav>
                </div>
                <div className="col-6 col-md-3">
                    <div className="hotline clearfix d-lg-block">
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
            </Navbar>
        </div>
    )
}

HeaderBottom.propTypes = {}

export default HeaderBottom
