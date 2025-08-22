import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const AboutPage = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center px-3 lg:py-30 md:py-24 sm:py-18 xs:py-12 py-8'>
            {/* Image */}
            <div className='md:w-1/2 w-full md:pt-0 pt-20 relative h-full flex justify-center items-center'>
                <div className='w-full h-full flex justify-center items-center z-10'>
                    <Image src='/images/hero-image.png' alt='LOGO' width={680} height={580} />
                </div>
            </div>

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
        </div>
    )
}

export default AboutPage
