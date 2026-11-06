import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@designcodeio/threeui/style.css";
import "./styles.css";
import { Scene } from "./Scene";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Scene />
  </StrictMode>,
);
