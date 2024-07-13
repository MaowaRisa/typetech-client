import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <h1 className="text-3xl text-center font-bold mb-4">Dashboard</h1>
      <div className="flex flex-col md:flex-row gap-2">
        <ul className="menu bg-base-200 rounded-box w-56">
          <li>
            <a>Management</a>
          </li>
          <li>
            <a>Product</a>
            <ul>
              <li>
                <a>Add New</a>
              </li>
              <li>
                <a>All Products</a>
              </li>
            </ul>
          </li>
          <li>
            <a>brands</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
