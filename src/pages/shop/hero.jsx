import React from 'react'
import altruistisch from '../../assets/Altruistisch.jpg'

export const Hero = () => {
  return (
    <div className='relative h-screen mb-20 -mt-20 p-4'>
        <img className='absolute inset-0 object-cover h-full max-h-screen w-screen -z-10 brightness-50' src={altruistisch} />
        <div className='max-w-7xl mx-auto flex flex-col justify-center items-center w-full h-full'>
          <h1 className='text-3xl md:text-4xl lg:text-6xl text-white font-extrabold opacity-100 mb-5 text-center'>Waarom kiezen voor de Buurtwinkel?</h1>
          <h2 className='text-white text-xl lg:text-2xl font-bold mb-5 text-center'>De boer is voor ons erg belangrijk. Onze producten hebben een eerlijke prijs. Doordat de boeren niet aan grote supermarktketens hoeven te verkopen en er minder tussenschakels zijn, gaat er meer winst rechtstreeks naar henzelf. Door bij ons te kopen steun je de lokale economie!
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
