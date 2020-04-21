import React from 'react'
import PropTypes from 'prop-types'

function EventItem(props) {

    return (
        <div className="EventItem content-event">
            <img alt="event-item" src={props.src}/>
            <div className="info">
                <div className="text">
                    {props.header}
                    {props.content}
                    {props.footer}
                </div>
            </div>
        </div>
    )
}

EventItem.propTypes = {
    header: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
    footer: PropTypes.object.isRequired,
}

export default EventItem
