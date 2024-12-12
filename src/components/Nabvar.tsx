import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='bg-[#043873] w-full h-full'>
      <div className='max-w-screen-xl mx-auto flex items-center justify-between py-4 px-5'>
      
        <div>
          <Image
            src="/Logo.png"
            height={30}
            width={180}
            alt="Logo"
          />
        </div>

   
        <div className='flex space-x-6 text-white'>
          <Link className='hover:text-[#FFE492]' href="/Products">Products</Link>
          <Link className='hover:text-[#FFE492]' href="/">Solutions</Link>
          <Link className='hover:text-[#FFE492]' href="/">Resources</Link>
          <Link className='hover:text-[#FFE492]' href="/">Pricing</Link>
        </div>

      
        <div>
          <button className='bg-[#FFE492] text-[#043873] rounded-md px-6 py-2 font-medium hover:bg-[#d9c173] transition duration-300'>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
