import { addToCart } from "../../redux/features/cart/cartSlice";
import { TProduct } from "../../redux/features/products/productSlice";
import { useAppDispatch } from "../../redux/hook";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
const Product = ({ product }: { product: TProduct }) => {
    const dispatch = useAppDispatch();
    const handleAddToCart = (product :TProduct) => {
        dispatch(addToCart(product));
        // history.push("/cart");
      };
  return (
    <div className="card shadow-md hover:bg-violet-50 mt-8 p-4">
      <figure className="w-full h-48 overflow-hidden flex justify-center items-center bg-gray-100 rounded-xl">
        <img
          src={product.image}
          alt={`${product.name} of ${product.brand}`}
          className="object-cover w-full h-full rounded-xl"
        />
      </figure>
      <div className="mt-4 space-y-1 flex flex-col gap-2 justify-between">
        <div>
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">{product.description.slice(0,50)}...</p>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h2 className="text-sm font-semibold">
              Brand: <span className="font-normal">{product.brand.name}</span>
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span className="font-normal">{`$ ${product.price}`}</span>
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
          </div>
          <div className="flex justify-end gap-2">
            <Button
              className="btn-primary p-5 mt-4"
              style={{
                backgroundColor: "#fff",
                color: "#111827",
              }}
            >
              View
            </Button>
            <Button
              className="btn-primary p-5 mt-4"
              style={{
                backgroundColor: "#2E1065",
                color: "#fff",
              }}
              onClick={() => handleAddToCart(product)}
            >
              <ShoppingCartOutlined style={{ fontSize: '1.5rem', color: '#fff', font:"bold"}}/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
