import { useState } from 'react'

function HeroComponent() {

  return (
    <section className='flex flex-col md:flex-row md:items-center justify-between'>
      <section className='flex flex-col h-screen gap-3'>
        <div>
          <h1 className='font-playfair font-bold text-6xl md:text-7xl pt-14 pb-2'>
            Reserve Your <br /> Ideal Hotel
          </h1>
        </div>
        <h3 className='font-semibold text-xl pb-12'>Let's get acquainted!</h3>

        <div className='flex items-start gap-7'>
          <div className='flex gap-1'>

            {/* <p className='font-black'>05</p> */}
            <p className='text-sm w-72 text-justify'>
              We special in curating exceptional villa rentals, providing an unparalleled level of comfort, privacy, and convenience to your dream vacation
            </p>
          </div>
          <button className='bg-black px-5 py-3 font-medium hover:bg-slate-950 text-white rounded-full'>More<i class="ri-arrow-right-up-line "></i></button>
        </div>

        <div className='flex gap-8 mt-10 '>
          <div>
            <h2 className='font-black text-2xl'>115k+</h2>
            <p className='text-sm font-medium'>Capital Raised</p>
          </div>
          <div>
            <h2 className='font-black text-2xl'>70k+</h2>
            <p className='text-sm font-medium'>Happy Customers</p>
          </div>
          <div>
            <h2 className='font-black text-2xl'>47k+</h2>
            <p className='text-sm font-medium'>Property Options</p>
          </div>
        </div>

        {/* <div className='flex justify-center'>
          <img className='h-36' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div> */}
      </section>
      <section className='relative'>

        <img className='rounded-2xl mt-[-80px] md:mt-[-50px]' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />


        <div class="mt-2 absolute flex items-center">
          <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
          <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
          <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
        </div>

      </section>

    </section>
  )
}

export default HeroComponent
