import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Authintaction/Login";
import Register from "../Pages/Authintaction/Register";
import JobDetails from "../Pages/JobDetails";
import AddJob from "../Pages/AddJob";
import MyPostedJob from "../Pages/MyPostedJob";
import MyBids from "../Pages/MyBids";
import BidRequest from "../Pages/BidRequest";
import ErrorPage from "../Pages/ErrorPage";
import UpdateJob from "../Pages/UpdateJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/add-job",
        element: <AddJob></AddJob>,
      },
      {
        path: '/my-posted-jobs',
        element:<MyPostedJob></MyPostedJob>
      },
      {
        path: '/my-bids',
        element:<MyBids></MyBids>
      },
      {
        path: '/bid-requests',
        element:<BidRequest></BidRequest>
      }, 
      {
        path: "/update/:id",
        element: <UpdateJob></UpdateJob>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      
    ],
  },
]);

export default router;
