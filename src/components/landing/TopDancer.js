import Image from 'next/image'
import React from 'react'
import img from '../../public/images/1.png'
import { useRouter } from 'next/router'


const TopDancer = () => {

  const router = useRouter()
  
  return (
    <div className='flex items-center flex-col cursor-pointer ' onClick={()=>router.push('/profile/1')}  >
        <img  className='rounded-md' src='https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/67b96798931623.5ee79b6a8dd2f.jpg' width={100} height={100} />
        <div className='leading-none text-sm pt-1' >Raplh Smith</div>
        <div className='text-sm text-gray-700' >Price</div>
    </div>
  )
}

export default TopDancer