import { TBrand } from "../../redux/features/brands/brandSlice";
import Brand from "../../components/Brand/Brand";
import { useGetAllBrandsQuery } from "../../redux/features/brands/brandApi";

const FeaturedBrands = () => {
  const { data: brands, isError } = useGetAllBrandsQuery({});
  if (isError) {
    console.log(isError);
  }
  // console.log(brands?.data);
  return (
    <div className="my-8">
      <div className="mb-14">
        <h2 className="text-center text-3xl font-semibold text-gray-900 my-2">
          Our brands
        </h2>
        <p className="text-gray-600 w-1/2 m-auto text-center">
          Discover top mechanical keyboard brands we proudly offer.Innovation
          meets performance and style.
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 px-4 md:px-0 lg:grid-cols-8 gap-4">
        {brands?.data ? (
          brands?.data.map((brand: TBrand) => (
            <Brand key={brand.name} brand={brand}></Brand>
          ))
        ) : (
          <div className="text-center">
            <span className="text-violet-500 font-semibold text-5xl loading loading-ring loading-lg"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedBrands;
