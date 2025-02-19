import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Menu from "../pages/menu";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
    },
    {
        path:"/menu",
        element:<Menu/>,
    },
    {
        path:"/corporate",
        element:"kurumsal",
    },
]);

export default routes
