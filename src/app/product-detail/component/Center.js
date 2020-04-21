import React from 'react'
import PropTypes from 'prop-types'

function Center() {

    return (
        <div className="Center col-md-7 col-12">
            <div className="product-details-info bg-white-4 mb-40">
                <h4>Ornare Sed Consequat</h4>
                <div className="product-rattings">
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star-half-o"></i></span>
                    <span><i className="fa fa-star-o"></i></span>
                </div>
                <div className="product-price">
                    <span>£145.00</span>
                    <del>£150.00</del>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id
                    aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.</p>
                <p className="in-stock"><i className="fa fa-check-circle"></i> 94 In Stock</p>
                <div className="product-quantity clearfix">
                    <label className="pull-left">Qty : </label>
                    <div className="cart-plus-minus pull-left">
                        <input type="text" value="02" name="qtybutton" className="cart-plus-minus-box"/>
                    </div>
                </div>
                <div className="product-action clearfix">
                    <a href="#" data-toggle="tooltip" data-original-title="Add to cart"><i
                        className="fa fa-shopping-bag"></i> ADD TO CART</a>
                    <a href="#" data-toggle="tooltip" data-original-title="Compare"><i
                        className="fa fa-exchange"></i></a>
                    <a href="wishlist.html" data-toggle="tooltip" data-original-title="Add to Wishlist"><i
                        className="fa fa-heart-o"></i></a>
                </div>
                <div className="product-meta">
                    <div className="meta-item">
                        <ul>
                            <li>SKU:</li>
                            <li><a href="#">N/A</a></li>
                        </ul>
                    </div>
                    <div className="meta-item">
                        <ul>
                            <li>Categories:</li>
                            <li><a href="#">Electronics,</a></li>
                            <li><a href="#">Mobiles & Tablets</a></li>
                        </ul>
                    </div>
                    <div className="meta-item">
                        <ul>
                            <li>Tags:</li>
                            <li><a href="#">clothes,</a></li>
                            <li><a href="#">Fashion,</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

Center.propTypes = {}

export default Center
