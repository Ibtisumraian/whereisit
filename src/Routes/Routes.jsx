import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SignIn/SignIn";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AddLostAndFound from "../components/AddLostAndFound/AddLostAndFound";
import PrivateRouteTwo from "../components/PrivateRouteTwo/PrivateRouteTwo";
import AllLostAndFound from "../components/AllLostAndFound/AllLostAndFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            index: true,
            hydrateFallbackElement:<div className='  w-[90%] py-40 mx-auto flex justify-center items-center'><span className="loading loading-bars loading-xl"></span></div>,
            loader: ()=>fetch('https://lost-and-found-server-mu.vercel.app/items/recent'),
            Component: Home
        },
        {
          path: '/allItems',
          hydrateFallbackElement:<div className='  w-[90%] py-40 mx-auto flex justify-center items-center'><span className="loading loading-bars loading-xl"></span></div>,
          loader: ()=>fetch('https://lost-and-found-server-mu.vercel.app/items'),
          element: <AllLostAndFound></AllLostAndFound>
        },
        {
          path: '/addItems',
          element: <PrivateRoute><AddLostAndFound></AddLostAndFound></PrivateRoute>
        },
        {
          path: '/Signin',
          element: <PrivateRouteTwo><SignIn></SignIn></PrivateRouteTwo>
        },
        {
          path: '/Signup',
          element: <PrivateRouteTwo><SignUp></SignUp></PrivateRouteTwo>
        },
        
    ]
  },
]);