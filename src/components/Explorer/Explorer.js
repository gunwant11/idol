import React from 'react'
import NFTCard from './NFTCard'

const Explorer = () => {

    const [active, setActive] = React.useState('all')

  return (
    <div className='  flex flex-col py-10 w-11/12  ' > 
        <div className='flex items-center justify-between'>
            <div className='text-2xl font-medium pb-3  text-gray-700'>Explorer</div>
            <div className='w-8/12' >
                <input className='w-10/12 border-4 h-12  mx-4 p-1 px-4  outline-none rounded-full'/ >
                    {/* <button className='bg-violet-500 px-4 py-2 rounded-md text-white hover:bg-violet-600' >Search</button> */}
            </div>
            <div className=' bg-gray-200 rounded-full p-2 px-3 flex gap-4  ' >
                <button onClick={()=> setActive('all')}  className={`bg-gray-300 px-4  text-lg font-medium py-2 rounded-full ${active == 'all' && 'bg-blue-200'}   `}>🎨All</button>
                <button onClick={()=> setActive('collection')} className={`bg-gray-300 px-4 py-2 text-lg font-medium rounded-full ${active == 'collection' && 'bg-blue-200'}  `}  >🏆Collection</button>
            </div>
        </div>
        <div className='flex  py-2 gap-3  flex-wrap ' >
         <NFTCard />    
         <NFTCard />    
         <NFTCard />    
         <NFTCard />    
         <NFTCard />    
         <NFTCard />    
         <NFTCard />    
         <NFTCard />    
         <NFTCard />    
         <NFTCard />    
         <NFTCard />    
         <NFTCard />    
         <NFTCard />    
         <NFTCard />    
        </div>

        
    </div>
  )
}

export default Explorer