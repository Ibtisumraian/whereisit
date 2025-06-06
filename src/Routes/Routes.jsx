import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SignIn/SignIn";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AddLostAndFound from "../components/AddLostAndFound/AddLostAndFound";
import PrivateRouteTwo from "../components/PrivateRouteTwo/PrivateRouteTwo";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            index: true,
            Component: Home
        },
        {
          path: '/AddLostAndFound',
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