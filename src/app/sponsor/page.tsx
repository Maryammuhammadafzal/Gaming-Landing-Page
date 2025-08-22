import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const SponsorPage = () => {
    const sponsor_list = [
        '📩  hello@nexaarena.gg',
        '📍 Virtual HQ: The Metaverse',
        '💬 Discord & Telegram: Always Online'
    ]
    return (
        <div className='w-full h-auto flex justify-center items-center px-3 lg:py-30 md:py-24 sm:py-18 xs:py-12 py-8'>
            {/* Content */}
            <div className='md:w-1/2 w-full h-full flex flex-col gap-3 md:pl-4 xs:pl-8 pt-4'>
                <h2 className='font-mono xl:text-[40px] lg:text-4xl md:text-3xl xs:text-2xl text-xl xl:max-w-lg md:max-w-md max-w-xl md:pr-0 xs:pr-20'>
                    Let’s Talk Gaming, Collabs, or Sponsorships
                </h2>
                <p className='lg:text-lg md:text-base text-sm'>Whether you're a content creator, streamer, brand, or gamer — reach out.</p>
                <ul className='py-6'>
                    {sponsor_list.map((item, index) => (
                        <li key={index} className='lg:text-lg md:text-base text-sm'>{item}</li>
                    ))
                    }
                </ul>
                <div className='w-auto h-auto'>
                    <Button className='uppercase rounded-4xl px-8 py-5 bg-gradient-to-r from-[#FF6F00] to-[#FB8A33] text-secondary font-semibold'>Get In Touch</Button>
                </div>
            </div>
            {/* Image */}
            <div className='md:w-1/2 w-full md:pt-0 pt-20 relative h-full flex justify-center items-center'>
                <div className='w-full h-full flex justify-center items-center z-10 '>
                    <Image src='/images/sponsor-image.png' alt='about-image' width={446} height={240} />
                </div>
                <div className='absolute w-[440px] h-[240px] bg-[#FF6F00] rounded-2xl -rotate-[20deg] 2xl:left-28 xl:left-18 lg:left-10 left-0'></div>
                <div className='absolute w-[250px] h-[134px] bg-[#FF6F00] rounded-2xl rotate-[30deg] -bottom-6 2xl:right-30 xl:right-20 lg:right-10 right-0'></div>
            </div>
        </div>
    )
}

export default SponsorPage
