import React from 'react'
import Image from 'next/image'

const Spons = () => {
  return (
    <div className='w-full h-full bg-white  my-9 '>
        <p className='text-black text-[72px] font-bold mx-[496px] py-10'>Our Sponsors</p>

        <div className='flex items-center justify-center space-x-36 my-24'>

        <Image
        src={"/Apple.png"}
        alt='apple'
        height={58}
        width={50}/>

        <Image
        src={"/Microsoft.png"}
        alt='Microsoft'
        height={78}
        width={150}/>

        <Image
        src={"/Slack.png"}
        alt='Slack'
        height={78}
        width={150}/>

        <Image
        src={"/Google.png"}
        alt='Google'
        height={78}
        width={150}/>
        </div>
    </div>
  )
}

export default Spons