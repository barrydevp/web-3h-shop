import React, {useContext, useMemo} from 'react'
import {Link} from 'react-router-dom'
import AuthenticateContext from '../../../context/authenticate/AuthenticateContext'
import {getUserData} from '../../../../services/AuthServices'

function HeaderTop() {
    const {authenticateContext} = useContext(AuthenticateContext)
    const {isAuthenticated} = authenticateContext

    const userData = useMemo(() => {
        return getUserData()
    }, [isAuthenticated])

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
                        {
                            isAuthenticated ? (
                                <ul className="login-register float-right clearfix d-flex flex-md-row flex-column">
                                    <li className="SignIn"><Link to="/">Hello {userData.name || 'NoName'}</Link>
                                    </li>
                                    <li className="SignUp"><Link to="/logout">Logout</Link></li>
                                </ul>) : (
                                <ul className="login-register float-right clearfix d-flex flex-md-row flex-column">
                                    <li className="SignIn"><Link to="/login">SIGN IN</Link></li>
                                    <li className="SignUp"><Link to="/register">SIGN UP</Link></li>
                                </ul>)
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

HeaderTop.propTypes = {}

export default HeaderTop
