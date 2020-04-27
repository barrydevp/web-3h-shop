import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react'
import BillingDetail from './BillingDetail'
import YourOrder from './YourOrder'
import GlobalContext from '../../context/global/GlobalContext'
import CurrentContext from '../../context/current/CurrentContext'
import {getOrderItemByOrderId} from '../../../services/api/OrderServices'

function CheckOut() {
    const {setGlobalLoading} = useContext(GlobalContext)
    const {currentContext, fetchCurrentOrder} = useContext(CurrentContext)
    const {orderId} = currentContext
    const [items, setItems] = useState([])

    useEffect(() => {
        fetchCurrentOrder()
    }, [])

    const fetchItems = useCallback(async (orderId) => {
        if (!orderId) return
        setGlobalLoading(true)
        try {
            const {data, success, message} = await getOrderItemByOrderId(orderId)
            if (!success) {
                throw new Error(message)
            }

            setItems(data || [])

        } catch (error) {
            alert(error.message || 'error')
        }

        setGlobalLoading(false)
    }, [])

    useEffect(() => {
        fetchItems(orderId)
    }, [orderId])

    const _items = useMemo(() => {
        return items.map(item => {
            const {out_price, discount} = item.product
            const {quantity} = item.order_item

            const price = Math.round(out_price * (1 - discount) * 100) / 100
            const totalPrice = Math.round(price * quantity * 100) / 100
            const totalOriginalPrice = Math.round(out_price * quantity * 100) / 100

            return {...item, price, totalPrice, totalOriginalPrice}
        })
    }, [items])

    return (
        <div className="CheckOut checkout-area mt-5">
            <div className="container">
                <div className="checkout-bill-order">
                    <div className="row">
                        <div className="col-md-6">
                            <BillingDetail orderId={orderId}/>
                        </div>

                        <div className="col-md-6">
                            <YourOrder items={_items}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

CheckOut.propTypes = {}

export default CheckOut
