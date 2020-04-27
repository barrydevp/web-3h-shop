import React, {useCallback, useContext, useState} from 'react'
import {checkoutOrder} from '../../../services/api/OrderServices'
import GlobalContext from '../../context/global/GlobalContext'
import CurrentContext from '../../context/current/CurrentContext'

const _parseCheckout = body => {
    const {customer, note, payment_type} = body
    const {
        full_name,
        phone,
        address,
        email
    } = customer

    const _checkout = {}

    const _customer = {}

    if (full_name) {
        const _full_name = full_name.trim()
        if (_full_name) {
            _customer.full_name = _full_name
        }
    }

    if (phone) {
        const _phone = phone.trim()
        if (_phone) {
            _customer.phone = _phone
        }
    }

    if (address) {
        const _address = address.trim()
        if (_address) {
            _customer.address = _address
        }
    }

    if (email) {
        const _email = email.trim()
        if (_email) {
            _customer.email = _email
        }
    }

    _checkout.customer = _customer

    if (note) {
        const _note = note.trim()
        if (_note) {
            _checkout.note = _note
        }
    }

    _checkout.payment_type = payment_type

    return _checkout
}

function BillingDetail(props) {
    const {orderId} = props
    const {setGlobalLoading} = useContext(GlobalContext)
    const {fetchCurrentOrder} = useContext(CurrentContext)
    const [loading, setLoading] = useState(false)
    const [paymentType, setPaymentType] = useState(1)
    const [fullName, setFullName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [note, setNote] = useState('')

    const handleCheckout = useCallback(async (orderId) => {
        if (!orderId) {
            alert('Đã có lỗi xảy ra vui lòng refresh lại trang hoặc ấn F5')

            return
        }

        if (loading) return

        setGlobalLoading(true)
        setLoading(true)

        const _checkout = _parseCheckout({
            customer: {
                full_name: fullName,
                phone: phone,
                address: address,
                email: email,
            },
            note: note,
            payment_type: paymentType,
        })

        try {
            const {/*data,*/ success, message} = await checkoutOrder(orderId, _checkout)
            if (!success) {
                throw new Error(message)
            }
            alert("Đặt hàng thành công")

            fetchCurrentOrder()
        } catch (error) {
            alert(error.message || 'error')
        }

        setGlobalLoading(false)
        setLoading(false)
    }, [paymentType, fullName, phone, address, email, note])

    return (
        <div className="BillingDetail">
            <div className="checkout-bill">
                <h3 className="title-7 margin-bottom-50">Thông tin thanh toán</h3>
            </div>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleCheckout(orderId)
            }}>
                <div className="info row">
                    <div className="name-phone col-12 row">
                        <div className="col-6">
                            <input type="text" onChange={e => {
                                setFullName(e.target.value)
                            }} value={fullName} maxLength={45} required={true} placeholder="Họ và Tên"/>
                        </div>
                        <div className="col-6">
                            <input type="text" onChange={e => {
                                setPhone(e.target.value)
                            }} value={phone} maxLength={10} required={true} placeholder="Số điện thoại" pattern="^0[0-9]{9}$"/>
                        </div>
                    </div>
                    <div className="col-12">
                        <input type="text" onChange={e => {
                            setAddress(e.target.value)
                        }} value={address} required={true} maxLength={100} placeholder="Địa chỉ"/>
                    </div>
                    <div className="col-12">
                        <input type="email" onChange={e => {
                            setEmail(e.target.value)
                        }} value={email} maxLength={100} placeholder="Email (không bắt buộc)"/>
                    </div>
                    <div className="col-12">
                        <input type="text" onChange={e => {
                            setNote(e.target.value)
                        }} value={note} maxLength={500} placeholder="Yêu cầu khác (không bắt buộc)"/>
                    </div>
                </div>
                <div className="payment-method mt-4">
                    <div className="payment-accordion">
                        <input type="radio" id="payment1" onChange={() => setPaymentType(1)}
                               checked={paymentType === 1}/>
                        <label htmlFor="payment1">Ship COD</label><br/>
                        <input type="radio" id="payment2" onChange={() => setPaymentType(2)}
                               checked={paymentType === 2}/>
                        <label htmlFor="payment2">Thanh toán qua thẻ ngân hàng</label><br/>
                        <input type="radio" id="payment3" onChange={() => setPaymentType(3)}
                               checked={paymentType === 3}/>
                        <label htmlFor="payment3">Thanh toán tại cửa hàng</label><br/>
                    </div>
                    <div className="order-button-payment">
                        <input className={`buy_now ${loading || !orderId ? 'disabled' : ''}`} type="submit"
                               disabled={loading || !orderId} value="Đặt hàng"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

BillingDetail.propTypes = {
}

export default BillingDetail
