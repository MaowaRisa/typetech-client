import { MenuOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Navbar = () => {
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
            <li className="">
              <a>Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>Dashboard</a>
            </li>
          </ul>
        </div>
        <a className="text-xl font-bold">
          <span className="text-violet-900">Type</span>
          <span className="text-gray-900">Tech</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a>Dashboard</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ShoppingCartOutlined style={{ fontSize: '1.5rem', color: '#2E1065', marginRight: '1rem' }}/>
        <UserOutlined style={{ fontSize: '1.5rem', color: '#2E1065'}}/>
      </div>
    </div>
  );
};

export default Navbar;
