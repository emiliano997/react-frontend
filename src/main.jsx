import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsPage } from "./pages/Products/Products.jsx";
import { UsersPage } from "./pages/Users/Users.jsx";
import { HomePage } from "./pages/Home/Home.jsx";
import App from "./App.jsx";
import { LoginPage } from "./pages/Login/Login.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { NotFoundPage } from "./pages/NotFound/NotFound.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </StrictMode>
);
