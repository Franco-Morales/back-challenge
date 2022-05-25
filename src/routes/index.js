import videogamesRoutes from "./videogame.routes";
import categoriesRoutes from "./category.routes";
import authRoutes from "./auth.routes";


export const api = [
    {
        resource: "videogames",
        route: videogamesRoutes
    },
    {
        resource: "categories",
        route: categoriesRoutes
    },
    {
        resource: "auth",
        route: authRoutes
    }
]