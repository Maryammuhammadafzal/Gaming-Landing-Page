import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { Button } from "./ui/button"

export function Slider() {

    return (
        <Carousel className="w-full max-w-5xl p-5 min-h-[550px]">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1 w-[85%] flex-col mx-auto min-h-[550px] flex ">
                            <div className="w-full h-full relative flex justify-center">
                                <div className="absolute left-0 top-10 w-auto h-auto">
                                    <Image src={'/images/card-image1.png'} alt="card-image" width={300} height={370} />
                                </div>
                                <div className="absolute w-auto z-10 h-auto">
                                    <Image src={'/images/card-image2.png'} alt="card-image" width={300} height={370} />
                                </div>
                                <div className="absolute right-0 top-10 w-auto h-auto">
                                    <Image src={'/images/card-image3.png'} alt="card-image" width={300} height={370} />
                                </div>
                                <div className="flex w-auto h-auto flex-col text-center items-center absolute top-90 gap-3">
                                    <h3 className="text-3xl text-secondary font-mono">Cyber Rift</h3>
                                    <p className="text-secondary uppercase max-w-[260px] text-base">A futuristic PvP shooter with customizable exosuits.</p>
                                    <Button className='uppercase w-fit rounded-4xl px-8 py-5 bg-gradient-to-r from-[#FF6F00] to-[#FB8A33] text-secondary font-semibold'>Explore Now</Button>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="bg-[#FF6F00]/40 text-[#FF6F00] border-0 hover:bg-[#FF6F00]/60 hover:text-[#FF6F00] p-5" />
            <CarouselNext className="bg-[#FF6F00]/40 text-[#FF6F00] border-0 hover:bg-[#FF6F00]/60 hover:text-[#FF6F00] p-5" />
        </Carousel>
    )
}
