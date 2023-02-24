import React from 'react'

const NFTCard = () => {
  return (
    <div className='rounded-xl  bg-slate-300 ' >
        <img src="https://ik.imagekit.io/xyvsisxky/tr:w-300,h-300/https://arweave.net/fOFctaFV_VBzs_wgMjzTSAVitw4N4cALtlnvsNT0Ch0" alt="nft" 
        className='w-64 h-64 rounded-xl ' />
        <div className='py-4 px-3'>
            <div className='flex gap-1' >
                <img src='https://find.xyz/assets/img/marketplace/verify1.png' alt="nft"
                className='w-5 h-5 rounded-full' />
                <div className='text-sm font-medium' > Ralph Gorarway</div>
            </div>
            <h1 className='pb-6 pt-2' >
                #Solarpups
            </h1>
            <div className='flex w-full justify-between items-center '>
                <div className='font-bold text-xl'  >
                    $40
                    </div>
                    
                    <span className="flex items-center bg-slate-500 p-2 rounded-full">
                        <div className='' >
                            <img  className='w-7 h-7 rounded-full' src="https://find.xyz/assets/img/stickerlogos/flow-sticker-logo.jpg" />
                        </div>&nbsp;
                        <span className="text-white">Flow</span>
                        </span>
                    
            </div>
        </div>
    </div>
  )
}

export default NFTCard