import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-auto lg:py-16 md:py-10 py-6 flex flex-col gap-3 justify-center items-center text-center'>
      <Image src='/images/logo.png' alt='LOGO' width={250} height={130} />
      <p className='text-lg'>Powered by Unreal Engine · Web3 Enabled</p>
      <h2 className='text-3xl font-mono'>© 2025 NEXA ARENA. All Rights Reserved.</h2>
    </div>
  )
}

export default Footer
