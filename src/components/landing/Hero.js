import Image from 'next/image'
import React from 'react'
import heroImg from '../../public/images/hero.jpeg'

function Hero() {
  return (
   <div className='bg-violet-200 w-full  flex justify-center' >

        <div className='w-10/12   py-16 flex justify-between items-center  ' >
            <div className=' w-7/12  flex flex-col justify-center  '>
                <h1 className='text-[50px] leading-none  font-semibold' >Dance NFT marketplace build on Flow</h1>
                <div className='py-4' > 
                    <p className='text-lg' >😇 Easy sign up with Google account</p>
                    <p className='text-lg'>👌 Purchase danceNFT&apos;s with Credit Card </p>
                    <p className='text-lg'>💎  Gain access to exclusive content</p>
                </div>
                <div className='flex items-center gap-5' >
                     <button className='px-6 py-2 rounded-md text-white bg-gray-700 hover:bg-gray-900 ' >Sign up</button>
                     <button className='px-6 py-2 rounded-md text-white bg-violet-500 hover:bg-violet-600  ' >Browse NFTs</button>
                </div>
        </div>
        <div className='' >
        <Image src={heroImg.src} width={520} height={520} />
        </div>
        </div>
   </div>
  )
}

export default Hero