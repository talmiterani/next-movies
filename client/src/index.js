import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./i18n";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <React.Suspense fallback="Loading...">
      <App />
    </React.Suspense>
  </StrictMode>
);
