import React from 'react';
import fng from '../img/fng.png';
import fp from '../img/fp.png';
import gb from '../img/gb.png';
import HeroBg from '../img/heroBg.png';
import { heroData } from '../utils/data.js';

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 w-full h-fu md:grid-cols-2 gap-2' id='home'>
      <div className='py-1 flex flex-1 flex-col items-start justify-center gap-5'>
        <p className='text-[1.5rem] flex font-semibold'>
          YOU <span className='ml-2 font-bold text-orange-600'> CRAVE</span>, YOU{' '}
          <span className='ml-2 font-bold text-orange-600'>GRAB</span>, WE
          <span className='ml-2 font-bold text-orange-600'>DELIVER</span>
        </p>
        <div className='flex flex-rows w-20 h-30 gap-3 m-3 justify-between md: items-center ml-4'>
          <img src={fng} className='w-30 h-full object-container rounded-lg' alt='delivery' />
          <img src={fp} className=' object-container rounded-lg' alt='delivery' />
          <img src={gb} className=' object-container rounded-lg' alt='delivery' />
        </div>

        <p className='relative text-[2.5rem] leading-loose font-semibold tracking-normal md:text-[3.5rem] md:leading-tight'>
          It's about the <span className='font-bold text-orange-600'>Memories</span> and
          <span className='ml-2 font-bold text-orange-600'>Stories</span> behind each{' '}
          <span className='ml-1 font-bold text-orange-600'>Dish...</span>
        </p>
        <p className='text-base text-textColor md:text-left w-[90%] text-justify'>
          Food is not just about satisfying hunger, but it is also about the memories and stories
          that come with it. Each dish has a unique history and cultural significance that has been
          passed down from generation to generation and can be tied to important traditions,
          celebrations, and experiences.
        </p>
        <button
          type='button'
          className='bg-gradient-to-br from-orange-400 to orange-700 w-full
      md:w-auto px-6 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'
        >
          Grab Now
        </button>
      </div>


      <div className='py-2 flex-auto flex items-center relative'>
        <img src={HeroBg} className='ml-auto h-420 w-full lg:w-auto lg:h-650' alt='hero-bg' />

        <div className='h-full w-full absolute top-0 left-0 flex items-center justify-center
        lg:py-4 md:py-80 gap-4 flex-wrap lg:px-32'>
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className='lg:w-190 p-4 bg-cardOverlay
            backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'
              >
                <img src={n.imageSrc} className='w-20 lg:w-40 -mt-10 lg:-mt-10' alt='dessert1' />

                <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-1'>
                  {n.name}
                </p>
                <p className='text-[12px] lg:text-sm font-semibold text-lighttextGray my-1 lg:my-3'>
                  {n.decp}
                </p>

                <p className='text-sm font-semibold text-headingColor'>
                  <span className='text-xs text-red-800'>₱</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
