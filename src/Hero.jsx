import React, { useRef } from 'react';

function Hero() {
    const companyNameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const countryRef = useRef();
    const cityRef = useRef();
    const locationRef = useRef();
    const employeeCountRef = useRef();
    const descriptionRef = useRef();
    const errorsRef = useRef({});

    const handleValidation = () => {
        const errors = {};

        if (!companyNameRef.current.value) {
            errors.companyName = "Kompaniya nomini kiriting";
        }
        if (!emailRef.current.value) {
            errors.email = "Emailni kiriting";
        }
        if (!phoneRef.current.value) {
            errors.phone = "Telefon raqamini kiriting";
        }
        if (!countryRef.current.value) {
            errors.country = "Davlatni kiriting";
        }
        if (!cityRef.current.value) {
            errors.city = "Shaharni kiriting";
        }
        if (!locationRef.current.value) {
            errors.location = "Yashash joyini kiriting";
        }
        if (!employeeCountRef.current.value) {
            errors.employeeCount = "Hodimlar sonini kiriting";
        }
        if (!descriptionRef.current.value) {
            errors.description = "Izohni kiriting";
        }

        errorsRef.current = errors;

        return Object.values(errors).every(error => error === "");
    };


    const handleNext = (e) => {
        e.preventDefault();
        const isValid = handleValidation();
        if (isValid) {
            alert("Barcha ma'lumotlar kititildi");
        } else {
            alert("Barcha ma'lumotlar kiritilmadi");
        }
    };




    return (
        <>
            <div className="heroBar">
                <div className="heroTop">
                    <h2>Kompaniya ma'lumotlari</h2>
                    <p>Kompaniya haqidagi ma'lumotlarni kiriting</p>
                </div>
                <div className="heroAva">
                    <img src="./avatar.svg" alt="" />
                    <p>Yuklash</p>
                </div>
                <div className="heroInputs">
                    <h3>Kompaniya nomi </h3>
                    <input type="text" placeholder='Kompaniya nomi' ref={companyNameRef} />
                    <br /> <br />
                    <h3>Email</h3>
                    <input type="email" placeholder='Email' ref={emailRef} />
                    <br /> <br />
                    <h3>Telefon raqami</h3>
                    <input type="tel" placeholder='UZ +9989' ref={phoneRef} />
                </div>
                <div className="heroLinks">
                    <br />
                    <h3 className='links'>Linklar</h3>
                    <div className="companylogo">
                        <a href="https://www.earth.com/"><img className='companyLogo' src="./earth.svg" /></a>
                        <a href="https://www.instagram.com/"><img className='companyLogo' src="./instagram.svg" /></a>
                        <a href="https://t.me/"><img className='companyLogo' src="./telegram.svg" /></a>
                        <a href="https://facebook.com/"><img className='companyLogo' src="./facebook.svg" /></a>
                        <a href="https://github.com/"><img className='companyLogo' src="./github.svg" /></a>
                    </div>
                </div>
                <div className="heroCountry">
                    <br />
                    <div className="countryName">
                        <h3>Davlat</h3>
                        <h3>Shahar</h3>
                    </div>
                    <div className="countryInp">
                        <input type="text" placeholder='Davlat' ref={countryRef} />
                        <input type="text" placeholder='Shahar' ref={cityRef} />
                    </div>
                </div>
                <div className="heroLivePlace">
                    <br />
                    <h3>Yashash joyi</h3>
                    <input type="text" placeholder='Joy' ref={locationRef} />
                </div>
                <div className="heroEmployees">
                    <br />
                    <h3>Hodimlar soni</h3>
                    <input type="text" placeholder='Hodimlar soni' ref={employeeCountRef} />
                </div>
                <div className="heroDescription">
                    <br />
                    <h3>Izoh</h3>
                    <textarea className='textarea' name="" id="" cols="60" rows="10 " placeholder='Kompaniya haqida izoh qoldiring' ref={descriptionRef}></textarea>
                </div>
                <div className="heroBtns">
                    <button className='backBtn'>ORTGA</button>
                    <button className='nextBtn' onClick={handleNext}>KEYINGISI</button>
                </div>
            </div>
        </>
    );
}

export default Hero;