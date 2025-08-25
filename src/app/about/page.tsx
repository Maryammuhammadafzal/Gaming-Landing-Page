import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
    return (
        <div className='w-full h-auto flex md:flex-row flex-col justify-center items-center gap-3 lg:py-30 md:py-24 sm:py-18 xs:py-12 py-8'>

            {/* Image */}
            <div className='md:w-1/2 mx-auto w-full md:pt-0 pt-20 relative h-full flex justify-center items-center'>
                <div className='w-full h-full flex justify-center items-center z-10 '>
                    <Image src='/images/about-image.png' alt='about-image' width={446} height={240} />
                </div>
                <div className='absolute lg:w-[440px] md:w-[350px] xs:w-[440px] h-[240px] bg-[#FF6F00] rounded-2xl -rotate-[20deg] 2xl:left-28 xl:left-18 lg:left-10 md:left-0 xs:left-16 xs:block hidden'></div>
                <div className='absolute lg:w-[250px] md:w-[200px] xs:w-[250px] h-[134px] bg-[#FF6F00] rounded-2xl rotate-[30deg] -bottom-6 2xl:right-30 xl:right-20 lg:right-10 md:right-0 xs:right-10 xs:block hidden'></div>
             <Image src='/images/star.png' alt='about-image' width={30} height={30} className='absolute -bottom-20 right-80 z-50' />
             <Image src='/images/star.png' alt='about-image' width={30} height={30} className='absolute -top-20 right-14 z-50' />
            </div>
            {/* Content */}
            <div className='md:w-1/2 mx-auto w-full h-full flex flex-col gap-3 md:pl-4 xs:pl-8 md:pt-4 pt-24'>
                <h2 className='font-mono xl:text-[40px] lg:text-4xl md:text-3xl xs:text-2xl text-xl xl:max-w-lg md:max-w-md max-w-xl md:pr-0 xs:pr-20'>
                    More Than Just Games — It's a Lifestyle.
                </h2>
                <p className='lg:text-lg md:text-base text-sm'>NEXA Arena is a next-generation gaming platform crafted for competitive spirits and creative minds. We bring together immersive gameplay, esports tournaments, NFT-based assets, and metaverse integration — all powered by Web3 tech.</p>
            </div>
        </div>
    )
}

export default AboutPage
