import { Provider } from "@/components/ui/provider";
import { Routes } from "@generouted/react-router";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "@/components/errors/ErrorBoundary";

createRoot(document.getElementById("root")!).render(
    <ErrorBoundary>
        <Provider>
            <Routes />
        </Provider>
    </ErrorBoundary>
);
