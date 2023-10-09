import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import { Master } from "./Pages/Master/Master";
import Layout from "./Pages/Features/Layout/Layout";
import Login from "./Pages/Auth/Login/Login";
import { checkAdminAuthLoader } from "./Utils/AuthHelper";

const router = createBrowserRouter([
  {
    Path: "/",
    element: <Master />,
    children: [
      {
        index: true,
        element: <Layout />,
        loader : checkAdminAuthLoader
      },
      {
        path : 'login',
        element : <Login />
      }
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
