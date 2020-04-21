import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

function CartRow() {

    return (
        <tr className="CartRow">
            <td className="product-thumbnail">
                <a data-toggle="modal" href="#modal-info-cart">
                    <img src="images\products\3.jpeg" alt="image"/>
                </a>
            </td>
            <td className="product-name">
                <a data-toggle="modal" href="#modal-info-cart">Xe đạp</a>
            </td>
            <td className="product-price">
                <span>£80.00</span>
            </td>
            <td className="product-quantity">
                <input type="number" step="1" min="0" value="1" title="1uantity" size="10"/>
            </td>
            <td className="product-discount">
                <input type="text" value="" title="discount" placeholder="VN3637"/>
            </td>
            <td className="product-subtotal">
                <span>£80.00</span>
            </td>
            <td className="product-remove">
                <a href="#">
                    <FontAwesomeIcon icon={faTrash} size="2x"/>
                </a>
            </td>
        </tr>
    )
}

CartRow.propTypes = {}

export default CartRow
