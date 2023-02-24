import Image from 'next/image'
import React from 'react'
import img from '../../public/images/1.png'
const TrendingCard = () => {
  return (
    <div className='bg bg-slate-700 text-white p-4 rounded-lg text-sm '  >
        <div className='flex  pb-4 items-center  gap-2' >
            <img className='rounded-md' src='https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/baa20698931623.5ee79b6a8ec2b.jpg' width={50} height={50} />
            <div>
                <div>Creative Art Collection</div>
                <div><span className='text-slate-400' >created by</span> Ralph Gorarway </div>
            </div>
        </div>
        <div className='flex gap-2' >
            <Image src={img.src} width={120} height={150} />
            <div>
                <div className='flex' >
                    <Image src={img.src} width={60} height={50} />
                    <Image src={img.src} width={60} height={50} />
                </div>
                <Image src={img.src} width={120} height={100} />
            </div>
            </div>

    </div>
  )
}

export default TrendingCard