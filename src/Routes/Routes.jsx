import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout and common components
import LayOut from "../Layout/LayOut";
import Error from "../Component/Common/Error";

// Page components
import Home from "../Component/Home/Home";
import Product from "../Component/Product/Product";
import ProductDetails from "../Component/ProductDetails/ProductDetails";
import Dashboard from "../Component/Dashboard/Dashboard";
import Statistics from "../Component/Statistics/Statistics";
import About from "../Component/About/About";

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`/Category.json`), // Adjusted the path to be absolute
        children: [
          {
            path: "/",
            element: <Product />,
            loader: () => fetch(`/product.json`), // Adjusted path
          },
          {
            path: "/category/:name",
            element: <Product />,
            loader: () => fetch(`/product.json`), // Adjusted path
          },
        ],
      },
      {
        path: "/productDetails/:name",
        element: (
          <div className="h-[800px]">
            <ProductDetails />
          </div>
        ),
        loader: () => fetch(`/product.json`), // Adjusted path
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/Statistics",
        element: <Statistics />,
        loader: () => fetch(`/product.json`), // Adjusted path
      },
      {
        path: "/about",
        element: <About />,
        loader: () => fetch(`/Store.json`), // Adjusted path
      },
    ],
  },
]);

export { router };
