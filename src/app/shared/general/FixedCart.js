import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import CurrentContext from '../../context/current/CurrentContext'
import {faShopify} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function FixedCart() {
    const {currentContext/*, fetchCurrentOrder*/} = useContext(CurrentContext)
    const {total_item} = currentContext

    return (
        <Link to="/cart" className="FixedCart stickcart">
            <div className="icon">
                <FontAwesomeIcon size="3x" icon={faShopify}/>
            </div>
            <div className="content">
                <span>Giỏ hàng có</span>
                <strong>{`${total_item} sản phẩm`}</strong>
            </div>
        </Link>
    )
}

FixedCart.propTypes = {}

export default FixedCart
