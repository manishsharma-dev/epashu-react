import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import { Master } from "./Pages/Master/Master";
import Layout from "./Pages/Features/Layout/Layout";

const router = createBrowserRouter([
  {
    Path: "/",
    element: <Master />,
    children: [
      {
        index: true,
        element: <Layout />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
