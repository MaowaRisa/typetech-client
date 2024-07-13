import { TBrand } from "../../redux/features/brands/brandSlice";

const Brand = ({ brand }: { brand: TBrand }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 rounded-md">
      <span className="bg-violet-50 shadow-md text-center p-4 border-4 border-white text-white font-bold -mt-7">
        <img className="rounded-full border-4 border-gray-50" src={brand.image} alt="brand 1" />
      </span>
      <h2 className="font-semibold py-4">{brand.name}</h2>
    </div>
  );
};

export default Brand;
