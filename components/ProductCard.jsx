import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import product1 from '../public/product-1.webp'
import { getDiscountedPricePercentage } from '@/utils/helper';
import { IoBagAddOutline, IoBagCheckOutline } from "react-icons/io5";

const ProductCard = ({ data: { attributes: p, id } }) => {
    return (
        <Link
            href={`/product/${p.slug}`}
            className='transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer'
        >
            {/* Add To Cart Button End */}
            <Image
                src={p.thumbnail.data.attributes.url}
                alt={p.name}
                width={500}
                height={500}
            />

            <div className='p-4 text-black/[0.9]'>
                <div className="flex justify-between">
                    <h2 className="text-lg font-medium">
                        {p.name}
                    </h2>
                    {/* <button
                        className='text-xl'
                        onClick={() => {
                            if (!selectedSize) {
                                setShowError(true)
                                document.getElementById("sizesGrid").scrollIntoView({
                                    block: "center",
                                    behavior: "smooth"
                                })
                            } else {
                                dispatch(
                                    addToCart({
                                        ...product?.data?.[0],
                                        selectedSize,
                                        oneQuantityPrice: p.price,
                                    }))
                                notify()
                            }
                        }}
                    >
                        <IoBagAddOutline />
                    </button> */}
                </div>


                <div className='flex items-center text-black/[0.9]'>
                    <p className="mr-2 text-lg font-semibold">
                        &#8377;{p.price}
                    </p>

                    {p.original_price && (
                        <>
                            <p className="text-base font-medium line-through">
                                &#8377;{p.original_price}
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                                {getDiscountedPricePercentage(p.original_price, p.price)}% off
                            </p>
                        </>
                    )}

                </div>
            </div>

        </Link>
    )
};

export default ProductCard;