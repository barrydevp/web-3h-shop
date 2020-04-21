import React from 'react'
import PropTypes from 'prop-types'

function Footer() {

    return (
        <div className="Footer footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12 col-md-push-4">
                        <div className="copyright-text">
                            <p> Copyright of 3h-Shop 2020.</p>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-12">
                        <div className="payment-accept">
                            <ul>
                                <li><img src="images\icons\1.png" alt="Payment"/></li>
                                <li><img src="images\icons\2.png" alt="Payment"/></li>
                                <li><img src="images\icons\3.png" alt="Payment"/></li>
                                <li><img src="images\icons\4.png" alt="Payment"/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Footer.propTypes = {}

export default Footer
