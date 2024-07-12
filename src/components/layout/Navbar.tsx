// import { getTotals } from "../../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  MenuOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useAppSelector((state) => state.cart);
  console.log(cart.cartItems.length);
  const dispatch = useAppDispatch();
  useEffect(() => {
    // dispatch(getTotals())
  }, [cart, dispatch]);

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden mr-2">
            <MenuOutlined />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="">
              <Link to="/products"></Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <a className="text-xl font-bold">
          <Link to="/">
            <span className="text-violet-900">Type</span>
            <span className="text-gray-900">Tech</span>
          </Link>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <span className="font-semibold text-red-400">
          {cart.cartItems.length === 0 ? 0 : cart.cartItems.length}
        </span>
        <ShoppingCartOutlined
          style={{
            fontSize: "1.5rem",
            color: "#2E1065",
            marginRight: "1rem",
            cursor: "pointer",
          }}
        />

        <UserOutlined style={{ fontSize: "1.5rem", color: "#2E1065" }} />
      </div>
    </div>
  );
};

export default Navbar;
