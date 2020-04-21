import React from 'react'
import PropTypes from 'prop-types'

function SideBar() {

    return (
        <div className="SideBar col-lg-3 col-md-4 col-12">
            <div className="sidebar-area shop-sidebar">
                <div className="categories tag-title">
                    <h2 style={{'margin-top': '0px'}}><span>Categories</span></h2>
                    <div className="list-group">
                        <a href="#" className="list-group-item">Thời Trang</a>
                        <a href="#" className="list-group-item">Điện Thoại & Phụ Kiện</a>
                        <a href="#" className="list-group-item">Máy Tính & Laptop</a>
                        <a href="#" className="list-group-item">Đồng Hồ</a>
                        <a href="#" className="list-group-item">Nhà Sách</a>
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

SideBar.propTypes = {}

export default SideBar
