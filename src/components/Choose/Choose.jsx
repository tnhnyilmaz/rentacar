import React from 'react';
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaWallet } from "react-icons/fa6";
import { GiNotebook } from "react-icons/gi";
import "../Choose/Choose.css";

const Choose = () => {
    return (
        <section className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='py-12'>
                <div className='text-center mb-12'>
                    <h2 className='choose-title text-3xl font-extrabold text-gray-900 sm:text-4xl'>
                        Why Choose Us
                    </h2>
                </div>
                <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                    <div className='border-banner p-6 rounded-lg hover:bg-yellow-400 duration-300 hover:text-black group'>
                        <div className='space-y-4 text-yellow-400'>
                            <FaWallet className='card-icons text-5xl mx-auto group-hover:text-black duration-300' />
                            <div className='space-y-2 text-white group-hover:text-black duration-300'>
                                <h3 className='text-xl font-semibold'>Fast and Safe</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </div>
                        </div>
                        <button className='mt-4 text-white group-hover:text-black duration-300'>Learn More</button>
                    </div>
                    <div className='border-banner p-6 rounded-lg hover:bg-yellow-400 duration-300 hover:text-black group'>
                        <div className='space-y-4 text-yellow-400'>
                            <AiOutlineSafetyCertificate className='card-icons text-5xl mx-auto group-hover:text-black duration-300' />
                            <div className='space-y-2 text-white group-hover:text-black duration-300'>
                                <h3 className='text-xl font-semibold'>Certified</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </div>
                        </div>
                        <button className='mt-4 text-white group-hover:text-black duration-300'>Learn More</button>
                    </div>
                    <div className='border-banner p-6 rounded-lg hover:bg-yellow-400 duration-300 hover:text-black group'>
                        <div className='space-y-4 text-yellow-400'>
                            <GiNotebook className='card-icons text-5xl mx-auto group-hover:text-black duration-300' />
                            <div className='space-y-2 text-white group-hover:text-black duration-300'>
                                <h3 className='text-xl font-semibold'>Experienced</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </div>
                        </div>
                        <button className='mt-4 text-white group-hover:text-black duration-300'>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Choose