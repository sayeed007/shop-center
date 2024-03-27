import SingleProductCard from "@/components/SingleProductCard";
import ProductList from "../../public/data/ProductList";
import HeroSection from "@/components/HeroSection";
import SignUpCard from "@/components/SignUpCard";
import Footer from "@/components/Footer";

export default function AllProductList() {


  return (
    <>

      <HeroSection />

      {/* <!-- Product section start --> */}
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">

          {(ProductList?.products?.slice(0, 12))?.map((eachProduct) => {
            return (
              <SingleProductCard
                key={eachProduct?.id}
                productDetails={eachProduct}
              />
            )
          })}

        </div>
      </section>

      {/* <!--Product section start-->  */}

      <SignUpCard />
      <Footer />
    </>
  );
}
