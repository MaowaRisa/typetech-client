import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Checkout = () => {
  return (
    <div className="container flex gap-4 my-10">
      {/* user info */}
      <div className="w-1/2">
        <h2 className="text-xl my-4">Contact information</h2>
        <hr className="my-4" />
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border-2 border-gray-200 py-2 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full border-2 border-gray-200 py-2 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phoneNo">Contact No</label>
          <input
            type="text"
            id="phoneNo"
            name="phoneNo"
            className="w-full border-2 border-gray-200 py-2 rounded-md"
            required
          />
        </div>
      </div>
      {/* order summary */}
      <div className="w-1/2 border-2 border-gray-200 p-6">
        {/* products */}
        <div className="flex flex-col">
          {/* product 1 */}
          <div className="flex justify-between border-b-2 py-2">
            <div className="w-[100px]">
              <img
                src="../../../src/assets/images/keyboard-1.jpg"
                alt="key 1"
              />
            </div>
            <div>
              <h2 className="text-lg">Product name</h2>
              <p className="text-md text-gray-700">Brand</p>
              <p className="font-semibold">$120</p>
            </div>
            <div>
              <input type="number" min={1} defaultValue={1} />
            </div>
            <span>
              <CloseOutlined />
            </span>
          </div>
          {/* product 1 */}
          <div className="flex justify-between border-b-2 py-2">
            <div className="w-[100px]">
              <img
                src="../../../src/assets/images/keyboard-1.jpg"
                alt="key 1"
              />
            </div>
            <div>
              <h2 className="text-lg">Product name</h2>
              <p className="text-md text-gray-700">Brand</p>
              <p className="font-semibold">$120</p>
            </div>
            <div>
              <input type="number" min={1} defaultValue={1} />
            </div>
            <span>
              <CloseOutlined />
            </span>
          </div>
          <div className=" md:w-full py-2">
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
            <div className="text-right">
              <Button className="w-1/3 bg-violet-900 text-white font-semibold p-6">
                Pay now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
