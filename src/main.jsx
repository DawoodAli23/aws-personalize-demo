import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/Error";
import App from "./App";
import Login from "./Pages/LoginPage";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import SignUp from "./Pages/SignupPage";
import Products from "./Pages/ProductPage";
import ProductDetail from "./Pages/ProductDetailPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <Products />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products/:id",
    element: <ProductDetail />,
    errorElement: <ErrorPage />,
  },
]);
const queryClient = new QueryClient();
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById("root")
);
