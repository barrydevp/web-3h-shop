import React from 'react'
import PropTypes from 'prop-types'

function Brand() {

    return (
        <div className="Brand brand-area">
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-md-3">
                        <img src="images\brand\1.png" alt="Brand Logo"/>
                    </div>
                    <div className="col-md-3">
                        <img src="images\brand\2.png" alt="Brand Logo"/>
                    </div>
                    <div className="col-md-3">
                        <img src="images\brand\3.png" alt="Brand Logo"/>
                    </div>
                    <div className="col-md-3">
                        <img src="images\brand\4.png" alt="Brand Logo"/>
                    </div>
                </div>
                <div className="row text-center footer-brand">
                    <div className="col-md-3 arrow">
                        <img src="images\icons\arrow-left-2.png" alt="Arrow Image"/>
                    </div>
                    <div className="col-md-6">
                        <img src="images\banner\banner7.jpg" alt="Banner Logo"/>
                    </div>
                    <div className="col-md-3 arrow">
                        <img src="images\icons\arrow-right-2.png" alt="Arrow Image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

Brand.propTypes = {}

export default Brand
