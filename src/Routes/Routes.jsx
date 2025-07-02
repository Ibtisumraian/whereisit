import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SignIn/SignIn";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AddLostAndFound from "../components/AddLostAndFound/AddLostAndFound";
import PrivateRouteTwo from "../components/PrivateRouteTwo/PrivateRouteTwo";
import AllLostAndFound from "../components/AllLostAndFound/AllLostAndFound";
import PostDetails from "../components/PostDetails/PostDetails";
import AllRecovered from "../components/AllRecovered/AllRecovered";
import ManageMyItems from "../components/ManageMyItems/ManageMyItems";
import UpdatePost from "../components/UpdatePost/UpdatePost";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import AboutUs from "../components/AboutUs/AboutUs";
import Contact from "../components/Contact/Contact";
import Support from "../components/Support/Support";
import DashboardRoute from "../Pages/Root/DashboardRoute/DashboardRoute";
import DashboardOverview from "../components/DashboardOverview/DashboardOverview";
import UserProfile from "../components/UserProfile/UserProfile";
import AllLostAndFoundForDashboard from "../components/AllLostAndFoundForDashboard/AllLostAndFoundForDashboard";
import PostDetailsForDashboard from "../components/PostDetailsForDashboard/PostDetailsForDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            index: true,
            hydrateFallbackElement: <div className='w-[90%] py-40 mx-auto flex justify-center items-center'>
              <span className="loading loading-bars loading-xl"></span>
            </div>,
            Component: Home
        },
        {
          path: '/allItems',
          hydrateFallbackElement: <div className='w-[90%] py-40 mx-auto flex justify-center items-center'>
            <span className="loading loading-bars loading-xl"></span>
          </div>,
          loader: () => fetch('https://lost-and-found-server-mu.vercel.app/items', {
            credentials: 'include'
          }),
          element: <AllLostAndFound />
        },
        {
          path: '/item/:id',
          hydrateFallbackElement: <div className='w-[90%] py-40 mx-auto flex justify-center items-center'>
            <span className="loading loading-bars loading-xl"></span>
          </div>,
          loader: ({ params }) => fetch(`https://lost-and-found-server-mu.vercel.app/items/${params.id}`, {
            credentials: 'include'
          }),
          element: <PrivateRoute><PostDetails /></PrivateRoute>
        },
        // {
        //   path: '/allRecovered',
        //   element: <PrivateRoute><AllRecovered /></PrivateRoute>
        // },
        {
          path: '/AboutUs',
          element: <AboutUs/>
        },
        {
          path: '/Contact',
          element: <Contact />
        },
        {
          path: '/Support',
          element: <Support />
        },
        // {
        //   path: '/manageMyItems',
        //   element: <PrivateRoute><ManageMyItems/></PrivateRoute>
        // },
        // {
        //   path: '//updateItems/:id',
        //   hydrateFallbackElement: <div className='w-[90%] py-40 mx-auto flex justify-center items-center'>
        //     <span className="loading loading-bars loading-xl"></span>
        //   </div>,
        //   loader: ({ params }) => fetch(`https://lost-and-found-server-mu.vercel.app/items/${params.id}`, {
        //     credentials: 'include'
        //   }),
        //   element: <PrivateRoute><UpdatePost/></PrivateRoute>
        // },
        {
          path: '/Signin',
          element: <PrivateRouteTwo><SignIn /></PrivateRouteTwo>
        },
        {
          path: '/Signup',
          element: <PrivateRouteTwo><SignUp /></PrivateRouteTwo>
        },
        // {
        //   path: '/addItems',
        //   element: <PrivateRoute><AddLostAndFound /></PrivateRoute>
        // },
    ]
  },
  {
  path: '/Dashboard',
  element: <PrivateRoute><DashboardRoute /></PrivateRoute>,
  children: [
    {
      index: true,
      element: <PrivateRoute><DashboardOverview /></PrivateRoute>
    },
    {
          path: 'allItemsTable',
          hydrateFallbackElement: <div className='w-[90%] py-40 mx-auto flex justify-center items-center'>
            <span className="loading loading-bars loading-xl"></span>
          </div>,
          loader: () => fetch('https://lost-and-found-server-mu.vercel.app/items', {
            credentials: 'include'
          }),
          element: <AllLostAndFoundForDashboard />
    },
    {
          path: 'post/:id',
          hydrateFallbackElement: <div className='w-[90%] py-40 mx-auto flex justify-center items-center'>
            <span className="loading loading-bars loading-xl"></span>
          </div>,
          loader: ({ params }) => fetch(`https://lost-and-found-server-mu.vercel.app/items/${params.id}`, {
            credentials: 'include'
          }),
          element: <PrivateRoute><PostDetailsForDashboard /></PrivateRoute>
    },
    {
          path: 'manageMyItems',
          element: <PrivateRoute><ManageMyItems/></PrivateRoute>
    },
    {
          path: 'UpdatePost/:id',
          hydrateFallbackElement: <div className='w-[90%] py-40 mx-auto flex justify-center items-center'>
            <span className="loading loading-bars loading-xl"></span>
          </div>,
          loader: ({ params }) => fetch(`https://lost-and-found-server-mu.vercel.app/items/${params.id}`, {
            credentials: 'include'
          }),
          element: <PrivateRoute><UpdatePost/></PrivateRoute>
    },
    {
          path: 'allRecovered',
          element: <PrivateRoute><AllRecovered /></PrivateRoute>
    },    
    {
      path: 'UserProfile',
      element: <PrivateRoute><UserProfile /></PrivateRoute>
    },
    {
      path: 'addItems',
      element:<PrivateRoute><AddLostAndFound/></PrivateRoute>
    },
    
  ]
  },
  {
    path: '*',
    element: <PageNotFound/>
  }
]);