import Home from "../pages/home";
import Projects from "../pages/projects";

export const route = [
    {
        name: "Home",
        path: "/",
        Component: Home,
        exact: true
    },

    {
        name: "Projects",
        path: "/projects",
        Component: Projects,
    },
]