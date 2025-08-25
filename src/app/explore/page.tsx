import { Slider } from '@/components/Slider'
import { Button } from '@/components/ui/button'
import React from 'react'

const ExplorePage = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center flex-col gap-6 px-3 lg:py-30 md:py-24 sm:py-18 xs:py-12 py-8'>
            <div className='head'>
                <h2 className='font-mono xl:text-[40px] lg:text-4xl md:text-3xl xs:text-2xl text-xl py-10'>
                    Meet the Minds Behind NEXA
                </h2>
            </div>
            <div className="cards w-full h-auto flex justify-center items-center gap-4">
                <Slider />
            </div>
        </div>
    )
}

export default ExplorePage
