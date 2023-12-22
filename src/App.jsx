import { useState } from 'react'
import HeroComponent from './components/herosection'
import FeatureComponet from './components/features'
import FooterComponent from './components/Footer'
import Header from './components/Header'
import Carousel from './components/Carousel'

function App() {


  return (
    <div className='px-8 py-5 md:px-24  '>
      <Header />
      <hr />
      <HeroComponent />
      <hr />
      <div className='flex items-center justify-center'>

        <h1 className='mt-8 font-playfair font-semibold text-3xl text-center py-9 text-gray-900 mb-20'>"We always provite the best expreiences for our hotel visitors. We are TeHotel, the most appropriate hotel for you"
        </h1>
      </div>
      <FeatureComponet />
      <FooterComponent />
    </div>
  )
}

export default App
