import React from 'react'
import Image from 'next/image'

const Manage = () => {
  return (
    <div className='bg-white w-full h-full  items-center justify-center my-48 '>
        <p className='text-black font-bold text-[72px] mx-24'>Project Management</p>
        <div className='flex'>
        <p className=' text-black text-[18px] mx-24 my-5'>Images, videos, PDFs and audio files are supported. Create math expressions and<br/> diagrams directly from the app. Take photos with the mobile app and save them<br/> to a note.</p>
        <div className=' bg-[#C4DEFD] w-[250px] h-[200px] md:w-[494px] md:h-[399px] -my-36 mx-3 '></div>
        </div>
        <button className='py-3 px-4 rounded-md bg-[#4F9CF9] mx-24 text-white my-6'>Get started {">"}</button>

        <div className='flex my-64 mx-16'>
            <Image
            src={"/work.png"}
            height={320}
            width={661}
            alt='work Togethor'/>


            <span className='mx-[94px] my-[160px]'>
            <p className='text-black font-bold text-[72px]'>Work Together</p>
            <p className='text-black text-[18px]'>With whitepace, share your notes with your colleagues and collaborate on them.<br/>
                                                    You can also publish a note to the internet and share the URL with others.</p>
            <button className=' rounded-md bg-[#4F9CF9] py-3 px-4 text-white my-10'>Try It Now {">"}</button>                           
            </span>
        </div>


    </div>
  )
}

export default Manage