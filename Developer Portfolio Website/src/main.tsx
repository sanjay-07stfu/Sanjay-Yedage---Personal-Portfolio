
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

const rootElement = document.getElementById("root");
console.log("Root element:", rootElement);

if (rootElement) {
  createRoot(rootElement).render(<App />);
  console.log("App rendered successfully");
} else {
  console.error("Root element not found!");
}
