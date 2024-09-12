import React from 'react'
import "../AllCars/AllCars.css"
import { IoPerson } from "react-icons/io5";
import { FaSuitcaseRolling } from "react-icons/fa6";
import { BsBalloonHeartFill } from "react-icons/bs";
import { FaCarCrash } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa"
import { FaCreditCard } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";


const cars = [
    {
        category: "Ekonomik Kiralık Araçlar",
        name: "Citroen C3",
        image: "https://www.avis.com.tr/Avis/media/Avis/Cars/f-citroen-c3.png",
        features: {
            person: "5 Yetişkin",
            bagaj: "2 Büyük Bavul",
            airbag: "Yolcu Airbag",
            fren: "ABS",
            yakit: "Dizel/Benzin",
            vites: "Otomatik"
        }
    },
    {
        category: "Ekonomik Kiralık Araçlar",
        name: "Citroen C Elysee",
        image: "https://www.avis.com.tr/Avis/media/Avis/Cars/n-citroen-c-elysee.png",
        features: {
            person: "5 Yetişkin",
            bagaj: "2 Büyük Bavul",
            airbag: "Yolcu Airbag",
            fren: "ABS",
            yakit: "Dizel/Benzin",
            vites: "Manuel"
        }
    },
    {
        category: "Ekonomik Kiralık Araçlar",
        name: "Fiat Egea",
        image: "https://www.avis.com.tr/Avis/media/Avis/Cars/n-fiat-egea.png",
        features: {
            person: "5 Yetişkin",
            bagaj: "2 Büyük Bavul",
            airbag: "Yolcu Airbag",
            fren: "ABS",
            yakit: "Dizel/Benzin",
            vites: "Otomatik"
        }
    },
    {
        category: "Konfor Kiralık Araçlar",
        name: "Ford Focus",
        image: "https://www.avis.com.tr/Avis/media/Avis/Cars/o-ford-focus.png",
        features: {
            person: "5 Yetişkin",
            bagaj: "2 Büyük Bavul",
            airbag: "Yolcu Airbag",
            fren: "ABS",
            yakit: "Hybrid/Dizel/Benzin",
            vites: "Otomatik"
        }
    },
]
const categories = [
    {
        name: "Ekonomik Kiralık Araçlar",
        features: {
            age: "21 Yaş ve Üstü",
            ehliyet: "Ehliyet Yaşı 1 ve üzeri",
            odeme: "1 Kredi Kartı"
        }
    },
    {
        name: "Konfor Kiralık Araçlar",
        features: {
            age: "21 Yaş ve Üstü",
            ehliyet: "Ehliyet Yaşı 1 ve üzeri",
            odeme: "1 Kredi Kartı"
        }
    }
]

const AllCars = () => {
    return (
        <section>
            <div className='container'>
                <div className='border-container'>
                    {cars.map((car, carIndex) => {
                        const carCategory = categories.find(cat => cat.name === car.category);
                        return (
                            <div key={carIndex} className='car-card border border-yellow-400 p-5'>
                                <div className='card-header flex items-center'>
                                    <div>
                                        <span>{car.category}</span>
                                        <h4>{car.name}</h4>
                                    </div>
                                    <div>
                                        <button className='bg-yellow-400 rounded-full p-2 px-5'>
                                            <div className='flex items-center'>
                                                <span className='text-sm'>Hemen Kirala</span>
                                                <div className='px-1'></div>
                                                <IoIosArrowForward />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div className=''>
                                    <img src={car.image} alt={car.name} />
                                </div>
                                <div className='flex'>
                                    <ul className='text-left'>
                                        <span>Araç Özellikleri</span>
                                        <li className='flex justify-start items-center'>
                                            <IoPerson className='mr-2' />
                                            {car.features.person}
                                        </li>
                                        <li className='flex justify-start items-center'>
                                            <FaSuitcaseRolling className='mr-2' />
                                            {car.features.bagaj}
                                        </li>
                                        <li className='flex justify-start items-center'>
                                            <BsBalloonHeartFill className='mr-2' />
                                            {car.features.airbag}
                                        </li>
                                        <li className='flex justify-start items-center'>
                                            <FaCarCrash className='mr-2' />
                                            {car.features.fren}
                                        </li>
                                        <li className='flex justify-start items-center'>
                                            <BsFillFuelPumpFill className='mr-2' />
                                            {car.features.yakit}
                                        </li>
                                        <li className='flex text-left justify-start items-center'>
                                            <GiGearStickPattern className='mr-2' />
                                            {car.features.vites}
                                        </li>
                                    </ul>
                                    <ul>
                                        <span>Kiralama Koşulları</span>
                                        {carCategory && (
                                            <>
                                                <li className='flex  text-left justify-start items-center'>
                                                    <FaCalendarAlt className='mr-2' />
                                                    {carCategory.features.age}
                                                </li>
                                                <li className='flex  text-left justify-start items-center' >
                                                    <FaIdCard className='mr-2' />
                                                    {carCategory.features.ehliyet}
                                                </li>
                                                <li className='flex  text-left justify-start items-center'>
                                                    <FaCreditCard className='mr-2' />
                                                    {carCategory.features.odeme}
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default AllCars