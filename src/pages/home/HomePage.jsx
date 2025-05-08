import React from 'react'
import SliderHome from '../../components/custommer/caroselHome/CaroselHome'
import SectionCarosel from '../../components/custommer/SectionCarosel'
import { shoes } from '../../data/shoes'

const HomePage = () => {
  return (
    <div className=''>
      <SliderHome />
      <div className='space-y-5 py-10 flex flex-col'>
        <SectionCarosel data={shoes} />
      </div>
    </div>
  )
}

export default HomePage
