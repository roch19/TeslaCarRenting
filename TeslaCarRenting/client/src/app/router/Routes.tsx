import { createBrowserRouter, Navigate } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import CarDetails from "../../features/catalog/CarDetails";

import Catalog from "../../features/catalog/Catalog";

import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import LoginPage from "../../features/login/LoginPage";
import RegisterPage from "../../features/register/RegisterPage";

import App from "../layout/App";

//export default function Abc() {
//    return(<></>)

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            // authenticated routes
            { path: '', element: <HomePage /> },
            { path: 'catalog', element: <Catalog /> },
           
            { path: 'catalog/:id', element: <CarDetails /> },
            { path: 'about', element: <AboutPage /> },
            { path: 'contact', element: <ContactPage /> },
            { path: 'login', element: <LoginPage /> },
            { path: 'register', element: <RegisterPage /> }



        ]
    }
])