import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import getHistory from '../../../store/getHistory'

function SideBar(props) {
    const rootCategories = [{_id: 0, name: 'All'}, ...props.rootCategories]
    const {productQuery} = props

    return (
        <div className="SideBar col-lg-3 col-md-4 col-12">
            <div className="sidebar-area shop-sidebar">
                <div className="categories tag-title">
                    <h2 style={{'marginTop': '0px'}}><span>Categories</span></h2>
                    <div className="list-group">
                        {rootCategories && rootCategories.map(cat => {
                            return (
                                <div key={`cat-${cat.name}`}
                                     className={`${(productQuery && parseInt(productQuery.category_parent_id) === cat._id) || (cat._id == 0 && !productQuery.category_parent_id) ? 'focus' : ''} list-group-item`} onClick={() => getHistory().push(`/shop?category_parent_id=${cat._id}`)}>{cat.name}</div>
                            )
                        })}
                    </div>
                </div>
                <div className="filter-product">
                    <div className="tag-title">
                        <h2><span>Filter</span></h2>
                    </div>
                    <div className="filter-product-sex">
                        <label className="radio-inline"><input type="radio" name="sex" value="male"
                                                               checked/>Nam</label>
                        <label className="radio-inline"><input type="radio" name="sex" value="female"/>Nữ</label>
                    </div>
                    <div className="filter-product-price">
                        <div className="checkbox">
                            <label><input type="radio" name="price" value="0" checked/> Dưới 1tr</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="radio" name="price" value="1"/> Trên 1tr & Dưới 5tr</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="radio" name="price" value="2"/> Trên 5tr</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

SideBar.propTypes = {
    rootCategories: PropTypes.array.isRequired,
    productQuery: PropTypes.object.isRequired,
}

export default SideBar
