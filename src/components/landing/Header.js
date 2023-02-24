import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const Header = () => {

  const { data: session, status } = useSession()

  return (
    <nav
    className="
      flex flex-wrap
      items-center
      justify-between
      w-full
      py-4
      md:py-2
      px-10
      text-lg text-gray-700
      bg-violet-200
    "
  >
   <div>
     <h1 className='text-3xl font-bold' >IDOL</h1>
    </div>
   
     <svg
        xmlns="http://www.w3.org/2000/svg"
        id="menu-button"
        className="h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
   
   <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
      <ul
        className="
          pt-4
          text-base text-gray-700
          md:flex
          md:justify-between 
          md:pt-0
          items-center
          "
      >
        
         
        <li>
          <a className="md:p-4 py-2 block hover:text-violet-400 text-lg font-medium" href="#"
            >Explore</a
          >
        </li>
        <li>
          <a className="md:p-4 py-2 block hover:text-violet-400 text-lg font-medium" href="#"
            >Trending</a
          >
        </li>
        {
          status === 'authenticated' ? (
            <>
            <li className="md:p-4 py-2 block hover:text-violet-400 text-lg font-medium" href="#" >
              {session.user.email}
            </li>
            <li className=' md:p-4 py-2 block hover:text-violet-400 text-lg font-medium" href="#"' >
              Connect wallet
            </li>
            <li className=' md:p-4 py-2 block hover:text-violet-400 text-lg font-medium" href="#"' >
              <button   onClick={signOut} >
                Sign Out
              </button>
            </li>
            </>
          ) : (
            <li className=' md:p-4 py-2 block hover:text-violet-400 text-lg font-medium" href="#"'>
              <button  className='bg-lime-300 p-2 px-4 rounded-md text-lg font-medium'  onClick={() => signIn()} >
                Sign In
              </button>
            </li>
          )
        }
        
      </ul>
    </div>
</nav>
  )
}

export default Header