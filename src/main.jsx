import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Wild from "./pages/Wild";
import Places from "./pages/Places";
import Buildings from "./pages/Buildings";
import LazyComponent from "./components/lazyComponent/LazyComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wild />,
  },
  {
    path: "/component",
    element: <LazyComponent />,
  },
  {
    path: "/image/places",
    element: <Places />,
  },
  {
    path: "/image/buildings",
    element: <Buildings />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
