import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// flagsmith configuration
import flagsmith from "flagsmith";
import { FlagsmithProvider } from "flagsmith/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FlagsmithProvider
      options={{
        environmentID: import.meta.env.VITE_FLAGSMITH_ENVIRONMENT,
      }}
      flagsmith={flagsmith}
    >
      <App />
    </FlagsmithProvider>
  </React.StrictMode>
);
