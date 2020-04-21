import React from 'react'
import PropTypes from 'prop-types'
import LeftSide from './LeftSide'
import Center from './Center'
import RightSide from './RightSide'

function Detail() {

    return (
        <div className="Detail product-details-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="row">
                            <LeftSide/>
                            <Center/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <RightSide/>
                    </div>
                </div>
            </div>
        </div>
    )
}

Detail.propTypes = {}

export default Detail
