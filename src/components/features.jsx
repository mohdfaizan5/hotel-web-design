import React from 'react'
import pic1 from '../assets/pic1.avif'
import Gallery from './Gallery'
function features() {
  return (
   <>
   
    <div className=' lg:flex-row lg:gap-[100px] flex flex-col justify-center items-center '>
      <div >
        <img className='w-[350px] h-[400px] rounded-3xl ' src={pic1} alt="" />
      </div>
      <div>
      <div className='font-bold text-2xl mt-[20px]  ' >Royal Heritage</div>
      <div className='max-w-[350px] mt-3 text-gray-70000 '>Taken from the Japenese culture, the possess a meaning of peacefull and tranquility.</div>
      <div className='max-w-[350px] mt-[20px] '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis esse expedita fugiat necessitatibus, at maiores quibusdam, est laborum totam aliquid commodi. 
      </div>
      <div className='h-[40px] w-[110px] border text-center pt-[5px] mt-[10px] font-semibold border-slate-600'>Learn More</div>
      </div>
    </div>
  
    <Gallery/>
   </>
  )
}

export default features