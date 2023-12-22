import React from 'react'
import pool from '../assets/pool.jpeg'
import loby from '../assets/loby.webp'
import food from '../assets/Dinner.jpeg'
function Gallery() {
  return (
    <div className='flex flex-col mt-10 mb-16'>
      {/* <hr className='bg-black mt-8 border border-black' /> */}

      <div className=' flex justify-center items-center flex-col  '>
        <h2 className='font-bold text-2xl mt-[50px]'>ROYAL EXPERIENCE</h2>
        {/* <p className='max-w-[420px] mt-3 mb-[20px] text-gray-70000 ' >Designed by the most creative minds in proffesion,buility the finest people in the industry, and we have finally begun our journey too serve you. </p> */}
        <h1 className='font-playfair font-semibold text-3xl text-center py-9 text-gray-900 mb-20'>"Designed by the most creative minds in proffesion,buility the<br /> finest people in the industry, and we have finally begun <br />our journey too serve you."
        </h1>
      </div>


      <section className='flex flex-col md:flex-row md:gap-5'>


        <div className='mb-8 flex flex-col items-center  border border-slate-300 shadow-xl py-4 rounded-3xl md:px-5'>
          <img className='w-[350px] h-[230px] rounded-3xl' src={pool} alt="" />
          <h2 className='text-2xl font-semibold mt-3 '>Infinity Pool</h2>
          <div className='max-w-[350px] mt-[20px] md:mb-5  text-center'>
          A hotel's facilities are integral to creating a memorable and satisfying experience for guests. From the moment they step into the lobby to the time they retire to their rooms.
          </div>
          <button className='bg-black px-5 py-3 font-medium hover:bg-slate-950 text-white rounded-full my-5'>Know More<i class="ri-arrow-right-up-line "></i></button>

        </div>
        <div className='flex mb-8 flex-col items-center  border border-slate-300 shadow-xl py-4 rounded-3xl md:px-5'>
          <img className='w-[380px]  h-[230px] rounded-3xl' src={loby} alt="" />
          <h2 className='text-2xl font-semibold mt-3 '>Club Lounge</h2>
          <div className='max-w-[350px] md:mt-[20px] md:mb-5 text-center'>
          Modern hotels strive to offer a diverse range of facilities, including well-equipped fitness centers, relaxing spas, business centers, and enticing dining options. 
          </div>
          <button className='bg-black px-5 py-3 font-medium hover:bg-slate-950 text-white rounded-full my-2'>Know More<i class="ri-arrow-right-up-line "></i></button>

        </div>
        <div className='flex flex-col items-center border border-slate-300 shadow-xl pt-4 pb-4 rounded-3xl md:px-5 md:h-[528px]'>
          <img className='w-[350px] h-[230px] rounded-3xl' src={food} alt="" />
          <h2 className='text-2xl font-semibold mt-3'>Free Lunch Food</h2>
          <div className='max-w-[350px] mt-[20px] md:mb-5 text-center'>
          Modern hotels strive to offer a diverse range of facilities, including well-equipped fitness centers, relaxing spas, business centers, and enticing dining options.
          </div>
          <button className='bg-black px-5 py-3 font-medium hover:bg-slate-950 text-white rounded-full my-2'>Know More<i class="ri-arrow-right-up-line "></i></button>

        </div>
      </section>
    </div>
  )
}

export default Gallery