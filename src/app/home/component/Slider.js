import React from 'react'
import PropTypes from 'prop-types'

function Slider() {

    return (
        <div className="Slider slider-area">
            <div id="carousel-slider" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel-id" data-slide-to="0" className="item1"></li>
                    <li data-target="#carousel-id" data-slide-to="1" className="item2"></li>
                    <li data-target="#carousel-id" data-slide-to="2" className="item3 active"></li>
                    <li data-target="#carousel-id" data-slide-to="3" className="item4"></li>
                    <li data-target="#carousel-id" data-slide-to="4" className="item5"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="item slide-banner">
                        <img alt="First slide" src="images/banner/banner.jpg"/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>
                                    "A few clicks is all it takes."
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="item slide-banner">
                        <img alt="First slide" src="images/banner/banner1.jpg"/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>
                                    "Life is hard enough already. Let us make it a little easier."
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="item slide-banner">
                        <img alt="First slide" src="images/banner/banner5.jpg"/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>
                                    "An exciting place for the whole family to shop."
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="item slide-banner">
                        <img alt="First slide" src="images/banner/banner4.jpg"/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>
                                    "Enrich your shopping list wisely."
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="item slide-banner active">
                        <img alt="First slide" src="images/banner/banner3.jpg"/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>
                                    "Favorite brands and hottest trends."
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="left carousel-control" href="#carousel-id" data-slide="prev"><span
                    className="glyphicon glyphicon-chevron-left"></span></a>
                <a className="right carousel-control" href="#carousel-id" data-slide="next"><span
                    className="glyphicon glyphicon-chevron-right"></span></a>
            </div>
        </div>
    )
}

Slider.propTypes = {}

export default Slider
