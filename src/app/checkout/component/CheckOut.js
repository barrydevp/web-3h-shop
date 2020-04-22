import React from 'react'
import PropTypes from 'prop-types'
import BillingDetail from './BillingDetail'
import YourOrder from './YourOrder'

function CheckOut() {

    return (
        <div className="CheckOut checkout-area mt-5">
            <div className="container">
                <div className="checkout-bill-order">

                        <div className="row">
                            <div className="col-md-6">
                                <BillingDetail/>
                            </div>

                            <div className="col-md-6">
                               <YourOrder/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

CheckOut.propTypes = {}

export default CheckOut
