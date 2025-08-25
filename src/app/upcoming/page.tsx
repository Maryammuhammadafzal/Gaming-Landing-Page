import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const UpcomingPage = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center sm:p-10 p-3'>
            <div className='bg-primary/50 w-full rounded-2xl my-6 h-auto pb-20 flex justify-evenly items-center shadow-md shadow-[#FF6F00]/20'>
                {/* Image */}
                <div className='md:w-1/2 w-full relative h-full flex justify-center items-center'>
                    <div className='w-full h-full flex justify-center items-center z-10 '>
                        <Image src='/images/event-image.png' alt='about-image' width={446} height={240} />
                    </div>
                    <div className='absolute w-[440px] h-[240px] bg-[#FF6F00] rounded-2xl -rotate-[20deg] 2xl:left-28 xl:left-18 lg:left-10 left-0'></div>
                    <div className='absolute w-[250px] h-[134px] bg-[#FF6F00] rounded-2xl rotate-[30deg] -bottom-6 2xl:right-30 xl:right-20 lg:right-10 right-0'></div>
                </div>
                {/* Content */}
                <div className='md:w-1/2 w-full h-full flex flex-col gap-3 md:pl-4 xs:pl-8 '>
                    <h3 className='text-2xl text-[#FF6F00] font-mono'>Upcoming Tournament:</h3>
                    <h2 className='font-mono xl:text-[40px] lg:text-4xl md:text-3xl xs:text-2xl text-xl xl:max-w-lg md:max-w-md max-w-xl md:pr-0 xs:pr-20'>
                        Cyber Rift: Battle Code 2025
                    </h2>

                    <div className='flex flex-col gap-2'>
                        <p className='md:text-lg flex justify-between text-base w-[210px]'>Qualifiers Begin: <span className='text-lg text-[#FF6F00] pl-2 uppercase'>Sept 15</span></p>
                        <p className='md:text-lg flex justify-between text-base w-[210px]'>Finals: <span className='text-lg pl-2 text-[#FF6F00] uppercase'>oct 22</span></p>
                    </div>

                    <div>
                        <Button className='uppercase rounded-4xl px-8 py-5 bg-gradient-to-r from-[#FF6F00] to-[#FB8A33] text-secondary font-semibold'>Register Your Team</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpcomingPage
