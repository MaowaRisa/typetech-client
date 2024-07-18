import { useAppSelector } from "../../redux/hook";

const PricingDetails = () => {
    const products = useAppSelector((state) => state.cart.products);
  console.log("produicts", products);
  const subTotal = products.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);
  const shipping =subTotal? subTotal > 1000 ? 0 : 40 : 0;
  const tax = subTotal ? subTotal * 0.01 : 0;
    return (
        <div className="cart-summary bg-gray-50 p-4">
              <div className="cart-checkout space-y-4">
                <div className="flex justify-between gap-12">
                  <h2>Subtotal</h2>
                  <p>${subTotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between gap-12">
                  <h2>Shipping </h2>
                  <p>${shipping.toFixed(2)}</p>
                </div>
                <div className="flex justify-between gap-12">
                  <h2>Tax</h2>
                  <p>${tax.toFixed(2)}</p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <h2>Total</h2>
                  <p>${(subTotal + shipping + tax).toFixed(2)}</p>
                </div>
                
              </div>
            </div>
    );
};

export default PricingDetails;