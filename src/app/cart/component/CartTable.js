import React from 'react'
import PropTypes from 'prop-types'
import CartHeader from './CartHeader'
import CartRow from './CartRow'

function CartTable() {

    return (
        <div className="CartRow row">
            <div className="col-lg-12">
                <table className="table table-hover shopping-cart-table">
                    <CartHeader/>
                    <tbody>
                        <CartRow/>
                        <CartRow/>
                        <CartRow/>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

CartTable.propTypes = {}

export default CartTable
