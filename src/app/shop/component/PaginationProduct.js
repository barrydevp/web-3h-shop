import React from 'react'
import PropTypes from 'prop-types'

function PaginationProduct() {

    return (
        <div className="PaginationProduct row">
            <div className="col-lg-12">
                <div className="pagination-pr text-center">
                    <ul>
                        <li className="prev"><a href="#">←</a></li>
                        <li className="active"><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li className="next"><a href="#">→</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

PaginationProduct.propTypes = {}

export default PaginationProduct
