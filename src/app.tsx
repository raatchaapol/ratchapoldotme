import { Provider } from "@/components/ui/provider";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router";
import { routes } from "@generouted/react-router";

// Wrap all routes with the Provider
const routesWithProvider = [
    {
        element: (
            <Provider>
                <Outlet />
            </Provider>
        ),
        children: routes,
    },
];

const router = createBrowserRouter(routesWithProvider);

createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
);
