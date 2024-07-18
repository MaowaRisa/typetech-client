import { TProduct } from "../redux/features/products/productSlice";
import { useGetProductByIdQuery } from "../redux/features/products/productApi";
import { useParams } from "react-router-dom";
import { ShoppingCartOutlined, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useAppDispatch } from "../redux/hook";
import { addToCart } from "../redux/features/cart/cartSlice";
import { useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isSuccess } = useGetProductByIdQuery(id);

  const product = !isLoading && data?.success ? (data.data as TProduct) : null;
  const [quantity] = useState(1);
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    const productToCart = {
        name: product?.name,
        slug: product?.slug,
        image: product?.image,
        price: product?.price,
        stock: product?.quantity,
        quantity: quantity
    }
    dispatch(addToCart(productToCart));
    // history.push("/cart");
  };

  return (
    <div className="flex gap-4 my-4">
      {!isLoading && isSuccess && data?.data ? (
        <div className="flex flex-col md:flex-row gap-8 p-4">
          <div className="md:w-1/2">
            <img src={product?.image} alt={product?.name} />
          </div>
          <div className="flex flex-col gap-4">
            <div className="">
              <h2 className="text-lg font-semibold">{product?.name}</h2>
              <div>
                {
                    product?.rating !== undefined ? (
                        (() => {
                            let count = 5;
                            const arr = [];
                            for (let i = 0; i < product?.rating; i++) {
                              arr.push(
                                  <StarOutlined style={{ color: "gold", fontSize: "16px" }} />
                              );
                              count --;
                            }
                            console.log('after loop',count)
                            if(count > 0){
                              for (let i = 0; i < count; i++) {
                                  arr.push(
                                      <StarOutlined style={{ color: "gray", fontSize: "16px" }} />
                                  );
                                }
                            }
                            return arr;
                          })()
                    ):(
                        <p>Something error</p>
                    )
                
                }
                ({product?.rating})
              </div>
            </div>
            <p>{product?.description}</p>
            <p>Brand: {product?.brand}</p>
            <p>Price: {product?.price}</p>
            <p>Available Quantity : {product?.quantity}</p>
            <Button
              className="w-1/2 btn-primary p-5 mt-4"
              style={{
                backgroundColor: "#2E1065",
                color: "#fff",
              }}
              onClick={() => handleAddToCart()}
            >
              <ShoppingCartOutlined
                style={{ fontSize: "1.5rem", color: "#fff", font: "bold" }}
              />
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
