import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import PricingDetails from "../PricingDetails/PricingDetails";
import { removeProductFromCart, resetCart } from "../../redux/features/cart/cartSlice";

const CartDetails = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const handleClearCart = () =>{
    dispatch(resetCart())
  }
  const handleRemoveProduct = (slug: string) =>{
    dispatch(removeProductFromCart(slug))
  }
  return (
    <div className="cart-container">
      {cart.products.length === 0 ? (
        <div className="cart-empty text-center">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <Button
                className="btn-primary p-6 font-semibold"
                style={{
                  backgroundColor: "#2E1065",
                  color: "#fff",
                }}
              >
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="cart-items">
              {cart.products &&
                cart.products.map((cartItem) => (
                  <div
                    className="flex justify-between border-t-2 border-gray-200 py-8"
                    key={cartItem.slug}
                  >
                    <img
                      className="w-1/12"
                      src={cartItem.image}
                      alt={cartItem.name}
                    />
                    <div>
                      <h2 className="text-lg">{cartItem.name}</h2>
                      <p className="font-semibold">${cartItem.price}</p>
                      {/* <button onClick={() => handleRemoveFromCart(cartItem)}>
                      Remove
                    </button> */}
                    </div>
                    <div>
                      <p>In stock ({cartItem.stock})</p>
                    </div>
                    <div>
                      <p>{cartItem.quantity}</p>
                    </div>
                    <span onClick={()=> handleRemoveProduct(cartItem.slug)}>
                      <CloseOutlined />
                    </span>
                  </div>
                ))}
            </div>
            <div className="bg-gray-50 p-4">
              <PricingDetails></PricingDetails>
              <div className="text-right">
                <Link to="/checkout">
                  <Button
                    className="btn-primary p-4 font-semibold"
                    style={{
                      backgroundColor: "#2E1065",
                      color: "#fff",
                    }}
                  >
                    Checkout
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Button onClick={()=> handleClearCart()} className="p-4 font-semibold">Clear Cart</Button>
            <Link to="/">
              <Button
                className="btn-primary p-4 font-semibold"
                style={{
                  backgroundColor: "#2E1065",
                  color: "#fff",
                }}
              >
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default CartDetails;
