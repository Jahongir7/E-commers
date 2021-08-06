import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createContext } from "react";

firebase.initializeApp({
  apiKey: "AIzaSyCxLuesHslTYEADlr1TK0IjK2zl695xKb0",
  authDomain: "jahongir-35a83.firebaseapp.com",
  projectId: "jahongir-35a83",
  storageBucket: "jahongir-35a83.appspot.com",
  messagingSenderId: "825933590700",
  appId: "1:825933590700:web:34ae20411d4b2b22dd6f09",
  measurementId: "G-PN5PMBYP96",
});
export const Context = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();
ReactDOM.render(
  <Context.Provider value={{ firestore, auth, firebase }}>
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
