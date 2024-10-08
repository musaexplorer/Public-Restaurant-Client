import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/HomePage/Home';
import SignUp from './Pages/SignUpLogin/SignUp';
import Login from './Pages/SignUpLogin/Login';
import AuthProviders from './Providers/AuthProviders';
import { HelmetProvider } from 'react-helmet-async';
import Blog from './Pages/Blogs/Blog';
import AllFood from './Pages/AllFoodPages/AllFood';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TopFoodsDtl from './Components/TopFoods/TopFoodsDtl';
import Order from './Pages/OrderPage/Order';
import AllFoodDtl from './Pages/AllFoodPages/AllFoodDtl';
import Menu from './Pages/Menus/Menu';
import UpcomingEventsDtl from './Components/UpcomingEvents/UpcomingEventsDtl';
import AddFoods from './Components/AddFoods/AddFoods';
import MyAddedFood from './Components/MyAdded/MyAddedFood';
import UpdateFoods from './Components/UpdateFoods/UpdateFoods';
import PrivateRoute from './Providers/PrivateRoute';

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/topfood/:id',
        element: <PrivateRoute><TopFoodsDtl></TopFoodsDtl></PrivateRoute>,
        loader: ({ params }) => fetch(`https://public-restaurant-server.vercel.app/topfoods/${params.id}`)
      },

      {
        path: '/item',
        element: <AllFood></AllFood>
      },

      {
        path: '/item/:id',
        element: <PrivateRoute><AllFoodDtl></AllFoodDtl></PrivateRoute>,
        loader: ({ params }) => fetch(`https://public-restaurant-server.vercel.app/item/${params.id}`)
      },

      {
        path: '/blog',
        element: <Blog></Blog>
      },

      {
        path: '/menu',
        element: <Menu></Menu>
      },

      {
        path: '/events/:id',
        element: <PrivateRoute><UpcomingEventsDtl></UpcomingEventsDtl></PrivateRoute>,
        loader: ({ params }) => fetch(`https://public-restaurant-server.vercel.app/events/${params.id}`)
      },

      {
        path: '/ordered',
        element: <Order></Order>,
        loader: () => fetch('https://public-restaurant-server.vercel.app/ordered')
      },

      {
        path: '/addfood',
        element: <AddFoods></AddFoods>,
      },

      {
        path: '/myadded',
        element: <MyAddedFood></MyAddedFood>,
      },

      {
        path: '/updatefoods/:id',
        element: <PrivateRoute><UpdateFoods></UpdateFoods></PrivateRoute>,
        loader: ({ params }) => fetch(`https://public-restaurant-server.vercel.app/item/${params.id}`)
      },

      {
        path: '/signup',
        element: <SignUp></SignUp>
      },

      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <HelmetProvider>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </AuthProviders>
    </QueryClientProvider>
  </StrictMode>,
)
