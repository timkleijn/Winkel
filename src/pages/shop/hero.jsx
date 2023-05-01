import React from 'react'
import egoistisch from '../../assets/Egoistisch.jpg'

export const Hero = () => {
  return (
    <div className='relative h-screen mb-20 -mt-20 p-4'>
        <img className='absolute inset-0 object-cover h-full max-h-screen w-screen -z-10 brightness-50' src={egoistisch} />
        <div className='max-w-7xl mx-auto flex flex-col justify-center items-center w-full h-full'>
          <h1 className='text-3xl md:text-4xl lg:text-6xl text-white font-extrabold opacity-100 mb-5 text-center'>Waarom kiezen voor de Buurtwinkel?</h1>
          <h2 className='text-white text-xl lg:text-2xl font-bold mb-5 text-center'>Bewust en gezond eten is voor ons erg belangrijk. Onze producten worden door kleinschalige, lokale ondernemers geproduceerd. U weet dus precies waar uw voedsel vandaan komt. Daarnaast zitten de producten bomvol vitaminen en andere gezonde voedingswaarden!
          </h2>
          <button className='rounded-full bg-primary text-white font-bold px-4 py-2 w-fit text-xl hover:bg-primaryhover' onClick={e => {
            let shop = document.getElementById("shop-scroll-anchor");
            e.preventDefault();
            shop && shop.scrollIntoView({behavior: 'smooth'});
          }}
          >Bekijk onze producten</button>
        </div>
    </div>
  )
}
