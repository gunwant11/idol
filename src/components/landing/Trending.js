import React from 'react'
import TopDancer from './TopDancer'
import TrendingCard from './TrendingCard'


const Trending = () => {
  return (
    <div className='w-11/12' >
      
        <div className='flex flex-col py-8  ' > 
            <div className='text-2xl font-medium pb-3 text-gray-700'>Top Dancers</div>
            <div className='flex items-center gap-6 justify-center' >
                <TopDancer />
                <TopDancer />
                <TopDancer />
                <TopDancer />
                <TopDancer />
                <TopDancer />
                <TopDancer />
                <TopDancer />
                <TopDancer />
                <TopDancer />
                <TopDancer />
            </div>
        </div>
        <div className='flex flex-col pb-8  ' > 
        <div className='text-2xl font-medium pb-3 text-gray-700'>Trending collectoins</div>
            <div className='flex gap-2' >
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                
            </div>
            </div>
    </div>
  )
}

export default Trending