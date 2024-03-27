
import Image from 'next/image';
import ProductList from '../../../../public/data/ProductList';
import ImagesView from '@/components/clientComponent/imageSwapper/imagesView';
import Link from 'next/link';
import NotFound from '@/components/NotFound';
import StarRating from '@/components/StarRating';


export default function SingleProductDetails({ params }) {

    const selectedProductDetails = ProductList?.products?.find((item => Number(item?.id) === Number(params?.productId?.[0])))

    const calculatedCurrentPriceAfterDiscount = () => {

        const calculatedCurrentPrice = Number(selectedProductDetails?.price) - (
            (Number(selectedProductDetails?.price) * Number(selectedProductDetails?.discountPercentage)) / 100
        );

        return `$${calculatedCurrentPrice.toFixed(2)}`
    };

    return (
        <>
            <section className="bg-[#fafaf2] py-20 s"
            >
                {selectedProductDetails ?
                    <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">

                        <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">

                            <ImagesView
                                thumbnail={selectedProductDetails?.thumbnail}
                                images={selectedProductDetails?.images}
                            />

                        </div>
                        <div className="w-full lg:w-5/12">
                            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
                                {selectedProductDetails?.title}
                            </h1>
                            <Link
                                className="text-[#919090] my-3 cursor-pointer capitalize"
                                href={`/category/${selectedProductDetails?.category}`}
                            >
                                {selectedProductDetails?.category}
                            </Link>
                            <div className="mt-3 flex items-center justify-start gap-1">


                                <StarRating
                                    rating={selectedProductDetails?.rating}
                                />

                            </div>
                            <hr className="my-5 bg-black" />

                            <div>
                                <p className="my-3">
                                    <span className="text-rose-600 opacity-60 line-through">
                                        ${selectedProductDetails?.price}
                                    </span>
                                    <span className="font-bold text-2xl ml-2">
                                        {calculatedCurrentPriceAfterDiscount()}
                                    </span>
                                </p>
                            </div>
                            <div>
                                <p className="leading-7">
                                    {selectedProductDetails?.description}
                                </p>

                                <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                                    Add To Cart - {calculatedCurrentPriceAfterDiscount()}
                                </button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='w-full flex flex-col h-full justify-center items-center'>
                        <NotFound
                            message={' No Product found.'}
                            detailsMessage={'Please select valid product to view details.'}
                        />


                    </div>


                }

            </section>
        </>
    )


}