import React, {useCallback, useContext, useEffect, useState} from 'react'
import {applyCoupon, removeCoupon} from '../../../services/api/OrderServices'
import GlobalContext from '../../context/global/GlobalContext'
import PropTypes from 'prop-types'

function CouponDetail(props) {
    const {orderId, coupon, fetchOrderCoupon} = props
    const {setGlobalLoading} = useContext(GlobalContext)
    const [code, setCode] = useState((coupon && coupon.code) || '')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setCode((coupon && coupon.code) || '')
    }, [coupon])

    const handleApplyCoupon = useCallback(async (orderId, code) => {
        if (!orderId) {
            alert('Đã có lỗi xảy ra vui lòng refresh lại trang hoặc ấn F5')

            return
        }

        if (loading) return
        if (!code) return

        setGlobalLoading(true)
        setLoading(true)

        try {
            const {/*data,*/ success, message} = await applyCoupon(orderId, {code})
            if (!success) {
                throw new Error(message)
            }
            fetchOrderCoupon(orderId)
            alert(`Áp dụng mã ${code} thành công`)

        } catch (error) {
            alert(error.message || 'error')
        }

        setGlobalLoading(false)
        setLoading(false)
    }, [])

    const handleRemoveCoupon = useCallback(async (orderId, code) => {
        if (!orderId) {
            alert('Đã có lỗi xảy ra vui lòng refresh lại trang hoặc ấn F5')

            return
        }

        if (loading) return
        if (!code) return

        setGlobalLoading(true)
        setLoading(true)

        try {
            const {/*data,*/ success, message} = await removeCoupon(orderId)
            if (!success) {
                throw new Error(message)
            }
            fetchOrderCoupon(orderId)
            alert(`Xóa mã ${code} thành công`)

        } catch (error) {
            alert(error.message || 'error')
        }

        setGlobalLoading(false)
        setLoading(false)
    }, [])

    return (
        <div className="CouponDetail">
            <form onSubmit={(e) => {
                e.preventDefault()
                handleApplyCoupon(orderId, code)
            }}>
                <div className="info row">
                    <div className="col-4">
                        <input type="text" onChange={e => {
                            setCode(e.target.value)
                        }} value={code} maxLength={100} placeholder="Mã giảm giá"/>
                    </div>
                    {coupon && <div className="col-8 d-flex align-items-center justify-content-center">
                        <b className="col-9">{('Mô tả: ' + coupon.description)}</b>
                        <button disabled={loading || !orderId} onClick={() => {
                            handleRemoveCoupon(orderId, code)
                        }} type="button" className="delete-coupon col-3"><span></span>Xóa</button>
                    </div>}
                    <div className="order-button-payment col-12 mt-3">
                        <input className={`buy_now ${loading || !orderId ? 'disabled' : ''}`} type="submit"
                               disabled={loading || !orderId} value="Áp dụng mã"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

CouponDetail.propTypes = {
    orderId: PropTypes.number.isRequired,
    fetchOrderCoupon: PropTypes.func.isRequired,
}

export default CouponDetail
