import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Authintaction/Login";
import Register from "../Pages/Authintaction/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch(`${import.meta.env.VITE_API_URL}/jobs`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element:<Register></Register>
      },
    ],
  },
]);

export default router;
