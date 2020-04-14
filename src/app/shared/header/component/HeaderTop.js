import React from 'react'
import PropTypes from 'prop-types'

function HeaderTop() {
    return (
        <div className="header-top-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-5 col-12">
                        <div className="welcome">
                            <p>WELCOME TO 3H SHOP!</p>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-7 col-12">
                        <ul className="login-register pull-right clearfix">
                            <li><a href="#">SIGN IN</a></li>
                            <li>Or</li>
                            <li><a href="#">REGISTER</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

HeaderTop.propTypes = {}

export default HeaderTop
