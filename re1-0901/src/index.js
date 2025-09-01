import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import App from "./App2";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
root.render(<App2 />);

