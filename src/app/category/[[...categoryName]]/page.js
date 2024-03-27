/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import ProductList from '../../../../public/data/ProductList';
import ImagesView from '@/components/clientComponent/imageSwapper/imagesView';
import Link from 'next/link';
import SingleProductCard from '@/components/SingleProductCard';
import CategoryNameButton from '@/components/clientComponent/CategoryNameButton';
import NotFound from '@/components/NotFound';

const productCategories = ['All', ...new Set(ProductList?.products?.map(product => product?.category))];


export async function generateStaticParams() {

    return productCategories.map((category) => ({
        categoryName: [category],
    }));
}

export default function CategoryWiseProductView({ params }) {

    const selectedCategory = params?.categoryName?.[0] ? params?.categoryName?.[0] : 'All';

    const selectedProductDetails = selectedCategory === 'All' ?
        [...ProductList?.products]
        : ProductList?.products?.filter((item => item?.category === params?.categoryName?.[0]));


    return (
        <>


            <main>

                {/*  Product section start */}
                <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
                    <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">

                        {productCategories?.map((eachCategory) => {
                            const isActive = selectedCategory === eachCategory;

                            return (
                                <CategoryNameButton
                                    key={eachCategory}
                                    eachCategory={eachCategory}
                                    isActive={isActive}
                                />
                            );
                        })}

                    </div>


                    {selectedProductDetails?.length > 0 ?
                        <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
                            {selectedProductDetails?.map((eachProduct) => {
                                return (
                                    <SingleProductCard
                                        key={eachProduct?.id}
                                        productDetails={eachProduct}
                                    />
                                )
                            })
                            }
                        </div>
                        :
                        <div className='w-full flex flex-col h-full justify-center items-center'>
                            <NotFound
                                message={' No Product found.'}
                                detailsMessage={'Please select one of the following categories to view products.'}
                            />

                            <div className='flex'>

                                {productCategories?.map((eachCategory) => {
                                    const isActive = selectedCategory === eachCategory;

                                    return (
                                        <CategoryNameButton
                                            key={eachCategory}
                                            eachCategory={eachCategory}
                                            isActive={isActive}
                                            styles={{
                                                margin: '0px 10px',
                                            }}
                                        />
                                    );
                                })}

                            </div>
                        </div>
                    }

                </section>

                {/*  Product section ends */}

            </main>

        </>
    )
}