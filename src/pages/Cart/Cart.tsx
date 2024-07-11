import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Cart = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold text-gray-900 mb-4">
        Shopping Cart
      </h1>
      <div className="flex flex-col md:flex-row gap-8 my-8">
        {/* cart items */}
        <div className="flex-grow md:flex-grow-0 flex flex-col">
            {/* item 1 */}
          <div className="flex justify-between border-t-2 border-gray-200 py-8">
            <img
              className="w-1/4"
              src="../../../src/assets/images/keyboard-1.jpg"
              alt="key1"
            />
            <div>
              <h2 className="text-lg">Product name</h2>
              <p className="text-md text-gray-700">Brand</p>
              <p className="font-semibold">$120</p>
            </div>
            <div>
                <p>In stock</p>
            </div>
            <div>
              <input type="number" min={1} defaultValue={1} />
            </div>
            <span>
              <CloseOutlined />
            </span>
          </div>
        </div>
        {/* order summary  */}
        <div className=" md:w-full bg-gray-50 p-8">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between py-4 border-b-2 border-gray-200">
            <p>Subtotal</p>
            <p>$99.00</p>
          </div>
          <div className="flex justify-between py-4 border-b-2 border-gray-200">
            <p>Shipping charge</p>
            <p>$99.00</p>
          </div>
          <div className="flex justify-between py-4 border-b-2 border-gray-200">
            <p>Tax estimate</p>
            <p>$99.00</p>
          </div>
          <div className="flex justify-between py-4">
            <p>Order total</p>
            <p>$99.00</p>
          </div>
          <Button
            className="w-full bg-violet-900 text-white font-semibold"
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
