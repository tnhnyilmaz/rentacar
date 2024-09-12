
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { FaBabyCarriage } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { MdPersonAdd } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { fetchAvailableCar } from '../../redux/availableCarSlice';
import { getCarDetails, getEkonomikCarsExcludingId } from '../../redux/carSlice';
import { getEkonomikCategory } from '../../redux/categorySlice';
import "../detail/Detail.css";
import AracBilgi from './AracBilgi';
import EkHizmet from './EkHizmet';
import TutarCard from './tutar/TutarCard';

const Detail = () => {

    const { id, category } = useParams();
    const dispatch = useDispatch();
    const { carDetail, carDetailState } = useSelector(state => state.cars);
    const { category: categoryData, categoryState } = useSelector(state => state.category);
    const [alisDate, setAlisDate] = useState(dayjs());
    const [teslimDate, setTeslimDate] = useState(dayjs());
    const [toplamTutar, setToplamTutar] = useState(0);
    const [geceSayisi, setGeceSayisi] = useState(0);
    const [gecelikFiyat, setGecelikFiyat] = useState(0);
    const [selectedPaketler, setSelectedPaketler] = useState([]);
    const { availableCars, noCarsAvailable } = useSelector(state => state.availableCars);
    const { alternatifCars, alternatifCarsState } = useSelector(state => state.cars);
    const [devam, setDevam] = useState(false);
    const navigate = useNavigate();
    console.log(availableCars, "availableCars")
    const cleanId = id.replace(':', '');
    const cleanCategory = category.replace(':', '');
    console.log(cleanId, "car İd")
    console.log(cleanCategory, "cattttt")
    console.log(carDetail, "detail")
    console.log(carDetail?.depozito, "depozito")

    useEffect(() => {
        console.log("available giriş")
        dispatch(fetchAvailableCar({ kategori: cleanCategory, carId: cleanId }))
        dispatch(getEkonomikCarsExcludingId({ categoryName: cleanCategory, excludedId: cleanId }));
        console.log("available çıkış")
    }, [dispatch, cleanCategory, cleanId])

    useEffect(() => {
        console.log(category, "category category")

        dispatch(getCarDetails({ categoryName: cleanCategory, carId: cleanId }));
        dispatch(getEkonomikCategory(cleanCategory))


    }, [dispatch, cleanCategory, cleanId]);

    useEffect(() => {
        if (carDetail && alisDate.isValid() && teslimDate.isValid()) {
            const gunSayisi = teslimDate.diff(alisDate, 'day') + 1;
            setGeceSayisi(gunSayisi);
            const gunlukTutar = carDetail?.gunlukFiyat || 0;
            setGecelikFiyat(gunlukTutar);
            const ekstraHizmetTutar = selectedPaketler.reduce((acc, curr) => acc + parseFloat(curr.fiyat.replace(",", ".")), 0);
            const toplam = gunSayisi * gunlukTutar + ekstraHizmetTutar + carDetail?.depozito;
            setToplamTutar(toplam);
        } else {
            setToplamTutar(0);
        }
    }, [carDetail, alisDate, teslimDate, selectedPaketler]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
    };
    const paketler = [
        {
            paketAdi: "Ek Sürücü",
            fiyat: "250,00",
            icon: <MdPersonAdd />,
            text: "Aracı        işilerce kullanılmasına izin verir."
        },
        {
            paketAdi: "Bebek Koltuğu",
            fiyat: "325,69",
            icon: <FaBabyCarriage />,
        },
    ]
    const handleSelectPaket = (paket) => {
        const isSelected = selectedPaketler.find(p => p.paketAdi === paket.paketAdi);
        if (isSelected) {
            setSelectedPaketler(selectedPaketler.filter(p => p.paketAdi !== paket.paketAdi));
        } else {
            setSelectedPaketler([...selectedPaketler, paket]);
        }
    };
    const handleDevamEtClick = () => {
        if (availableCars.length === 0) {
            setDevam(true);
        } else {
            navigate(`/araclar/${category}/${id}/odeme`, {
                state: {
                    alisDate: alisDate.toString(),
                    teslimDate: teslimDate.toString(),
                    selectedPaket:selectedPaketler,
                    geceSayisi: geceSayisi,
                    gecelikFiyat: gecelikFiyat,
                    depozito:carDetail?.depozito,
                    toplamTutar: toplamTutar

                }
            });
        }
    };


    return (
        <div className='flex justify-center p-7 px-7'>
            <div className='space-y-8'>
                <div>
                    {carDetail && (
                        <AracBilgi
                            key={carDetail.id}
                            carDetail={carDetail}
                            categoryData={categoryData}
                            alisDate={alisDate}
                            setAlisDate={setAlisDate}
                            teslimDate={teslimDate}
                            setTeslimDate={setTeslimDate}
                        />
                    )}
                </div>
                <div className='font-semibold text-xl'>
                    Ek Hizmet Satın Al
                </div>
                <div className='space-y-3'>
                    {
                        paketler.map((paket, index) => (
                            <div key={index} onClick={() => handleSelectPaket(paket)} >
                                <EkHizmet key={index} paketAdi={paket.paketAdi} fiyat={paket.fiyat} icon={paket.icon} />
                            </div>
                        ))
                    }
                </div>

                <div className='btn-content flex justify-end items-center  gap-4'>
                    <div>
                        <div className='text-sm'>Toplam Tutar</div>
                        <div className='font-bold'>{parseFloat(toplamTutar).toFixed(2)} TL</div>
                    </div>
                    <div>
                        {/* <DevamButton onClick={() => dispatch(fetchAvailableCar({ kategori: category, carId: id }))}
                            carId={id} category={category} /> */}
                        {/* <DevamButton onClick={handleClick} /> */}
                        <div>
                            <button onClick={handleDevamEtClick} className='btn flex font-semibold items-center gap-3 bg-yellow-400 rounded-md p-3 px-8 hover:bg-black'>
                                Devam Et
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <TutarCard key={carDetail?.id} depozito={carDetail?.depozito} selectedPaketler={selectedPaketler} geceSayisi={geceSayisi} toplamTutar={toplamTutar} gecelikFiyat={gecelikFiyat} />
            </div>
            {devam && (
                <div className='fullscreen-container'>
                    <div className='w-full h-auto space-y-5 bg-gray-100 border border-yellow-400 rounded-md p-5'>
                        <div className='font-bold text-center text-xl'>
                            Garajımızda Bu Araç Bulunmamaktadır.
                        </div>
                        <div className='font-semibold text-center'>
                            Diğer Araçlarımıza Göz Atabilirsiniz..
                        </div>
                        <div className='mt-5'>
                            <Slider {...settings}>
                                {
                                    alternatifCars.map((car, index) => (
                                        <div key={index} className='bg-white border p-5 border-yellow-400 rounded-md cursor-pointer'>
                                            <img src={car.image} width={350} alt={car.name} />
                                            <div className='text-center font-semibold'>{car.name}</div>
                                            <button onClick={() => {
                                                navigate(`/araclar/${category}/${car.id}`)
                                                setDevam(false)
                                            }} className=' items-center bg-yellow-400 rounded-md p-0.5 text-xs'>Araca Git</button>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                        <button onClick={() => setDevam(false)} className='btn mt-4 flex font-semibold items-center gap-3 bg-red-500 rounded-md p-3 px-8 hover:bg-red-700'>
                            Kapat
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Detail

