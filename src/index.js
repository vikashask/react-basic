import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./style/index.css";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

registerServiceWorker();
