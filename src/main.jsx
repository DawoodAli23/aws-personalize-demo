import React from "react";
import ReactDOM from "react-dom";
import AuthContextProvider from "./context/Auth.context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/Error";
import App from "./App";
import Login from "./Pages/LoginPage";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import SignUp from "./Pages/SignupPage";
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
]);
const queryClient = new QueryClient();
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthContextProvider>
  </QueryClientProvider>,
  document.getElementById("root")
);
