import React from "react";
import { initializeApp } from "firebase/app";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserContextProvider } from "./context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";

const firebaseConfig = {
  apiKey: "AIzaSyAROMdMnNffLl9KcPIAtxQRv_1UF8nHo_E",
  authDomain: "fullsniker-62272.firebaseapp.com",
  projectId: "fullsniker-62272",
  storageBucket: "fullsniker-62272.appspot.com",
  messagingSenderId: "872129765134",
  appId: "1:872129765134:web:86325fc6f135e54004c15f",
  measurementId: "G-BZLEXV1DVF",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
