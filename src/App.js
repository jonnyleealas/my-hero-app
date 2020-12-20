import React from "react";
import MobileMenue from "../src/component/header";
import { Provider } from "react-redux";
import store from "./store/indexCombiner.js";
import StoreFront from "../src/storefront/storeFront.js";

export default function App() {
  return (
    <Provider store={store}>
      <MobileMenue />
      <h1>My Hero</h1>
      <StoreFront />
    </Provider>
  );
}
