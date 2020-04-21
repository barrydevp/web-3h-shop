import React from 'react'
import PropTypes from 'prop-types'

function YourOrder() {

    return (
        <div className="YourOrder your-order">
            <h3 className="title-7 margin-bottom-50">Your Order</h3>
            <div className="your-order-table table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th className="product-name">Product</th>
                        <th className="product-total">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="product-name">Lorem Ipsum comes (1)</td>
                        <td className="product-total">$499.00</td>
                    </tr>
                    <tr>
                        <td className="product-name">Extremes of Good (3)</td>
                        <td className="product-total">$559.00</td>
                    </tr>
                    <tr>
                        <td className="product-name">Lorem Ipsum comes (1)</td>
                        <td className="product-total">$320.00</td>
                    </tr>
                    <tr className="shipping">
                        <th>Shipping</th>
                        <td>
                            <ul>
                                <li>
                                    <input type="checkbox" id="1"/>
                                    <label htmlFor="1">
                                        Free Shipping
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="2"/>
                                    <label htmlFor="2">
                                        Flat Rate <span
                                        className="amount">$120.00</span>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="3"/>
                                    <label htmlFor="3">
                                        International Delivery
                                    </label>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="product-name order-total">Order Total</td>
                        <td className="product-total order-total">$1378.00</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

YourOrder.propTypes = {}

export default YourOrder
