import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const FeaturesPage = () => {
    const featuresData = [
        {
            icon: '🏆',
            text: 'Monthly Showdowns'
        },
        {
            icon: '💰',
            text: 'Prize Pools from $5,000 to $100,000'
        },
        {
            icon: '🎥',
            text: ' Live Broadcasts with global shoutcasters'
        },
        {
            icon: '💬',
            text: 'Community-driven team formations'
        }

    ]
    return (
        <div className='w-full h-auto flex justify-center items-center flex-col gap-6 px-3 lg:py-30 md:py-24 sm:py-18 xs:py-12 py-8'>
            <div className='head'>
                <h2 className='font-mono xl:text-[40px] lg:text-4xl md:text-3xl xs:text-2xl text-xl py-10'>
                    Climb the Ladder. <br />
                    Claim the Crown.
                </h2>
            </div>
            <div className="cards w-full h-auto flex justify-center items-center gap-4">
                {featuresData.map((feature, index) => (
                    <Card key={index} className='p-3 w-[245px] flex items-center h-[208px] rounded-md bg-transparent border border-[#FF6F00]'>
                        <CardContent className='p-6 h-full gap-2 flex flex-col justify-center'>
                            <p>
                                {feature.icon}
                            </p>
                            <p className='text-secondary max-w-[190px] uppercase text-xl'>
                                {feature.text}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default FeaturesPage
