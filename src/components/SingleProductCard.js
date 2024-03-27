import Link from 'next/link';
import React from 'react';

const SingleProductCard = (props) => {

    const calculatedCurrentPriceAfterDiscount = () => {

        const calculatedCurrentPrice = Number(props?.productDetails?.price) - (
            (Number(props?.productDetails?.price) * Number(props?.productDetails?.discountPercentage)) / 100
        )


        return `$${calculatedCurrentPrice.toFixed(2)}`
    };


    return (
        <>

            {/* <!-- Product  --> */}

            <div>
                <div
                    className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8]  bg-cover bg-center transition-all duration-3000 ease-in-out transform"
                    style={{ backgroundImage: `url(${props?.productDetails?.thumbnail})` }}
                >
                </div>
                <h2 className="text-sm lg:text-base mt-2">
                    <Link
                        className="text-base font-bold"
                        href={`/products/${props?.productDetails?.id}`}>
                        {props?.productDetails?.title}
                    </Link>

                    <span className="text-[#919090] capitalize">
                        <Link
                            href={`/category/${props?.productDetails?.category}`}>
                            ({props?.productDetails?.category})
                        </Link>
                    </span>
                </h2>
                <p className="text-[#919090] text-sm ">
                    {props?.productDetails?.description}
                </p>

                <p className="text-rose-600 text-sm mt-4">
                    <span className="text-[#919090] line-through">
                        ${props?.productDetails?.price}
                    </span>
                    {calculatedCurrentPriceAfterDiscount()}
                </p>
            </div>
            {/* <!-- Product --> */}

        </>
    );
}

export default SingleProductCard;
