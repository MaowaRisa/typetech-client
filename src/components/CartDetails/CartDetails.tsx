import { TProduct } from "../../redux/features/products/productSlice";
import {
  clearCart,
  getTotals,
  removeFromCart,
} from "../../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useGetAllBrandsQuery } from "../../redux/features/brands/brandApi";

const CartDetails = () => {
  const cart = useAppSelector((state) => state.cart);
  const { data: brands } = useGetAllBrandsQuery({});
  console.log(brands?.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

//   const handleAddToCart = (product: TProduct) => {
//     dispatch(addToCart(product));
//   };
//   const handleDecreaseCart = (product: TProduct) => {
//     dispatch(decreaseCart(product));
//   };
  const handleRemoveFromCart = (product: TProduct) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-container">
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
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
          <div className="cart-items">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div
                  className="flex justify-between border-t-2 border-gray-200 py-8"
                  key={cartItem._id}
                >
                  <img
                    className="w-1/4"
                    src={cartItem.image}
                    alt={cartItem.name}
                  />
                  <div>
                    <h2 className="text-lg">{cartItem.name}</h2>
                    <p className="text-md text-gray-700">{cartItem.brand.name}</p>
                    <p className="font-semibold">${cartItem.price}</p>
                    {/* <button onClick={() => handleRemoveFromCart(cartItem)}>
                      Remove
                    </button> */}
                  </div>
                  <div>
                    <p>In stock</p>
                  </div>
                  <div>
                    <input type="number" min={1} defaultValue={1} />
                  </div>
                  <span onClick={() => handleRemoveFromCart(cartItem)}>
                    <CloseOutlined />
                  </span>
                </div>
              ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button>Check out</button>
              <div className="continue-shopping">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CartDetails;
