import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ChackOut from "../components/ChackOut/ChackOut";
import CourseDetailsPage from "../components/CourseDetailsPage/CourseDetailsPage";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import LogIn from "../components/LogIn/LogIn";
import Main from "../components/Main/Main";
import SecretPath from "../components/SecretPath/SecretPath";
import SignUp from "../components/SignUp/SignUp";

export const routs = createBrowserRouter([

    /*routs*/ 
    {
        path: "/",
        element: <Main></Main>,

        /*erroPage for error handling*/ 
        
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/courses",

                /*use loader to pass the data to a component*/ 
                loader: async () => {
                    return fetch("https://my-project-server.vercel.app/courses")

                },
                element: <Courses></Courses>,
            },
            {
                path: "/faq",
                element: <Faq></Faq>
            },
            {

                /*using loader to pass data by id*/ 
                path: "/course/:id",
                loader: ({ params }) => fetch(`https://my-project-server.vercel.app/course/${params.id}`),
                element: <CourseDetailsPage></CourseDetailsPage>
            },
            {
                /*this is a private route*/  

                path: "/chakout/:id",
                loader: ({ params }) => fetch(`https://my-project-server.vercel.app/course/${params.id}`),
                element: <SecretPath><ChackOut></ChackOut></SecretPath>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/footer",
                element: <Footer></Footer>
            }

        ]
    }
])