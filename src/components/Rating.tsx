import Image from 'next/image'
import React from 'react'

const Rating = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center p-10'>
            <div className='bg-primary/50 w-full rounded-2xl h-[200px] flex justify-evenly items-center shadow-md shadow-[#FF6F00]/30'>
                <div className="w-auto h-auto text-secondary text-xl">
                    Over <span className='text-[#FF6F00] text-[32px] uppercase'> 500K <br /> </span> gamers worldwide</div>
                <div className='w-auto flex justify-center items-center'>
                    <Image src={'/images/star.png'} alt='star' width={56} height={56} />
                </div>
                <div className="w-auto h-auto text-secondary text-xl">
                    Custom
                    <span className='text-[#FF6F00] text-[32px] uppercase'> Avatars <br /> </span> & Skins</div>
                <div className='w-auto flex justify-center items-center'>
                    <Image src={'/images/star.png'} alt='star' width={56} height={56} />
                </div>
                <div className="w-auto h-auto text-secondary text-xl">
                    Weekly
                    <span className='text-[#FF6F00] text-[32px] uppercase'> Challenges <br /> </span>& Global Tournaments</div>
            </div>
        </div>
    )
}

export default Rating
