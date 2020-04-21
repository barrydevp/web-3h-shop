import React from 'react'
import PropTypes from 'prop-types'
import CartTable from './CartTable'
import Payment from './Payment'

function Cart() {

    return (
        <div className="Cart cart-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tag-title">
                            <h2><span>My Cart</span></h2>
                        </div>
                    </div>
                </div>

                <CartTable/>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="tag-title">
                            <h2><span>Payment</span></h2>
                        </div>
                    </div>
                </div>

                <Payment/>
            </div>
        </div>
    )
}

Cart.propTypes = {}

export default Cart
