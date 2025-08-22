import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
    return (
        <div className='w-full  justify-center items-center flex flex-col gap-2 bg-cover bg-center' style={{ backgroundImage: `url(${'/images/hero-bg.png'})` }}>
            <div className='w-full '>
                <div className=''><Header /></div>
            </div>
            <div className='flex md:flex-row flex-col gap-3 p-3 pt-20'>
                {/* Content */}
                <div className='md:w-1/2 w-full h-full flex flex-col gap-3 md:pl-4 xs:pl-8 pt-4'>
                    <p className='lg:text-2xl md:text-xl xs:text-lg text-md uppercase lg:letter-spacing-10 md:letter-spacing-7 sm:letter-spacing-10 xs:letter-spacing-14 2xs:letter-spacing-7 letter-spacing-4'>Welcome to NEXA ARENA</p>
                    <h1 className='font-mono 2xl:text-[80px] lg:text-6xl md:text-[56px] xs:text-6xl text-5xl xl:max-w-xl md:max-w-lg max-w-2xl md:pr-0 xs:pr-20'>
                        Unleash the future of gaming.
                    </h1>
                    <div className='flex gap-2 my-6'>
                        <Button className='uppercase rounded-4xl px-8 py-5 bg-gradient-to-r from-[#FF6F00] to-[#FB8A33] text-secondary font-semibold'>Play Now</Button>
                        <Button className='uppercase rounded-4xl px-8 py-5 bg-transparent border border-secondary text-secondary font-semibold'>Watch Trailer</Button>
                    </div>
                </div>

                {/* Image */}
                <div className='md:w-1/2 w-full md:pt-0 pt-20 relative h-full flex justify-center items-center'>
                    <div className='absolute w-full h-full flex justify-center items-center bottom-12'>
                        <Image src='/images/hero-vector.png' alt='LOGO' width={634} height={634} />
                    </div>
                    <div className='w-full h-full flex justify-center items-center z-10'>
                        <Image src='/images/hero-image.png' alt='LOGO' width={680} height={580} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroPage
