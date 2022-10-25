import { createBrowserRouter } from "react-router-dom";
import Courses from "../components/Courses/Courses";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";
import SignUp from "../components/SignUp/SignUp";

export const routs = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/courses",
                element: <Courses></Courses>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
        ]
    }
])