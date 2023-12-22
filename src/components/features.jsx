import React from 'react'
import pic1 from '../assets/pic1.avif'
import Gallery from './Gallery'
function features() {
  return (
    <>
      <div className=' md:flex-row md:gap-[100px] flex flex-col justify-center items-center '>

        <div>
          <div className='font-black text-5xl font-playfair md:mb-9' >Royal Heritage</div>
          {/* <div className='max-w-[350px] mt-3 text-gray-70000 '>Taken from the Japenese culture, the possess a meaning of peacefull and tranquility.</div> */}

          <div className='mb-9 max-w-[350px] mt-7 text-gray-70000 '>
            Taken from the Japenese culture, the possess a meaning of peacefull and tranquility. <br />
            Ditch the map, follow the heartbeat of Bengaluru. We'll be your compass, your confidante, your cozy refuge.
            Trade the boardroom for the bazaar. Unleash your inner explorer, Bengaluru's labyrinthine charm awaits.
          </div>

          <button className=' mb-8 bg-black px-5 py-3 font-medium hover:bg-slate-950 text-white rounded-full md:mt-5'>Learn More<i class="ri-arrow-right-up-line "></i></button>
        </div>
        <div >
          <img className='w-[350px] h-[400px] rounded-3xl ' src={pic1} alt="" />
        </div>
      </div>
      <hr className='mt-10 border border-1' />
      <Gallery />
    </>
  )
}

export default features