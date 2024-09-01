import { createBrowserRouter } from "react-router-dom";

import Layout from "../features/Layout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductPreview from "../pages/ProductPreview";
import PageNotFound from "../pages/ErrorPage/404";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "product",
        element: <ProductPreview />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default Router