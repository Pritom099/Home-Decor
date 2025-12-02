import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import Errorpage from "../Pages/Errorpage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: '/products',
                element: <Products></Products>,
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