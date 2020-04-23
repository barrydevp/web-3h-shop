import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function ProductBlock(props) {
    const {_id, out_price, discount, name, image_path, description} = props.product
    const price = Math.round(out_price * (1 - discount) * 100) / 100
    const discountPrice = Math.round((out_price - price) * 100) / 100

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
                <Link className="btn-cart" to={`products/${_id}`}>
                    <input  type="submit" name="buy" value="Mua ngay"/>
                </Link>
            </li>
        </ul>
    )
}

ProductBlock.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductBlock
