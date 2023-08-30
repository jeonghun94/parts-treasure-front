import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import { loader as homeLoader } from "./pages/Home/loader";
import { queryClient } from "./utils/queryClient";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: homeLoader(queryClient),
      },
    ],
  },
]);
