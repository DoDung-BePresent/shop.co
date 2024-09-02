import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Input: {
            activeBorderColor: "#000000",
            hoverBorderColor: "#000000",
            activeShadow: "#F0F0F0",
            borderRadiusLG: 18,
          },
          Button: {
            defaultBorderColor: "none",
            defaultHoverBorderColor: "#707070",
            defaultHoverColor: "#707070",
            defaultActiveColor: "#707070",
            defaultActiveBorderColor: "#707070",
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
);
