import React, { useState } from 'react';
import { FaChevronRight } from "react-icons/fa6";

const KiralamaDegerlendirme = ({ formData, onNextStep, category }) => {

    const [showModal, setShowModal] = useState(false);
    const [unmetCriteria, setUnmetCriteria] = useState([]);
    const [ehliyetTarihi, setEhliyetTarihi] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [errorMessages, setErrorMessages] = useState([]);

    const handleEhliyetChange = (e) => {
        setEhliyetTarihi(e.target.value);
    };

    const handleBirthDateChange = (e) => {
        setBirthDate(e.target.value);
    };
    const handleNextStep = () => {
        const today = new Date();
        console.log(today, "today")
        const ehliyetDate = new Date(ehliyetTarihi);
        console.log(ehliyetDate, "ehliyetDate")
        const birthDateObj = new Date(formData.birthDate);

        const differenceInYearsEhliyet = (today - ehliyetDate) / (1000 * 3600 * 24 * 365);
        const differenceInYearsAge = (today - birthDateObj) / (1000 * 3600 * 24 * 365);

        const errors = [];

        console.log("Age:", differenceInYearsAge);
        console.log("License Years:", differenceInYearsEhliyet);

        if (differenceInYearsAge < category.age) {
            errors.push(`Yaşınız ${category.age} yaşından küçük!`);
        }

        if (differenceInYearsEhliyet < category.ehliyet) {
            errors.push(`Ehliyet veriliş tarihiniz ${category.ehliyet}  yıldan az!`);
        }

        if (errors.length > 0) {
            setErrorMessages(errors);
            setShowModal(true);
        } else {
            onNextStep();
        }
    };
    return (
        <div className='border border-yellow-400 rounded-md items-center bg-yellow-100'>
            <div className='flex justify-around p-2'>
                <div className='space-y-5 p-5'>
                    <h2 className='text-xl font-bold'>Araç Kiralama Değerlendirme Analizi</h2>
                    <div className='relative'>
                        <input value={formData.email} // Burada formData'dan gelen değeri kullanıyoruz
                            readOnly id="email" className="input-form peer" type="email" placeholder=' ' name='email' />
                        <label htmlFor="email" className="absolute left-3 top-10 text-gray-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-yellow-500">
                            E-Mail
                        </label>
                    </div>
                    <div className='flex gap-5'>
                        <div className='relative'>
                            <input value={formData.birthDate} onChange={handleBirthDateChange} className="input-form" type="date" placeholder='Enter Last Name' name='lastname' />
                            <label htmlFor="date" className="absolute left-3 top-10 text-gray-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-yellow-500">
                                Doğum Tarihi
                            </label>
                        </div>
                        <div className='relative'>
                            <input className="input-form" type="date" placeholder='Ehliyet Veriliş Tarihi' name='ehliyetTarihi' onChange={handleEhliyetChange} />
                            <label htmlFor="date" className="absolute left-3 top-10 text-gray-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-yellow-500">
                                Ehliyet Veriliş Tarihi
                            </label>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleNextStep} className='bg-yellow-400 rounded-md p-2 hover: bg-transparent'>
                            <div className='flex items-center gap-4 justify-end'>
                                Sonraki Adım <FaChevronRight />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-5 rounded-md shadow-lg space-y-4">
                        <h3 className="text-lg font-bold">Kriterler</h3>
                        <ul className="list-disc pl-5">
                            {errorMessages.map((error, index) => (
                                <li key={index}>{error}</li>
                            ))}
                        </ul>
                        <button
                            onClick={() => setShowModal(false)}
                            className="bg-yellow-400 rounded-md p-2">
                            Tamam
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default KiralamaDegerlendirme