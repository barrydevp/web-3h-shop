import React from 'react'
import PropTypes from 'prop-types'
import Slider from './Slider'
import Event from './Event'

function Home() {

    return (
        <div className="Home">
            <Slider/>
            <Event/>
        </div>
    )
}

Home.propTypes = {}

export default Home
