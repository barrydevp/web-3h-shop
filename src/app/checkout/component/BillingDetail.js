import React from 'react'
import PropTypes from 'prop-types'

function BillingDetail() {

    return (
        <div className="BillingDetail">
            <div className="checkout-bill">
                <h3 className="title-7 margin-bottom-50">Billing Details</h3>
            </div>
            <form>
                <label htmlFor="account">Số Tài Khoản:</label><br/>
                <input type="text" id="account" name="account"/><br/>
                <label htmlFor="user">Tên Khách Hàng:</label><br/>
                <input type="text" id="user" name="user"/><br/>
                <label htmlFor="phone">Số Điện Thoại:</label><br/>
                <input type="text" id="phone" name="phone"/><br/>
                <label htmlFor="address">Địa Chỉ:</label><br/>
                <input type="text" id="address" name="address"/><br/>
            </form>
            <div className="payment-method mt-4">
                <div className="payment-accordion">

                    <h3 className="payment-accordion-toggle active">Direct Bank
                        Transfer</h3>
                    <div className="payment-content default">
                        <p>Make your payment directly into our bank account. Please use
                            your Order ID as the payment reference. Your order won’t be
                            shipped until the funds have cleared in our account.</p>
                    </div>

                    <h3 className="payment-accordion-toggle">Cheque Payment</h3>
                    <div className="payment-content">
                        <p>Please send your cheque to Store Name, Store Street, Store
                            Town, Store State / County, Store Postcode.</p>
                    </div>

                    <h3 className="payment-accordion-toggle">PayPal</h3>
                    <div className="payment-content">
                        <p>Pay via PayPal; you can pay with your credit card if you
                            don’t have a PayPal account.</p>
                        <a href="#"><img src="images\icons\payment.png"
                                         alt="Payment Image"/></a>
                    </div>

                </div>
                <div className="order-button-payment">
                    <input type="submit" value="Place order"/>
                </div>
            </div>
        </div>
    )
}

BillingDetail.propTypes = {}

export default BillingDetail
