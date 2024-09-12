import React, { useState } from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import "../OdemeComp/OdemeForm.css";

const OdemeForm = ({ onFormSubmit }) => {
    const [value, setValue] = useState('');
    const [checked, setChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [licenseDate, setLicenseDate] = useState('');
    const [ad, setAd] = useState('');
    const [soyad, setSoyad] = useState('');
    const [tc, setTc] = useState('');
    const [pasaport, setPasaport] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            email,
            birthDate,
            ad,
            soyad,
            cepTel: value,
            tc,
            pasaport: checked ? pasaport : null,
        };

        if (!formData.email || !formData.birthDate || !formData.ad || !formData.soyad || !formData.cepTel || (checked && !formData.pasaport)) {
            alert("Please fill in all required fields.");
            return;
        }

        onFormSubmit(formData);
    };

    const handleChecked = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className='border border-yellow-400 rounded-md items-center'>
            <div className='flex justify-around p-2'>
                <div>
                    <div className='flex justify-start pl-4 items-center space-x-5'>
                        <IoPersonCircleOutline className='text-4xl' />
                        <h2 className='font-semibold'>Sürücü Bilgileri</h2>
                    </div>
                    <form onSubmit={handleSubmit} className='items-center'>
                        <div className='space-y-5 p-5'>
                            <div className='flex gap-5'>
                                <div className='relative'>
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        id="email"
                                        className="input-form peer"
                                        type="email" placeholder=' '
                                        name='email' />
                                    <label htmlFor="email" className="absolute left-3 top-10 text-gray-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-yellow-500">
                                        E-Mail
                                    </label>
                                </div>
                                <PhoneInput defaultCountry='TR' className="input-form" value={value} onChange={setValue} />
                            </div>
                            <div className='flex gap-5'>
                                <div className='relative'>
                                    <input
                                        value={ad}
                                        onChange={(e) => setAd(e.target.value)}
                                        id="ad"
                                        className="input-form peer"
                                        type="text" placeholder=''
                                        name='ad' />
                                    <label htmlFor="ad" className="absolute left-3 top-10 text-gray-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-yellow-500">
                                        Ad
                                    </label>
                                </div>
                                <div className='relative'>
                                    <input
                                        value={soyad}
                                        onChange={(e) => setSoyad(e.target.value)}
                                        id="soyad"
                                        className="input-form peer"
                                        type="text" placeholder=' '
                                        name='soyad' />
                                    <label htmlFor="soyad" className="absolute left-3 top-10 text-gray-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-yellow-500">
                                        Soyad
                                    </label>
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className='relative'>
                                    <input
                                        value={tc}
                                        onChange={(e) => setTc(e.target.value)}
                                        id="tc"
                                        maxLength={11}
                                        minLength={11}
                                        className="input-form peer"
                                        type="text" placeholder=' '
                                        name='tc' />
                                    <label htmlFor="tc" className="absolute left-3 top-2 text-gray-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-yellow-500">
                                        TC Kimlik Numarası
                                    </label>
                                </div>
                                <div className='relative'>
                                    <input
                                        value={birthDate}
                                        onChange={(e) => setBirthDate(e.target.value)}
                                        id="birthDate"
                                        className="input-form"
                                        type="date"
                                        placeholder=' '
                                        name='birthDate' />
                                    <label htmlFor="birthDate" className="absolute left-3 top-10 text-gray-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-yellow-500">
                                        Doğum Tarihi
                                    </label>
                                </div>
                            </div>
                            <div className="custom-checkbox">
                                <input type="checkbox"
                                    checked={checked}
                                    onChange={handleChecked}
                                    id="foreign" name="foreign" value="yes" />
                                <label htmlFor="foreign">Yabancı Uyruk</label>
                            </div>
                            {
                                checked &&
                                <div className='relative'>
                                    <input
                                        value={pasaport}
                                        onChange={(e) => setPasaport(e.target.value)}
                                        id="pasaport"
                                        maxLength={11}
                                        minLength={11}
                                        className="input-form peer"
                                        type="text" placeholder=' '
                                        name='pasaport' />
                                    <label htmlFor="pasaport" className="absolute left-3 top-2 text-gray-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-yellow-500">
                                        Pasaport No
                                    </label>
                                </div>
                            }
                            <div>
                                <button type="submit" className='bg-yellow-400 rounded-md p-2 hover:bg-transparent'>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default OdemeForm;
