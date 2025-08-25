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

export function Slider() {

    return (
        <Carousel className="w-full max-w-6xl">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1 w-[85%] h-auto flex justify-center items-center ">
                            <div className="w-full h-full relative">
                                <div className="absolute rotate-12 w-auto h-auto">
                                    <Image src={'/images/card-image1.png'} alt="card-image" width={300} height={370} />
                                </div>
                                <div className="absolute w-auto h-auto">
                                    <Image src={'/images/card-image2.png'} alt="card-image" width={300} height={370} />
                                </div>
                                <div className="absolute -rotate-12 w-auto h-auto">
                                    <Image src={'/images/card-image3.png'} alt="card-image" width={300} height={370} />
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
