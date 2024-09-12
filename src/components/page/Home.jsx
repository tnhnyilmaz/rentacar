import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import AboutBanner from '../AboutBanner/AboutBanner'
import Choose from '../Choose/Choose'

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutBanner />
            <Choose />
        </div>
    )
}

export default Home