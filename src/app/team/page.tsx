import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const TeamPage = () => {
    const teamData = [
        {
            name: 'Zara H.',
            profession: 'Creative Director',
            image: '/images/team-image1.png'
        },
        {
            name: 'Liam K.',
            profession: 'Lead Developer',
            image: '/images/team-image2.png'
        },
        {
            name: 'Emily R.',
            profession: 'Art Director',
            image: '/images/team-image3.png'
        },
    ]
    return (
        <div className='w-full h-auto flex justify-center items-center flex-col gap-6 px-3 lg:py-30 md:py-24 sm:py-18 xs:py-12 py-8'>
            <div className='head'>
                <h2 className='font-mono xl:text-[40px] lg:text-4xl md:text-3xl xs:text-2xl text-xl py-10'>
                    Meet the Minds Behind NEXA
                </h2>
            </div>
            <div className="cards w-full h-auto flex justify-center items-center gap-4">
                {teamData.map((team , index) => (
                    <Card key={index} className='p-0 w-[300px] h-[480px] rounded-2xl bg-transparent border-0'>
                    <CardContent className='flex flex-col gap-3 w-full h-full rounded-2xl'>
                        <Image src={team.image} alt='team-image' width={300} height={400} className='rounded-2xl' />
                        <div className='flex flex-col w-full text-center'>
                            <h3 className='font-mono text-[28px] text-[#FF6F00]'>
                                {team.name}
                            </h3>
                            <p className='text-2xl text-secondary'>{team.profession}</p>
                        </div>
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

export default TeamPage
