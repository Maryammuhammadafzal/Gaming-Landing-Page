import Header from '@/components/Header'
import React from 'react'

const HeroPage = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center bg-cover bg-center' style={{backgroundImage: `url(${'/images/hero-bg.png'})`}}>
            <div className='w-full relative h-screen'>
                <div className=''><Header /></div>
            </div>
        </div>
    )
}

export default HeroPage
