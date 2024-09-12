import React from 'react'
import "../AboutBanner/AboutBanner.css"
const AboutBanner = () => {
    return (
        <section className="banner">
            <div className='banner-border'>
                <div className="container  flex items-center mt-14 ">
                    <div>
                        <img className="banner-image " src="https://car-rental-tcj.netlify.app/assets/car1-hZQ2D7_f.png" alt="Car rental" />
                    </div>
                    <div className='px-12'></div>
                    <div className="content space-y-5 bg-red-50">
                        <h1 className="banner-title text-7xl">About Us</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem deserunt voluptatibus commodi repellat, pariatur exercitationem distinctio quidem laborum vel! Omnis dicta.</p>
                        <div><button className="border p-2 border-yellow-400 bg-transparent rounded-md hover:bg-yellow-400 duration-300">Get Started</button></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutBanner