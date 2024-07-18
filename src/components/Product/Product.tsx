import { Link, useLocation } from "react-router-dom";
import { TProduct } from "../../redux/features/products/productSlice";

import { StarOutlined } from "@ant-design/icons";
import { Button } from "antd";
const Product = ({ product }: { product: TProduct }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  // absolute paths for products
  const productLink = isHomePage
    ? `/products/${product._id}`
    : `${product._id}`;
  return (
    <div className="card shadow-md hover:bg-violet-50 mt-8 p-4">
      <figure className="w-full h-48 overflow-hidden flex justify-center items-center bg-gray-100 rounded-xl">
        <img
          src={product.image}
          alt={`${product.name} of ${product.brand}`}
          className="object-cover w-full h-full rounded-xl"
        />
      </figure>
      <div className="mt-4 space-y-1 flex flex-col gap-1 justify-between">
        <div className="">
          <h2 className="text-lg font-semibold">{product.name}</h2>
        </div>
        <div>
          {product?.rating !== undefined ? (
            (() => {
              let count = 5;
              const arr = [];
              for (let i = 0; i < product?.rating; i++) {
                arr.push(
                  <StarOutlined style={{ color: "gold", fontSize: "16px" }} />
                );
                count--;
              }
      
              if (count > 0) {
                for (let i = 0; i < count; i++) {
                  arr.push(
                    <StarOutlined style={{ color: "gray", fontSize: "16px" }} />
                  );
                }
              }
              return arr;
            })()
          ) : (
            <p>Something error</p>
          )}
          ({product?.rating})
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold">
            Brand: <span className="font-normal">{product.brand}</span>
          </h2>
          <div className="flex justify-between">
            <h2 className="text-sm font-semibold">
              Price: <span className="font-normal">{`$${product.price}`}</span>
            </h2>
            <h2 className="text-sm font-semibold">
              In Stock: <span className="font-normal">{product.quantity}</span>
            </h2>
          </div>
          {/* <div>
              <div className="flex gap-2 justify-center items-center">
                <span className="bg-white p-1 rounded-lg cursor-pointer border-2 border-violet-200">
                  <MinusOutlined style={{ font: "bold" }} />
                </span>
                <input
                  defaultValue={1}
                  className="w-[20px] text-lg bg-violet-50 text-center"
                ></input>
                <span className="bg-white p-1 rounded-lg cursor-pointer border-2 border-violet-200">
                  <PlusOutlined style={{ font: "bold" }} />
                </span>
              </div>
            </div> */}

          <div className="flex justify-end gap-2">
            <Link to={productLink}>
              <Button
                className="btn-primary p-5 mt-4"
                style={{
                  backgroundColor: "#2E1065",
                  color: "#fff",
                }}
              >
                Show Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
