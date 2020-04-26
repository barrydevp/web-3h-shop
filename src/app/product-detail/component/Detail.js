import React from 'react'
import PropTypes from 'prop-types'
import LeftSide from './LeftSide'
import Center from './Center'
import RightSide from './RightSide'

function Detail(props) {

    return (
        <div className="Detail rowdetail row">
            <LeftSide product={props.product}/>
            <Center product={props.product}/>
            <RightSide product={props.product}/>
        </div>
    )
}

Detail.propTypes = {
    product: PropTypes.object.isRequired,
}

export default Detail
