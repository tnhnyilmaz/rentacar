import React from 'react';
import './Banner.css'; // Assuming the CSS file is named Banner.css

const Banner = () => {
    return (
        <section className="banner">
            <div className="container  flex items-center mt-14 p-3 ">
                <div className="content space-y-5">
                    <div className="font-serif text-yellow-400 text-2xl">Effortles</div>
                    <h1 className="banner-title text-7xl">Car Rental</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem deserunt voluptatibus commodi repellat, pariatur exercitationem distinctio quidem laborum vel! Omnis dicta.</p>
                    <div><button className="border p-2 border-yellow-400 bg-yellow-400 rounded-md hover:bg-transparent duration-300">Get Started</button></div>
                </div>
                <div>
                    <img className="banner-image " src="https://car-rental-tcj.netlify.app/assets/banner-car-OqntjgSL.png" alt="Car rental" />
                </div>
            </div>
        </section>
    );
};

export default Banner;
