import React from 'react'
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { FaCalendarAlt, FaSuitcaseRolling } from 'react-icons/fa';
import { GiGearStickPattern } from 'react-icons/gi';
import { LuWallet2 } from 'react-icons/lu';
import { MdOutlineSpeed } from 'react-icons/md';
const AracOdemeCard = ({ carDetail, parsedAlisDate, parsedTeslimDate, }) => {
    return (
        <div className='border border-yellow-400 rounded-md items-center'>
            <div className='flex justify-around p-2'>
                <img className='img-odeme' src={carDetail.image} alt="" />
                <div className='justify-items-center'>
                    <div className='font-bold text-xl'>{carDetail.name}</div>
                    <div className='py-2'></div>
                    <div className='flex space-x-5 text-left justify-start'>
                        <div className='items-start  text-left justify-start'>
                            <div className='flex items-center gap-2'>
                                <FaSuitcaseRolling />{carDetail.bagaj}
                            </div>
                            <div className='flex items-center gap-2'>
                                <BsFillFuelPumpFill /> {carDetail.yakit}
                            </div>
                            <div className='flex items-center gap-2'>
                                <GiGearStickPattern />{carDetail.vites}
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center gap-2 text-left'>
                                <FaCalendarAlt className='mr-2' />
                                <div>{"age"}</div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MdOutlineSpeed />
                                <div>{carDetail?.km} KM</div>
                            </div>
                            <div className='flex items-center gap-2 text-left '>
                                <LuWallet2 />
                                <div className='text-left'>{carDetail?.depozito}₺</div>
                            </div>
                        </div>
                    </div>
                    <div className='font-semibold'>
                        <div>Teslim Alış: {parsedAlisDate}</div>
                        <div>Teslim Ediş: {parsedTeslimDate}</div>
                        <div>Teslim Yeri: Ankara/Gölbaşı</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AracOdemeCard