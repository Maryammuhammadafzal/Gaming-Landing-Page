import Image from 'next/image'
import React from 'react'

const FeaturesPage = () => {

    const featuresData = [
        'Ultra-fast servers',
        'NFT-based inventory',
        'Real-time voice chat',
        'Community leaderboards'
    ]

    return (
        <div className='w-[95%] mx-auto h-auto flex justify-center items-center px-3 lg:py-30 md:py-24 sm:py-18 xs:py-12 py-8'>
            {/* Content */}
            <div className='md:w-1/2 w-full h-full flex flex-col gap-3 md:pl-4 xs:pl-8 pt-4'>
                <h2 className='font-mono xl:text-[40px] lg:text-4xl md:text-3xl xs:text-2xl text-xl xl:max-w-lg md:max-w-md max-w-xl md:pr-0 xs:pr-20'>
                    Each game features:
                </h2>
                <p className='lg:text-lg md:text-base text-sm uppercase'>From high-octane FPS titles to sprawling MMORPGs, we fuse speed, design, and strategy to redefine the way you play.</p>

                <ul className='mt-6 flex gap-6 flex-col'>
                    {
                        featuresData.map((feature, index) => (
                            <li key={index} className={`${index % 2 !== 0 ? 'ml-16' : 'ml-0'} uppercase rounded-4xl  w-[350px] text-center py-5 text-lg bg-gradient-to-r from-[#FF6F00] to-[#FB8A33] text-secondary font-semibold`}>{feature}</li>
                        ))
                    }
                </ul>
            </div>

            {/* Image */}
            <div className='md:w-1/2 w-full md:pt-0 pt-20 relative h-full flex justify-center items-center'>
                <div className='absolute w-full h-full flex justify-center items-center bottom-20'>
                    <Image src='/images/feature-vector.png' alt='image' width={400} height={400} />
                </div>
                <div className='w-full h-full flex justify-center items-center z-10'>
                    <Image src='/images/feature-image.png' alt='image' width={430} height={540} />
                </div>
            </div>
        </div>
    )
}

export default FeaturesPage
