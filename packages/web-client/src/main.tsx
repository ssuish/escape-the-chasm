import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; 

import App from "./App";
import { SequenceConnect } from "@0xsequence/connect";
import { SequenceCheckoutProvider } from "@0xsequence/checkout"
import { config } from "./config";

function Dapp() {
  return (
    <SequenceConnect config={config}>
      <SequenceCheckoutProvider>
          <App />
      </SequenceCheckoutProvider>
    </SequenceConnect>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Dapp />
  </React.StrictMode>
);