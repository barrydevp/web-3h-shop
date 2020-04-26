import React from 'react'
import Slider from './Slider'
import Event from './Event'

function Home() {

    return (
        <div className="Home">
            <Slider items={[
                {src: 'images/banner/banner.jpg', caption: '"A few clicks is all it takes."'},
                {src: 'images/banner/banner1.jpg', caption: '"Life is hard enough already. Let us make it a little easier."'},
                {src: 'images/banner/banner3.jpg', caption: '"An exciting place for the whole family to shop."'},
                {src: 'images/banner/banner4.jpg', caption: '"Enrich your shopping list wisely."'},
                {src: 'images/banner/banner5.jpg', caption: '"Favorite brands and hottest trends."'}
                ]}/>
            <Event/>
        </div>
    )
}

Home.propTypes = {}

export default Home
