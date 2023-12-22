const Header = ()=>{
  return(
    <header className='flex justify-between py-2'>
    <div className="border border-black border-1 rounded-full w-12 h-12 flex justify-center items-center "><i class="ri-hotel-fill text-2xl md:text-3xl"></i></div>
    <nav className='flex gap-4 font-bold md:text-md items-center'>
      <button className="hover:bg-gray-200 py-2 px-3 rounded-md hidden md:block">Home</button>
      <button className="hover:bg-gray-200 py-2 px-3 rounded-md hidden md:block">Villa</button>
      <button className="hover:bg-gray-200 py-2 px-3 rounded-md hidden md:block">Manor</button>
      <button className='bg-black px-5 py-3 font-medium hover:bg-slate-950 text-white rounded-full'>Book Now <i class="ri-arrow-right-line "></i></button>

    </nav>
  </header>
  )
}

export default Header