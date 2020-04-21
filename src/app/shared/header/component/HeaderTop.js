import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

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
                        <ul className="login-register float-right clearfix">
                            <li><Link to="/login">SIGN IN</Link></li>
                            <li>Or</li>
                            <li><Link to="/signup">REGISTER</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

HeaderTop.propTypes = {}

export default HeaderTop
