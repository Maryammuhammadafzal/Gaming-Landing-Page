import { Card } from '@/components/ui/card'
import React from 'react'

const TeamPage = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center gap-6 px-3 lg:py-30 md:py-24 sm:py-18 xs:py-12 py-8'>
            <div className='head'>
                <h2 className='font-mono xl:text-[40px] lg:text-4xl md:text-3xl xs:text-2xl text-xl xl:max-w-lg md:max-w-md max-w-xl md:pr-0 xs:pr-20'>
                    Meet the Minds Behind NEXA
                </h2>
            </div>
            <div className="cards w-full h-auto flex justify-center items-center gap-4">
                <Card></Card>
            </div>
        </div>
    )
}

export default TeamPage
