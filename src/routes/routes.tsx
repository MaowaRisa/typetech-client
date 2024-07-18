import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/checkout',
                element: <Checkout></Checkout>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/products/:id',
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
        ]
    }
]);

export default router;