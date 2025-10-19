import { Provider } from "@/components/ui/provider";
import { Routes } from "@generouted/react-router/lazy";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
    <Provider>
        <Routes />
    </Provider>
);
