import React from 'react';
import { IoMdInformationCircleOutline } from "react-icons/io";
import "../tutar/TutarCard.css";

const TutarCard = ({ depozito, toplamTutar, geceSayisi, gecelikFiyat, selectedPaketler }) => {
    return (
        <div className=' tutar-card border  border-yellow-400 p-4 shadow-lg rounded-md'>
            <div>
                <div className='font-semibold text-lg'>Toplam Tutar</div>
                <div className='py-2'> </div>
                <div className='space-y-4'>
                    <div className='flex gap-5 bg-blue-100 p-2 rounded-md'>
                        <div className='font-semibold'>
                            Kartınızdan Çekilecek Tutar
                        </div>
                        <div className='font-semibold'>
                            {parseFloat(toplamTutar).toFixed(2)}₺
                        </div>
                    </div>
                    <div className='flex opacity-70'>
                        <div className=''>
                            Rezervasyon Tutar
                        </div>
                        <div className='font-semibold'>
                            {parseFloat(toplamTutar).toFixed(2)}₺
                        </div>
                    </div>
                    <div className='border border-gray-300'></div>

                    <div>
                        <div className='font-semibold'>Ek Hizmet</div>
                        <div>
                            {selectedPaketler.map((paket, index) => (
                                <div key={index}>
                                    {paket.paketAdi}: {paket.fiyat} TL
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='border border-gray-300'></div>
                    <div className='flex opacity-70'>
                        <div>{geceSayisi} Günlük Toplam Tutar</div>
                        <div className='font-semibold'>{parseFloat(toplamTutar).toFixed(2)}₺</div>
                    </div>
                    <div className='flex justify-start text-xs opacity-70'>
                        <div>Günlük Kiralama Tutarı:</div>
                        <div className='px-1'></div>
                        <div className='font-semibold'>{gecelikFiyat}₺</div>
                    </div>
                    <div>
                        <div className='text-xs opacity-70'>Depozito: {depozito}₺</div>
                    </div>
                    <div className='border border-gray-300'></div>
                    <div>
                        <b>Kiralama Koşulları</b>'nı görmek için <button><span className='underline'>tıklayın</span></button>
                    </div>
                    <div className='border border-yellow-400 p-2 flex bg-pink-50 rounded-md'>
                        <IoMdInformationCircleOutline className='text-7xl justify-start' />
                        <p>
                            Araç teslimatı sırasında tahsil edilecek depozito ücreti için <b>kendi adınıza ait kredi kartınızı, kimliğinizi ve ehliyetinizi</b> yanınızda bulundurmalısınız.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TutarCard