import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import { UserStateProvider } from "./context/UserStateContext";
import "./index.css";

ReactDOM.render(
  <TransactionsProvider>
    <UserStateProvider>
    <App />
    </UserStateProvider>
    
  </TransactionsProvider>,
  document.getElementById("root"),
);
