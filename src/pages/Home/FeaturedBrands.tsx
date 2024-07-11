const FeaturedBrands = () => {
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
      <div className="grid grid-col-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {/* brand 1 */}
        <div className="flex flex-col justify-center items-center bg-gray-50 rounded-md">
          <span className="bg-violet-900 shadow-md text-center p-4 border-4 border-white text-white font-bold -mt-7">
            <img src="../../../src/assets/images/brand-1.png" alt="brand 1" />
          </span>
          <h2 className="font-semibold py-4">Test brand</h2>
        </div>
        {/* brand 1 */}
        <div className="flex flex-col justify-center items-center bg-gray-50 rounded-md">
          <span className="bg-violet-900 shadow-md text-center p-4 border-4 border-white text-white font-bold -mt-7">
            <img src="../../../src/assets/images/brand2.png" alt="brand 2" />
          </span>
          <h2 className="font-semibold py-4">Test brand</h2>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBrands;
