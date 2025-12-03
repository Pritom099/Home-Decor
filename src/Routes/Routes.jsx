import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import Errorpage from "../Pages/Errorpage";
import Wishlist from "../Pages/Wishlist";
import ProductDetails from "../Pages/ProductDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Errorpage></Errorpage>,
        hydrateFallbackElement: <p>Loading...</p>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: '/products',
                element: <Products></Products>,
            },
            {
                path: '/wishlist',
                element: <Wishlist></Wishlist>,
            },
            {
                path: '/product/:id',
                element: <ProductDetails></ProductDetails>
            },
        ],
    },
    /* {
        path: '*',
        element: <Errorpage></Errorpage>,
    },
 */
])


export default router