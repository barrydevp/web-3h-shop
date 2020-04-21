import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'

function Contact() {

    return (
        <div className="contact">
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-md-3">
                        <div className="icon" style={{margin: "0px 35px", padding: "40px 5px"}}>
                            <FontAwesomeIcon icon={faEnvelope} size="3x"/>
                        </div>
                        <div className="icon" style={{margin: "0px 35px", padding: "40px 5px"}}>
                            <FontAwesomeIcon icon={faFacebook} size="3x"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="hotline icon">
                            <FontAwesomeIcon icon={faPhoneVolume} size="2x"/>
                        </div>
                        <div className="hotline hotline-support">
                            <span>SUPPORT</span>
                            <span>QUESTION?</span>
                        </div>
                        <div className="hotline hotline-number">
                            <span className="font-weight-bold">(+84) 00 000 0000</span>
                            <span className="font-weight-bold">support@3h-shop.com</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="icon" style={{margin: "0px 35px", padding: "40px 5px"}}>
                            <FontAwesomeIcon icon={faInstagram} size="3x"/>
                        </div>
                        <div className="icon" style={{margin: "0px 35px", padding: "40px 5px"}}>
                            <FontAwesomeIcon icon={faTwitter} size="3x"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Contact.propTypes = {}

export default Contact
