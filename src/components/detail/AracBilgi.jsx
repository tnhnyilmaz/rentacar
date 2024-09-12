import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React, { useState } from 'react';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { FaCalendarAlt, FaSuitcaseRolling } from 'react-icons/fa';
import { GiGearStickPattern } from 'react-icons/gi';
import { IoMdCar } from "react-icons/io";
import { LuWallet2 } from "react-icons/lu";
import { MdOutlineSpeed } from "react-icons/md";
import "../detail/AracBilgi.css";

const AracBilgi = ({ categoryData, carDetail, alisDate, setAlisDate, teslimDate, setTeslimDate }) => {
    const [detay, setDetay] = useState(false);

    const handleDetayClick = () => {
        setDetay(prevDetay => !prevDetay);
    };

    return (
        <section className=''>
            <div>
                <div className='arac-card border border-yellow-400 p-4 shadow-lg rounded-md'>
                    <div className='font-bold text-xl'>
                        <h1>Araç ve Teslim Bilgileri</h1>
                    </div>
                    <div className='flex justify-around'>
                        <div className='card-image'>
                            <img src={carDetail.image} alt="" />
                        </div>
                        <div>
                            <h1 className='font-bold'>{carDetail.name}</h1>
                            <div className='flex items-center space-x-4'>
                                <div className='items-center'>
                                    <div className='flex items-center gap-2'>
                                        <FaSuitcaseRolling />{carDetail.bagaj}
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <BsFillFuelPumpFill /> {carDetail.yakit}
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-center gap-2'>
                                        <GiGearStickPattern />{carDetail.vites}
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <FaCalendarAlt className='mr-2' />{categoryData?.age}
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-center gap-2'>
                                        <MdOutlineSpeed />{carDetail?.km} KM
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <LuWallet2 />{carDetail?.depozito}₺
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleDetayClick}>
                            {detay ? 'Detayları Kapat' : 'Detaylar'}
                        </button>
                        {detay &&
                            <div className="fullscreen-container" aria-modal="true">
                                <div className="content">
                                    <div>
                                        <h1 className='text-xl font-bold'>Detaylar</h1>
                                        <button onClick={() => setDetay(false)} className='close-btn text-black'>X</button>
                                    </div>
                                    <div className='py-2'></div>
                                    <div className='bg-gray-200 rounded-md p-2' >
                                        <div className='justify-between'>
                                            {carDetail.name} | {categoryData.categoryName}
                                        </div>
                                        <div className='flex text-left'>
                                            <div className='text-cont p-2'>
                                                <div className='cont-title'> Depozito: {carDetail.depozito}₺</div>
                                                <p>
                                                    Yolculuğunuzda HGS-KGS gibi ödemeleri güvence altına almak amacıyla kredi kartınızda bu tutar bloke edilir. Aracı teslim etmenizin ardından bloke işlemi kaldırılır.
                                                </p>
                                            </div>
                                            <div className='text-cont p-2'>
                                                <div className='cont-title'> Teslimat: Ofis Teslim</div>
                                                <p>
                                                    Aracınızı, rezervasyonunuzu yaptığınız firmanın ofisinden teslim alırsınız.                                                </p>
                                            </div>
                                        </div>
                                        <div className='flex text-left'>
                                            <div className='text-cont p-2'>
                                                <div> Sürücü Yaşı: {categoryData.age}</div>
                                                <p>
                                                    Sürücü, <b>21 yaşından büyük</b> olmalıdır.                                            </p>
                                            </div>
                                            <div className='text-cont p-2'>
                                                <div className='cont-title'> Sürücü Ehliyeti : {categoryData.ehliyet}</div>
                                                <p>
                                                    Sürücü, en az {categoryData.ehliyet}ne sahip olmalıdır.                                         </p>
                                            </div>
                                        </div>
                                        <div className='flex text-left'>
                                            <div className='text-cont p-2'>
                                                <div className='cont-title'> İptal Politikası</div>
                                                <p>
                                                    Rezervasyondan <b>24 saat öncesine kadar</b> ücretsiz iptal edilebilir.                                         </p>
                                            </div>
                                            <div className='text-cont p-2'>
                                                <div className='cont-title'>Kilometre: {carDetail.km}KM</div>
                                                <p>
                                                    Rezervasyondan <b>24 saat öncesine kadar</b> ücretsiz iptal edilebilir.                                         </p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='py-2'></div>
                                    <button onClick={() => setDetay(false)} className=' ok-btn bg-yellow-400 rounded-md p-2 justify-end'>Tamam</button>
                                </div>
                            </div>
                        }
                        <div className='flex bg-gray-200 rounded-md p-1'>
                            <div className='flex items-center space-x-2'>
                                <div>
                                    <div className='flex justify-start gap-3'>
                                        <IoMdCar className='text-3xl' />Teslim Alış
                                    </div>
                                    <div>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                value={alisDate}
                                                onChange={(newValue) => setAlisDate(newValue)}
                                            />
                                        </LocalizationProvider>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <div>
                                    <div className='flex justify-start gap-3'>
                                        <IoMdCar className='text-3xl' />Teslim Ediş
                                    </div>
                                    <div>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                value={teslimDate}
                                                onChange={(newValue) => setTeslimDate(newValue)}
                                            />
                                        </LocalizationProvider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AracBilgi;
