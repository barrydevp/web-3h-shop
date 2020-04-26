import React, {useCallback, useMemo, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import {deleteOrderItemById, updateOrderItem} from '../../../services/api/OrderItemServices'

function CartRow(props) {
    const {order_item, product, price} = props.item
    const {quantity: originalQuantity} = order_item
    const {name, image_path} = product
    const [loading, setLoading] = useState(false)
    const [quantity, setQuantity] = useState(originalQuantity)
    const totalPrice = Math.round(price * quantity * 100) / 100
    const timeoutUpdate = useRef(null)

    const removeItem = useCallback((orderItemId) => async () => {
        if (!orderItemId) {
            alert('Đã có lỗi xảy ra vui lòng refresh lại trang hoặc ấn F5')

            return
        }
        if (loading) return

        setLoading(true)

        try {
            const {data, success, message} = await deleteOrderItemById(orderItemId, {
                quantity: 1,
            })
            if (!success) {
                throw new Error(message)
            }

            if (data) {
                props.setItems((items) => {
                    return items.filter(e => {
                        return e.order_item._id !== orderItemId
                    })
                })
            }

        } catch (error) {
            alert(error.message || 'error')
        }

        setLoading(false)
    }, [])

    const onChangeQuantity = useCallback((orderItemId) => (e) => {
        let _quantity = parseInt(e.target.value)

        if (_quantity <= 0) {
            removeItem(orderItemId)
        }

        setQuantity(_quantity)

        if (timeoutUpdate.current != null) {
            clearTimeout(timeoutUpdate.current)
        }
        timeoutUpdate.current = setTimeout(async () => {
            try {
                const {data, success, message} = await updateOrderItem(orderItemId, {
                    quantity: _quantity,
                })
                if (!success) {
                    throw new Error(message)
                }

                if (data) {
                    props.setItems((items) => {
                        return items.map(e => {
                            return e.order_item._id !== orderItemId ? e : {
                                ...e,
                                order_item: data
                            }
                        })
                    })
                }

            } catch (error) {
                alert(error.message || 'error')
            }
        }, 500)

    }, [])

    return (
        <tr className="CartRow">
            <td className="product-thumbnail">
                <Link to={`/products/${product._id}`}>
                    <img src={image_path} alt={name}/>
                </Link>
            </td>
            <td className="product-name">
                <Link to={`/products/${product._id}`}>{name}</Link>
            </td>
            <td className="product-price">
                <span>{price}$</span>
            </td>
            <td className="product-quantity">
                <input onChange={onChangeQuantity(order_item._id)} type="number" step="1" min="0" value={quantity}/>
            </td>
            <td className="product-subtotal">
                <span>{totalPrice}$</span>
            </td>
            <td className={`product-remove ${loading || !order_item._id ? 'disabled' : ''}`}>
                <button onClick={removeItem(order_item._id)} disabled={loading || !order_item._id}>
                    <FontAwesomeIcon icon={faTrash} size="2x"/>
                </button>
            </td>
        </tr>
    )
}

CartRow.propTypes = {
    item: PropTypes.object.isRequired,
}

export default CartRow
