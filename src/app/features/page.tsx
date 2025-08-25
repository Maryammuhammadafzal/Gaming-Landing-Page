import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const FeaturesPage = () => {
    const featuresData = [
        '🏆<br/> Monthly Showdowns',
        '💰<br/> Prize Pools from $5,000 to $100,000',
        '🎥<br/> Live Broadcasts with global shoutcasters',
        '💬<br/> Community-driven team formations'

    ]
    return (
        <div className='w-full h-auto flex justify-center items-center flex-col gap-6 px-3 lg:py-30 md:py-24 sm:py-18 xs:py-12 py-8'>
            <div className='head'>
                <h2 className='font-mono xl:text-[40px] lg:text-4xl md:text-3xl xs:text-2xl text-xl py-10'>
                    Meet the Minds Behind NEXA
                </h2>
            </div>
            <div className="cards w-full h-auto flex justify-center items-center gap-4">
                {featuresData.map((feature, index) => (
                    <Card key={index} className='p-3 w-[245px] h-[208px] rounded-md bg-transparent border border-[#FF6F00]'>
                        <CardContent className='p-0'>
                            <p className=''>
                                {feature}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className='w-auto h-auto'>
                <Button className='uppercase rounded-4xl px-8 py-5 bg-gradient-to-r from-[#FF6F00] to-[#FB8A33] text-secondary font-semibold'>Work With Us</Button>
            </div>
        </div>
    )
}

export default FeaturesPage
