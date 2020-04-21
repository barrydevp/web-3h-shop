import React from 'react'
import PropTypes from 'prop-types'
import SideBar from './SideBar'
import Product from './Product'

function Shop() {

    return (
        <div className="shop-area">
            <div className="container-fluid">
                <div className="row">
                    <SideBar/>
                    <Product/>
                </div>
            </div>
        </div>
    )
}

Shop.propTypes = {}

export default Shop
