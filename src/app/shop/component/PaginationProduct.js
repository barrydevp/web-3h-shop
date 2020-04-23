import React, {useEffect, useMemo} from 'react'
import PropTypes from 'prop-types'
import {Link, useLocation} from 'react-router-dom'
import queryString from 'query-string'

const scrollToTop = () => {
    window.scrollTo(0, 270)
}

function PaginationProduct(props) {
    const paging = useMemo(() => {
        const {page, limit, total} = {
            page: 1,
            limit: 16,
            total: 0,
            ...props.paging
        }

        const totalPage = Math.ceil(total / limit)

        return {
            totalPage,
            page,
        }
    }, [props.paging])

    const renderPaging = useMemo(() => {
        const {totalPage, page} = paging
        const render = []

        const _query = {...props.query}
        delete _query.page

        const currentQueryString = queryString.stringify(_query)

        if (page > 1) {
            render.push(<li key="prev" onClick={scrollToTop}><Link className="paging-link" to={`/shop?${currentQueryString}&page=${page - 1}`}>←</Link></li>)
        }

        for (let i = (page - 1) > 0 ? -1 : 0; (i < 3 && page + i <= totalPage); i++) {
            render.push((page === page + i) ? <li key={`page${i}`} className="active">
                <div className="paging-link">{page + i}</div>
            </li> : <li key={`page${i}`} onClick={scrollToTop}><Link className="paging-link"
                                               to={`/shop?${currentQueryString}&page=${page + i}`}>{page + i}</Link>
            </li>)
        }

        if (page + 1 < totalPage) {
            render.push(<li key="hasmore" onClick={scrollToTop}>
                <div className="paging-link">...</div>
            </li>)
        }

        if (page < totalPage) {
            render.push(<li key="next" className="next"><Link className="paging-link"
                to={`/shop?${currentQueryString}&page=${page + 1}`}>→</Link></li>)
        }

        return render
    }, [paging, props.query])

    return (
        <div className="PaginationProduct row">
            <div className="col-lg-12">
                <div className="pagination-pr text-center">
                    <ul>
                        {renderPaging.length > 0 ? renderPaging : [<li className="next" key="prev">
                            <div className="paging-link">←</div>
                        </li>, <li key="next" className="next">
                            <div className="paging-link">→</div>
                        </li>]}
                    </ul>
                </div>
            </div>
        </div>
    )
}

PaginationProduct.propTypes = {
    paging: PropTypes.object.isRequired,
    query: PropTypes.object.isRequired,
}

export default PaginationProduct
