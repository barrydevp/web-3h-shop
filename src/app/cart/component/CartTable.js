import React from 'react'
import PropTypes from 'prop-types'
import CartHeader from './CartHeader'
import CartRow from './CartRow'

function CartTable(props) {
    const {items} = props

    return (
        <div className="CartRow row">
            <div className="col-lg-12">
                <table className="table table-hover shopping-cart-table">
                    <CartHeader/>
                    <tbody>
                    {items.map((item, i) => {
                        return <CartRow key={`shopping-cart-table-${item.order_item._id || i}`} item={item} setItems={props.setItems}/>
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

CartTable.propTypes = {
    items: PropTypes.array.isRequired,
    setItems: PropTypes.func.isRequired,
}

export default CartTable
