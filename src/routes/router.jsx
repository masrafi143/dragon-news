import { createBrowserRouter } from "react-router";
import HomeLayout from "../components/layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout
    }
])
export default router;