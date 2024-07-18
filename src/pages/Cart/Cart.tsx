import CartDetails from "../../components/CartDetails/CartDetails";

const Cart = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold text-gray-900 mb-4 text-center">
        Shopping Cart
      </h1>
      <div className="flex flex-col md:flex-row gap-8 my-8 justify-center items-center">
          <CartDetails></CartDetails>
      </div>
    </div>
  );
};

export default Cart;