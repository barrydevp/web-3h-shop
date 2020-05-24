import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import GlobalContext from '../../context/global/GlobalContext'
import {authenticate} from '../../../services/api/UserServices'
import {loginUser, logoutUser} from '../../../services/AuthServices'
import CurrentContext from '../../context/current/CurrentContext'

function Login() {
    const {setGlobalLoading} = useContext(GlobalContext)
    const {fetchCurrentOrder} = useContext(CurrentContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        window.scrollTo(0, 160)
    }, [])

    const handleLogin = useCallback(async (userLogin) => {
        // console.log("alo")
        setGlobalLoading(true)

        try {
            const {data, success, message} = await authenticate(userLogin)
            if (!success) {
                throw new Error(message)
            }

            const {access_token, user} = data

            loginUser({token: access_token, payload: {_id: user._id, role: user.role}, user_data: user})
            fetchCurrentOrder()
        } catch (error) {
            alert(error.message || 'error')
            logoutUser()
        }

        setGlobalLoading(false)
    }, [])

    const handleSubmit = useCallback((e) => {
        e.preventDefault()

        handleLogin({email, password})
    }, [email, password])

    return (
        <div className="Login">
            <div className="container">
                <div className="row">
                    <div className="form-info">
                        <div className="title-form tag-title">
                            <h2><span>Sign In</span></h2>
                        </div>
                        <form className="d-flex flex-column" onSubmit={handleSubmit}>
                            <div className="ml-1 row">
                                <label className="col-4" htmlFor="email">Email:</label>
                                <input className="col-8" type="email" id="email"
                                       name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div className="ml-1 row">
                                <label className="col-4" htmlFor="password">Password: </label>
                                <input className="col-8" type="password" id="password"
                                       name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <div className="mt-1 d-flex align-items-center">
                                <input type="submit" className="btn btn-sub"
                                       value="Login"/>
                                <Link className="ml-4 mt-4" to="/register">Don't already have an account?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

Login.propTypes = {}

export default Login
