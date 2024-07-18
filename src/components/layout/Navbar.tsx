import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { MenuOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
// import { getTotals } from "../../redux/features/cart/cartSlice";

const Navbar = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // dispatch(getTotals());
  }, [cart, dispatch]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="lg:hidden mr-2"
            onClick={toggleMenu}
          >
            <MenuOutlined />
          </div>
          {isMenuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-white"
            >
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" onClick={toggleMenu}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMenu}>
                  About us
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMenu}>
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/dashboard" onClick={toggleMenu}>
                  Dashboard
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className="text-xl font-bold">
          <Link className="p-1 rounded-md" to="/">
            <span className="text-violet-900">Type</span>
            <span className="text-gray-900">Tech</span>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ">
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
        <Link to="/cart">
        <span className="font-semibold text-red-400">
          {cart.products.length === 0 ? 0 : cart.products.length}
        </span>
        <ShoppingCartOutlined
          style={{
            fontSize: "1.5rem",
            color: "#2E1065",
            marginRight: "1rem",
            cursor: "pointer",
          }}
        />
        </Link>
        
        <UserOutlined style={{ fontSize: "1.5rem", color: "#2E1065" }} />
      </div>
    </div>
  );
};

export default Navbar;