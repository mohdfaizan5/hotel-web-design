import React from 'react'
import pool from '../assets/pool.jpeg'
import loby from '../assets/loby.webp'
import food from '../assets/Dinner.jpeg'
function Gallery() {
  return (
    <div className='flex flex-col'>
      <hr className='bg-black mt-8 border border-black'/>
    
      <div className=' flex justify-center items-center flex-col  '>
        <h2 className='font-bold text-2xl mt-[50px]'>ROYAL EXPERIENCE</h2>
        <p className='max-w-[420px] mt-3 mb-[20px] text-gray-70000 ' >Designed by the most creative minds in proffesion,buility the finest people in the industry, and we have finally begun our journey too serve you. </p>
      </div>
      <div className='mb-8 flex flex-col items-center'>
          <img className='w-[350px]  rounded-3xl' src={pool} alt="" />
          <div className='max-w-[350px] mt-[20px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis esse expedita fugiat necessitatibus, at maiores quibusdam, est laborum totam aliquid commodi. 
      </div>
      <h2 className='text-2xl font-semibold mt-3 '>Infinity Pool</h2>
      <div className='h-[40px] w-[110px] border text-center pt-[5px] mt-[10px] font-semibold border-slate-600 mb-3'>Learn More</div>
        
      </div>
      <div className='flex mb-8 flex-col items-center'>
          <img className='w-[380px]  rounded-3xl' src={loby} alt="" />
          <div className='max-w-[350px] mt-[20px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis esse expedita fugiat necessitatibus, at maiores quibusdam, est laborum totam aliquid commodi. 
      </div>
      <h2 className='text-2xl font-semibold mt-3 '>Club Lounge</h2>
      <div className='h-[40px] w-[110px] border text-center pt-[5px] mt-[10px] font-semibold border-slate-600 mb-3'>Learn More</div>
        
      </div>
      <div className='flex flex-col items-center'>
          <img className='w-[350px]  rounded-3xl' src={food} alt="" />
          <div className='max-w-[350px] mt-[20px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis esse expedita fugiat necessitatibus, at maiores quibusdam, est laborum totam aliquid commodi. 
      </div>
    <h2 className='text-2xl font-semibold '>Free Lunch Food</h2>
      <div className='h-[40px] w-[110px] border text-center pt-[5px] mt-[10px] font-semibold border-slate-600 mb-3'>Learn More</div>
        
      </div>
    </div>
  )
}

export default Gallery