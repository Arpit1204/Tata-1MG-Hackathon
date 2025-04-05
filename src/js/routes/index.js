import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayouts/MainLayouts";
import About from "../pages/About/About";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        index: true,
        component: Home,
      },
      {
        path: "about",
        component: About,
      },
    ],
  },
];

export default routes;
