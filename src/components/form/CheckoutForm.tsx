import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useUpdateProductMutation } from "../../redux/features/products/productApi";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../../redux/features/cart/cartSlice";

const CheckoutForm = () => {
  const cart = useAppSelector((state) => state.cart.products);
  const [updateProduct] = useUpdateProductMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch()


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      e.target.name.value === "" ||
      e.target.email.value === "" ||
      e.target.phone.value === "" ||
      e.target.deliveryAddress.value === "" ||
      e.target.payment.value === ""
    ) {
      toast("Need to complete required fields!");
    } else {
      for (let i = 0; i < cart.length; i++) {
        await updateProduct({
          slug: cart[i].slug,
          body: { quantity: cart[i].stock - cart[i].quantity },
        });
      }
      toast("Thank you. You have purchased successfully");
      dispatch(resetCart())
      navigate("/")
    }
  };
  return (
    <>
      {cart.length !== 0 && (
        <div className="md:w-1/2 space-y-4">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h2 className="text-xl my-4">Billing information</h2>
            <hr className="my-4" />
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  className="w-full border-2 border-gray-200 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email address</label>
                <input
                  name="email"
                  className="w-full border-2 border-gray-200 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone">Contact No</label>
                <input
                  type="phone"
                  name="phone"
                  className="w-full border-2 border-gray-200 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="deliveryAddress">Delivery address</label>
                <input
                  type="text"
                  name="deliveryAddress"
                  className="w-full border-2 border-gray-200 p-2 rounded-md"
                  required
                />
              </div>
              <h2 className="text-xl">Payment option</h2>
              <hr className="" />
              <div className="flex gap-4">
                <input
                  type="radio"
                  name="payment"
                  className="radio"
                  value="cash"
                />
                Cash on delivery
                <input
                  type="radio"
                  name="payment"
                  className="radio"
                  value="card"
                />
                Card
              </div>
            </div>
            <div className="text-right mt-4">
              <button
                className="btn-primary p-4 font-semibold"
                style={{
                  backgroundColor: "#2E1065",
                  color: "#fff",
                }}
              >
                Confirm order
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
