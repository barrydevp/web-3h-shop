import React from 'react'
import PropTypes from 'prop-types'

function RightSide() {

    return (
        <div className="RightSide col-0 col-md-4 accessories borderBot">
            <div>
                <h3>Phụ kiện iPhone 11 Pro Max 512GB</h3>
            </div>
            <ul>
                <li>
                    <a href="/tai-nghe/tai-nghe-ep-kanen-ip-225">
                        <img
                            data-original="https://cdn.tgdd.vn/Products/Images/54/202694/tai-nghe-ep-kanen-ip-225-add-600x600.jpg"
                            className="lazy"
                            src="https://cdn.tgdd.vn/Products/Images/54/202694/tai-nghe-ep-kanen-ip-225-add-600x600.jpg"
                        />
                        <h3>Tai nghe EP Kanen IP-225</h3>
                        <strong className="gs">105.000₫</strong>
                        <strong className="gg">150.000₫</strong>
                        <label className="per">Giảm 30%</label>
                    </a>
                </li>
                <li>
                    <a href="/cap-dien-thoai/adapter-sac-1a-ava-jc62">
                        <img
                            data-original="https://cdn.tgdd.vn/Products/Images/58/197292/adapter-sac-1a-ava-jc62-1-600x600.jpg"
                            className="lazy"
                            src="https://cdn.tgdd.vn/Products/Images/58/197292/adapter-sac-1a-ava-jc62-1-600x600.jpg"
                        />
                        <h3>Adapter Sạc 1A AVA JC62</h3>
                        <strong>70.000₫</strong>
                    </a>
                </li>
                <li>
                    <a href="/cap-dien-thoai/cap-lightning-20cm-ava-speed-ii-trang">
                        <img
                            data-original="https://cdn.tgdd.vn/Products/Images/58/201059/cap-lightning-20cm-ava-speed-ii-trang-1-1-600x600.jpg"
                            className="lazy"
                            src="https://cdn.tgdd.vn/Products/Images/58/201059/cap-lightning-20cm-ava-speed-ii-trang-1-1-600x600.jpg"
                        />
                        <h3>Cáp Lightning 20 cm AVA Speed II Trắng</h3>
                        <strong className="gs">40.000₫</strong>
                        <strong className="gg">50.000₫</strong>
                        <label className="per">Giảm 20%</label>
                    </a>
                </li>
                <li>
                    <a href="/cap-dien-thoai/cap-lightning-20cm-evalu-ltl-02">
                        <img
                            data-original="https://cdn.tgdd.vn/Products/Images/58/88355/cap-lightning-20cm-evalu-ltl-02-avatar-1-600x600.jpg"
                            className="lazy"
                            src="https://cdn.tgdd.vn/Products/Images/58/88355/cap-lightning-20cm-evalu-ltl-02-avatar-1-600x600.jpg"
                        />
                        <h3>Dây cáp Lightning 20 cm e.VALU LTL-02</h3>
                        <strong>70.000₫</strong>
                    </a>
                </li>
                <li>
                    <a href="/op-lung-flipcover/op-lung-huawei-nova-2i-deo-solid-osmia-den">
                        <img
                            data-original="https://cdn.tgdd.vn/Products/Images/60/154213/op-lung-huawei-nova-2i-deo-solid-osmia-den-avatar-1-600x600.jpg"
                            className="lazy"
                            src="https://cdn.tgdd.vn/Products/Images/60/154213/op-lung-huawei-nova-2i-deo-solid-osmia-den-avatar-1-600x600.jpg"
                        />
                        <h3>Ốp lưng Huawei Nova 2i nhựa dẻo SOLID OSMIA Đen</h3>
                        <strong>50.000₫</strong>
                    </a>
                </li>
            </ul>
            <a className="viewall" href="/phu-kien/dtdd/iphone-11-pro-max-512gb">Xem tất cả phụ kiện iPhone 11 Pro Max
                512GB</a>
        </div>
    )
}

RightSide.propTypes = {
    product: PropTypes.object.isRequired,
}

export default RightSide
