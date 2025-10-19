import { Provider } from "@/components/ui/provider";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/index";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Provider>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Provider>
    </BrowserRouter>
);
