import React from 'react'
import Header from '../components/landing/Header'
import Sponsors from '../components/landing/Sponsors'
import Trending from '../components/landing/Trending'
import Hero from '../components/landing/Hero'
import Explorer from '../components/Explorer/Explorer'


const Home = () => {
    return (
        <div className='flex justify-center  items-center w-full flex-col ' >
            <Hero />
            <Sponsors/>
            <Trending />
            <Explorer />
        </div>
    )
}

export default Home