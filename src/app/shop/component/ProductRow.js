import React from 'react'
import PropTypes from 'prop-types'

function ProductRow() {

    return (
        <div className="CartRow container middle-product">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="cart">
                        <a data-toggle="modal" href="#modal-info-cart"><img className="cart-img-top"
                                                                            src="http://placehold.it/700x400"
                                                                            alt=""/></a>
                        <div className="cart-body">
                            <h4 className="cart-title">
                                <a data-toggle="modal" href="#modal-info-cart">Item One</a>
                            </h4>
                            <h5>$24.99</h5>
                            <p className="cart-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Amet numquam aspernatur!</p>
                        </div>
                        <div className="cart-footer">
                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                            <input className="btn-cart" type="submit" name="buy" value="Mua ngay"/>
                            <a data-toggle="modal" href="#modal-info-cart">Chi tiết</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="cart">
                        <a data-toggle="modal" href="#modal-info-cart"><img className="cart-img-top"
                                                                            src="http://placehold.it/700x400"
                                                                            alt=""/></a>
                        <div className="cart-body">
                            <h4 className="cart-title">
                                <a data-toggle="modal" href="#modal-info-cart">Item One</a>
                            </h4>
                            <h5>$24.99</h5>
                            <p className="cart-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Amet numquam aspernatur!</p>
                        </div>
                        <div className="cart-footer">
                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                            <input className="btn-cart" type="submit" name="buy" value="Mua ngay"/>
                            <a data-toggle="modal" href="#modal-info-cart">Chi tiết</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="cart">
                        <a data-toggle="modal" href="#modal-info-cart"><img className="cart-img-top"
                                                                            src="http://placehold.it/700x400"
                                                                            alt=""/></a>
                        <div className="cart-body">
                            <h4 className="cart-title">
                                <a data-toggle="modal" href="#modal-info-cart">Item One</a>
                            </h4>
                            <h5>$24.99</h5>
                            <p className="cart-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Amet numquam aspernatur!</p>
                        </div>
                        <div className="cart-footer">
                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                            <input className="btn-cart" type="submit" name="buy" value="Mua ngay"/>
                            <a data-toggle="modal" href="#modal-info-cart">Chi tiết</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductRow.propTypes = {}

export default ProductRow
