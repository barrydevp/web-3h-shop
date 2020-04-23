import React from 'react'
import PropTypes from 'prop-types'
import EventItem from './EventItem'

function Event() {

    return (
        <div className="Event event-area">
            <div className="container">
                <div className="row">
                    <div className="col-12 header-event tag-title">
                        <h1><span>Sự Kiện Sắp Ra Mắt</span></h1>
                    </div>
                    <div className="col-12 middle-event">
                        <EventItem src={'images/banner/event3.jpg'}
                                   header={<h1><strong> Giảm Giá 20% - Galaxy Z Flip </strong></h1>}
                                   content={<p> " Cơ hội nằm trong tay bạn, đừng bỏ lỡ khuyến mãi đợt này, săn
                                       ngay <strong> Samsung Galaxy Z Flip </strong> nhận liền tay ưu đãi giảm thêm
                                       1 triệu đồng. Chiếc điện thoại cực chất nay giá cực ưu đãi cho bạn sử dụng
                                       rồi. Điện thoại độc quyền nay còn sale, đi đâu để sắm, đặt nhanh tay hàng để
                                       rinh smartphone xịn về nhà, tiết kiệm quá đã. <strong> Thời gian từ
                                           20/04/2020 - 01/05/2020 </strong>"</p>}
                                   footer={<p style={{textAlign: 'center'}}> - Thông tin chi tiết: Vui lòng liên hệ <a
                                       href="#">tại đây</a> - </p>}/>
                        <EventItem src={'images/banner/banner2.jpg'}
                                   header={<h1><strong> Giảm Giá 20% - Smart Watch </strong></h1>}
                                   content={<p> " Cơ hội nằm trong tay bạn, đừng bỏ lỡ khuyến mãi đợt này, săn
                                       ngay <strong> Samsung Galaxy Z Flip </strong> nhận liền tay ưu đãi giảm thêm
                                       1 triệu đồng. Chiếc điện thoại cực chất nay giá cực ưu đãi cho bạn sử dụng
                                       rồi. Điện thoại độc quyền nay còn sale, đi đâu để sắm, đặt nhanh tay hàng để
                                       rinh smartphone xịn về nhà, tiết kiệm quá đã. <strong> Thời gian từ
                                           20/04/2020 - 01/05/2020 </strong>"</p>}
                                   footer={<p style={{textAlign: 'center'}}> - Thông tin chi tiết: Vui lòng liên hệ <a
                                       href="#">tại đây</a> - </p>}/>
                        <EventItem src={'images/banner/banner8.jpg'}
                                   header={<h1><strong> Siêu Phẩm Laptop Gamming </strong></h1>}
                                   content={<p> " Cơ hội nằm trong tay bạn, đừng bỏ lỡ khuyến mãi đợt này, săn
                                       ngay <strong> Samsung Galaxy Z Flip </strong> nhận liền tay ưu đãi giảm thêm
                                       1 triệu đồng. Chiếc điện thoại cực chất nay giá cực ưu đãi cho bạn sử dụng
                                       rồi. Điện thoại độc quyền nay còn sale, đi đâu để sắm, đặt nhanh tay hàng để
                                       rinh smartphone xịn về nhà, tiết kiệm quá đã. <strong> Thời gian từ
                                           20/04/2020 - 01/05/2020 </strong>"</p>}
                                   footer={<p style={{textAlign: 'center'}}> - Thông tin chi tiết: Vui lòng liên hệ <a
                                       href="#">tại đây</a> - </p>}/>
                    </div>
                    <div className="footer-event">
                    </div>
                </div>
            </div>
        </div>
    )
}

Event.propTypes = {}

export default Event
