import { createBrowserRouter } from "react-router-dom";

import Layout from "../features/Layout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'shop',
        element: <Shop />
      }
    ]
  }
])

export default Router