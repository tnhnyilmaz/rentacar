import React, { useState } from 'react';
import { FaCheck, FaPlus } from "react-icons/fa";
import "../detail/EkHizmet.css";

const EkHizmet = ({ paketAdi, fiyat, icon }) => {

    const [added, setAdded] = useState(false);

    const handleClick = () => {
        setAdded(!added);
    };



    return (
        <section className=''>
            <div>
                <div className='arac-card  border border-yellow-400 p-4 shadow-lg rounded-md'>
                    <div className='flex items-center'>
                        <div className=' '>
                            <div className='flex justify-start space-x-8'>
                                <div className='circle text-2xl'>
                                    {icon}
                                </div>
                                <div>
                                    <h2 className='font-bold'>{paketAdi}</h2>
                                    <div>Detaylar</div>
                                </div>
                            </div>
                        </div>
                        <div className=' '>
                            <div className='flex justify-start  items-center space-x-8'>
                                <div className=' font-bold'>
                                    {fiyat} TL
                                </div>
                                <div className='px-2'></div>
                                <div>
                                    <button onClick={handleClick} 
                                    className={`flex font-bold items-center gap-2 ${added ? 'bg-green-400' : 'bg-yellow-400'} rounded-md p-2`}>
                                        {added ? <FaCheck /> : <FaPlus />}  {/* Duruma göre icon */}
                                        {added ? "Eklendi" : "Ekle"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default EkHizmet