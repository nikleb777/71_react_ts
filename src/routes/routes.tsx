import Home from "components/pages/About/Home/Home";
import type { RoutePage } from "./types";
import About from "components/pages/About/About";
import Users from "components/pages/Users/Users";
import User from "components/pages/Users/components/User/User";
import Lesson14 from "lessons/Lesson14/Lesson14";

export const routesData: RoutePage[] = [
   { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/users", element: <Users /> },
  { path: "/users/user", element: <User /> },
  { path: "/Lesson14", element: <Lesson14 /> },
  { path: "*", element: "Page not found" },

]