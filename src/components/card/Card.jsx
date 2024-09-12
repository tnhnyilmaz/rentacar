import React from 'react';
import { BsBalloonHeartFill, BsFillFuelPumpFill } from "react-icons/bs";
import { FaCalendarAlt, FaCarCrash, FaCreditCard, FaIdCard } from "react-icons/fa";
import { FaSuitcaseRolling } from "react-icons/fa6";
import { GiGearStickPattern } from "react-icons/gi";
import { IoIosArrowForward } from 'react-icons/io';
import { IoPerson } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import "../card/Card.css";

const Card = ({ car, category }) => {
    const navigate = useNavigate();
    const nameChange = () => {
        if (category?.categoryName == "Ekonomik Kiralık Araçlar") {
            console.log("ecccco")
            return "ekonomik"
        } else if (category?.categoryName == "Konfor Kiralık Araçlar") {
            console.log("konforitooooooo")
            return "konfor"
        }
    }
    const goDetail = (category, id) => {
        navigate(`/araclar/${nameChange(category)}/${id}`);
        console.log(category, "categoryName Name")
    }
    return (
        <div className='car-card border border-yellow-400'>
            <div className='card-header'>
                <div>
                    <span>{category?.categoryName}</span>
                    <h4 className='font-medium'>{car?.name}</h4>
                </div>
                <div>
                    <button onClick={() => goDetail(category?.categoryName, car.id)} className='bg-yellow-400 rounded-full p-2 px-5'>
                        <div className='flex items-center'>
                            <span className='text-sm'>Hemen Kirala</span>
                            <div className='px-1'></div>
                            <IoIosArrowForward />
                        </div>
                    </button>
                </div>
            </div>
            <div className='card-image'>
                <img src={car?.image} alt={car?.name} />
            </div>
            <div className='card-details'>
                <div className='flex '>
                    <div>
                        <ul className='features-list  '>
                            <span>Araç Özellikleri</span>
                            <div className='py-1'></div>
                            <li className='flex  items-center justify-start'>
                                <IoPerson className='mr-2' />
                                {car?.people}
                            </li>
                            <li className='flex  items-center justify-start '>
                                <FaSuitcaseRolling className='mr-2' />
                                {car?.bagaj}
                            </li>
                            <li className='flex items-center justify-start'>
                                <BsBalloonHeartFill className='mr-2' />
                                {car?.airbag}
                            </li>
                            <li className='flex items-center justify-start'>
                                <FaCarCrash className='mr-2' />
                                {car?.fren}
                            </li>
                            <li className='flex items-center justify-start'>
                                <BsFillFuelPumpFill className='mr-2' />
                                {car?.yakit}
                            </li>
                            <li className='flex t file:items-center justify-start'>
                                <GiGearStickPattern className='mr-2' />
                                {car?.vites}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className='rental-conditions'>
                            <span>Kiralama Koşulları</span>
                            <div className='py-1'></div>
                            <li className='flex items-center justify-start'>
                                <FaCalendarAlt className='mr-2' />
                                {category?.age} Yaş ve Üstü
                            </li>
                            <li className='flex items-center justify-start'>
                                <FaIdCard className='mr-2' />
                                {category?.ehliyet} Ehliyet Yaşı ve Üstü
                            </li>
                            <li className='flex items-center justify-start'>
                                <FaCreditCard className='mr-2' />
                                {category?.odeme}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card