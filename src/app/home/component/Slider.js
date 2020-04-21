import React from 'react'
import PropTypes from 'prop-types'
import {Carousel} from 'react-bootstrap'

function Slider(props) {

    return (
        <div className="Slider slider-area">
            <Carousel>
                {props.items.map(e => (
                        <Carousel.Item>
                            <img className="d-block w-100" alt="slide 5" src={e.src}/>
                            <Carousel.Caption>
                                <h1>
                                    {e.caption}
                                </h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                )}
            </Carousel>
        </div>
    )
}

Slider.propTypes = {}

export default Slider
