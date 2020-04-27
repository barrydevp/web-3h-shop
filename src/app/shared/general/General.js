import React from 'react'
import {Link} from 'react-router-dom'

function General() {

    return (
        <div className="General general-info">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <div className="single-info-wrapper">
                            <h4 className="title">Information</h4>
                            <div className="menu">
                                <ul>
                                    <li><Link to="/">Home Page Shop</Link></li>
                                    <li><Link to="/">Flash Sale</Link></li>
                                    <li><Link to="/">Shop</Link></li>
                                    <li><Link to="/">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="single-info-wrapper">
                            <h4 className="title">Information</h4>
                            <div className="menu">
                                <ul>
                                    <li><Link to="/">Home Page Shop</Link></li>
                                    <li><Link to="/">Flash Sale</Link></li>
                                    <li><Link to="/">Shop</Link></li>
                                    <li><Link to="/">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="single-info-wrapper">
                            <h4 className="title">Information</h4>
                            <div className="menu">
                                <ul>
                                    <li><Link to="/">Home Page Shop</Link></li>
                                    <li><Link to="/">Flash Sale</Link></li>
                                    <li><Link to="/">Shop</Link></li>
                                    <li><Link to="/">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

General.propTypes = {}

export default General
