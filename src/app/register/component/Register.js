import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import GlobalContext from '../../context/global/GlobalContext'
import {register} from '../../../services/api/UserServices'

const _parseUser = user => {
    const {
        name,
        phone,
        address,
        email,
        password
    } = user

    const _user = {password}

    if (name) {
        const _name = name.trim()
        if (_name) {
            _user.name = _name
        }
    }

    if (phone) {
        const _phone = phone.trim()
        if (_phone) {
            _user.phone = _phone
        }
    }

    if (address) {
        const _address = address.trim()
        if (_address) {
            _user.address = _address
        }
    }

    if (email) {
        const _email = email.trim()
        if (_email) {
            _user.email = _email
        }
    }

    return _user
}

function Register() {
    const {setGlobalLoading} = useContext(GlobalContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const history = useHistory()

    const handleRegister = useCallback(async (user) => {
        setGlobalLoading(true)

        const _user = _parseUser(user)

        try {
            const {/*data,*/ success, message} = await register(_user)
            if (!success) {
                throw new Error(message)
            }
            alert('Đăng ký thành công')

            history.push('/login')
        } catch (error) {
            alert(error.message || 'error')
        }

        setGlobalLoading(false)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 160)
    }, [])

    const handleSubmit = useCallback((e) => {
        e.preventDefault()

        handleRegister({
            name: fullName,
            phone: phone,
            address: address,
            email: email,
            password: password
        })
    }, [fullName, phone, address ,email, password])

    return (
        <div className="Register">
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
                            <div className="ml-1 row">
                                <label className="col-4" htmlFor="name">Họ và Tên: </label>
                                <input id="name" type="text" onChange={e => {
                                    setFullName(e.target.value)
                                }} value={fullName} maxLength={45} required={true} />
                            </div>
                            <div className="ml-1 row">
                                <label className="col-4" htmlFor="phone">Số điện thoại: </label>
                                <input id="phone" type="text" onChange={e => {
                                    setPhone(e.target.value)
                                }} value={phone} maxLength={10} required={true} pattern="^0[0-9]{9}$"/>
                            </div>
                            <div className="ml-1 row">
                                <label className="col-4" htmlFor="address">Địa chỉ: </label>
                                <input id="address" type="text" onChange={e => {
                                    setAddress(e.target.value)
                                }} value={address} required={true} maxLength={100}/>
                            </div>
                            <div className="mt-1 d-flex align-items-center">
                                <input type="submit" className="btn btn-sub"
                                       value="Register"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

Register.propTypes = {}

export default Register
