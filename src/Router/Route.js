import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from '../components/Pages/Home/Home';
import MessageHome from "../components/Pages/Message/MessageHome";

export const router= createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                path:'/',
                element:<Home />
            },
        ]
    }    
])