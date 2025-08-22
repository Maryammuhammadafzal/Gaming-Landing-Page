import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
    return (
        <div className='w-full h-screen justify-center items-center flex flex-col gap-2 bg-cover bg-center' style={{ backgroundImage: `url(${'/images/hero-bg.png'})` }}>
            <div className='w-full h-screen'>
                <div className=''><Header /></div>
            </div>
            <div className='flex gap-3 p-3'>
                {/* Content */}
                <div className='w-1/2 h-full flex flex-col gap-3 justify-center pl-4'>
                    <p className='text-2xl uppercase letter-spacing'>Welcome to NEXA ARENA</p>
                    <h1 className='font-mono 2xl:text-[80px] xl:text-7xl lg:text-6xl md:text-5xl text-6xl max-w-xl'>
                        Unleash the future of gaming.
                    </h1>
                    <div className='flex gap-2 my-6'>
                        <Button className='uppercase bg-gradient-to-r from-[#FF6F00] to-[#FB8A33] text-secondary font-semibold'>Play Now</Button>
                        <Button className='uppercase bg-transparent border border-secondary text-secondary font-semibold'>Watch Trailer</Button>
                    </div>
                </div>

                {/* Image */}
                <div className='w-1/2 relative h-full flex justify-center items-center'>
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
