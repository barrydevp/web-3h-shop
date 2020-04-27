import React, {useCallback, useContext, useState} from 'react'
import PropTypes from 'prop-types'
import {Link, useHistory} from 'react-router-dom'
import {insertOrderItem} from '../../../services/api/OrderServices'
import GlobalContext from '../../context/global/GlobalContext'
import CurrentContext from '../../context/current/CurrentContext'

function ProductBlock(props) {
    const {setGlobalLoading} = useContext(GlobalContext)
    const {currentContext/*, fetchCurrentOrder*/} = useContext(CurrentContext)
    const {orderId} = currentContext
    const {_id, out_price, discount, name, image_path, description} = props.product
    const price = Math.round(out_price * (1 - discount) * 100) / 100
    const discountPrice = Math.round((out_price - price) * 100) / 100
    const history = useHistory()
    const [loading, setLoading] = useState(false)

    const insertItem = useCallback(({orderId, productId}) => async () => {
        if (!orderId) {
            alert('Đã có lỗi xảy ra vui lòng refresh lại trang hoặc ấn F5')

            return
        }

        if (loading) return

        setGlobalLoading(true)
        setLoading(true)

        try {
            const {/*data,*/ success, message} = await insertOrderItem(orderId, {
                product_id: productId,
                quantity: 1,
            })
            if (!success) {
                throw new Error(message)
            }
            // console.log(data)
            // alert(`Thêm thành công ${productName} vào giỏ hàng.`)

            history.push('/cart')

            // fetchCurrentOrder()

        } catch (error) {
            alert(error.message || 'error')
        }

        setGlobalLoading(false)
        setLoading(false)
    }, [])

    return (
        <ul className="ProductBlock col-md-4 col-6 col-lg-3">
            <li className="item">
                <Link to={`products/${_id}`}>
                    <img width="180" height="180"
                         src={image_path}
                         alt={name}/>
                    <h3>{name}</h3>
                    <div className="price">
                        <strong>{`${price}$`}</strong>
                        {discountPrice > 0 && <span>{`${out_price}$`}</span>}
                    </div>
                    {/*{description && }*/}
                    <div className="promo noimage">
                        <p>{description}</p>
                    </div>
                    {discountPrice > 0 && <label className="discount">GIẢM {`${discountPrice}$`}</label>}
                </Link>
                <div className="btn-cart" onClick={insertItem({orderId, productId: _id})}>
                    <input  type="submit" name="buy" value="Mua ngay"/>
                </div>
            </li>
        </ul>
    )
}

ProductBlock.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductBlock
