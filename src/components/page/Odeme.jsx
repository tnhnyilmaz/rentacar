import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { FaChevronRight } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { addReservation, fetchAvailableCar, fetchFirstAvailableCar } from '../../redux/availableCarSlice';
import { getCarDetails, getEkonomikCarsExcludingId } from '../../redux/carSlice';
import { getEkonomikCategory } from '../../redux/categorySlice';
import AracOdemeCard from '../OdemeComp/AracOdemeCard';
import OdemeForm from '../OdemeComp/OdemeForm';
import KiralamaDegerlendirme from '../detail/KiralamaDegerlendirme/KiralamaDegerlendirme';
import TutarCard from '../detail/tutar/TutarCard';
import "../page/Odeme.css";

const Odeme = () => {
    const { id, category } = useParams();
    const dispatch = useDispatch();
    const { carDetail } = useSelector(state => state.cars);
    const { category: categoryData, categoryState } = useSelector(state => state.category);
    const { firstAvailableCar, firstAvailableCarState } = useSelector(state => state.availableCars)

    const location = useLocation();
    const { alisDate, teslimDate, selectedPaket, geceSayisi, gecelikFiyat, depozito, toplamTutar } = location.state || {};

    const parsedAlisDate = alisDate ? dayjs(alisDate).format('DD/MM/YYYY') : null;
    const parsedTeslimDate = teslimDate ? dayjs(teslimDate).format('DD/MM/YYYY') : null;
    const [formData, setFormData] = useState({ email: '', birthDate: '', ad: '', soyad: '', cepTel: '', tc: '' });
    const [isNextStepCompleted, setIsNextStepCompleted] = useState(false);
    const [successModal, setSuccessModal] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(fetchAvailableCar({ kategori: category, carId: id }));
        dispatch(getEkonomikCarsExcludingId({ categoryName: category, excludedId: id }));
        dispatch(getEkonomikCategory(category));
        dispatch(getCarDetails({ categoryName: category, carId: id }));
        dispatch(fetchFirstAvailableCar({ kategori: category, carId: id }))
    }, [dispatch, category, id]);
    console.log(firstAvailableCar, "firstAvailableCars")
    const handleFormSubmit = (data) => {
        setFormData(data);
    };
    const handleSucces = () => {
        setSuccessModal(false);
        navigate("/")
    }
    const handleNextStep = () => {
        setIsNextStepCompleted(true);
    };
    const handleOdeme = () => {
        if (!firstAvailableCar || firstAvailableCar.length === 0) {
            console.error('No available cars found');
            return;
        }

        const firstCar = firstAvailableCar[0];

        dispatch(addReservation(
            {
                kategori: category,
                carId: carDetail.id,
                garajCarId: firstCar.saseNo,
                startDate: parsedAlisDate,
                finishDate: parsedTeslimDate,
            }
        ));
        console.log("Başarılı");
        setSuccessModal(true);
    }
    return (
        <div className='p-5 pt-7'>
            <div className='flex justify-around'>
                <div className='space-y-6'>
                    <div>
                        <AracOdemeCard carDetail={carDetail} parsedAlisDate={parsedAlisDate} parsedTeslimDate={parsedTeslimDate} />
                    </div>
                    <div>
                        <OdemeForm onFormSubmit={handleFormSubmit} />
                    </div>
                    <div>
                        <KiralamaDegerlendirme formData={formData} onNextStep={handleNextStep} category={categoryData} />
                    </div>
                    <div>
                        <div className='btn-content flex justify-end items-center gap-7'>
                            <div>
                                <div className='text-sm'>Toplam Tutar</div>
                                <div className='font-bold'>{parseFloat(toplamTutar).toFixed(2)} TL</div>
                            </div>
                            <div>
                                <button
                                    onClick={handleOdeme}
                                    disabled={!isNextStepCompleted}
                                    className={`btn flex font-semibold items-center gap-3 rounded-md p-3 px-8 ${isNextStepCompleted ? 'bg-yellow-400 hover:bg-black' : 'bg-gray-400 cursor-not-allowed'}`}
                                >
                                    Ödemeye Geç
                                    <FaChevronRight />
                                </button>

                            </div>
                        </div>
                    </div>

                </div>
                {
                    successModal && (
                        <div className="fullscreen-container" aria-modal="true">
                            <div className="content  flex flex-col items-center">
                                <div>
                                    <h1 className='text-xl font-bold'>                                        Aracınızı Başarıyla Kiraladınız!
                                    </h1>
                                    <button onClick={handleSucces} className='close-btn text-black'>X</button>
                                </div>
                                <div className='py-2'></div>
                                <div className='bg-gray-200 rounded-md p-2 w-full flex flex-col items-center' >
                                    <div>
                                        Teslim Noktamızdan Aracımızı Teslim Alabilirsiniz.
                                    </div>
                                    <img className='max-w-full h-auto' src="https://i.hizliresim.com/emgz7c6.gif" alt="" />
                                </div>
                                <div className='py-2'></div>
                                <button onClick={handleSucces} className=' ok-btn bg-yellow-400 rounded-md p-2 justify-end'>Tamam</button>
                            </div>
                        </div>
                    )
                }
                <div>
                    <TutarCard key={carDetail?.id} depozito={depozito} selectedPaketler={selectedPaket} geceSayisi={geceSayisi} toplamTutar={toplamTutar} gecelikFiyat={gecelikFiyat} />
                </div>
            </div>
        </div>
    );
};

export default Odeme;
