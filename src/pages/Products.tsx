import { TProduct } from "@/redux/features/products/productSlice";
import Product from "../components/Product/Product";
import { useGetAllProductsQuery } from "../redux/features/products/productApi";
import { useState } from "react";

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const { data: products, isError } = useGetAllProductsQuery({});
  if (isError) {
    console.log(isError);
  }
  return (
    <div className=" mt-8">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4 ">
          TypeTech's products
        </h2>
        <p className="text-gray-600 w-1/2 m-auto">
          Explore our top mechanical keyboards: customizable RGB lighting,
          premium switches, ergonomic design, and unmatched durability for the
          ultimate typing experience.
        </p>
      </div>
      <div className="flex justify-end gap-4">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="btn"
        onClick={toggleDropdown}
        onBlur={() => setIsOpen(false)}
      >
        Filter by price
      </div>
      {isOpen && (
        <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <a href="#">Low</a>
          </li>
          <li>
            <a href="#">High</a>
          </li>
        </ul>
      )}
    </div>
      </div>
      <div className="grid grid-col-1 md:grid-cols-4 gap-4">
        {products?.data ? (
          products?.data.map((product: TProduct) => (
            <Product
              key={`${product.name}-${product.price}`}
              product={product}
            ></Product>
          ))
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

export default Products;
