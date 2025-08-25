import Image from 'next/image'
import React from 'react'

const UpcomingPage = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center p-10'>
            <div className='bg-primary/50 w-full rounded-2xl h-[200px] flex justify-evenly items-center shadow-md shadow-[#FF6F00]/20'>
                {/* Image */}
                <div className='md:w-1/2 w-full md:pt-0 pt-20 relative h-full flex justify-center items-center'>
                    <div className='w-full h-full flex justify-center items-center z-10 '>
                        <Image src='/images/event-image.png' alt='about-image' width={446} height={240} />
                    </div>
                    <div className='absolute w-[440px] h-[240px] bg-[#FF6F00] rounded-2xl -rotate-[20deg] 2xl:left-28 xl:left-18 lg:left-10 left-0'></div>
                    <div className='absolute w-[250px] h-[134px] bg-[#FF6F00] rounded-2xl rotate-[30deg] -bottom-6 2xl:right-30 xl:right-20 lg:right-10 right-0'></div>
                </div>
                {/* Content */}
                <div className='md:w-1/2 w-full h-full flex flex-col gap-3 md:pl-4 xs:pl-8 pt-4'>
                    <h3 className='text-2xl text-[#FF6F00] font-mono'>Upcoming Tournament:</h3>
                    <h2 className='font-mono xl:text-[40px] lg:text-4xl md:text-3xl xs:text-2xl text-xl xl:max-w-lg md:max-w-md max-w-xl md:pr-0 xs:pr-20'>
                        More Than Just Games — It's a Lifestyle.
                    </h2>
                    <p className='lg:text-lg md:text-base text-sm'>NEXA Arena is a next-generation gaming platform crafted for competitive spirits and creative minds. We bring together immersive gameplay, esports tournaments, NFT-based assets, and metaverse integration — all powered by Web3 tech.</p>
                </div>
            </div>
        </div>
    )
}

export default UpcomingPage
