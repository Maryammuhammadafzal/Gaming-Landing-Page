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
        <Carousel className="w-full max-w-5xl p-5 min-h-[480px]">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1 w-[85%] flex-col mx-auto min-h-[400px] flex ">
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
                            </div>
                            <div className="flex flex-col gap-3">
<h3 className="text-[]"></h3>
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
