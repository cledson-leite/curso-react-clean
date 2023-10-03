import { createBrowserRouter } from "react-router-dom";
import { Login } from "../../presenter/pages/Login";

export const router = createBrowserRouter([
  {
    path: "/login",
    element:  <Login />,
  },
])