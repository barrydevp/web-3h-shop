import React, {useCallback, useContext, useState, useEffect, useMemo} from 'react'
import CartTable from './CartTable'
import Payment from './Payment'
import {getOrderItemByOrderId} from '../../../services/api/OrderServices'
import CurrentContext from '../../context/current/CurrentContext'
import GlobalContext from '../../context/global/GlobalContext'

function Cart() {
    const {setGlobalLoading} = useContext(GlobalContext)
    const {currentContext/*, fetchCurrentOrder*/} = useContext(CurrentContext)
    const {orderId} = currentContext
    const [items, setItems] = useState([])

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

            return {...item, price: Math.round(out_price * (1 - discount) * 100) / 100}
        })
    }, [items])

    return (
        <div className="Cart cart-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tag-title">
                            <h2><span>My Cart</span></h2>
                        </div>
                    </div>
                </div>

                <CartTable items={_items} setItems={setItems}/>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="tag-title">
                            <h2><span>Payment</span></h2>
                        </div>
                    </div>
                </div>

                <Payment items={_items}/>
            </div>
        </div>
    )
}

Cart.propTypes = {}

export default Cart
