import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import { GlobalStyle } from "./app/GlobalStyle.tsx";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
        <Analytics />
    </React.StrictMode>
);
