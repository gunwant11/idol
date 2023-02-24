import React from 'react'
import Image from 'next/image'
import img from '../../public/images/1.png'
const Sponsors = () => {
  return (
    <div className='bg-violet-100 border-y-4 border-violet-300  w-full  flex justify-center' >

    <div className='w-10/12   py-8 flex justify-between items-center  ' >
    <div className='flex flex-col items-center w-full' >
        <div className='text-xl pb-2 text-gray-600' >
          Our Partners for this hackathon
        </div>
        <div className='flex gap-5' >
          <Image src={img.src} alt='sponsor' width={100} height={100} />
          <Image src={img.src} alt='sponsor' width={100} height={100} />
          <Image src={img.src} alt='sponsor' width={100} height={100} />
          <Image src={img.src} alt='sponsor' width={100} height={100} />
          <Image src={img.src} alt='sponsor' width={100} height={100} />
        </div>
      </div>
        </div>
    </div>
  )
}

export default Sponsors