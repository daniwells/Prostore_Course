'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Product } from "@/types";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";

const ProductCarousel = ({ data }: { data: Product[]}) => {
    return <div className="md:px-6 mx-[-20px] " >    
        <Carousel 
            className="w-full mb-12"
            opts={{
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 5000,
                    stopOnInteraction: true,
                    stopOnMouseEnter: true,
                }),
            ]}
        >
            <CarouselContent>
                {
                    data.map((product: Product) => (
                        <CarouselItem key={product.id} >
                            <Link
                                href={`/product/${product.slug}`}
                            >
                                <div className="relative">
                                    <Image
                                        src={product.banner!}
                                        alt={product.name}
                                        height="0"
                                        width="0"
                                        sizes="100vw"
                                        className="w-full h-[15rem] sm:h-[20rem] md:h-[30rem] object-contain"
                                    />
                                    <div className="absolute inset-0 flex items-end justify-center">
                                        <h2 className="bg-gray-900 bg-opacity-50 text-sm sm:text-base md:text-2xl font-bold text-white">
                                            { product.name }
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    </div>
    
}
 
export default ProductCarousel;