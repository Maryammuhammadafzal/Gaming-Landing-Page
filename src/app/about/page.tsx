import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center px-3 lg:py-30 md:py-24 sm:py-18 xs:py-12 py-8'>

            {/* Image */}
            <div className='md:w-1/2 w-full md:pt-0 pt-20 relative h-full flex justify-center items-center'>
                <div className='w-full h-full flex justify-center items-center z-10 '>
                    <Image src='/images/about-image.png' alt='about-image' width={446} height={240} />
                </div>
                <div className='absolute w-[440px] h-[240px] bg-[#FF6F00] rounded-2xl -rotate-[20deg] 2xl:left-28 xl:left-18 lg:left-10 left-0'></div>
                <div className='absolute w-[250px] h-[134px] bg-[#FF6F00] rounded-2xl rotate-[30deg] -bottom-6 2xl:right-30 xl:right-20 lg:right-10 right-0'></div>
            </div>
            {/* Content */}
            <div className='md:w-1/2 w-full h-full flex flex-col gap-3 md:pl-4 xs:pl-8 pt-4'>
                <h2 className='font-mono xl:text-[40px] lg:text-4xl md:text-3xl xs:text-2xl text-xl xl:max-w-lg md:max-w-md max-w-xl md:pr-0 xs:pr-20'>
                    More Than Just Games — It's a Lifestyle.
                </h2>
                <p className='lg:text-lg md:text-base text-sm'>NEXA Arena is a next-generation gaming platform crafted for competitive spirits and creative minds. We bring together immersive gameplay, esports tournaments, NFT-based assets, and metaverse integration — all powered by Web3 tech.</p>
            </div>
        </div>
    )
}

export default AboutPage
