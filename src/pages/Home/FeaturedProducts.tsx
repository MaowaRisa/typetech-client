import { TProduct } from "@/redux/features/products/productSlice";
import Product from "../../components/Product/Product";
import { useGetAllProductsQuery } from "../../redux/features/products/productApi";

const FeaturedProducts = () => {
  const { data: products, isError } = useGetAllProductsQuery({});
  if (isError) {
    console.log(isError);
  }
  return (
    <div className=" mt-8">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4 ">
          TypeTech's Signature products
        </h2>
        <p className="text-gray-600 w-1/2 m-auto">
          Explore our top mechanical keyboards: customizable RGB lighting,
          premium switches, ergonomic design, and unmatched durability for the
          ultimate typing experience.
        </p>
      </div>
      <div className="grid grid-col-1 md:grid-cols-6 gap-4">
        {products?.data ? (
          products?.data.map((product:TProduct) => <Product key={`${product.name}-${product.price}`} product={product}></Product>)
        ) : (
          <div>
            <span className="loading loading-ring loading-lg"></span>
          </div>
        )}
        {/* card 1 */}
      </div>
    </div>
  );
};

export default FeaturedProducts;
