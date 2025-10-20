import { createBrowserRouter } from "react-router";
import HomeLayout from "../components/layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

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
    }
])
export default router;