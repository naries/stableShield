import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { loaders } from "./loaders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { index: true, element: <Navigate to="/onboarding" /> },
        {
          path: "onboarding",
          loader: loaders.onboarding,
          children: [
            {
              index: true,
              lazy: () => import("./Lazy/landing"),
            },
            {
              lazy: () => import("./Lazy/login"),
              path: "login",
            },
            {
              lazy: () => import("./Lazy/register"),
              path: "register",
            },
          ],
        },
        {
          path: "protected",
          lazy: () => import("./Lazy/layout"),
          children: [
            {
              index: true,
              lazy: () => import("./Lazy/dashboard"),
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
