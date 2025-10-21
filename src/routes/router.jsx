import { createBrowserRouter } from "react-router";
import HomeLayout from "../components/layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../components/layouts/AuthLayout/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import NewsDetails from "../pages/NewsDetails";


const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'category/:id',
                Component: CategoryNews,
                loader: () => fetch('/news.json'),
            }
        ]
    },
    {
        path: 'auth',
        Component: AuthLayout,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            }
        ]
    },
    {
        path: '/news-details/:id',
        Component: NewsDetails,
        loader: () => fetch('/news.json')
    }
])
export default router;