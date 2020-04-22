import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function HeaderTop() {
    return (
        <div className="HeaderTop header-top-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-5 col-12">
                        <div className="welcome">
                            <p>WELCOME TO 3H SHOP!</p>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-7 col-12">
                        <ul className="login-register float-right clearfix d-flex flex-md-row flex-column">
                            <li className="SignIn"><Link to="/login">SIGN IN</Link></li>
                            <li className="SignUp"><Link to="/signup">SIGN UP</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

HeaderTop.propTypes = {}

export default HeaderTop
