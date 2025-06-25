import {
  createBrowserRouter,
} from "react-router";
import MainLayOuts from "../LayOuts/MainLayOuts";
import Home from "../Component/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllPlants from "../Pages/AllPlants";
import PrivateRoute from "./PrivateRoute";
import AddPlants from "../LayOuts/AddPlants";
import AddPlant from "../Pages/AddPlant";
import MyPlants from "../Pages/MyPlants";
import PlantsDetails from "../Component/PlantsDetails";
import Error from "../Pages/Error";
import Update from "../Component/Update";
import Loading from "../Component/Loading";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOuts,
    children: [
      {
        index: true,
        hydrateFallbackElement:<Loading></Loading>,
        loader: () => fetch('https://plant-care-tracker-sarver.vercel.app/new-plants'),
        Component: Home
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/all-plants',
         hydrateFallbackElement:<Loading></Loading>,
        loader: () => fetch('https://plant-care-tracker-sarver.vercel.app/all-plants'),
        Component: AllPlants
      },
      {
        path: '/all-plants/:id',
         hydrateFallbackElement:<Loading></Loading>,
        loader: ({ params }) => fetch(`https://plant-care-tracker-sarver.vercel.app/all-plants/${params.id}`),
        Component: PlantsDetails
      }
    ]
  },
  {
    path: '/add-plants',
    element: <PrivateRoute><AddPlants /></PrivateRoute>,
    children: [
      {
        index: true,
        Component: AddPlant
      },
      {
        path: '/add-plants/:id',
         hydrateFallbackElement:<Loading></Loading>,
        loader: ({ params }) => fetch(`https://plant-care-tracker-sarver.vercel.app/new-plants/${params.id}`),
        Component: PlantsDetails
      },
    ]
  },

  {
    path: '/my-plants',
    element: <PrivateRoute><AddPlants /></PrivateRoute>,
    children: [
      {
        index: true,
         hydrateFallbackElement:<Loading></Loading>,
        loader: () => fetch('https://plant-care-tracker-sarver.vercel.app/all-plants'),
        Component: MyPlants
      },
      {
        path: '/my-plants/:id',
         hydrateFallbackElement:<Loading></Loading>,
        loader: ({ params }) => fetch(`https://plant-care-tracker-sarver.vercel.app/all-plants/${params.id}`),
        Component: MyPlants
      },

    ]
  },
  {
    path: '/update-plants',
    element: <PrivateRoute><AddPlants /></PrivateRoute>,
    children: [
      
      {
        path: '/update-plants/:id',
         hydrateFallbackElement:<Loading></Loading>,
        loader: ({ params }) => fetch(`https://plant-care-tracker-sarver.vercel.app/all-plants/${params.id}`),
        Component: Update

      }
    ]
  },

  {
    path: '*',
    Component: Error
  }

]);
