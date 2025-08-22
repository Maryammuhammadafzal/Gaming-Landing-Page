import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-[60px] px-20 py-6'>
      <Image src='/images/logo.png' alt='LOGO' width={150} height={60} />
    </div>
  )
}

export default Header
