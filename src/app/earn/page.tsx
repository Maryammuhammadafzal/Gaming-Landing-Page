import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const EarnPage = () => {
    const earnData = [
        '🔸 Trade in-game assets via our Marketplace',
        '🔸 Mint your achievements as NFTs',
        '🔸 Interact across games with a single avatar',
        '🔸 Earn tokens while playing (Play2Earn ecosystem)'
    ]
    return (
        <div className='lg:w-[90%] mx-auto h-auto flex justify-center items-center px-3 lg:py-30 md:py-24 sm:py-18 xs:py-12 py-8'>

            {/* Content */}
            <div className='md:w-1/2 w-full h-full flex flex-col gap-3 md:pl-4 xs:pl-8 pt-4'>
                <h2 className='font-mono xl:text-[40px] lg:text-4xl md:text-3xl xs:text-2xl text-xl xl:max-w-lg md:max-w-md max-w-xl md:pr-0 xs:pr-20'>
                    Own What You Earn
                </h2>
                <p className='lg:text-lg md:text-base text-sm'>NEXA Arena is a next-generation gaming All your in-game skins, weapons, badges, and arenas? They’re yours — on the blockchain.</p>

                <ul className='mt-3'>
                    {earnData.map((item, index) => (
                        <li key={index} className='text-xl font-semibold text-secondary'>{item}</li>
                    ))
                    }
                </ul>

                <div>
                    <Button className='uppercase rounded-4xl px-8 py-5 bg-gradient-to-r from-[#FF6F00] to-[#FB8A33] text-secondary font-semibold'>Explore Marketplace</Button>
                </div>

            </div>
            {/* Image */}
            <div className='md:w-1/2 w-full relative h-full flex justify-center items-center'>
                <div className='w-full h-full flex justify-center items-center z-10 '>
                    <Image src='/images/earn-image.png' alt='about-image' width={446} height={240} />
                </div>
            </div>
        </div>
    )
}

export default EarnPage
