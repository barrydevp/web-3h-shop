import React from 'react'
import PropTypes from 'prop-types'

function LeftSide() {

    return (
        <div className="LeftSide col-md-5 col-12">

            <div className="product-details-tab-1 mb-40">
                <div className="tab-content product-details-large">
                    <div className="tab-pane active" id="product-details-tab-1-1">
                        <div className="easyzoom easyzoom--overlay">
                            <a href="http://placehold.it/700x400"><img src="http://placehold.it/700x400"
                                                                       alt="Images of Product"/></a>
                        </div>
                    </div>
                    <div className="tab-pane" id="product-details-tab-1-2">
                        <div className="easyzoom easyzoom--overlay">
                            <a href="http://placehold.it/700x400"><img src="http://placehold.it/700x400"
                                                                       alt="Images of Product"/></a>
                        </div>
                    </div>
                    <div className="tab-pane" id="product-details-tab-1-3">
                        <div className="easyzoom easyzoom--overlay">
                            <a href="http://placehold.it/700x400"><img src="http://placehold.it/700x400"
                                                                       alt="Images of Product"/></a>
                        </div>
                    </div>
                    <div className="tab-pane" id="product-details-tab-1-4">
                        <div className="easyzoom easyzoom--overlay">
                            <a href="http://placehold.it/700x400"><img src="http://placehold.it/700x400"
                                                                       alt="Images of Product"/></a>
                        </div>
                    </div>
                    <div className="tab-pane" id="product-details-tab-1-5">
                        <div className="easyzoom easyzoom--overlay">
                            <a href="http://placehold.it/700x400"><img src="http://placehold.it/700x400"
                                                                       alt="Images of Product"/></a>
                        </div>
                    </div>
                </div>

                <div className="nav product-details-small product-details-tab-carousel-active owl-carousel">
                    <a className="active" href="#product-details-tab-1-1">
                        <img src="images\product\1.jpeg" alt="Images of Product"/>
                    </a>
                    <a href="#product-details-tab-1-2">
                        <img src="images\product\2.jpeg" alt="Images of Product"/>
                    </a>
                    <a href="#product-details-tab-1-3">
                        <img src="images\product\3.jpeg" alt="Images of Product"/>
                    </a>
                    <a href="#product-details-tab-1-4">
                        <img src="images\product\4.jpeg" alt="Images of Product"/>
                    </a>
                    <a href="#product-details-tab-1-5">
                        <img src="images\product\5.jpeg" alt="Images of Product"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

LeftSide.propTypes = {}

export default LeftSide
