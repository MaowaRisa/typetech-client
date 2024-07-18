import { useAppSelector } from "../../redux/hook";
import CheckoutForm from "../../components/form/CheckoutForm";
import { CloseOutlined } from "@ant-design/icons";
import PricingDetails from "../../components/PricingDetails/PricingDetails";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Checkout = () => {
  const cart = useAppSelector((state) => state.cart);
  return (
    <>
      {cart.products.length !== 0 ? (
        <div className="container flex flex-col gap-4 md:flex-row p-4 mx-auto my-10 text-gray-500">
          {/* order summary */}
          <div className="md:w-1/2 border-2 border-gray-200 p-6">
            {cart.products &&
              cart.products.map((cartItem) => (
                <div className="flex justify-around border-b-2 py-2">
                  <div className="w-1/4">
                    <img src={cartItem.image} alt={cartItem.name} />
                  </div>
                  <div>
                    <h2 className="text-lg">{cartItem.name}</h2>
                    <p className="text-md text-gray-700">{cartItem.brand}</p>
                    <p className="font-semibold">${cartItem.price}</p>
                  </div>
                  <div>
                    <p>{cartItem.quantity}</p>
                  </div>
                  <span>
                    <CloseOutlined />
                  </span>
                </div>
              ))}
            {/* products */}
            <PricingDetails></PricingDetails>
          </div>
          {/* user info */}
          <CheckoutForm></CheckoutForm>
        </div>
      ):(
        <div className="cart-empty flex flex-col justify-center items-center my-8">
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
      )}
    </>
  );
};

export default Checkout;
